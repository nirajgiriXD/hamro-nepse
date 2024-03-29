/**
 * External dependencies.
 */
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

/**
 * Internal dependencies.
 */
import useLoginForm from "./useLoginForm";
import MessageBox from "../MessageBox";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    emailRef,
    passwordRef,
    keepLoggedInRef,
    toastNotification,
    navigationPath,
    minLength,
    maxEmailLength,
    maxPasswordLength,
    userData,
    handleOnSubmit,
  } = useLoginForm();

  useEffect(() => {
    if (navigationPath !== "") {
      navigate(navigationPath);
    }
  }, [navigate, navigationPath]);

  return userData.isLoggedIn ? (
    <MessageBox
      message={`User already logged in: ${userData.name}`}
      displayHomeBtn={true}
      displayLoginBtn={false}
    />
  ) : (
    <div className="grid mx-auto overflow-hidden rounded-md lg:grid-cols">
      <section className="shadow py-12">
        <div className="flex flex-col items-center justify-center py-6 mx-auto lg:h-full lg:py-0">
          <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {toastNotification}
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Log in to your account
              </h1>
              <form
                method="POST"
                className="space-y-4 md:space-y-6"
                onSubmit={handleOnSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    ref={emailRef}
                    maxLength={maxEmailLength}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    ref={passwordRef}
                    minLength={minLength}
                    maxLength={maxPasswordLength}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        ref={keepLoggedInRef}
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-white"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Dont have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-sky-600 hover:underline dark:text-white"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
