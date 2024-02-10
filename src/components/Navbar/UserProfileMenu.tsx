/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

/**
 * Internal dependencies.
 */
import { userProfileDropdownItems } from "../../store/constant";
import useAppData from "../../store/useAppData";
import useNavbar from "./useNavbar";

interface UserProfileDropdownProps {
  handleOnClick: () => void;
}

const UserProfileMenu = ({ handleOnClick }: UserProfileDropdownProps) => {
  const { userData } = useAppData();
  const { signOutUser } = useNavbar();

  const handleSignOutClick = () => {
    signOutUser();
    handleOnClick();
  };

  return (
    <>
      <div
        onClick={handleOnClick}
        className="absolute p-3 min-w-40 bg-white dark:bg-gray-900 rounded-lg top-16 drop-shadow-xl z-10 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white text-sm text-left"
      >
        <div className="text-gray-900 dark:text-white">{userData.email}</div>

        <hr className="mt-2 pt-2 sm:mx-auto border-gray-300 dark:border-gray-600" />

        <ul aria-labelledby="dropdownUserAvatarButton">
          {userProfileDropdownItems.map((userprofileitem, index) => (
            <li key={index} className="text-md font-medium me-1">
              {userprofileitem.label === "Sign out" ? (
                <button
                  className="block hover:text-sky-500"
                  onClick={handleSignOutClick}
                >
                  {userprofileitem.label}
                </button>
              ) : (
                <Link
                  to={userprofileitem.href}
                  onClick={handleOnClick}
                  className="block hover:text-sky-500"
                >
                  {userprofileitem.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserProfileMenu;
