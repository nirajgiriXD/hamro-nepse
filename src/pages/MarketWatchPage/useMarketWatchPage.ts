import { useRef } from "react";

const useMarketWatchPage = () => {
  const columns = [
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
  ];

  return {
    columns,
  };
};

export default useMarketWatchPage;
