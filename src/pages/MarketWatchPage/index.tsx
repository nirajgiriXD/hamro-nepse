/**
 * Internal dependencies.
 */
import { AdvanceTable } from "../../components";
import useMarketWatchPage from "./useMarketWatchPage";

const MarketWatchPage = () => {
  const { columns } = useMarketWatchPage();

  return (
    <>
      <div className="flex justify-end">
        <span className="text-sm text-gray-900 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-5 py-2 mb-2 dark:text-white">
          2024-01-02
        </span>
      </div>
      <AdvanceTable columns={columns} />
    </>
  );
};

export default MarketWatchPage;
