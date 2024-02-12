/**
 * External dependencies.
 */
import { useState } from "react";

/**
 * Internal dependencies.
 */
import UserProfileMenu from "./UserProfileMenu";
import useAppData from "../../store/useAppData";

const UserProfile = () => {
  const { userData } = useAppData();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="relative flex justify-end items-end max-w-full lg:max-w-40">
        <div
          onClick={handleOnClick}
          className="flex items-center text-sm bg-gray-50 dark:bg-gray-800 rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 border border-gray-300 dark:border-gray-600 cursor-pointer pr-3 w-full lg:max-w-max"
        >
          {/* Screen Reader Only */}
          <span className="sr-only">Open user menu</span>
          <img
            className="w-10 h-10 rounded-full me-2"
            src={userData.img_url}
            alt="user profile photo"
          />
          <span className="me-3 truncate">{userData.name}</span>
          <span
            className={
              isDropdownOpen ? "rotate-180 transition duration-300" : ""
            }
          >
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </span>
        </div>

        {isDropdownOpen && <UserProfileMenu handleOnClick={handleOnClick} />}
      </div>
    </>
  );
};

export default UserProfile;
