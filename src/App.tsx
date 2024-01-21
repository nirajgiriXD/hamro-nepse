/**
 * Internal dependencies.
 */
import "./index.css";
import logo from "./assets/img/logo.png";
import { Navbar, Services, Banner, Footer } from "./components";

function App() {
  return (
    <div className="container mx-auto p-10 dark:bg-gray-900">
      <Navbar logo={logo} />
      <Banner />
      <Services />
      <Footer logo={logo} />
    </div>
  );
}

export default App;
