/**
 * External dependencies.
 */
import { useEffect, useState } from "react";

/**
 * Internal dependencies.
 */
import { type Stock } from "./types";
import useAppData from "../../../store/useAppData";
import { GET_STOCK_PORTFOLIO_ENDPOINT } from "../../../store/constant";

const useEditableTableData = () => {
  const [tableData, setTableData] = useState([] as unknown as Stock);
  const { marketData } = useAppData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GET_STOCK_PORTFOLIO_ENDPOINT, {
          method: "POST",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        const data = json.data;

        const preparedData = data.map((item: Stock) => {
          const close = Number(
            marketData.find((newItem: Record<string, string>) => {
              return newItem.symbol === item.symbol;
            })?.close ?? 0
          );
          const total = item.quantity * close;
          const profit_loss =
            item.quantity * close - item.quantity * item.buy_rate;

          return {
            ...item,
            close,
            total,
            profit_loss,
          };
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
