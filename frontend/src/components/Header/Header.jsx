import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Order your favorite food here</h1>

        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Velit rem adipisci veritatis quis sint inventore!
        </p>

        {/* Quando integrar rotas: adicionar onClick={() => navigate("#explore-menu")} */}
        <button className="hero__cta">View Menu</button>
      </div>
    </section>
  );
};

export default Header;
