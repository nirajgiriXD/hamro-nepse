interface FooterItemProp {
  label: string;
  href: string;
  openInNewTab: boolean;
}

const FooterItem = ({ label, href, openInNewTab }: FooterItemProp) => {
  return (
    <a
      href={href}
      className="hover:underline me-4 md:me-6"
      target={openInNewTab ? "_blank" : ""}
    >
      {label}
    </a>
  );
};

export default FooterItem;
