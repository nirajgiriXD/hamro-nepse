interface FooterItemProp {
  footerItemDetails: {
    label: string;
    href: string;
    openInNewTab: boolean;
  };
}

const FooterItem = ({ footerItemDetails }: FooterItemProp) => {
  return (
    <a href={footerItemDetails.href} className="hover:underline me-4 md:me-6">
      {footerItemDetails.label}
    </a>
  );
};

export default FooterItem;
