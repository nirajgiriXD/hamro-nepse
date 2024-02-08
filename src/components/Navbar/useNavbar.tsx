/**
 * External dependencies.
 */
import { ReactElement, useState } from "react";
import Alert from "@mui/material/Alert";

/**
 * Internal dependencies.
 */
import { LOG_OUT_ENDPOINT } from "../../store/constant";
import useAppData from "../../store/useAppData";
import extractTextFromHTML from "../../utilities/extractTextFromHTML";

const useNavbar = () => {
  const [navigationPath, setNavigationPath] = useState<string>("");
  const [toastNotification, setToastNotification] = useState<ReactElement>(
    <></>
  );

  const { fetchUserData } = useAppData();

  const signOutUser = () => {
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
            setNavigationPath("/");
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

  return { signOutUser, toastNotification, navigationPath };
};

export default useNavbar;
