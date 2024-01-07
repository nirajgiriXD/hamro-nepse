/**
 * Internal dependencies.
 */
import { Banner, Navbar } from "./components";
import logo from "./assets/img/logo.png";
import banner from "./assets/img/banner.png";
import "./index.css";

function App() {
  return (
    <div className="container mx-auto p-10">
      <Navbar logo={logo} />
      <Banner banner={banner} />
    </div>
  );
}

export default App;
