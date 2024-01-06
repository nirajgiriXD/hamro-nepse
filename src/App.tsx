import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <div className="p-5 md:p-10">
        <Navbar />
        <Banner />
      </div>
    </>
  );
}

export default App;
