/**
 * External dependencies.
 */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import { useMediaQuery } from "@mui/material";

/**
 * Internal dependencies.
 */
import logo from "../assets/img/logo.png";

interface MarketDataProp {
  id: string;
  symbol: string;
  name: string;
  sector: string;
  open: string;
  high: string;
  low: string;
  close: string;
  percentage_change: string;
  volume: string;
  date: string;
}

interface StockProfileDataProp {
  id: string;
  symbol: string;
  name: string;
  sector: string;
}

interface UserDataProp {
  isLoggedIn: boolean;
  name: string;
  email: string;
  img_url: string;
}

interface AppDataContextProp {
  name: string;
  logo: string;
  userData: UserDataProp;
  stockProfileData: StockProfileDataProp[];
  marketData: MarketDataProp[];
  activeNavItem: string;
  setActiveNavItem: Dispatch<SetStateAction<string>>;
  fetchUserData: () => void;
  prefersDarkMode: boolean;
}

interface AppDataProviderProp {
  children: ReactNode;
}

export const AppDataContext = createContext({} as AppDataContextProp);

const AppDataProvider = ({ children }: AppDataProviderProp) => {
  const [marketData, setMarketData] = useState([] as MarketDataProp[]);
  const [stockProfileData, setStockProfileData] = useState(
    [] as StockProfileDataProp[]
  );
  const [activeNavItem, setActiveNavItem] = useState<string>("");
  const [userData, setUserData] = useState({} as UserDataProp);

  const name = "HamroNepse";

  const initialUserData = useMemo(() => {
    return { isLoggedIn: false, name: "", email: "", img_url: "" };
  }, []);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        main: prefersDarkMode ? "#111829" : "#1976d2",
      },
      text: {
        primary: prefersDarkMode ? "#fff" : "#111829",
      },
      background: {
        default: prefersDarkMode ? "#111829" : "#fff",
        paper: prefersDarkMode ? "#111829" : "#fff",
      },
    },
  });

  const fetchUserData = useCallback(() => {
    async () => {
      const url = "https://sam.superintegratedapp.com/wp-json/api/user/data";

      try {
        const response = await fetch(url, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        if (json.data.length !== 0) {
          const data = json.data;
          setUserData({
            ...data,
            isLoggedIn: true,
          });
        } else {
          setUserData(initialUserData);
        }
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.error("Error fetching data:", error.message);
        setUserData(initialUserData);
      }
    };
  }, [initialUserData]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const url =
        "https://sam.superintegratedapp.com/wp-json/api/stock-data/?selector=stock&selection=all";

      try {
        const response = await fetch(url, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        const data = json.stock_data;
        setMarketData(data);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.error("Error fetching data:", error.message);
        setMarketData([]);
      }
    };

    fetchMarketData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://sam.superintegratedapp.com/wp-json/api/stock-data/profile";

      try {
        const response = await fetch(url, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        const data = json.stock_profile_data;
        setStockProfileData(data);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const valueToProvide: AppDataContextProp = {
    name,
    logo,
    userData,
    stockProfileData,
    marketData,
    activeNavItem,
    setActiveNavItem,
    fetchUserData,
    prefersDarkMode,
  };

  return (
    <StrictMode>
      <Router basename="/hamro-nepse">
        <ThemeProvider theme={theme}>
          <AppDataContext.Provider value={valueToProvide}>
            {children}
          </AppDataContext.Provider>
        </ThemeProvider>
      </Router>
    </StrictMode>
  );
};

export default AppDataProvider;
