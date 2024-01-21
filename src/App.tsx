/**
 * External dependencies.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * Internal dependencies.
 */
import "./index.css";
import logo from "./assets/img/logo.png";
import { Navbar, Services, Banner, Footer } from "./components";

function App() {
  return (
    <Router>
      <div className="dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="w-100 max-w-screen-xl mx-auto px-5">
            {/* Navbar */}
            <Navbar logo={logo} />

            <Routes>
              <Route path="/" element={<Banner />} />
              <Route path="/services" element={<Services />} />
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
