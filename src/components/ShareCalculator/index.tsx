import React, { useState } from "react";

const ShareCalculator = () => {
  const [transactionType, setTransactionType] = useState("buy");
  const [shareQuantity, setShareQuantity] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [isWACC, setIsWACC] = useState(false);
  const [investorType, setInvestorType] = useState("individual");
  const [taxRate, setTaxRate] = useState("10");

  const handleTransactionTypeChange = (type) => {
    setTransactionType(type);
    setShareQuantity("");
    setPurchasePrice("");
    setIsWACC(false); // Reset the Is WACC checkbox when switching transaction types
  };

  const handleShareQuantityChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setShareQuantity(numericValue);
  };

  const handlePurchasePriceChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9.]/g, "");
    setPurchasePrice(numericValue);
  };

  const handleIsWACCChange = (e) => {
    setIsWACC(e.target.checked);
  };

  const handleInvestorTypeChange = (e) => {
    setInvestorType(e.target.value);
  };

  const handleTaxRateChange = (e) => {
    setTaxRate(e.target.value);
  };

  const handleCalculate = () => {
    console.log("Calculating...");
  };

  const handleClear = () => {
    setTransactionType("buy");
    setShareQuantity("");
    setPurchasePrice("");
    setIsWACC(false);
    setInvestorType("individual");
    setTaxRate("10");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-12">
  <div className="p-10 border border-gray-200 rounded-lg shadow-sm">
    <h1 className="flex font-bold mb-1 justify-center">Transaction Type:</h1>
    <div className="flex mb-4 justify-center">
      <button
        className={`px-4 py-2 rounded-md focus:outline-none ${
          transactionType === "buy"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
        onClick={() => handleTransactionTypeChange("buy")}
      >
        Buy
      </button>
      <button
        className={`px-4 py-2 rounded-md focus:outline-none ml-2 ${
          transactionType === "sell"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
        onClick={() => handleTransactionTypeChange("sell")}
      >
        Sell
      </button>
    </div>

    {transactionType === "sell" && (
      <>
        <div className="mb-4">
          <label className="block font-bold mb-1">Share Quantity:</label>
          <input
            type="text"
            value={shareQuantity}
            onChange={handleShareQuantityChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
            placeholder="Enter share quantity"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">Purchase Price (Rs):</label>
          <input
            type="text"
            value={purchasePrice}
            onChange={handlePurchasePriceChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
            placeholder="Enter purchase price"
          />
          <label className="block font-bold mb-1">
            <input
              type="checkbox"
              checked={isWACC}
              onChange={handleIsWACCChange}
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
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
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
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
          >
            <option value="5">5%</option>
            <option value="7.5">7.5%</option>
          </select>
        </div>
      </>
    )}

    {transactionType === "buy" && (
      <>
        <div className="mb-4">
          <label className="block font-bold mb-1">Share Quantity:</label>
          <input
            type="text"
            value={shareQuantity}
            onChange={handleShareQuantityChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
            placeholder="Enter share quantity"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">Purchase Price (Rs):</label>
          <input
            type="text"
            value={purchasePrice}
            onChange={handlePurchasePriceChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
            placeholder="Enter purchase price"
          />
        </div>
      </>
    )}

    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Calculate
      </button>
      <button
        onClick={handleClear}
        className="bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
      >
        Clear
      </button>
    </div>
  </div>
  <div className="p-8 border border-gray-200 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Financial Summary</h3>
        <table className="w-full border-collapse border border-gray-300 rounded-md">
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
              <td className="py-2 px-4 font-semibold">Total Amount Payable (Rs)</td>
              <td className="py-2 px-4">-</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Cost Price Per Share (Rs)</td>
              <td className="py-2 px-4">-</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-semibold">Commission Amount includes NEPSE Commission Rs - & SEBON Regularity Fee Rs -</td>
              <td className="py-2 px-4">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default ShareCalculator;
