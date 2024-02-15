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
        <span className="text-sm py-2 text-gray-900 dark:text-white">
          Data as of: {marketDataDate}
        </span>
        <button
          onClick={handleExportData}
          className="text-sm px-4 py-2 rounded bg-sky-500 dark:bg-sky-700 text-white dark:text-white"
        >
          Download
        </button>
      </div>
      <AdvanceTable columns={columns} data={data} />
    </>
  );
};

export default MarketWatchPage;
