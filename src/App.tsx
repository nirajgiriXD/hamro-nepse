/**
 * External dependencies.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/**
 * Internal dependencies.
 */
import "./index.css";
import logo from "./assets/img/logo.png";
import { Navbar, Footer } from "./components";
import {
  AboutPage,
  ChartPage,
  CompanyAnalyzerPage,
  CompareCompanyPage,
  ContactPage,
  HomePage,
  IpoCheckerPage,
  IpoFpoUpdatesPage,
  LoginAndSignupPage,
  MarketWatchPage,
  PortfolioTrackerPage,
  PrivacyPolicyPage,
  ServicesPage,
  ShareCalculatorPage,
  TradingSignalsPage,
} from "./pages";
import LoadingAnimation from "./components/LoadingAnimation";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false); 
    };
    fetchData();
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

  return (
    <StrictMode>
      <Router>
        <ThemeProvider theme={theme}>

        {isLoading ? (
        <LoadingAnimation /> // Show loading animation while isLoading is true
      ) : (
        <>
                  <div className="h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="container mx-auto">
              <div className="min-h-screen w-full max-w-screen-xl mx-auto px-3">
                {/* Navbar */}
                <Navbar logo={logo} />

                {/* Routes */}
                <Routes>
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/chart" element={<ChartPage />} />
                  <Route
                    path="/company-analyzer"
                    element={<CompanyAnalyzerPage />}
                  />
                  <Route
                    path="/compare-company"
                    element={<CompareCompanyPage />}
                  />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="/ipo-checker" element={<IpoCheckerPage />} />

                  <Route
                    path="/ipo-fpo-updates"
                    element={<IpoFpoUpdatesPage />}
                  />
                  <Route path="/market-watch" element={<MarketWatchPage />} />
                  <Route
                    path="/portfolio-tracker"
                    element={<PortfolioTrackerPage />}
                  />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route
                    path="/share-calculator"
                    element={<ShareCalculatorPage />}
                  />
                  <Route
                    path="/privacy-policy"
                    element={<PrivacyPolicyPage />}
                  />
                  <Route
                    path="/trading-signals"
                    element={<TradingSignalsPage />}
                  />
                  <Route
                    path="/login"
                    element={<LoginAndSignupPage type="login" />}
                  />
                  <Route
                    path="/signup"
                    element={<LoginAndSignupPage type="signup" />}
                  />
                </Routes>

                {/* Footer */}
                <Footer logo={logo} />
              </div>
            </div>
          </div>
        </>
      )}

        </ThemeProvider>
      </Router>
    </StrictMode>
  );
}

export default App;
