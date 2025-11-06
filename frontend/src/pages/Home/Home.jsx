import React from 'react';
import './Home.css';

// Componentes usados na página
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

  // Estado para controlar a categoria do menu selecionada
  // "All" significa que inicialmente exibe todos os itens
  const [category, setCategory] = React.useState("All");

  return (
    <div>
      {/* Banner / seção principal do topo */}
      <Header />

      {/* Componente para seleção de categorias */}
      {/* Passa o estado e o setter para permitir alteração */}
      <ExploreMenu category={category} setCategory={setCategory} />

      {/* Lista dos alimentos filtrados pela categoria selecionada */}
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
