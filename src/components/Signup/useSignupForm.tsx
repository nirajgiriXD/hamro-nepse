/**
 * External dependencies.
 */
import { ReactElement, useRef, useState } from "react";
import Alert from "@mui/material/Alert";

/**
 * Internal dependencies.
 */
import { ApiEndpoint } from "../../constant";

const useSignupForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [navigationPath, setNavigationPath] = useState<string>("");
  const [toastNotification, setToastNotification] = useState<ReactElement>(
    <></>
  );

  const minLength = 8;
  const maxNameLength = 50;
  const maxEmailLength = 50;
  const maxPasswordLength = 16;

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const confirmPassword = confirmPasswordRef.current?.value ?? "";

    if (password !== confirmPassword) {
      setToastNotification(
        <Alert
          variant="outlined"
          severity="error"
          icon={false}
          onClose={() => setToastNotification(<></>)}
        >
          Password and Confirm Password did not match.
        </Alert>
      );
      return;
    }

    // Data to be sent
    const data = new FormData();
    data.append("action", "create_new_user");
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("confirmPassword", confirmPassword);

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
    nameRef,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    toastNotification,
    navigationPath,
    minLength,
    maxNameLength,
    maxEmailLength,
    maxPasswordLength,
    handleOnSubmit,
  };
};

export default useSignupForm;
