/**
 * Internal dependencies.
 */
import "./index.css";
import logo from "./assets/img/logo.png";
import { Navbar, Services, Banner, Footer } from "./components";

function App() {
  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="w-100 max-w-screen-xl mx-auto px-5">
          <Navbar logo={logo} />
          <Banner />
          <Services />
          <Footer logo={logo} />
        </div>
      </div>
    </div>
  );
}

export default App;
