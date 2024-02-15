/**
 * External dependencies.
 */
import {
  MRT_ColumnDef,
  MRT_RowData,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

interface AdvanceTableProp {
  data: MRT_RowData[];
  columns: MRT_ColumnDef<MRT_RowData, string>[];
}

const Table = ({ data, columns }: AdvanceTableProp) => {
  const table = useMaterialReactTable({
    columns,
    data,
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
    rowCount: data.length,
    enableTopToolbar: false,
  });
  return <MaterialReactTable table={table} />;
};

const AdvanceTable = ({ data, columns }: AdvanceTableProp) => {
  return (
    <div className="mx-auto overflow-hidden text-gray-900 border border-gray-300 dark:border-gray-600 rounded-md">
      <Table data={data} columns={columns} />
    </div>
  );
};

export default AdvanceTable;
