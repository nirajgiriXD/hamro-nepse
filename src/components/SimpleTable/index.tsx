/**
 * External Dependencies.
 */
import { useState } from "react";

/**
 * Internal Dependencies.
 */
import SimpleTable from "./SimpleTable";

const Banner = () => {
  const [fetchURL, setFetchUrl] = useState(
    "https://dummyjson.com/products?limit=10"
  );

  const handleTopGainers = () => {
    setFetchUrl("https://dummyjson.com/products?limit=10");
  };

  const handleTopLosers = () => {
    setFetchUrl("https://dummyjson.com/products?limit=10&skip=10");
  };

  const handleTopTurnOvers = () => {
    setFetchUrl("https://dummyjson.com/products?limit=10&skip=20");
  };

  return (
    <>
      <div className="grid  mx-auto md:mt-14 sm:grid-cols-3 md:grid-cols-5 sm:mt-10 lg:grid-cols-9">
        <button
          type="button"
          onClick={handleTopGainers}
          className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Top Gainers
        </button>
        <button
          type="button"
          onClick={handleTopLosers}
          className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Top Losers
        </button>
        <button
          type="button"
          onClick={handleTopTurnOvers}
          className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Top Turnover
        </button>
      </div>
      <div className="grid lg:grid-cols mx-auto mt-3 lg:mt-4 overflow-hidden text-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl">
        <SimpleTable fetchURL={fetchURL} />
      </div>
    </>
  );
};

export default Banner;