/**
 * External dependencies.
 */
import { useState } from "react";
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  type MRT_TableOptions,
  useMaterialReactTable,
  MRT_Row,
} from "material-react-table";
import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * Internal dependencies.
 */
import { type Stock } from "./types";
import useEditableTable from "./useEditableTable";

const useWatchlist = () => {
  const {
    toastNotification,
    useCreateStock,
    useGetStock,
    useUpdateStock,
    useDeleteStock,
    validateStock,
  } = useEditableTable();
  const Portfolio = () => {
    const [validationErrors, setValidationErrors] = useState<
      Record<string, string | undefined>
    >({});

    const columns = [
      {
        accessorKey: "symbol",
        header: "Symbol",
        enableEditing: true,
        size: 80,
        muiEditTextFieldProps: {
          required: true,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              symbol: undefined,
            }),
        },
      },
      {
        accessorKey: "name",
        header: "Name",
        enableEditing: false,
        size: 80,
        muiEditTextFieldProps: {
          required: false,
        },
      },
      {
        accessorKey: "open",
        header: "Open",
        enableEditing: false,
        muiEditTextFieldProps: {
          required: false,
        },
      },
      {
        accessorKey: "high",
        header: "High",
        enableEditing: false,
        muiEditTextFieldProps: {
          required: false,
        },
      },
      {
        accessorKey: "low",
        header: "Low",
        enableEditing: false,
        muiEditTextFieldProps: {
          required: false,
        },
      },
      {
        accessorKey: "close",
        header: "Close",
        enableEditing: false,
        muiEditTextFieldProps: {
          required: false,
        },
      },
      {
        accessorKey: "percentage_change",
        header: "% Change",
        enableEditing: false,
        muiEditTextFieldProps: {
          required: false,
        },
      },
      {
        accessorKey: "volume",
        header: "Volume",
        enableEditing: false,
        muiEditTextFieldProps: {
          required: false,
        },
      },
      {
        accessorKey: "turnover",
        header: "Turnover",
        enableEditing: false,
        muiEditTextFieldProps: {
          required: false,
        },
      },
    ];

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
    const handleCreateStock: MRT_TableOptions<Stock>["onCreatingRowSave"] =
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
    const handleSaveStock: MRT_TableOptions<Stock>["onEditingRowSave"] =
      async ({ values, table }) => {
        const newValidationErrors = validateStock(values);
        if (Object.values(newValidationErrors).some((error) => error)) {
          setValidationErrors(newValidationErrors);
          return;
        }
        setValidationErrors({});
        await updateStock();
        table.setEditingRow(null); //exit editing mode
      };

    //DELETE action
    const openDeleteConfirmModal = (row: MRT_Row<Stock>) => {
      if (window.confirm("Are you sure you want to delete this stock?")) {
        deleteStock(row.original.symbol);
      }
    };

    const table = useMaterialReactTable({
      columns,
      data: fetchedStocks,
      enableEditing: true,
      enableColumnActions: false,
      enableColumnFilters: false,
      enablePagination: false,
      enableSorting: true,
      enableGlobalFilter: false,
      enableBottomToolbar: false,
      enableFullScreenToggle: false,
      enableDensityToggle: false,
      enableHiding: false,
      enableTopToolbar: true,
      enableTableFooter: false,
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
      onCreatingRowCancel: () => setValidationErrors({}),
      onCreatingRowSave: handleCreateStock,
      onEditingRowCancel: () => setValidationErrors({}),
      onEditingRowSave: handleSaveStock,
      //optionally customize modal content
      renderCreateRowDialogContent: ({
        table,
        row,
        internalEditComponents,
      }) => (
        <>
          <DialogTitle>Create New Stock</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {internalEditComponents}{" "}
            {/* or render custom edit components here */}
          </DialogContent>
          <DialogActions>
            <MRT_EditActionButtons variant="text" table={table} row={row} />
          </DialogActions>
        </>
      ),
      renderRowActions: ({ row }) => (
        <Box sx={{ display: "flex" }}>
          <Tooltip title="Delete">
            <IconButton
              color="error"
              onClick={() => openDeleteConfirmModal(row)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
      renderTopToolbarCustomActions: ({ table }) => (
        <button
          className="bg-sky-400 dark:bg-sky-700 px-4 py-2 rounded text-sm text-white"
          onClick={() => {
            table.setCreatingRow(true);
          }}
        >
          Add Stock
        </button>
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

  return { Portfolio, toastNotification };
};

export default useWatchlist;
