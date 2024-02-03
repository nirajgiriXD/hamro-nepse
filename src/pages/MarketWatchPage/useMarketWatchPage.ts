/**
 * External dependencies.
 */
import { MRT_ColumnDef, MRT_RowData } from "material-react-table";
import { download, generateCsv, mkConfig } from "export-to-csv";

/**
 * Internal dependencies.
 */
import useAppData from "../../useAppData";
import { useMemo } from "react";

const useMarketWatchPage = () => {
  const { marketData, marketDataDate } = useAppData();

  const _marketData = useMemo(() => {
    return marketData
      .sort((a, b) => (a.symbol > b.symbol ? 1 : -1))
      .map((item, index) => {
        return {
          ...item,
          id: index + 1,
        };
      });
  }, [marketData]);

  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(_marketData);
    download(csvConfig)(csv);
  };

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
      size: 10,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    },
    {
      accessorKey: "symbol",
      header: "Symbol",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    },
    {
      accessorKey: "open",
      header: "Open",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    },
    {
      accessorKey: "high",
      header: "High",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    },
    {
      accessorKey: "low",
      header: "Low",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    },
    {
      accessorKey: "close",
      header: "Close",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    },
    {
      accessorKey: "percentage_change",
      header: "% Change",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    },
    {
      accessorKey: "volume",
      header: "Volume",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    },
  ] as MRT_ColumnDef<MRT_RowData, string>[];

  return {
    marketDataDate,
    data: _marketData,
    handleExportData,
    columns,
  };
};

export default useMarketWatchPage;
