/**
 * External dependencies.
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * Internal dependencies.
 */
import useEditableTable, {
  type Stock,
} from "../../../pages/PortfolioTrackerPage/useEditableTable";

const queryClient = new QueryClient();

const EditableTable = () => {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const {
    columns,
    toastNotification,
    useCreateStock,
    useGetStock,
    useUpdateStock,
    useDeleteStock,
    validateStock,
  } = useEditableTable(validationErrors, setValidationErrors);

  const Table = () => {
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
        await updateStock(values);
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
      //optionally customize modal content
      renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
        <>
          <DialogTitle>Edit Stock</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {internalEditComponents}{" "}
            {/* or render custom edit components here */}
          </DialogContent>
          <DialogActions>
            <MRT_EditActionButtons variant="text" table={table} row={row} />
          </DialogActions>
        </>
      ),
      renderRowActions: ({ row, table }) => (
        <Box sx={{ display: "flex" }}>
          <Tooltip title="Edit">
            <IconButton onClick={() => table.setEditingRow(row)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
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

  return (
    <QueryClientProvider client={queryClient}>
      <div className="mb-4">{toastNotification}</div>
      <Table />
    </QueryClientProvider>
  );
};

export default EditableTable;
