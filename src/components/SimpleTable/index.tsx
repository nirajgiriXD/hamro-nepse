/**
 * Internal Dependencies.
 */
import Simpletable from "./SimpleTable";

const SimpleTable = () => {
  return (
    <>
      <div className="grid mx-auto text-gray-900 sm:grid-cols-3 md:grid-cols-5 sm:mt-10 lg:grid-cols-9">
        <button
          type="button"
          //onClick={handleTopGainers}
          className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Top Gainers
        </button>
        <button
          type="button"
          //onClick={handleTopLosers}
          className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Top Losers
        </button>
        <button
          type="button"
          //onClick={handleTopTurnOvers}
          className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Top Turnover
        </button>
      </div>
      <div className="grid mx-auto mt-6 lg:mt-8 overflow-hidden text-gray-900 border border-b-1 border-gray-300 border-gray-200 rounded-xl lg:grid-cols">
        <Simpletable />
      </div>
    </>
  );
};

export default SimpleTable;
