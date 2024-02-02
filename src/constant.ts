export const App = {
  name: "HamroShare",
};

export const navItems = [
  { label: "About", href: "/about", openInNewTab: false, hasSubMenu: false },
  {
    label: "Contact",
    href: "/contact",
    openInNewTab: false,
    hasSubMenu: false,
  },
  {
    label: "Services",
    href: "/services",
    openInNewTab: false,
    hasSubMenu: true,
  },
];

export const footerItems = [
  { label: "About", href: "/about", openInNewTab: false },
  { label: "Contact", href: "/contact", openInNewTab: false },
  { label: "Services", href: "/services", openInNewTab: false },
  { label: "Privacy Policy", href: "/privacy-policy", openInNewTab: false },
];

export const subMenuItems = [
  {
    label: "Market Watch",
    href: "/market-watch",
    openInNewTab: false,
    hasSubMenu: false,
  },
  {
    label: "IPO Checker",
    href: "/ipo-checker",
    openInNewTab: false,
    hasSubMenu: false,
  },
  {
    label: "IPO/FPO Updates",
    href: "/ipo-fpo-updates",
    openInNewTab: false,
    hasSubMenu: false,
  },
  {
    label: "Trading Signals",
    href: "/trading-signals",
    openInNewTab: false,
    hasSubMenu: false,
  },
  {
    label: "Portfolio Tracker",
    href: "/portfolio-tracker",
    openInNewTab: false,
    hasSubMenu: false,
  },
  { label: "Chart", href: "/chart", openInNewTab: false, hasSubMenu: false },
  {
    label: "Company Analyzer",
    href: "/company-analyzer",
    openInNewTab: false,
    hasSubMenu: false,
  },
  {
    label: "Compare Company",
    href: "/compare-company",
    openInNewTab: false,
    hasSubMenu: false,
  },
  {
    label: "Share Calculator",
    href: "/share-calculator",
    openInNewTab: false,
    hasSubMenu: false,
  },
];

export const LOG_IN_ENDPOINT =
  "https://sam.superintegratedapp.com/wp-json/api/user/login";

export const LOG_OUT_ENDPOINT =
  "https://sam.superintegratedapp.com/wp-json/api/user/logout";

export const CREATE_USER_ENDPOINT =
  "https://sam.superintegratedapp.com/wp-json/api/user/create";

export const RESET_PASSWORD_ENDPOINT =
  "https://sam.superintegratedapp.com/wp-json/api/user/reset-password";
