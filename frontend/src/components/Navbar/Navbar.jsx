import React, { useState } from 'react';
import './Navbar.css';
import assets from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {

  // Estado para controlar qual item do menu está selecionado
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      
      {/* Logo da marca */}
      <img src={assets.logo} alt="" className="logo" />

      {/* Menu de navegação */}
      <ul className="navbar-menu">

        {/* Cada item altera o estado para mostrar qual está ativo */}
        <Link 
          to='/'
          onClick={() => setMenu("home")} 
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>

        <a href='#explore-menu' 
          onClick={() => setMenu("menu")} 
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>

        <a href='#app-download'  
          onClick={() => setMenu("mobile-app")} 
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>

        <a href='#footer'  
          onClick={() => setMenu("contact-us")} 
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>

      {/* Ícones e botão do lado direito */}
      <div className="navbar-right">

        {/* Ícone de busca */}
        <img src={assets.search_icon} alt="" />

        {/* Ícone do carrinho com indicador (dot) */}
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>

        {/* Botão para login */}
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
