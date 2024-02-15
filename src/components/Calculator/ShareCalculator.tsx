/**
 * Internal dependencies.
 */
import SellSummary from "./Sell";
import BuySummary from "./Buy";

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


  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [commission, setCommission] = useState<number>(0);
  const [sebonFee, setSebonFee] = useState<number>(0);
  const [dpCharge, setDpCharge] = useState<number>(0);
  const [totalAmountPayable, setTotalAmountPayable] = useState<number>(0);
  const [costPerShare, setCostPerShare] = useState<number>(0);
  const [totalAmountReceiveable, setTotalAmountReceiveable] = useState<number>(0);
  const [capitalGainTax, setCapitalGainTax] = useState<number>(0);
  const [profitOrLoss, setProfitOrLoss] = useState<number>(0);
  const [sebonRegularityFee, setSebonRegularityFee] = useState<number>(0);
  const [nepseCommission, setNepseCommission] = useState<number>(0);


  const handleCalculate = () => {
    if(transactionType === "buy")
    {
      if (shareQuantity > 0 && purchasePrice > 0) {
        setTotalAmount(shareQuantity * purchasePrice);
        setCommission(brokerCommissionFunction(totalAmount));
        setSebonFee(sebonFeeFunction(totalAmount));
        setDpCharge(25);
        console.log(dpCharge)
        console.log(totalAmountPayable)
        setTotalAmountPayable(totalAmount + commission + sebonFee + dpCharge);
        console.log(totalAmountPayable)
        setCostPerShare(totalAmountPayable / shareQuantity);
        setNepseCommission(commission * 0.2);
        setSebonRegularityFee(commission * 0.006);
     }
    }
  };

  const brokerCommissionFunction = (total: number):number => {
    let bkcomm = 0;

    if (total <= 50000) {
        bkcomm = (0.40 / 100) * total;
    } else if (total > 50000 && total <= 500000) {
        bkcomm = (0.37 / 100) * total;
    } else if (total > 500000 && total <= 2000000) {
        bkcomm = (0.34 / 100) * total;
    } else if (total > 2000000 && total <= 10000000) {
        bkcomm = (0.30 / 100) * total;
    } else {
        bkcomm = (0.27 / 100) * total;
    }

    if (bkcomm <= 10) {
        bkcomm = 10;
    }

    return bkcomm;
}

const sebonFeeFunction = (total: number): number => {
    return (0.015 / 100) * total;
}


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

  const handleClear = () => {
    setTransactionType("buy");
    setShareQuantity(0);
    setPurchasePrice(0);
    setIsWACC(false);
    setInvestorType("individual");
    setTaxRate(5);
    setTotalAmount(0);
    setCommission(0);
    setSebonFee(0);
    setDpCharge(0);
    setTotalAmountPayable(0);
    setCostPerShare(0);
    setNepseCommission(0);
    setSebonRegularityFee(0);
  };

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
      
      {transactionType === "buy" &&(
        <BuySummary totalAmount={totalAmount} commission={commission} sebonFee={sebonFee} dpCharge={dpCharge} totalAmountPayable={totalAmountPayable} costPerShare={costPerShare} nepseCommission={nepseCommission} sebonRegularityFee={sebonRegularityFee}/>
      )}
      {transactionType === "sell" &&(
        <SellSummary totalAmount={totalAmount} commission={commission} sebonFee={sebonFee} dpCharge={dpCharge} totalAmountReceiveable={totalAmountReceiveable} capitalGainTax={capitalGainTax} profitOrLoss={profitOrLoss} nepseCommission={nepseCommission} sebonRegularityFee={sebonRegularityFee}/>
      )}
    </div>
  );
};

export default ShareCalculator;
