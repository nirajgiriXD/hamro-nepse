/**
 * Internal Dependencies.
 */
import useHomePage from "./useHomePage";
import { SimpleTable } from "../../components";

const HomePage = () => {
  const {
    data,
    columns,
    activeButton,
    onTopTurnoverClick,
    onTopGainerClick,
    onTopLoserClick,
  } = useHomePage();

  const tableOptions = [
    { title: "Top Turnover", slug: "topTurnover", action: onTopTurnoverClick },
    { title: "Top Gainers", slug: "topGainer", action: onTopGainerClick },
    { title: "Top Losers", slug: "topLoser", action: onTopLoserClick },
  ];

  return (
    <>
      {/* Table Data Toggler */}
      <div className="grid mx-auto text-gray-900 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
        {tableOptions.map((item) => {
          return (
            <button
              key={item.slug}
              type="button"
              onClick={item.action}
              className={`text-white font-medium rounded text-sm px-5 py-2.5 text-center me-2 ${
                activeButton === item.slug
                  ? "bg-sky-500 dark:bg-sky-700"
                  : "bg-slate-500 dark:bg-slate-700"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div className="mt-3">
        <SimpleTable data={data} columns={columns} />
      </div>
    </>
  );
};

export default HomePage;
