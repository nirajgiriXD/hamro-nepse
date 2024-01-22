/**
 * External dependencies.
 */
import { useState, useEffect, useRef } from "react";

const ShareCalculator = () => {
  const [transactionType, setTransactionType] = useState("buy");
  const [shareQuantity, setShareQuantity] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [additionalField, setAdditionalField] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleTransactionTypeChange = (type) => {
    setTransactionType(type);
    setShareQuantity("");
    setPurchasePrice("");
    setAdditionalField("");
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

  const handleAdditionalFieldChange = (e) => {
    setAdditionalField(e.target.value);
  };

  const handleCalculate = () => {
    console.log("Calculating...");
  };

  const handleClear = () => {
    setTransactionType("buy");
    setShareQuantity("");
    setPurchasePrice("");
    setAdditionalField("");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-12">
      {/* Testimonial 1 */}
      <figure className="flex flex-col items-start justify-center p-8 text-left bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
        <div className="mt-4" ref={dropdownRef}>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 font-bold text-lg">
            Transaction type:
          </label>
          <div className="relative inline-block w-44">
            <button
              id="dropdownDefaultButton1"
              onClick={() =>
                handleTransactionTypeChange(
                  transactionType === "buy" ? "" : "buy"
                )
              }
              onMouseEnter={toggleDropdown}
              onBlur={toggleDropdown}
              className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${
                transactionType === "buy"
                  ? "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  : ""
              }`}
              type="button"
            >
              {transactionType === "buy"
                ? "Select Buy or Sell"
                : "Select Buy or Sell"}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                id="dropdown1"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton1"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleTransactionTypeChange("buy")}
                    >
                      Buy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleTransactionTypeChange("sell")}
                    >
                      Sell
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Share Quantity Input */}
        {transactionType === "buy" && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 font-bold">
              Share Quantity:
            </label>
            <input
              type="text"
              value={shareQuantity}
              onChange={handleShareQuantityChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Enter share quantity"
            />
          </div>
        )}

        {/* Purchase Price Input */}
        {transactionType === "buy" && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 font-bold">
              Purchase Price (Rs):
            </label>
            <input
              type="text"
              value={purchasePrice}
              onChange={handlePurchasePriceChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Enter purchase price"
            />
          </div>
        )}

        {/* Additional Field Input for Sell */}
        {transactionType === "sell" && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 font-bold">
              Additional Field:
            </label>
            <input
              type="text"
              value={additionalField}
              onChange={handleAdditionalFieldChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Enter additional field"
            />
          </div>
        )}

        {/* Buttons for Calculate and Clear */}
        <div className="mt-4 flex space-x-4">
          <button
            onClick={handleCalculate}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          >
            Clear
          </button>
        </div>
      </figure>

      {/* Testimonial 2 */}
      <figure className="flex flex-col items-start justify-center p-8 text-left bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Financial Summary
        </h3>
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
      </figure>
    </div>
  );
};

export default ShareCalculator;
