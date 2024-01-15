/**
 * Internal dependencies.
 */
import { Banner, Navbar } from "./components";
import logo from "./assets/img/logo.png";
import banner from "./assets/img/banner.png";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto p-10 dark:bg-gray-900">
      <Navbar logo={logo} />
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 dark:border-white lg:my-8" />
      <Banner banner={banner} />
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 dark:border-white lg:my-8" />
      <Footer logo={logo} />
    </div>
  );
}

export default App;
