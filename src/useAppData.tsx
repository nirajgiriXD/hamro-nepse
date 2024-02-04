/**
 * External dependencies.
 */
import { useContext, useMemo } from "react";

/**
 * Internal dependencies.
 */
import { AppDataContext } from "./store/AppDataProvider";

const useApp = () => {
  const { logo, marketData, activeNavItem, setActiveNavItem } =
    useContext(AppDataContext);

  const marketDataDate = useMemo(() => {
    if (marketData.length > 0) {
      return marketData[0].date;
    }
    return "YYYY-MM-DD";
  }, [marketData]);

  const _marketData = useMemo(() => {
    return marketData.map((item) => {
      return {
        ...item,
        turnover: String(Number(item.volume) * Number(item.close)),
      };
    });
  }, [marketData]);

  return {
    logo,
    marketData: _marketData,
    marketDataDate,
    activeNavItem,
    setActiveNavItem,
  };
};

export default useApp;
