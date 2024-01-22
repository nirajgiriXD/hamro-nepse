/**
 * External dependencies.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * Internal dependencies.
 */
import "./index.css";
import logo from "./assets/img/logo.png";
import { Navbar, Footer } from "./components";
import {
  ChartsPage,
  CompanyAnalyzerPage,
  CompareCompanyPage,
  HomePage,
  IpoCheckerPage,
  IpoFpoUpdatesPage,
  PortfolioTrackerPage,
  ServicesPage,
  ShareCalculatorPage,
  TradingSignalsPage,
} from "./pages";

function App() {
  return (
    <Router>
      <div className="dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="w-100 max-w-screen-xl mx-auto px-3">
            {/* Navbar */}
            <Navbar logo={logo} />

            {/* Routes */}
            <Routes>
              <Route path="/charts" element={<ChartsPage />} />
              <Route
                path="/company-analyzer"
                element={<CompanyAnalyzerPage />}
              />
              <Route path="/compare-company" element={<CompareCompanyPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/ipo-checker" element={<IpoCheckerPage />} />

              <Route path="/ipo-fpo-updates" element={<IpoFpoUpdatesPage />} />
              <Route
                path="/portfolio-tracker"
                element={<PortfolioTrackerPage />}
              />
              <Route path="/services" element={<ServicesPage />} />
              <Route
                path="/share-calculator"
                element={<ShareCalculatorPage />}
              />
              <Route path="/trading-signals" element={<TradingSignalsPage />} />
            </Routes>

            {/* Footer */}
            <Footer logo={logo} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
