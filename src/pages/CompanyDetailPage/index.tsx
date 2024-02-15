/**
 * External dependencies.
 */
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * Internal dependencies.
 */
import { StockDetail, SimpleChart, MessageBox } from "../../components";

const CompanyDetailPage = () => {
  const params = useParams();
  const symbol = decodeURIComponent(params.symbol?.toUpperCase() ?? "");

  const [stockData, setStockData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const oneYearAgoDate = useMemo(() => {
    const date = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
    return date.toISOString().slice(0, 10);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sam.superintegratedapp.com/wp-json/api/stock-data/?selector=stock&selection=${symbol}&date_from=${oneYearAgoDate}`;

      try {
        const response = await fetch(url, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        const data = json.stock_data;
        setStockData(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log("Error fetching data:", error.message);
        setStockData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [oneYearAgoDate, symbol]);

  const numOfData = useMemo(() => stockData.length, [stockData]);

  return (
    !isLoading && (
      <>
        {numOfData !== 0 ? (
          <div className="h-full mb-4">
            <div className="flex flex-wrap gap-5 lg:gap-0">
              <div className="w-full lg:w-1/2">
                <div className="me-0 lg:me-5">
                  <StockDetail stockData={stockData[numOfData - 1]} />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="min-h-80 h-full w-full">
                  <SimpleChart stockData={stockData} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <MessageBox
            message="Stock data not found."
            displayHomeBtn={true}
            displayLoginBtn={false}
          />
        )}
      </>
    )
  );
};

export default CompanyDetailPage;
