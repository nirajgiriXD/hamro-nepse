/**
 * External dependencies.
 */
import { useContext, useMemo } from "react";

/**
 * Internal dependencies.
 */
import { AppDataContext } from "./AppDataProvider";

const useApp = () => {
  const {
    name,
    logo,
    userAvatar,
    userData,
    ipoData,
    marketData,
    stockProfileData,
    activeNavItem,
    setActiveNavItem,
    fetchUserData,
    prefersDarkMode,
  } = useContext(AppDataContext);

  const marketDataDate = useMemo(() => {
    if (marketData.length > 0) {
      return marketData[0].date;
    }
    return "YYYY-MM-DD";
  }, [marketData]);

  const _stockProfileData = useMemo(() => {
    return stockProfileData.map((item) => {
      return {
        label: `(${item.symbol}) ${item.name}`,
        value: item.symbol,
      };
    });
  }, [stockProfileData]);

  const _marketData = useMemo(() => {
    return marketData.map((item) => {
      const turnover = String(
        (Number(item.volume) * Number(item.close)).toFixed(2)
      );
      return {
        ...item,
        turnover: turnover,
      };
    });
  }, [marketData]);

  return {
    name,
    logo,
    userAvatar,
    userData,
    ipoData,
    marketData: _marketData,
    stockProfileData: _stockProfileData,
    marketDataDate,
    activeNavItem,
    setActiveNavItem,
    fetchUserData,
    prefersDarkMode,
  };
};

export default useApp;
