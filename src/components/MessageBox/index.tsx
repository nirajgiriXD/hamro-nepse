/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

interface MessageBoxProp {
  message: string;
  displayHomeBtn: boolean;
  displayLoginBtn: boolean;
}

const MessageBox = ({
  message,
  displayHomeBtn,
  displayLoginBtn,
}: MessageBoxProp) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-md shadow-md text-center">
      <p className="text-gray-800 dark:text-gray-400">{message}</p>
      <div className="w-full text-sm flex justify-center mt-4">
        <span>
          {displayHomeBtn && (
            <Link
              to="/"
              className="me-3 rounded text-white bg-sky-400 dark:bg-sky-600 p-2"
            >
              Home
            </Link>
          )}
          {displayLoginBtn && (
            <Link
              to="/login"
              className="me-3 rounded text-white bg-sky-400 dark:bg-sky-600 p-2"
            >
              Login
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default MessageBox;
