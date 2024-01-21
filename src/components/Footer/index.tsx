import { footerItems } from "../../constant";
import FooterItem from "./FooterItem";

interface FooterProp {
  logo: string;
}
const Footer = ({ logo }: FooterProp) => {
  return (
    <footer className="rounded-lg shadow">
      <div className="w-full max-w-screen-xxl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12" alt="HamroNepse Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              HamroNepse
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {footerItems.map((footerItem, index) => {
              return (
                <li key={index}>
                  <FooterItem footerItemDetails={footerItem} />
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 lg:my-8 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 HamroNepse | All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
