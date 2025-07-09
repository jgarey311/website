import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Nav.css";

function TopNav() {
  return (
    <nav className="navbarContainer">
      <div className="logo">
        <Logo />
      </div>
      <div className="pageLinks">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Store
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About us
        </NavLink>
      </div>
    </nav>
  );
}

export default TopNav;
