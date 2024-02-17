/**
 * External dependencies.
 */
import { useEffect, useState } from "react";

/**
 * Internal dependencies.
 */
import { type Stocks } from "./types";
import { GET_STOCK_PORTFOLIO_ENDPOINT } from "../../../store/apiEndpoints";

const useEditableTableData = () => {
  const [tableData, setTableData] = useState([] as unknown as Stocks);

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
        setTableData(data);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.error("Error fetching data:", error.message);
        setTableData([] as unknown as Stocks);
      }
    };
    fetchData();

    // Send the request
    // fetch(GET_STOCK_PORTFOLIO_ENDPOINT, {
    //   method: "POST",
    //   credentials: "include",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.isEverythingOk) {
    //       setTableData(data.data);
    //     }
    //     console.log(data.data);
    //   })
    //   .catch(() => {
    //     setTableData([] as unknown as Stocks);
    //   });
  }, []);

  //   const _tableData = useMemo(() => {

  //   }, []);

  return { tableData };
};

export default useEditableTableData;
