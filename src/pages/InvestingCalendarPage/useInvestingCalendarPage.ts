/**
 * External dependencies.
 */
import { useMemo } from "react";
import { MRT_RowData, createMRTColumnHelper } from "material-react-table";

/**
 * Internal dependencies.
 */
import useAppData from "../../store/useAppData";

const useInvestingCalendarPage = () => {
  const { ipoData } = useAppData();

  const columnHelper = createMRTColumnHelper<MRT_RowData>();
  const ipo_columns = [
    columnHelper.accessor("id", {
      header: "ID",
      size: 20,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("symbol", {
      header: "Symbol",
      size: 40,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("name", {
      header: "Name",
      size: 240,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("units", {
      header: "Units",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("price", {
      header: "Price",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("opening_date", {
      header: "Opening Date",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("closing_date", {
      header: "Closing Date",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("status", {
      header: "Status",
      size: 80,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
  ];

  const ipo_data = useMemo(() => {
    return ipoData.map((item, index) => {
      return {
        ...item,
        id: index + 1,
      };
    });
  }, [ipoData]);

  return { ipo_columns, ipo_data };
};

export default useInvestingCalendarPage;
