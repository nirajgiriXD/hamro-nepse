export const navSubMenuItems = [
  {
    label: "Market Watch",
    href: "/market-watch",
  },
  {
    label: "IPO Checker",
    href: "/ipo-checker",
  },
  {
    label: "IPO/FPO Updates",
    href: "/ipo-fpo-updates",
  },
  {
    label: "Trading Signals",
    href: "/trading-signals",
  },
  {
    label: "Portfolio Tracker",
    href: "/portfolio-tracker",
  },
  { label: "Chart", href: "/chart" },
  {
    label: "Company Analyzer",
    href: "/company-analyzer",
  },
  {
    label: "Compare Company",
    href: "/compare-company",
  },
  {
    label: "Share Calculator",
    href: "/share-calculator",
  },
];

export const navItems = [
  { label: "About", href: "/about", subMenuItems: [] },
  {
    label: "Contact",
    href: "/contact",
    subMenuItems: [],
  },
  {
    label: "Services",
    href: "/services",
    subMenuItems: navSubMenuItems,
  },
];

export const userProfileDropdownItems = [
  {
    label: "Dashboard",
    href: "/dashbaord",
  },
  {
    label: "Protfolio",
    href: "/portfolio",
  },
  {
    label: "Settings",
    href: "/setting",
  },
  {
    label: "Sign out",
    href: "/signout",
  },
];

/**
 * API Endpoints.
 */

export const LOG_IN_ENDPOINT =
  "https://sam.superintegratedapp.com/wp-json/api/user/login";

export const LOG_OUT_ENDPOINT =
  "https://sam.superintegratedapp.com/wp-json/api/user/logout";

export const CREATE_USER_ENDPOINT =
  "https://sam.superintegratedapp.com/wp-json/api/user/create";

export const RESET_PASSWORD_ENDPOINT =
  "https://sam.superintegratedapp.com/wp-json/api/user/reset-password";
