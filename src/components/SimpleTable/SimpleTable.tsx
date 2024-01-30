/**
 * External Dependencies.
 */
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import { mkConfig, generateCsv, download } from "export-to-csv";

/**
 * Internal Dependencies.
 */
import { data, columns } from "./TableData";

// const csvConfig = mkConfig({
//   fieldSeparator: ",",
//   decimalSeparator: ".",
//   useKeysAsHeaders: true,
// });

const Simpletable = () => {
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

  return <MaterialReactTable table={table} />;
};

export default Simpletable;
