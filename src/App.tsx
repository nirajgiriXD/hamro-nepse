/**
 * External dependencies.
 */
import { Routes, Route } from "react-router-dom";

/**
 * Internal dependencies.
 */
import "./index.css";
import { Navbar, Footer } from "./components";
import {
  AboutPage,
  ChartPage,
  CompareCompanyPage,
  CompanyDetailPage,
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
  WatchlistPage,
} from "./pages";
import AppDataProvider from "./store/AppDataProvider";

function App() {
  return (
    <AppDataProvider>
      <div className="h-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="container mx-auto">
          <div className="relative min-h-screen w-full max-w-screen-xl mx-auto px-3">
            {/* Navbar */}
            <Navbar />

            {/* Routes */}
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/chart" element={<ChartPage />} />
              <Route path="/stock/:symbol" element={<CompanyDetailPage />} />
              <Route path="/compare-company" element={<CompareCompanyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/ipo-checker" element={<IpoCheckerPage />} />

              <Route path="/ipo-fpo-updates" element={<IpoFpoUpdatesPage />} />
              <Route path="/market-watch" element={<MarketWatchPage />} />
              <Route path="/watchlist" element={<WatchlistPage />} />
              <Route
                path="/portfolio-tracker"
                element={<PortfolioTrackerPage />}
              />
              <Route path="/services" element={<ServicesPage />} />
              <Route
                path="/share-calculator"
                element={<ShareCalculatorPage />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/trading-signals" element={<TradingSignalsPage />} />
              <Route
                path="/login"
                element={<LoginAndSignupPage type="login" />}
              />
              <Route
                path="/signup"
                element={<LoginAndSignupPage type="signup" />}
              />
              <Route
                path="/forgot-password"
                element={<LoginAndSignupPage type="forgot-password" />}
              />
              <Route
                path="/setting"
                element={<LoginAndSignupPage type="update" />}
              />
            </Routes>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </AppDataProvider>
  );
}

export default App;
