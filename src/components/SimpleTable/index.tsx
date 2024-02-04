/**
 * External Dependencies.
 */
import {
  MRT_RowData,
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

interface SimpleTableProp {
  data: MRT_RowData[];
  columns: MRT_ColumnDef<MRT_RowData, string>[];
}

const SimpleTable = ({ data, columns }: SimpleTableProp) => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    enableGlobalFilter: false,
    enableBottomToolbar: false,
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableHiding: false,
    enableTopToolbar: false,
    initialState: {
      density: "compact",
    },
    muiCircularProgressProps: {
      color: "info",
    },
  });

  return (
    <div className="grid mx-auto overflow-hidden text-gray-900 border border-gray-300 dark:border-gray-600 rounded-md lg:grid-cols">
      <MaterialReactTable table={table} />
    </div>
  );
};

export default SimpleTable;
