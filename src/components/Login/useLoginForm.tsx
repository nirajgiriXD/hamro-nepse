/**
 * External dependencies.
 */
import { ReactElement, useRef, useState } from "react";
import Alert from "@mui/material/Alert";

/**
 * Internal dependencies.
 */
import { LOG_IN_ENDPOINT } from "../../store/constant";
import extractTextFromHTML from "../../utilities/extractTextFromHTML";

const useLoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const keepLoggedInRef = useRef<HTMLInputElement>(null);

  const [navigationPath, setNavigationPath] = useState<string>("");
  const [toastNotification, setToastNotification] = useState<ReactElement>(
    <></>
  );

  const minLength = 8;
  const maxEmailLength = 50;
  const maxPasswordLength = 16;

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const keepLoggedIn = keepLoggedInRef.current?.checked ? "true" : "false";

    // Data to be sent
    const data = new FormData();
    data.append("action", "user_login");
    data.append("email", email);
    data.append("password", password);
    data.append("remember", keepLoggedIn);

    // Send the request
    fetch(LOG_IN_ENDPOINT, {
      method: "POST",
      body: data,
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

  return {
    emailRef,
    passwordRef,
    keepLoggedInRef,
    toastNotification,
    navigationPath,
    minLength,
    maxEmailLength,
    maxPasswordLength,
    handleOnSubmit,
  };
};

export default useLoginForm;
