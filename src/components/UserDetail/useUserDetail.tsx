/**
 * External dependencies.
 */
import { ReactElement, useRef, useState } from "react";
import { Alert } from "@mui/material";

/**
 * Internal dependencies.
 */
import { UPDATE_USER_ENDPOINT } from "../../store/constant";
import useAppData from "../../store/useAppData";
import extractTextFromHTML from "../../utilities/extractTextFromHTML";

const useUserDetail = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [navigationPath, setNavigationPath] = useState<string>("");
  const [toastNotification, setToastNotification] = useState<ReactElement>(
    <></>
  );

  const { fetchUserData, userData } = useAppData();

  const minLength = 8;
  const maxNameLength = 50;
  const maxEmailLength = 50;
  const maxPasswordLength = 16;

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const newPassword = newPasswordRef.current?.value ?? "";
    const confirmPassword = confirmPasswordRef.current?.value ?? "";

    if (newPassword !== confirmPassword) {
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
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("new_password", newPassword);
    data.append("confirm_password", confirmPassword);

    // Send the request
    fetch(UPDATE_USER_ENDPOINT, {
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

  return {
    userData,
    nameRef,
    emailRef,
    passwordRef,
    newPasswordRef,
    confirmPasswordRef,
    navigationPath,
    toastNotification,
    minLength,
    maxNameLength,
    maxEmailLength,
    maxPasswordLength,
    handleOnSubmit,
  };
};

export default useUserDetail;
