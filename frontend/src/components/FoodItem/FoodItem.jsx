import React from "react";
import "./FoodItem.css";
import assets from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext.jsx";

const FoodItem = ({ id, name, price, description, image }) => {
  // Estado local para controlar quantidade do item selecionado
  const [itemCount, setItemCount] = React.useState(0);

  // Pegando funções e valores globais do contexto
  // Mesmo que neste componente ainda não estejam sendo usados diretamente
  const { cartItems, addToCart, removeFromCart } =
    React.useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {/* Imagem do prato */}
        <img className="food-item-image" src={image} alt="" />

        {/* Se o item ainda não foi adicionado, mostra o botão de adicionar */}
        {!itemCount ? (
          <img
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          // Se já foi adicionado ao menos 1, exibe o contador
          <div className="food-item-counter">
            {/* Botão para diminuir a quantidade */}
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />

            {/* Quantidade atual */}
            <p>{itemCount}</p>

            {/* Botão para aumentar a quantidade */}
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      {/* Informações do item (nome, avaliação, descrição e preço) */}
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
