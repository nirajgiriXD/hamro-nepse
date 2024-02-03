/**
 * External dependencies.
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Internal dependencies.
 */
import { navItems } from "../../constant";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import {
  LoginAndSignupItem,
  LoginAndSignupItemMobileView,
} from "./LoginAndSignup";
import useAppData from "../../useAppData";

const Navbar = () => {
  const { logo } = useAppData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto py-3 md:py-4">
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo, Title, and Menu */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 mr-2" />
          </Link>
          <Link to="/" className="font-semibold text-xl mr-5 md:mr-5">
            HamroNepse
          </Link>
        </div>

        <div className="flex items-center">
          {/* Desktop Menu (Home, Contacts, Features, Chart) */}
          <ul className="hidden relative lg:flex items-center lg:space-x-6 md:space-x-2">
            {navItems.map((navItem, index): React.ReactNode => {
              return (
                <li key={index} className="text-md font-medium">
                  <NavItem
                    label={navItem.label}
                    href={navItem.href}
                    hasSubMenu={navItem.hasSubMenu}
                    openInNewTab={navItem.openInNewTab}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Search Bar and Login Button*/}
        <div className="hidden lg:flex items-center align-middle space-x-4">
          {/* Search Bar */}
          <div className="relative h-10">
            <SearchBar />
          </div>

          {/* Login Button */}
          <LoginAndSignupItem href="/login" />
        </div>

        {/* Toggle for Mobile Menu  */}
        <div className="lg:hidden flex items-center">
          {/* Mobile Menu Toggle Icon */}
          <button className="focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu, Search Bar, and Login Button*/}
        <div
          className={`lg:hidden w-full mt-2 ${isMenuOpen ? "block" : "hidden"}`}
        >
          {/* Mobile Menu (Home, Contacts, Features, Chart) */}
          <hr className="my-3 sm:mx-auto border-gray-300 dark:border-gray-600" />

          <ul className="flex flex-col items-start space-y-2 ">
            {navItems.map(
              (navItem, index): React.ReactNode => (
                <li key={index}>
                  <Link to={navItem.href} className="hover:text-blue-500">
                    {navItem.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Search Bar */}
          <div className="relative w-full mt-3 h-12">
            <SearchBar />
          </div>

          {/* Login Button */}
          <LoginAndSignupItemMobileView href="/login" />
        </div>
      </div>

      <hr className="my-3 lg:my-4 sm:mx-auto border-gray-300 dark:border-gray-600" />
    </div>
  );
};

export default Navbar;
