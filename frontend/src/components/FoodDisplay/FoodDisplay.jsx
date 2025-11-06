import React from 'react';
import './FoodDisplay.css';

// Importa o contexto global (onde está a lista de comidas)
import { StoreContext } from '../../context/StoreContext';

// Componente responsável por exibir cada item individualmente
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {

  // Pegando a lista de alimentos do contexto
  const { food_list } = React.useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      
      {/* Título da seção */}
      <h2>Top dishes near you</h2>

      {/* Lista dos itens de comida */}
      <div className="food-display-list">

        {/*
          Percorre a lista de comidas e cria um <FoodItem /> para cada uma.
        */}
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}                          // Chave para ajudar o React a identificar cada item
              id={item._id}                       // ID único do item
              name={item.name}                   // Nome do prato
              description={item.description}    // Descrição
              price={item.price}               // Preço
              image={item.image}              // Imagem do prato
            />
          );
        })}

      </div>
    </div>
  );
};

export default FoodDisplay;
