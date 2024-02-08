/**
 * External dependencies.
 */
import { ReactElement, useState } from "react";
import Alert from "@mui/material/Alert";

/**
 * Internal dependencies.
 */
import useAppData from "../../store/useAppData";

const useNavbar = () => {
  const [navigationPath, setNavigationPath] = useState<string>("");
  const [toastNotification, setToastNotification] = useState<ReactElement>(
    <></>
  );

  const { fetchUserData } = useAppData();

  const signOutUser = () => {
    // Get all cookies
    const allCookies = document.cookie.split(";");

    for (let i = 0; i < allCookies.length; i++) {
      const cookie = allCookies[i].trim();

      // Check if the cookie name starts with 'wordpress_logged_in_' or 'wordpress_sec_'
      if (
        cookie.startsWith("wordpress_logged_in_") ||
        cookie.startsWith("wordpress_sec_")
      ) {
        // Get the cookie name
        const cookieName = cookie.split("=")[0];

        // Set the cookie's expiry date to the past
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    }

    setToastNotification(
      <Alert
        variant="outlined"
        severity="success"
        icon={false}
        onClose={() => setToastNotification(<></>)}
      >
        Logged Out
      </Alert>
    );

    fetchUserData();
    setTimeout(() => {
      setNavigationPath("/");
    }, 1000);
  };

  return { signOutUser, toastNotification, navigationPath };
};

export default useNavbar;
