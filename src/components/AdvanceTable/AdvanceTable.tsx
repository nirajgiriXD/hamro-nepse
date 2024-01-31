import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_SortingState,
} from "material-react-table";
import { IconButton, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { useMemo, useState } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { download, generateCsv, mkConfig } from "export-to-csv";

type MarketWatchApiResponse = {
  marketdata: Array<MarketData>;
};

type MarketData = {
  symbol: string,
  name: string,
  sector: string,
  open: number,
  high: number,
  low: number,
  close: number,
  percentage_change: number,
  volume: number,
  date: Date
};

interface URL {
  fetchURL: string;
}

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});


const Table = ({ fetchURL }: URL) => {
  
  
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  const {
    data: { marketdata = [] } = {},
    isError,
    isRefetching,
    isLoading,
    refetch,
  } = useQuery<MarketWatchApiResponse>({
    queryKey: [
      // 'table-data', [if we want the data to load everytime we go to the  website]
      globalFilter,
      sorting,
      fetchURL,
    ],
    queryFn: async () => {
      const url = fetchURL;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Content-Type': 'application/json',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
        },
        referrerPolicy: 'strict-origin-when-cross-origin',
        mode: 'cors',
      });
      const json = (await response.json()) as MarketWatchApiResponse;
      return json;
    },
    placeholderData: keepPreviousData,
  });

  const columns = useMemo<MRT_ColumnDef<MarketData>[]>(
    () => [
      {
        accessorKey: "symbol",
        header: "Symbol",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "sector",
        header: "Sector",
      },
      {
        accessorKey: "open",
        header: "Open",
      },
      {
        accessorKey: "high",
        header: "High",
      },
      {
        accessorKey: "low",
        header: "Low",
      },
      {
        accessorKey: "percentage_change",
        header: "% Change",
      },
      {
        accessorKey: "volume",
        header: "Volume",
      },
      {
        accessorKey: "date",
        header: "Date",
      },
    ],
    []
  );

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(marketdata);
    download(csvConfig)(csv);
  };

  const table = useMaterialReactTable({
    columns,
    data: marketdata,
    enablePagination: false,
    enableSorting: true,
    enableGlobalFilter: true,
    enableColumnFilters: false,
    enableBottomToolbar: false,
    initialState: {},
    muiToolbarAlertBannerProps: isError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    muiLinearProgressProps: {
      color: "info",
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    renderTopToolbarCustomActions: () => (
      <>
      <Tooltip arrow title="Refresh Data">
        <IconButton onClick={() => refetch()}>
          <RefreshIcon />
        </IconButton>
      </Tooltip>
      <Tooltip arrow title="Download Data">
        <IconButton onClick={handleExportData}>
          <FileDownloadIcon />
        </IconButton>
      </Tooltip>
    </>
    ),
    rowCount: marketdata.length,
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

const queryClient = new QueryClient();

const AdvanceTable = ({ fetchURL }: URL) => (
  <QueryClientProvider client={queryClient}>
    <Table fetchURL={fetchURL} />
  </QueryClientProvider>
);

export default AdvanceTable;
