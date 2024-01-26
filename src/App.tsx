/**
 * External dependencies.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";

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
  PortfolioTrackerPage,
  PrivacyPolicyPage,
  ServicesPage,
  ShareCalculatorPage,
  TradingSignalsPage,
} from "./pages";

function App() {
  return (
    <StrictMode>
      <Router>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <div className="container mx-auto">
            <div className="w-100 h-100 max-w-screen-xl mx-auto px-3">
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
                <Route
                  path="/trading-signals"
                  element={<TradingSignalsPage />}
                />
              </Routes>

              {/* Footer */}
              <Footer logo={logo} />
            </div>
          </div>
        </div>
      </Router>
    </StrictMode>
  );
}

export default App;
