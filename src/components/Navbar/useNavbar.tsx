/**
 * External dependencies.
 */
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Internal dependencies.
 */
import useAppData from "../../store/useAppData";
import { LOG_OUT_ENDPOINT } from "../../store/constant";

const useNavbar = () => {
  const navigate = useNavigate();
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
          setTimeout(() => {
            // Refresh
            navigate(0);
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Logout failed:", error.message);
        setTimeout(() => {
          // Refresh
          navigate("/");
        }, 1000);
      })
      .finally(() => {
        document.cookie = "";
      });
  }, [fetchUserData, navigate]);

  return { signOutUser };
};

export default useNavbar;
