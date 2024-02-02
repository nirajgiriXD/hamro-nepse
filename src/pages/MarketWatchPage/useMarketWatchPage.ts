/**
 * External dependencies.
 */
import { useEffect, useState } from "react";

const useMarketWatchPage = () => {
  const [date, setDate] = useState<string>("YYYY-MM-DD");

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await fetch(
          "https://sam.superintegratedapp.com/wp-json/api/stock-data-date"
        );

        if (!response.ok) {
          return;
        }

        const result = await response.json();
        setDate(result["date"]);
      } catch (error) {
        // Fail Silently
      }
    };

    fetchDate();
  });

  const columns = [
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
      accessorKey: "sector",
      header: "Sector",
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
  ];

  return {
    date,
    columns,
  };
};

export default useMarketWatchPage;
