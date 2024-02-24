/**
 * External dependencies.
 */
import { useState } from "react";

/**
 * Internal dependencies.
 */
import useApp from "../../store/useAppData";

const useCompareCompanyPage = () => {
  const initialCompanyData = {
    symbol: "*",
    name: "*",
    sector: "*",
    open: "*",
    high: "*",
    low: "*",
    close: "*",
    percentage_change: "*",
    volume: "*",
    date: "*",
  };

  const { marketData } = useApp();
  const [companyOne, setCompanyOne] = useState(initialCompanyData);
  const [companyTwo, setCompanyTwo] = useState(initialCompanyData);

  const handleCompanyOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const company = marketData.find(
      (stock) => stock.symbol === e.target.value.toUpperCase()
    );

    if (company) {
      setCompanyOne({
        ...companyOne,
        ...company,
      });
    } else {
      setCompanyOne(initialCompanyData);
    }
  };

  const handleCompanyTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const company = marketData.find(
      (stock) => stock.symbol === e.target.value.toUpperCase()
    );

    if (company) {
      setCompanyTwo({
        ...companyTwo,
        ...company,
      });
    } else {
      setCompanyTwo(initialCompanyData);
    }
  };

  return {
    companyOne,
    companyTwo,
    handleCompanyOneChange,
    handleCompanyTwoChange,
  };
};

export default useCompareCompanyPage;
