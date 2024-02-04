/**
 * External dependencies.
 */
import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Internal dependencies.
 */
import SubMenu from "./SubMenu";

interface NavItemProp {
  label: string;
  href: string;
  hasSubMenu: boolean;
  activeNavItem: string;
  setActiveNavItem: Dispatch<SetStateAction<string>>;
}

const NavItem = ({
  label,
  href,
  hasSubMenu,
  activeNavItem,
  setActiveNavItem,
}: NavItemProp) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseOut = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="flex items-center p-3"
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <Link
        to={href}
        className="hover:text-sky-600 flex items-center"
        onClick={() => setActiveNavItem(label)}
      >
        <span className={activeNavItem === label ? "text-blue-600" : ""}>
          {label}
        </span>
        {hasSubMenu && (
          <div
            className={`cursor-pointer inline-block ${
              activeNavItem === label ? "text-blue-600" : ""
            }`}
          >
            <svg
              className="fill-current h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        )}
      </Link>

      {hasSubMenu && isDropdownOpen && (
        <SubMenu
          handleDropdownMouseOver={handleMouseOver}
          handleDropdownMouseOut={handleMouseOut}
        />
      )}
    </div>
  );
};

export default NavItem;
