/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

/**
 * Internal dependencies.
 */
import { footerItems } from "../../constant";
import FooterItem from "./FooterItem";

interface FooterProp {
  logo: string;
}

const Footer = ({ logo }: FooterProp) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-screen-xxl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          to="/"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-12" alt="HamroNepse Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            HamroNepse
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 sm:mb-0 text-sm font-medium">
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

      <hr className="my-6 lg:my-8 sm:mx-auto border-gray-300 dark:border-gray-600" />

      <span className="block text-sm sm:text-center">
        © {currentYear} HamroNepse | All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
