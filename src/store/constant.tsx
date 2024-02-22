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
    icon: <div className="text-3xl text-center">👓</div>,
    description: "Overview of stock prices, indices, and market trends.",
  },
  {
    label: "IPO Checker",
    href: "/ipo-checker",
    icon: <div className="text-xl text-center">✔️</div>,
    description:
      "verify whether or not you were allotted the share and the number of shares being allotted.",
  },
  {
    label: "IPO/FPO Updates",
    href: "/ipo-fpo-updates",
    icon: <div className="text-xl text-center">📰</div>,
    description:
      "Timely updates on IPO and FPO to aid informed investment decisions.",
  },
  {
    label: "Trading Signals",
    href: "/trading-signals",
    icon: <div className="text-xl text-center">📊</div>,
    description:
      "Receive actionable trading signals to assist in making strategic buy or sell decisions.",
  },
  {
    label: "Watchlist",
    href: "/watchlist",
    icon: <div className="text-xl text-center">📋</div>,
    description:
      "Watch over your favourite stocks by making a separate watchlist.",
  },
  {
    label: "Portfolio Tracker",
    href: "/portfolio-tracker",
    icon: <div className="text-xl text-center">🔎</div>,
    description:
      "Effortlessly monitor and manage your investments with portfolio tracker.",
  },
  {
    label: "Chart",
    href: "/chart",
    icon: <div className="text-xl text-center">📈</div>,
    description:
      "Visualize stock performance through dynamic and interactive charts.",
  },
  {
    label: "Compare Company",
    href: "/compare-company",
    icon: <div className="text-xl text-center">⚖</div>,
    description:
      "Easily compare key financial metrics between different companies.",
  },
  {
    label: "Share Calculator",
    href: "/share-calculator",
    icon: <div className="text-4xl text-center">🖩</div>,
    description:
      "Get to know the actual figures when buying and selling shares.",
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
