/**
 * External dependencies.
 */
import { ReactElement, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

/**
 * Internal dependencies.
 */
import useAppData from "../../store/useAppData";
import { LOG_OUT_ENDPOINT } from "../../store/constant";
import extractTextFromHTML from "../../utilities/extractTextFromHTML";

const useNavbar = () => {
  const navigate = useNavigate();
  const [toastNotification, setToastNotification] = useState<ReactElement>(
    <></>
  );

  const { fetchUserData } = useAppData();

  const signOutUser = useCallback(() => {
    const sendSignOutRequest = async () => {
      fetch(LOG_OUT_ENDPOINT, {
        method: "POST",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          setToastNotification(
            <Alert
              variant="outlined"
              severity={data.isEverythingOk ? "success" : "error"}
              icon={false}
              onClose={() => setToastNotification(<></>)}
            >
              {extractTextFromHTML(data.responseMessage)}
            </Alert>
          );

          if (data.isEverythingOk) {
            fetchUserData();
            setTimeout(() => {
              // Refresh
              navigate(0);
            }, 1000);
          }
        })
        .catch((error) => {
          setToastNotification(
            <Alert
              variant="outlined"
              severity="error"
              icon={false}
              onClose={() => setToastNotification(<></>)}
            >
              {extractTextFromHTML(error.message)}
            </Alert>
          );
        });
    };

    sendSignOutRequest();
  }, [fetchUserData, navigate]);

  return { signOutUser, toastNotification };
};

export default useNavbar;
