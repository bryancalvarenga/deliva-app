import React, { useState, useContext } from "react";
import "./Navbar.css";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const { getCartTotal } = useContext(StoreContext);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo-link">
        <img src={assets.logo} alt="Deliva Logo" className="navbar__logo" />
      </Link>

      <ul className="navbar__menu">
        <li>
          <Link
            to="/"
            onClick={() => setActiveMenu("home")}
            className={`navbar__menu-item ${
              activeMenu === "home" ? "navbar__menu-item--active" : ""
            }`}
          >
            home
          </Link>
        </li>

        <li>
          <a
            href="#explore-menu"
            onClick={() => setActiveMenu("menu")}
            className={`navbar__menu-item ${
              activeMenu === "menu" ? "navbar__menu-item--active" : ""
            }`}
          >
            menu
          </a>
        </li>

        <li>
          <a
            href="#app-download"
            onClick={() => setActiveMenu("mobile-app")}
            className={`navbar__menu-item ${
              activeMenu === "mobile-app" ? "navbar__menu-item--active" : ""
            }`}
          >
            mobile-app
          </a>
        </li>

        <li>
          <a
            href="#footer"
            onClick={() => setActiveMenu("contact-us")}
            className={`navbar__menu-item ${
              activeMenu === "contact-us" ? "navbar__menu-item--active" : ""
            }`}
          >
            contact us
          </a>
        </li>
      </ul>

      <div className="navbar__actions">
        <img src={assets.search_icon} alt="Search" className="navbar__icon" />

        <div className="navbar__cart">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Carrinho" className="navbar__icon" />
          </Link>

          {getCartTotal() > 0 && <span className="navbar__cart-indicator"></span>}
        </div>

        <button className="navbar__login-btn" onClick={() => setShowLogin(true)}>
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
