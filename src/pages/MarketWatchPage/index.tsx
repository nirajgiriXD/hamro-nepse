/**
 * Internal dependencies.
 */
import { AdvanceTable } from "../../components";
// import useMarketWatchPage from "./useMarketWatchPage";

// const marketwatchendpoint =
//   "https://sam.superintegratedapp.com/wp-json/api/stock-data/?selector=stock&selection=all";
const MarketWatchPage = () => {
  // const { data, columns } = useMarketWatchPage();
  return <AdvanceTable data={data} columns={columns} />;
};

export default MarketWatchPage;
