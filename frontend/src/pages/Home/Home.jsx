import React, { useState } from "react";
import "./Home.css";

import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main className="home">
      <Header />
      <ExploreMenu 
        category={selectedCategory} 
        setCategory={setSelectedCategory} 
      />
      <FoodDisplay category={selectedCategory} />
      <AppDownload />
    </main>
  );
};

export default Home;
