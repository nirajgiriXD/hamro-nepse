/**
 * Navmenu and Submenu Items
 */
const servicesSubMenuItems = [
  {
    label: "Market Watch",
    href: "/market-watch",
    icon: <div className="text-3xl text-center">👓</div>,
    description: "Overview of stock prices, indices, and market trends.",
  },
  {
    label: "Portfolio Tracker",
    href: "/portfolio-tracker",
    icon: <div className="text-xl text-center">🔎</div>,
    description:
      "Effortlessly monitor and manage your investments with portfolio tracker.",
  },
  {
    label: "Watchlist",
    href: "/watchlist",
    icon: <div className="text-xl text-center">📋</div>,
    description:
      "Watch over your favourite stocks by making a separate watchlist.",
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
  {
    label: "Chart",
    href: "/chart",
    icon: <div className="text-xl text-center">📈</div>,
    description:
      "Visualize stock performance through dynamic and interactive charts.",
  },
  {
    label: "IPO Checker",
    href: "/ipo-checker",
    icon: <div className="text-xl text-center">✔️</div>,
    description:
      "Verify whether or not you were allotted the share and the number of shares being allotted.",
  },
  {
    label: "Investing Calendar",
    href: "/investing-calendar",
    icon: <div className="text-xl text-center">📰</div>,
    description:
      "Timely updates on investment related information to aid informed investment decisions.",
  },
  {
    label: "Trading Signals",
    href: "/trading-signals",
    icon: <div className="text-xl text-center">📊</div>,
    description:
      "Receive actionable trading signals to assist in making strategic buy or sell decisions.",
  },
];

const navItems = [
  { label: "About", href: "/about", subMenuItems: [] },
  {
    label: "Contact",
    href: "/contact",
    subMenuItems: [],
  },
  {
    label: "Services",
    href: "/services",
    subMenuItems: servicesSubMenuItems,
  },
];

export default navItems;
