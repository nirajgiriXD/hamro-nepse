/**
 * Internal dependencies.
 */
import SellReport from "./SellReport";
import BuyReport from "./BuyReport";
import useShareCalculator from "./useShareCalculator";

const ShareCalculator = () => {
  const {
    transactionType,
    shareQuantity,
    purchasePrice,
    sellingPrice,
    investorType,
    taxRate,
    isWACC,
    totalAmount,
    commission,
    sebonFee,
    dpCharge,
    capitalGainTax,
    totalAmountPayable,
    capitalGainTaxPercentage,
    costPerShare,
    profitOrLoss,
    nepseCommission,
    sebonRegularityFee,
    totalAmountReceiveable,
    handleClear,
    handleIsWaccChange,
    handleTaxRateChange,
    handleTransactionTypeChange,
    handleShareQuantityChange,
    handlePurchasePriceChange,
    handleSellingPriceChange,
    handleInvestorTypeChange,
  } = useShareCalculator();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-10 border border-gray-300 dark:border-gray-600 rounded-lg">
        <h1 className="flex font-bold mb-1">Transaction Type:</h1>
        <div className="mb-4">
          <select
            className="block w-full h-10 p-2 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleTransactionTypeChange}
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>

        {transactionType === "sell" && (
          <>
            <div className="mb-4">
              <label className="block font-bold mb-1">Share Quantity:</label>
              <input
                type="text"
                value={shareQuantity}
                onChange={handleShareQuantityChange}
                className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="Enter share quantity"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">
                Purchase Price (Rs):
              </label>
              <input
                type="text"
                value={purchasePrice}
                onChange={handlePurchasePriceChange}
                className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="Enter purchase price"
              />
              <label className="block font-bold mb-1">
                Selling Price (Rs):
              </label>
              <input
                type="text"
                value={sellingPrice}
                onChange={handleSellingPriceChange}
                className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="Enter purchase price"
              />
              <label className="inline-block font-bold mb-1 mt-3">
                <input
                  type="checkbox"
                  checked={isWACC}
                  onChange={handleIsWaccChange}
                  className="mr-2"
                />
                Is WACC
              </label>
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">Investor Type:</label>
              <select
                value={investorType}
                onChange={handleInvestorTypeChange}
                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              >
                <option value="individual">Individual</option>
                <option value="institutional">Institutional</option>
              </select>
            </div>
            <div>
              <label className="block font-bold mb-1">Capital Gain Tax:</label>
              <select
                value={taxRate}
                onChange={handleTaxRateChange}
                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              >
                {investorType === "individual" ? (
                  <>
                    <option value="5">5%</option>
                    <option value="7.5">7.5%</option>
                  </>
                ) : (
                  <option value="10">10%</option>
                )}
              </select>
            </div>
          </>
        )}

        {transactionType === "buy" && (
          <div>
            <div className="mb-4">
              <label className="block font-bold mb-1">Share Quantity:</label>
              <input
                type="text"
                value={shareQuantity}
                onChange={handleShareQuantityChange}
                className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="Enter share quantity"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">
                Purchase Price (Rs):
              </label>
              <input
                type="text"
                value={purchasePrice}
                onChange={handlePurchasePriceChange}
                className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="Enter purchase price"
              />
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-4 mt-5">
          <button
            onClick={handleClear}
            className="px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300 text-white"
          >
            Clear
          </button>
        </div>
      </div>

      {transactionType === "buy" && (
        <BuyReport
          totalAmount={totalAmount}
          commission={commission}
          sebonFee={sebonFee}
          dpCharge={dpCharge}
          totalAmountPayable={totalAmountPayable}
          costPerShare={costPerShare}
          nepseCommission={nepseCommission}
          sebonRegularityFee={sebonRegularityFee}
        />
      )}
      {transactionType === "sell" && (
        <SellReport
          totalAmount={totalAmount}
          commission={commission}
          sebonFee={sebonFee}
          dpCharge={dpCharge}
          totalAmountReceiveable={totalAmountReceiveable}
          capitalGainTax={capitalGainTax}
          capitalGainTaxPercentage={capitalGainTaxPercentage}
          profitOrLoss={profitOrLoss}
          nepseCommission={nepseCommission}
          sebonRegularityFee={sebonRegularityFee}
        />
      )}
    </div>
  );
};

export default ShareCalculator;
