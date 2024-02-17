/**
 * External dependencies.
 */
import { useEffect, useState } from "react";

/**
 * Internal dependencies.
 */
import { type Stocks } from "./types";
import useAppData from "../../../store/useAppData";
import { GET_STOCK_PORTFOLIO_ENDPOINT } from "../../../store/apiEndpoints";

const useEditableTableData = () => {
  const [tableData, setTableData] = useState([] as unknown as Stocks);
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

        const preparedData = data.map((item: Stocks) => {
          const close = Number(
            marketData.find((newItem: Record<string, string>) => {
              return newItem.symbol === item.symbol;
            })?.close ?? 0
          );
          const total = item.quantity * close;

          return {
            ...item,
            close,
            total,
          };
        });

        setTableData(preparedData);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.error("Error fetching data:", error.message);
        setTableData([] as unknown as Stocks);
      }
    };
    fetchData();
  }, [marketData]);

  return { tableData };
};

export default useEditableTableData;
