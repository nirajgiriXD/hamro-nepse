/**
 * External dependencies.
 */
import {
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
import userAvatar from "../assets/img/user_avatar.png";
import {
  FETCH_USER_ENDPOINT,
  FETCH_MARKET_DATA_ENDPOINT,
  FETCH_STOCK_PROFILE_ENDPOINT,
  FETCH_IPO_DATA_ENDPOINT,
} from "./constant";
import type {
  AppDataContextProp,
  IpoDataProp,
  MarketDataProp,
  AppDataProviderProp,
  StockProfileDataProp,
  UserDataProp,
} from "./types";

export const AppDataContext = createContext({} as AppDataContextProp);

const AppDataProvider = ({ children }: AppDataProviderProp) => {
  const [marketData, setMarketData] = useState([] as MarketDataProp[]);
  const [ipoData, setIpoData] = useState([] as IpoDataProp[]);
  const [stockProfileData, setStockProfileData] = useState(
    [] as StockProfileDataProp[]
  );
  const [activeNavItem, setActiveNavItem] = useState<string>("");
  const [userData, setUserData] = useState({} as UserDataProp);

  const name = "HamroNepse";

  const initialUserData = useMemo(() => {
    return {
      isLoggedIn: false,
      name: "",
      email: "",
      img_url: "",
    };
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
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: prefersDarkMode ? "#0369a1" : "#38bdf8",
            color: "#fff",
            ":hover": {
              background: prefersDarkMode ? "#0369a1" : "#38bdf8",
            },
          },
        },
      },
    },
  });

  const fetchUserData = useCallback(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(FETCH_USER_ENDPOINT, {
          method: "POST",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        const data =
          json.data.length !== 0
            ? { ...json.data, isLoggedIn: true }
            : initialUserData;
        setUserData(data);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.log("Error fetching data:", error.message);
        setUserData(initialUserData);
      }
    };

    fetchData();
  }, [initialUserData]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(FETCH_MARKET_DATA_ENDPOINT, {
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
      try {
        const response = await fetch(FETCH_STOCK_PROFILE_ENDPOINT, {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(FETCH_IPO_DATA_ENDPOINT, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();

        if (json.isEverythingOk) {
          const data = json.data.ipo_data;
          setIpoData(data);
        } else {
          console.error("Error fetching data:", json.response_message);
        }
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
    userAvatar,
    userData,
    stockProfileData,
    ipoData,
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
