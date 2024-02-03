export const App = {
  name: "HamroShare",
};

export const navItems = [
  { label: "About", href: "/about", openInNewTab: false, hasSubMenu: false },
  {
    label: "Contact",
    href: "/contact",
    hasSubMenu: false,
  },
  {
    label: "Services",
    href: "/services",
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
    hasSubMenu: false,
  },
  {
    label: "IPO Checker",
    href: "/ipo-checker",
    hasSubMenu: false,
  },
  {
    label: "IPO/FPO Updates",
    href: "/ipo-fpo-updates",
    hasSubMenu: false,
  },
  {
    label: "Trading Signals",
    href: "/trading-signals",
    hasSubMenu: false,
  },
  {
    label: "Portfolio Tracker",
    href: "/portfolio-tracker",
    hasSubMenu: false,
  },
  { label: "Chart", href: "/chart", openInNewTab: false, hasSubMenu: false },
  {
    label: "Company Analyzer",
    href: "/company-analyzer",
    hasSubMenu: false,
  },
  {
    label: "Compare Company",
    href: "/compare-company",
    hasSubMenu: false,
  },
  {
    label: "Share Calculator",
    href: "/share-calculator",
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
