/**
 * External dependencies.
 */
import { ReactElement, useRef, useState } from "react";
import Alert from "@mui/material/Alert";

/**
 * Internal dependencies.
 */
import { ApiEndpoint } from "../../constant";

const useLoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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

    // Data to be sent
    const data = new FormData();
    data.append("action", "user_login");
    data.append("email", email);
    data.append("password", password);

    // Send the request
    fetch(ApiEndpoint, {
      method: "POST",
      body: data,
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
            {error.message}
          </Alert>
        );
      });
  };

  const handleForgetPassword = () => {
    setToastNotification(
      <Alert
        variant="outlined"
        severity="info"
        icon={false}
        onClose={() => setToastNotification(<></>)}
      >
        Please try to remember the password.
      </Alert>
    );
  };

  return {
    emailRef,
    passwordRef,
    toastNotification,
    navigationPath,
    minLength,
    maxEmailLength,
    maxPasswordLength,
    handleOnSubmit,
    handleForgetPassword,
  };
};

export default useLoginForm;
