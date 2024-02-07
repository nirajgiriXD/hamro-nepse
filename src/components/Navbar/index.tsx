/**
 * External dependencies.
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Internal dependencies.
 */
import { navItems } from "../../store/constant";
import Search from "./Search";
import NavItem from "./NavItem";
import {
  LoginAndSignupItem,
  LoginAndSignupItemMobileView,
} from "./LoginAndSignup";
import useAppData from "../../store/useAppData";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const { name, logo, userData, activeNavItem, setActiveNavItem } =
    useAppData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = userData.isLoggedIn;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto py-3 md:py-4">
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo, Title, and Menu */}
        <Link
          to="/"
          onClick={() => setActiveNavItem("")}
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-12" alt="HamroNepse Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            {name}
          </span>
        </Link>

        <div className="flex items-center">
          {/* Desktop Menu (Home, Contacts, Features, Chart) */}
          <ul className="hidden relative lg:flex items-center lg:space-x-6 md:space-x-2">
            {navItems.map((navItem, index): React.ReactNode => {
              return (
                <li key={index} className="text-md font-medium">
                  <NavItem
                    label={navItem.label}
                    href={navItem.href}
                    subMenuItems={navItem.subMenuItems}
                    activeNavItem={activeNavItem}
                    setActiveNavItem={setActiveNavItem}
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
            <Search />
          </div>

          {/* Login Button */}
          {isLoggedIn ? <UserProfile /> : <LoginAndSignupItem href="/login" />}
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
            <Search />
          </div>

          {/* Login Button */}
          {isLoggedIn ? (
            <UserProfile />
          ) : (
            <LoginAndSignupItemMobileView href="/login" />
          )}
        </div>
      </div>

      <hr className="mt-3 lg:my-4 sm:mx-auto border-gray-300 dark:border-gray-600" />
    </div>
  );
};

export default Navbar;
