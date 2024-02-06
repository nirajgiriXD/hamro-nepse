interface StockDetailProp {
  stockData: Record<string, string>;
}

const StockDetail = ({ stockData }: StockDetailProp) => {
  return (
    <div className="p-2 rounded-md lg:p-6 dark:bg-gray-800 bg-gray-50">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-2">
        <div className="w-full text-sm font-medium">
          <span className="inline-block min-w-24">Symbol</span>
          <span className="">{stockData.symbol}</span>
        </div>
        <div className="w-full text-sm font-medium">
          <span className="inline-block min-w-24">Name</span>
          <span className="">{stockData.name}</span>
        </div>
        <div className="w-full text-sm font-medium">
          <span className="inline-block min-w-24">Sector</span>
          <span className="">{stockData.sector}</span>
        </div>
        <div className="w-full text-sm font-medium">
          <span className="inline-block min-w-24">Open</span>
          <span className="">{stockData.open}</span>
        </div>
        <div className="w-full text-sm font-medium">
          <span className="inline-block min-w-24">High</span>
          <span className="">{stockData.high}</span>
        </div>
        <div className="w-full text-sm font-medium">
          <span className="inline-block min-w-24">Low</span>
          <span className="">{stockData.low}</span>
        </div>
        <div className="w-full text-sm font-medium">
          <span className="inline-block min-w-24">Close</span>
          <span className="">{stockData.close}</span>
        </div>
        <div className="w-full text-sm font-medium">
          <span className="inline-block min-w-24">% Change</span>
          <span className="">{stockData.percentage_change}</span>
        </div>
        <div className="w-full text-sm font-medium">
          <span className="inline-block min-w-24">Volume</span>
          <span className="">{stockData.volume}</span>
        </div>
        <div className="w-full text-sm font-medium">
          <span className="inline-block min-w-24">Data as of</span>
          <span className="">{stockData.date}</span>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
