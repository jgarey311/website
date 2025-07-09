import { Route, Routes } from "react-router-dom";
import TopNav from "./components/NavBar/Navbar";
import Home from "./Home";
import Store from "./Stroe";
import About from "./AboutUs";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <TopNav />
      </div>
      <div className="parallaxSection">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
