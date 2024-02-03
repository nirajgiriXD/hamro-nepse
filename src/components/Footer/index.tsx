/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

/**
 * Internal dependencies.
 */
import { footerItems } from "../../constant";
import FooterItem from "./FooterItem";
import useAppData from "../../useAppData";

const Footer = () => {
  const { logo } = useAppData();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-screen-xl mx-auto">
      <div className="py-3 md:py-4 mt-3 md:mt-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12" alt="HamroNepse Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              HamroNepse
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-3 sm:mb-0 text-sm font-medium">
            {footerItems.map((footerItem, index) => {
              return (
                <li key={index}>
                  <FooterItem
                    href={footerItem.href}
                    label={footerItem.label}
                    openInNewTab={footerItem.openInNewTab}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <hr className="my-3 lg:my-4 sm:mx-auto border-gray-300 dark:border-gray-600" />

        <span className="block text-sm sm:text-center">
          © {currentYear} HamroNepse | All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
