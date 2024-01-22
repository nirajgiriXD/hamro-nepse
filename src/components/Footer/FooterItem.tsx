/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

interface FooterItemProp {
  label: string;
  href: string;
  openInNewTab: boolean;
}

const FooterItem = ({ label, href, openInNewTab }: FooterItemProp) => {
  return (
    <Link
      to={href}
      className="hover:underline me-4 md:me-6"
      target={openInNewTab ? "_blank" : ""}
    >
      {label}
    </Link>
  );
};

export default FooterItem;
