/**
 * External dependencies.
 */
import { useMemo } from "react";
import { useParams } from "react-router-dom";

/**
 * Internal dependencies.
 */
import useApp from "../../store/useAppData";
import { StockDetail, SimpleChart, NotFound } from "../../components";

const CompanyDetailPage = () => {
  const params = useParams();
  const symbol = params.symbol;

  const { marketData } = useApp();

  const stockData = useMemo(
    () => marketData.find((item) => item.symbol.toLowerCase() === symbol),
    [marketData, symbol]
  );

  return stockData ? (
    <div>
      <div className="flex mb-4 w-full space-x-8">
        <div className="w-1/2 h-12">
          <StockDetail stockData={stockData} />
        </div>
        <div className="w-1/2 min-w-1/2">
          <SimpleChart />
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default CompanyDetailPage;
