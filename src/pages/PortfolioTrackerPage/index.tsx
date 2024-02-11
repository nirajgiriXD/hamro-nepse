/**
 * Internal Dependencies.
 */
import { PortfolioTracker, MessageBox } from "../../components";
import useAppData from "../../store/useAppData";

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
