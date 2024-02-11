/**
 * External dependencies.
 */
import { useNavigate } from "react-router-dom";

/**
 * Internal Dependencies.
 */
import { useEffect } from "react";
import useAppData from "../../store/useAppData";
import PortfolioTrackerTable from "../../components/PortfolioTracker/Porfolio";

const PortfolioTrackerPage = () => {
  const { userData } = useAppData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.isLoggedIn) {
      navigate("/login");
    }
  }, [navigate, userData]);

  return userData.isLoggedIn ? <PortfolioTrackerTable /> : <></>;
};

export default PortfolioTrackerPage;
