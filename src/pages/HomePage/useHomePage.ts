/**
 * External Dependencies.
 */
import { useState } from "react";

/**
 * Internal Dependencies.
 */
import { topTurnover, topGainer, topLoser, columns } from "./TableData";

const useHomePage = () => {
  const [data, setData] = useState(topTurnover);

  const onTopTurnoverClick = () => {
    setData(topTurnover);
  };

  const onTopGainerClick = () => {
    setData(topGainer);
  };

  const onTopLoserClick = () => {
    setData(topLoser);
  };

  return {
    data,
    columns,
    onTopTurnoverClick,
    onTopGainerClick,
    onTopLoserClick,
  };
};

export default useHomePage;
