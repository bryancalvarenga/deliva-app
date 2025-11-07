import React from "react";
import "./ExploreMenu.css";
import { menu_list as menuList } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const handleCategoryClick = (selected) => {
    setCategory((prev) => (prev === selected ? "All" : selected));
  };

  return (
    <section className="menu" id="explore-menu">
      <h1 className="menu__title">Explore our menu</h1>

      <p className="menu__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        libero ipsam quae recusandae rem eveniet soluta repellat accusantium
        eius delectus deleniti ab magni ea, quia voluptate velit corporis.
      </p>

      <div className="menu__list">
        {menuList.map((item) => {
          const isActive = category === item.menu_name;

          return (
            <button
              key={item.menu_name}
              className={`menu__item ${isActive ? "menu__item--active" : ""}`}
              onClick={() => handleCategoryClick(item.menu_name)}
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="menu__item-image"
              />
              <p className="menu__item-label">{item.menu_name}</p>
            </button>
          );
        })}
      </div>

      <hr className="menu__divider" />
    </section>
  );
};

export default ExploreMenu;
