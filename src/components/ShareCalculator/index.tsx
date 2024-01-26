/**
 * External dependencies.
 */
import React, { useState } from "react";

const ShareCalculator = () => {
  const [transactionType, setTransactionType] = useState<string>("buy");
  const [shareQuantity, setShareQuantity] = useState<number>(0);
  const [purchasePrice, setPurchasePrice] = useState<number>(0);
  const [isWACC, setIsWACC] = useState<boolean>(false);
  const [investorType, setInvestorType] = useState<string>("individual");
  const [taxRate, setTaxRate] = useState<number>(5);

  // Reset to default value.
  const handleTransactionTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const _transactionType = e.target.value ?? "";
    setTransactionType(_transactionType);
    setShareQuantity(0);
    setPurchasePrice(0);
    setIsWACC(false);
  };

  const handleShareQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const _shareQuantity = Number(
      (e.target.value ?? "").replace(/[^0-9]/g, "")
    );
    setShareQuantity(_shareQuantity);
  };

  const handlePurchasePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const _purchasePrice = Number(
      (e.target.value ?? "").replace(/[^0-9.]/g, "")
    );
    setPurchasePrice(_purchasePrice);
  };

  const handleIsWaccChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _isWacc = e.target.checked ?? false;
    setIsWACC(_isWacc);
  };

  const handleInvestorTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const _investorType = e.target.value ?? "individual";
    const _filteredInvestorType =
      _investorType === "individual" || _investorType === "institutional"
        ? _investorType
        : "individual";

    setInvestorType(_filteredInvestorType);
  };

  const handleTaxRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const _taxRate = Number((e.target.value ?? 7.5).replace(/[^0-9.]/g, ""));
    setTaxRate(_taxRate);
  };

  const handleCalculate = () => {
    console.log("Calculating...");
  };

  const handleClear = () => {
    setTransactionType("buy");
    setShareQuantity(0);
    setPurchasePrice(0);
    setIsWACC(false);
    setInvestorType("individual");
    setTaxRate(5);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-12">
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
            onClick={handleCalculate}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300 text-white"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="p-8 border border-gray-300 dark:border-gray-600 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Financial Summary</h3>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-md">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Total Amount</td>
              <td className="py-2 px-4">-</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Commission</td>
              <td className="py-2 px-4">-</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">SEBON FEE</td>
              <td className="py-2 px-4">-</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">DP Charge</td>
              <td className="py-2 px-4">-</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">
                Total Amount Payable (Rs)
              </td>
              <td className="py-2 px-4">-</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">
                Cost Price Per Share (Rs)
              </td>
              <td className="py-2 px-4">-</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-semibold">
                Commission Amount includes NEPSE Commission Rs - & SEBON
                Regularity Fee Rs -
              </td>
              <td className="py-2 px-4">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShareCalculator;
