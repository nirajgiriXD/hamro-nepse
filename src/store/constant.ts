/**
 * API Endpoints.
 */

export {
  LOG_IN_ENDPOINT,
  LOG_OUT_ENDPOINT,
  CREATE_USER_ENDPOINT,
  UPDATE_USER_ENDPOINT,
  RESET_PASSWORD_ENDPOINT,
  ADD_STOCK_PORTFOLIO_ENDPOINT,
  UPDATE_STOCK_PORTFOLIO_ENDPOINT,
  GET_STOCK_PORTFOLIO_ENDPOINT,
  REMOVE_STOCK_PORTFOLIO_ENDPOINT,
} from "./apiEndpoints";

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
    label: "Privacy Policy",
    href: "/privacy-policy",
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
