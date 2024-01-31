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
          className="text-white bg-sky-700 dark:bg-sky-700 font-medium rounded text-sm px-5 py-2.5 text-center me-2"
        >
          Top Turnover
        </button>
        <button
          type="button"
          onClick={onTopGainerClick}
          className="text-white bg-sky-700 dark:bg-sky-700 font-medium rounded text-sm px-5 py-2.5 text-center me-2"
        >
          Top Gainers
        </button>
        <button
          type="button"
          onClick={onTopLoserClick}
          className="text-white bg-sky-700 dark:bg-sky-700 font-medium rounded text-sm px-5 py-2.5 text-center me-2"
        >
          Top Losers
        </button>
      </div>

      {/* Table */}
      <div className="mt-3">
        <SimpleTable data={data} columns={columns} />
      </div>
    </>
  );
};

export default HomePage;
