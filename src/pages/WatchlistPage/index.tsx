/**
 * Internal Dependencies.
 */
import { WatchlistTable, MessageBox } from "../../components";
import useAppData from "../../store/useAppData";

const WatchlistPage = () => {
  const { userData } = useAppData();

  return userData.isLoggedIn ? (
    <WatchlistTable />
  ) : (
    <MessageBox
      message="Please login to use this service."
      displayHomeBtn={true}
      displayLoginBtn={true}
    />
  );
};

export default WatchlistPage;
