/**
 * External dependencies.
 */
import { ReactElement, useRef, useState } from "react";
import Alert from "@mui/material/Alert";

/**
 * Internal dependencies.
 */
import { RESET_PASSWORD_ENDPOINT } from "../../constant";

const useForgotPasswordForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const [navigationPath, setNavigationPath] = useState<string>("");
  const [toastNotification, setToastNotification] = useState<ReactElement>(
    <></>
  );

  const maxEmailLength = 50;

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value ?? "";

    if (email === "") {
      setToastNotification(
        <Alert
          variant="outlined"
          severity="info"
          icon={false}
          onClose={() => setToastNotification(<></>)}
        >
          Enter email for password recovery.
        </Alert>
      );
      return;
    }

    if (email.length > maxEmailLength) {
      setToastNotification(
        <Alert
          variant="outlined"
          severity="error"
          icon={false}
          onClose={() => setToastNotification(<></>)}
        >
          Email is too long.
        </Alert>
      );
      return;
    }

    // Data to be sent
    const data = new FormData();
    data.append("action", "send_password_reset_email");
    data.append("email", email);

    // Send the request
    fetch(RESET_PASSWORD_ENDPOINT, {
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
            {data.responseMessage}
          </Alert>
        );

        if (data.isEverythingOk) {
          setTimeout(() => {
            setNavigationPath("/login");
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
            {error.message}
          </Alert>
        );
      });
  };

  return {
    emailRef,
    toastNotification,
    navigationPath,
    maxEmailLength,
    handleOnSubmit,
  };
};

export default useForgotPasswordForm;
