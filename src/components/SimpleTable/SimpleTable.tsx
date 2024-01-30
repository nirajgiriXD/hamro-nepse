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

type ProductApiResponse = {
  products: Array<Product>;
};

type Product = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  stock: number;
};

interface URL {
  fetchURL: string;
}

const Table = ({ fetchURL }: URL) => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  const {
    data: { products = [] } = {},
    isError,
    isRefetching,
    isLoading,
    refetch,
  } = useQuery<ProductApiResponse>({
    queryKey: [
      // 'table-data', [if we want the data to load everytime we go to the  website]
      globalFilter,
      sorting,
      fetchURL,
    ],
    queryFn: async () => {
      const url = fetchURL;
      const response = await fetch(url);
      const json = (await response.json()) as ProductApiResponse;
      return json;
    },
    placeholderData: keepPreviousData,
  });

  const columns = useMemo<MRT_ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "price",
        header: "Price",
        Cell: ({ cell }) => `$${cell.getValue<number>().toFixed(2)}`,
      },
      {
        accessorKey: "discountPercentage",
        header: "Discount (%)",
      },
      {
        accessorKey: "stock",
        header: "Stock",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: products,
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
      <Tooltip arrow title="Refresh Data">
        <IconButton onClick={() => refetch()}>
          <RefreshIcon />
        </IconButton>
      </Tooltip>
    ),
    rowCount: products.length,
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

const SimpleTable = ({ fetchURL }: URL) => (
  <QueryClientProvider client={queryClient}>
    <Table fetchURL={fetchURL} />
  </QueryClientProvider>
);

export default SimpleTable;
