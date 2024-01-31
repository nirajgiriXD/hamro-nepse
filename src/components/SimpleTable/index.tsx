/**
 * External Dependencies.
 */
import {
  MRT_RowData,
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import { mkConfig, generateCsv, download } from "export-to-csv";

// const csvConfig = mkConfig({
//   fieldSeparator: ",",
//   decimalSeparator: ".",
//   useKeysAsHeaders: true,
// });

interface SimpleTableProp {
  data: MRT_RowData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: MRT_ColumnDef<MRT_RowData, any>[];
}

const SimpleTable = ({ data, columns }: SimpleTableProp) => {
  // const handleExportData = () => {
  //   const csv = generateCsv(csvConfig)(data);
  //   download(csvConfig)(csv);
  // };

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

    // renderTopToolbarCustomActions: () => (
    //   <Box
    //     sx={{
    //       display: "flex",
    //       gap: "16px",
    //       padding: "8px",
    //       flexWrap: "wrap",
    //     }}
    //   >
    //     <Tooltip arrow title="Download Data">
    //       <IconButton onClick={handleExportData}>
    //         <FileDownloadIcon />
    //       </IconButton>
    //     </Tooltip>
    //   </Box>
    // ),
  });

  return (
    <div className="grid mx-auto mt-6 lg:mt-8 overflow-hidden text-gray-900 border border-b-1 border-gray-300 border-gray-200 rounded-md lg:grid-cols">
      <MaterialReactTable table={table} />
    </div>
  );
};

export default SimpleTable;
