/**
 * External dependencies.
 */
import { useCallback } from "react";

/**
 * Internal dependencies.
 */
import useAppData from "../../store/useAppData";
import { LOG_OUT_ENDPOINT } from "../../store/constant";

const useNavbar = () => {
  const { fetchUserData } = useAppData();

  const signOutUser = useCallback(() => {
    fetch(LOG_OUT_ENDPOINT, {
      method: "POST",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.isEverythingOk) {
          fetchUserData();
        }
      })
      .catch((error) => {
        console.error("Logout failed:", error.message);
      });
  }, [fetchUserData]);

  return { signOutUser };
};

export default useNavbar;
