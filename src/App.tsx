import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <div className="container mx-auto p-8">
        <Navbar />
        <Banner />
      </div>
    </>
  );
}

export default App;
