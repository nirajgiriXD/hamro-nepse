import React, { useState } from "react";
import logo from "../assets/images/logo.png"; //logo image
import SearchBar from "./SearchBar";
import { navLinks } from "./constant";
import Dropdown from "./Dropdown";
import DropdownIcon from "./DropdownIcon";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div className="container flex items-center justify-between flex-wrap">
      {/* Logo, Title, and Menu */}
      <div className="flex items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 mr-2" />
          <span className="text-black font-bold text-2xl mr-5 md:mr-5">
            NSA
          </span>
        </div>

        {/* Desktop Menu (Home, Contacts, Features, Chart) */}
        <ul className="hidden relative md:flex items-center lg:space-x-8 md:space-x-2">
          {navLinks.map(
            (link, index): React.ReactNode => (
              <li key={index}>
                {link.label === "Features" ? (
                  <>
                    <div
                      className="flex items-center p-3"
                      onMouseOut={handleMouseOut}
                    >
                      <a
                        href={link.href}
                        className="text-black hover:text-blue-500 flex items-center"
                      >
                        {link.label}
                        <DropdownIcon handleMouseOver={handleMouseOver} />
                      </a>
                      {isDropdownOpen && (
                        <Dropdown
                          handleDropdownMouseOver={handleDropdownMouseOver}
                          handleDropdownMouseOut={handleDropdownMouseOut}
                        />
                      )}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-black hover:text-blue-500"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Desktop Search Bar and Login Button*/}
      <div className="hidden md:flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <SearchBar />
        </div>

        {/* Login Button */}
        <button
          type="button"
          className="text-blue-700 border border-black-700 hover:bg-blue-100 hover:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-300 dark:hover:bg-blue-100"
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

          <span className="sr-only">Icon description</span>
        </button>
      </div>

      {/* Toggle for Mobile Menu  */}
      <div className="md:hidden flex items-center">
        {/* Mobile Menu Toggle Icon */}
        <button className="text-black focus:outline-none" onClick={toggleMenu}>
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
        className={`md:hidden w-full mt-2 ${isMenuOpen ? "block" : "hidden"}`}
      >
        {/* Mobile Menu (Home, Contacts, Features, Chart) */}
        <ul className="flex flex-col items-start space-y-2">
          {navLinks.map(
            (link, index): React.ReactNode => (
              <li key={index}>
                <a href={link.href} className="text-black hover:text-blue-500">
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Search Bar */}
        <div className="relative w-full mt-2">
          <SearchBar />
        </div>

        {/* Login Button */}
        <button className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Login / Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
