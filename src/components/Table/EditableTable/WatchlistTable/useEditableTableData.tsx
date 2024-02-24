/**
 * External dependencies.
 */
import { useEffect, useState } from "react";

/**
 * Internal dependencies.
 */
import { type Stock } from "./types";
import useAppData from "../../../../store/useAppData";
import { GET_STOCK_WATCHLIST_ENDPOINT } from "../../../../store/constant";

const useEditableTableData = () => {
  const [tableData, setTableData] = useState([] as unknown as Stock);
  const { marketData } = useAppData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GET_STOCK_WATCHLIST_ENDPOINT, {
          method: "POST",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        const data = json.data;

        const preparedData = data.map((item: Stock) => {
          return (
            marketData.find((newItem: Record<string, string>) => {
              return newItem.symbol === item.symbol;
            }) ?? {
              ...item,
              name: "*",
              open: "*",
              high: "*",
              low: "*",
              close: "*",
              percentage_change: "*",
              volume: "*",
              turnover: "*",
            }
          );
        });

        setTableData(preparedData);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.error("Error fetching data:", error.message);
        setTableData([] as unknown as Stock);
      }
    };
    fetchData();
  }, [marketData]);

  return { tableData };
};

export default useEditableTableData;
