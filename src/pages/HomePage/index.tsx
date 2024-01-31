/**
 * External dependencies.
 */
import { SimpleTable } from "../../components";

/**
 * Internal Dependencies.
 */
import useHomePage from "./useHomePage";

const HomePage = () => {
  const {
    data,
    columns,
    onTopTurnoverClick,
    onTopGainerClick,
    onTopLoserClick,
  } = useHomePage();
  return (
    <>
      {/* Table Data Toggler */}
      <div className="grid mx-auto text-gray-900 sm:grid-cols-3 md:grid-cols-5 sm:mt-10 lg:grid-cols-9">
        <button
          type="button"
          onClick={onTopTurnoverClick}
          className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Top Turnover
        </button>
        <button
          type="button"
          onClick={onTopGainerClick}
          className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:focus:ring-sky-800 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Top Gainers
        </button>
        <button
          type="button"
          onClick={onTopLoserClick}
          className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:focus:ring-sky-800 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Top Losers
        </button>
      </div>

      {/* Table */}
      <SimpleTable data={data} columns={columns} />
    </>
  );
};

export default HomePage;
