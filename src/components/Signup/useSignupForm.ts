/**
 * External dependencies.
 */
import { useRef } from "react";

const useSignupForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const termsAndConditionRef = useRef<HTMLInputElement>(null);

  const isLoadingRef = useRef<boolean>(false);
  const responseRef = useRef<Record<string, string | string[] | boolean>>({});

  const handleOnSubmit = () => {
    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const confirmPassword = confirmPasswordRef.current?.value ?? "";
    const termsAndCondition = termsAndConditionRef.current?.checked ?? false;

    const maxNameLength = 50;
    const maxEmailLength = 50;
    const maxPasswordLength = 16;

    const errorMessages: string[] = [];

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      termsAndCondition === false
    ) {
      errorMessages.push("All the fields must be filled.");
    }

    if (password !== confirmPassword) {
      errorMessages.push("Password and confirm password did not match.");
    }

    if (name.length > maxNameLength) {
      errorMessages.push("Name is too long.");
    }

    if (email.length > maxEmailLength) {
      errorMessages.push("Email is too long.");
    }

    if (password.length > maxPasswordLength) {
      errorMessages.push("Password is too long.");
    }

    // If everything seems ok, send the request to backend.
    if (errorMessages.length === 0) {
      isLoadingRef.current = true;
      const apiEndpoint = "";
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      };

      fetch(apiEndpoint, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          responseRef.current = {
            isEverythingOk: data.isEverythingOk,
            responseMessages: data.responseMessage,
          };
          isLoadingRef.current = false;
        })
        .catch((error) => {
          responseRef.current = {
            isEverythingOk: false,
            responseMessages: error,
          };
          isLoadingRef.current = false;
        });
    } else {
      responseRef.current = {
        isEverythingOk: false,
        responseMessages: errorMessages,
      };
      isLoadingRef.current = false;
    }
  };

  return {
    nameRef,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    termsAndConditionRef,
    isLoadingRef,
    responseRef,
    handleOnSubmit,
  };
};

export default useSignupForm;
