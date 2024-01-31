import MarketWatch from "../../components/AdvanceTable";

const marketwatchendpoint = "https://sam.superintegratedapp.com/wp-json/api/stock-data/?selector=stock&selection=all";
const MarketWatchPage = () => {
  return <>
  <MarketWatch fetchURL={marketwatchendpoint}/>
  </>;
};

export default MarketWatchPage;
