/**
 * External dependencies.
 */
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface FooterItemProp {
  label: string;
  href: string;
  setActiveNavItem: Dispatch<SetStateAction<string>>;
}

const FooterItem = ({ label, href, setActiveNavItem }: FooterItemProp) => {
  return (
    <Link
      to={href}
      className="hover:underline me-4 md:me-6"
      onClick={() => setActiveNavItem(label)}
    >
      {label}
    </Link>
  );
};

export default FooterItem;
