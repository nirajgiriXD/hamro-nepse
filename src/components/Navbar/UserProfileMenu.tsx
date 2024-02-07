/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

interface UserProfileItem {
  label: string;
  href: string;
}

interface UserProfileDropdownProps {
  handleDropdownMouseOver: () => void;
  handleDropdownMouseOut: () => void;
  userprofileitems: UserProfileItem[];
}

const UserProfileMenu = ({
  handleDropdownMouseOver,
  handleDropdownMouseOut,
  userprofileitems,
}: UserProfileDropdownProps) => {
  return (
    <>
      <div
        onMouseOut={handleDropdownMouseOut}
        onMouseOver={handleDropdownMouseOver}
        className=" absolute w-52 bg-white dark:bg-gray-900 rounded top-14 p-1 drop-shadow-xl z-10 border border-gray-300 dark:border-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>

        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownUserAvatarButton"
        >
          {userprofileitems.map((userprofileitem, index) => (
            <li key={index} className="text-md font-medium">
              {userprofileitem.href === "/signout" ? (
                <div className="py-4">
                  <Link
                    to={userprofileitem.href}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {userprofileitem.label}
                  </Link>
                </div>
              ) : (
                <Link
                  to={userprofileitem.href}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
