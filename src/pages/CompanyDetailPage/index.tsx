/**
 * External dependencies.
 */
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * Internal dependencies.
 */
import { StockDetail, SimpleChart, NotFound } from "../../components";

const CompanyDetailPage = () => {
  const params = useParams();
  const symbol = params.symbol?.toUpperCase();

  const [stockData, setStockData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const oneYearAgoDate = useMemo(() => {
    return new Date(new Date().setFullYear(new Date().getFullYear() - 1));
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
          <div>
            <div className="flex mb-4 w-full space-x-8">
              <div className="w-1/2 h-12">
                <StockDetail stockData={stockData[numOfData - 1]} />
              </div>
              <div className="w-1/2 min-w-1/2">
                <SimpleChart />
              </div>
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </>
    )
  );
};

export default CompanyDetailPage;
