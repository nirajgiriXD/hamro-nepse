/**
 * External dependencies.
 */
import { useNavigate } from "react-router-dom";

/**
 * Internal Dependencies.
 */
import { useEffect } from "react";
import { PortfolioTracker } from "../../components";
import useAppData from "../../store/useAppData";

const PortfolioTrackerPage = () => {
  const { userData } = useAppData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.isLoggedIn) {
      navigate("/login");
    }
  }, [navigate, userData]);

  return userData.isLoggedIn ? <PortfolioTracker /> : <></>;
};

export default PortfolioTrackerPage;
