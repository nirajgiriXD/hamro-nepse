/**
 * Internal dependencies.
 */
import UserProfileMenu from "./UserProfileMenu";
import { userProfileDropdownItems } from "../../store/constant";

/**
 * External dependencies.
 */
import { useState } from "react";

const UserProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseOut = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="flex justify-end items-end">
        <button
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
          className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
          type="button"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-10 h-10 rounded-full"
            src="sample.png"
            alt="user photo"
          />
        </button>

        {isDropdownOpen && (
          <UserProfileMenu
            handleDropdownMouseOut={handleMouseOut}
            handleDropdownMouseOver={handleMouseOver}
            userprofileitems={userProfileDropdownItems}
          />
        )}
      </div>
    </>
  );
};

export default UserProfile;
