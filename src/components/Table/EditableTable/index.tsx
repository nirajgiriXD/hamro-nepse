/**
 * External dependencies.
 */
import { useMemo, useState } from "react";
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { Stocks, fakeData } from "./data";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Portfolio = () => {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const columns = useMemo<MRT_ColumnDef<Stocks>[]>(
    () => [
      {
        accessorKey: "symbol",
        header: "Symbol",
        enableEditing: true,
        size: 80,
      },
      {
        accessorKey: "buyRate",
        header: "Buy  Rate (in NRP)",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.firstName,
          helperText: validationErrors?.firstName,
          //remove any previous validation errors when Stock focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              buyRate: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      {
        accessorKey: "kitta",
        header: "Kitta",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.lastName,
          helperText: validationErrors?.lastName,
          //remove any previous validation errors when Stock focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              kitta: undefined,
            }),
        },
      },
      {
        accessorKey: "ltp",
        header: "LTP",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.lastName,
          helperText: validationErrors?.lastName,
          //remove any previous validation errors when Stock focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              kitta: undefined,
            }),
        },
      },
      {
        accessorKey: "total",
        header: "Total",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.email,
          helperText: validationErrors?.email,
          //remove any previous validation errors when Stock focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              total: undefined,
            }),
        },
      },
    ],
    [validationErrors]
  );

  //call CREATE hook
  const { mutateAsync: createStock, isPending: isCreatingStock } =
    useCreateStock();
  //call READ hook
  const {
    data: fetchedStocks = [],
    isError: isLoadingStocksError,
    isFetching: isFetchingStocks,
    isLoading: isLoadingStocks,
  } = useGetStock();
  //call UPDATE hook
  const { mutateAsync: updateStock, isPending: isUpdatingStock } =
    useUpdateStock();
  //call DELETE hook
  const { mutateAsync: deleteStock, isPending: isDeletingStock } =
    useDeleteStock();

  //CREATE action
  const handleCreateStock: MRT_TableOptions<Stocks>["onCreatingRowSave"] =
    async ({ values, table }) => {
      const newValidationErrors = validateStock(values);
      if (Object.values(newValidationErrors).some((error) => error)) {
        setValidationErrors(newValidationErrors);
        return;
      }
      setValidationErrors({});
      await createStock(values);
      table.setCreatingRow(null); //exit creating mode
    };

  //UPDATE action
  const handleSaveStock: MRT_TableOptions<Stocks>["onEditingRowSave"] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateStock(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateStock(values);
    table.setEditingRow(null); //exit editing mode
  };

  //DELETE action
  const openDeleteConfirmModal = (row: MRT_Row<Stocks>) => {
    if (window.confirm("Are you sure you want to delete this stock?")) {
      deleteStock(row.original.symbol);
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: fetchedStocks,
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    enablePagination: false,
    enableSorting: true,
    enableGlobalFilter: false,
    enableColumnFilters: false,
    enableBottomToolbar: false,
    initialState: {
      density: "compact",
    },
    muiLinearProgressProps: {
      color: "info",
    },
    muiCircularProgressProps: {
      color: "info",
    },
    getRowId: (row) => row.symbol,
    muiToolbarAlertBannerProps: isLoadingStocksError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: "500px",
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateStock,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveStock,
    //optionally customize modal content
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h5">Create New Stock</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    //optionally customize modal content
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Edit Stock</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values
          //or you can pass in a row object to set default values with the `createRow` helper function
          // table.setCreatingRow(
          //   createRow(table, {
          //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
          //   }),
          // );
        }}
      >
        Add Stock
      </Button>
    ),
    state: {
      isLoading: isLoadingStocks,
      isSaving: isCreatingStock || isUpdatingStock || isDeletingStock,
      showAlertBanner: isLoadingStocksError,
      showProgressBars: isFetchingStocks,
    },
  });

  return <MaterialReactTable table={table} />;
};

//CREATE hook (post new Stock to api)
function useCreateStock() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newStockInfo: Stocks) => {
      queryClient.setQueryData(["Stocks"], (prevStocks: Stocks[] | undefined) =>
        prevStocks ? [...prevStocks, newStockInfo] : [newStockInfo]
      );
    },

    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['Stocks'] }), //refetch Stocks after mutation, disabled for demo
  });
}

//READ hook (get Stocks from api)
function useGetStock() {
  return useQuery<Stocks[]>({
    queryKey: ["Stocks"],
    queryFn: async () => {
      //send api request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve(fakeData);
    },
    refetchOnWindowFocus: false,
  });
}

//UPDATE hook (put Stock in api)
function useUpdateStock() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newStockInfo: Stocks) => {
      queryClient.setQueryData(["Stocks"], (prevStocks: Stocks[] | undefined) =>
        prevStocks?.map((prevStock: Stocks) =>
          prevStock.symbol === newStockInfo.symbol ? newStockInfo : prevStock
        )
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['Stocks'] }), //refetch Stocks after mutation, disabled for demo
  });
}

//DELETE hook (delete Stock in api)
function useDeleteStock() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (stockSymbol: string) => {
      queryClient.setQueryData(["Stocks"], (prevStocks: Stocks[] | undefined) =>
        prevStocks?.filter((stock: Stocks) => stock.symbol !== stockSymbol)
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['Stocks'] }), //refetch Stocks after mutation, disabled for demo
  });
}

const validateRequired = (value: string) => !!value.length;
function validateStock(stock: Stocks) {
  return {
    Symbol: !validateRequired(stock.symbol) ? "Symbol is Required" : "",
  };
}

const queryClient = new QueryClient();

const EditableTable = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <Portfolio />
  </QueryClientProvider>
);

export default EditableTable;
