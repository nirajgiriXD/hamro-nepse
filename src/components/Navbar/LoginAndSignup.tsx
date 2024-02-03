/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

interface LoginandSignupItemProp {
  href: string;
}

export const LoginAndSignupItem = ({ href }: LoginandSignupItemProp) => {
  return (
    <Link to={href}>
      <button
        type="button"
        className="hover:ring-1 hover:outline-none hover:ring-sky-300 rounded-full dark:bg-white dark:focus:ring-blue-300 dark:hover:bg-blue-100 h-12 w-12 p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="dark" viewBox="0 0 32 32">
          <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
        </svg>
      </button>
    </Link>
  );
};

export const LoginAndSignupItemMobileView = ({
  href,
}: LoginandSignupItemProp) => {
  return (
    <Link to={href}>
      <button className="w-full mt-2 px-4 py-2 mb-4 text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:focus:ring-sky-800 font-medium rounded text-sm px-5 py-2.5 text-center">
        Login / Signup
      </button>
    </Link>
  );
};
