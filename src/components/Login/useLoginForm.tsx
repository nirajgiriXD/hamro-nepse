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

  const handleForgetPassword = (e: React.FormEvent) => {
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
    passwordRef,
    keepLoggedInRef,
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
