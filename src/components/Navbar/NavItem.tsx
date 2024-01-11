/**
 * External dependencies.
 */
import { useState } from "react";

/**
 * Internal dependencies.
 */
import SubMenu from "./SubMenu";

interface NavItemProp {
  navItemDetails: {
    label: string;
    href: string;
    openInNewTab: boolean;
    hasSubMenu: boolean;
  };
}

const NavItem = ({ navItemDetails }: NavItemProp) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseOut = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownMouseOver = () => {
    // Keep the dropdown open when the mouse is inside the dropdown
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseOut = () => {
    // Close the dropdown when the mouse leaves the dropdown
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="flex items-center p-3"
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <a
        href={navItemDetails.href}
        className="text-black hover:text-blue-500 flex items-center"
      >
        <span>{navItemDetails.label}</span>
        {navItemDetails.hasSubMenu && (
          <div className="cursor-pointer inline-block">
            <svg
              className="fill-current h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        )}
      </a>

      {navItemDetails.hasSubMenu && isDropdownOpen && (
        <SubMenu
          handleDropdownMouseOver={handleDropdownMouseOver}
          handleDropdownMouseOut={handleDropdownMouseOut}
        />
      )}
    </div>
  );
};

export default NavItem;
