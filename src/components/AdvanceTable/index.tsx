/**
 * External dependencies.
 */
import {
  MRT_ColumnDef,
  MRT_RowData,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_SortingState,
} from "material-react-table";
import { IconButton, Tooltip } from "@mui/material";
import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { useState } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { download, generateCsv, mkConfig } from "export-to-csv";

interface TableData {
  symbol: string;
  name: string;
  sector: string;
  open: number;
  high: number;
  low: number;
  close: number;
  percentage_change: number;
  volume: number;
  date: string;
}

interface AdvanceTableProp {
  // data: MRT_RowData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: MRT_ColumnDef<MRT_RowData, any>[];
}

const Table = ({ columns }: AdvanceTableProp) => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  const { data, isError, isRefetching, isLoading } = useQuery<TableData[]>({
    queryKey: [globalFilter, sorting],
    queryFn: async () => {
      const url =
        "https://sam.superintegratedapp.com/wp-json/api/stock-data/?selector=stock&selection=all";
      const response = await fetch(url);
      const json = await response.json();
      return json["stock_data"];
    },
    placeholderData: keepPreviousData,
  });

  const tableData = data ?? ([] as unknown as TableData[]);

  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(tableData);
    download(csvConfig)(csv);
  };

  const table = useMaterialReactTable({
    columns,
    data: tableData,
    enablePagination: false,
    enableSorting: true,
    enableGlobalFilter: true,
    enableColumnFilters: false,
    enableBottomToolbar: false,
    initialState: {
      density: "compact",
    },
    muiLinearProgressProps: {
      color: "info",
    },
    muiToolbarAlertBannerProps: isError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    renderTopToolbarCustomActions: () => (
      <div className="ml-8">
        <Tooltip arrow title="Download data in csv">
          <IconButton onClick={handleExportData}>
            <FileDownloadIcon />
          </IconButton>
        </Tooltip>
      </div>
    ),
    muiCircularProgressProps: {
      color: "info",
    },
    rowCount: tableData.length,
    state: {
      globalFilter,
      isLoading,
      showAlertBanner: isError,
      showProgressBars: isRefetching,
      sorting,
    },
  });

  return <MaterialReactTable table={table} />;
};

const AdvanceTable = ({ columns }: AdvanceTableProp) => {
  const queryClient = new QueryClient();

  return (
    <div className="mx-auto overflow-hidden text-gray-900 border border-gray-300 dark:border-gray-600 rounded-md">
      <QueryClientProvider client={queryClient}>
        <Table columns={columns} />
      </QueryClientProvider>
    </div>
  );
};

export default AdvanceTable;
