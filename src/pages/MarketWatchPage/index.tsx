/**
 * Internal dependencies.
 */
import { AdvanceTable } from "../../components";
import useMarketWatchPage from "./useMarketWatchPage";

const MarketWatchPage = () => {
  const { marketDataDate, data, columns, handleExportData } =
    useMarketWatchPage();

  return (
    <>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-900 py-2 text-white dark:text-white">
          Data as of: {marketDataDate}
        </span>
        <button
          onClick={handleExportData}
          className="text-sm text-gray-900 bg-sky-500 dark:bg-sky-700 rounded px-4 py-2 text-white dark:text-white"
        >
          Download
        </button>
      </div>
      <AdvanceTable columns={columns} data={data} />
    </>
  );
};

export default MarketWatchPage;
