/**
 * External Dependencies.
 */
import { useState, useMemo, useEffect } from "react";
import { MRT_RowData, createMRTColumnHelper } from "material-react-table";

/**
 * Internal Dependencies.
 */
import useAppData from "../../useAppData";

const useHomePage = () => {
  const { marketData } = useAppData();

  const columnHelper = createMRTColumnHelper<MRT_RowData>();
  const columns = [
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
    columnHelper.accessor("open", {
      header: "Open",
      size: 100,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("high", {
      header: "High",
      size: 100,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("low", {
      header: "Low",
      size: 100,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("close", {
      header: "Close",
      size: 100,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("percentage_change", {
      header: "% Change",
      size: 100,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
    columnHelper.accessor("volume", {
      header: "Volume",
      size: 100,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    }),
  ];

  const topTurnover = useMemo(() => {
    return marketData
      .sort((a, b) => Number(b.turnover) - Number(a.turnover))
      .slice(0, 10)
      .map((item, index) => ({
        ...item,
        id: index + 1,
        turnover: String(Number(item.volume) * Number(item.close)),
      }));
  }, [marketData]);

  const topVolume = useMemo(() => {
    return marketData
      .sort((a, b) => Number(b.volume) - Number(a.volume))
      .slice(0, 10)
      .map((item, index) => ({
        ...item,
        id: index + 1,
      }));
  }, [marketData]);

  const topGainer = useMemo(() => {
    return marketData
      .sort((a, b) => Number(b.percentage_change) - Number(a.percentage_change))
      .slice(0, 10)
      .map((item, index) => ({
        ...item,
        id: index + 1,
      }));
  }, [marketData]);

  const topLoser = useMemo(() => {
    return marketData
      .sort((a, b) => Number(a.percentage_change) - Number(b.percentage_change))
      .slice(0, 10)
      .map((item, index) => ({
        ...item,
        id: index + 1,
      }));
  }, [marketData]);

  const [data, setData] = useState(topTurnover);
  const [activeButton, setActiveButton] = useState<string>("topTurnover");

  const onTopTurnoverClick = () => {
    setData(topTurnover);
    setActiveButton("topTurnover");
  };

  const onTopVolumeClick = () => {
    setData(topVolume);
    setActiveButton("topVolume");
  };

  const onTopGainerClick = () => {
    setData(topGainer);
    setActiveButton("topGainer");
  };

  const onTopLoserClick = () => {
    setData(topLoser);
    setActiveButton("topLoser");
  };

  useEffect(() => {
    setData(topTurnover);
  }, [topTurnover]);

  return {
    data,
    columns,
    activeButton,
    onTopTurnoverClick,
    onTopVolumeClick,
    onTopGainerClick,
    onTopLoserClick,
  };
};

export default useHomePage;
