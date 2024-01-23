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

interface NavbarProp {
  logo: string;
}

const Navbar = ({ logo }: NavbarProp) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pt-6 lg:pt-8">
      <div className="flex items-center justify-between flex-wrap dark:border-gray-600">
        {/* Logo, Title, and Menu */}
        <div className="flex items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12 mr-2" />
            </Link>
            <Link to="/" className="font-semibold text-2xl mr-5 md:mr-5">
              HamroNepse
            </Link>
          </div>

          {/* Desktop Menu (Home, Contacts, Features, Chart) */}
          <ul className="hidden relative lg:flex items-center lg:space-x-6 md:space-x-2">
            {navItems.map((navItem, index): React.ReactNode => {
              return (
                <li key={index}>
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
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative h-12">
            <SearchBar />
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-white dark:focus:ring-blue-300 dark:hover:bg-blue-100 h-12 w-12"
          >
            <svg
              className="w-9 h-9"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="dark"
              viewBox="0 0 32 32"
            >
              <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
            </svg>
          </button>
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
          <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700" />

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
          <button className="w-full mt-2 px-4 py-2 mb-4 text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Login / Signup
          </button>
        </div>
      </div>
      <hr className="my-6 lg:my-8 border-gray-200 sm:mx-auto dark:border-gray-700" />
    </div>
  );
};

export default Navbar;
