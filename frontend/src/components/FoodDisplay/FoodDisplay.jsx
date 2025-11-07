import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);

  const filteredItems = category === "All" 
    ? foodList 
    : foodList.filter((item) => item.category === category);

  return (
    <section className="food-display" id="food-display">
      <h2 className="food-display__title">Top dishes near you</h2>

      <div className="food-display__list">
        {filteredItems.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default FoodDisplay;
