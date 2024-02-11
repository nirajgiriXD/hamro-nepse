interface StockDataProp {
  stockData: Record<string, string>;
}

const StockDetail = ({ stockData }: StockDataProp) => {
  return (
    <div className="p-4 rounded-md lg:p-6 dark:bg-gray-800 bg-gray-50">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs md:text-sm font-medium">
        <div className="w-full">
          <span className="inline-block min-w-20">Symbol</span>
          <span className="">: {stockData.symbol}</span>
        </div>
        <div className="w-full">
          <span className="inline-block min-w-20">Name</span>
          <span className="">: {stockData.name}</span>
        </div>
        <div className="w-full">
          <span className="inline-block min-w-20">Sector</span>
          <span className="">: {stockData.sector}</span>
        </div>
        <div className="w-full">
          <span className="inline-block min-w-20">Open</span>
          <span className="">: {stockData.open}</span>
        </div>
        <div className="w-full">
          <span className="inline-block min-w-20">High</span>
          <span className="">: {stockData.high}</span>
        </div>
        <div className="w-full">
          <span className="inline-block min-w-20">Low</span>
          <span className="">: {stockData.low}</span>
        </div>
        <div className="w-full">
          <span className="inline-block min-w-20">Close</span>
          <span className="">: {stockData.close}</span>
        </div>
        <div className="w-full">
          <span className="inline-block min-w-20">% Change</span>
          <span className="">: {stockData.percentage_change}</span>
        </div>
        <div className="w-full">
          <span className="inline-block min-w-20">Volume</span>
          <span className="">: {stockData.volume}</span>
        </div>
        <div className="w-full">
          <span className="inline-block min-w-20">Data as of</span>
          <span className="">: {stockData.date}</span>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
