/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

/**
 * Internal dependencies.
 */
import useAppData from "../../store/useAppData";
import { LoginandSignupItemProp } from "./types";

export const LoginAndSignupItem = ({ href }: LoginandSignupItemProp) => {
  const { userAvatar } = useAppData();
  return (
    <Link to={href}>
      <div className="rounded-full border border-gray-300 dark:border-gray-600">
        <img
          className="w-10 h-10 rounded-full"
          src={userAvatar}
          alt="user profile photo"
        />
      </div>
    </Link>
  );
};

export const LoginAndSignupItemMobileView = ({
  href,
}: LoginandSignupItemProp) => {
  return (
    <Link to={href}>
      <button className="w-full mt-2 mb-4 text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:focus:ring-sky-800 font-medium rounded text-sm px-5 py-2.5 text-center">
        Login / Signup
      </button>
    </Link>
  );
};
