/**
 * Internal Dependencies.
 */
import { PortfolioTracker, MessageBox } from "../../components";
import useAppData from "../../store/useAppData";
import PortfolioTrackerTable from "../../components/PortfolioTracker/Porfolio";

const PortfolioTrackerPage = () => {
  const { userData } = useAppData();

  return userData.isLoggedIn ? (
    <PortfolioTracker />
  ) : (
    <MessageBox
      message="Please login to use this service."
      displayHomeBtn={true}
      displayLoginBtn={true}
    />
  );
};

export default PortfolioTrackerPage;
