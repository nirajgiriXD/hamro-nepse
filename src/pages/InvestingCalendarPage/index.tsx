/**
 * External dependencies.
 */
import { useEffect } from "react";

const InvestingCalendarPage = () => {
  useEffect(() => {
    fetch("https://nepsealpha.com/api/smx9841/investment_calander")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-md shadow-md text-center">
      <h1 className="text-2xl font-semibold mb-4">Under Construction</h1>
      <p className="text-gray-600 dark:text-gray-400">
        This component is currently under construction. Check back soon!
      </p>
    </div>
  );
};

export default InvestingCalendarPage;
