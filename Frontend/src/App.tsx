import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Countdown from "./components/countdown/countdown";
import TopNav from "./components/NavBar/Navbar";
import Renders from "./components/Renders/Render";
import Register from "./components/SignUpForm/SignUpForm";
import Home from "./Home";
import Store from "./Stroe";
import About from "./AboutUs";

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
