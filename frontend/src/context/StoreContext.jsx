import React, { createContext } from "react";
import { food_list } from "../assets/assets";

// Cria o contexto que será usado para compartilhar dados globalmente
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Estado global do carrinho
  // Estrutura: { idDoProduto: quantidade }
  const [cartItems, setCartItems] = React.useState({});

  // Função para adicionar item ao carrinho
  const addToCart = (itemId) => {
    // Se o item ainda não existe no carrinho, adiciona com quantidade 1
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      // Caso já exista, apenas incrementa a quantidade
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Função para remover um item do carrinho (decrementando a quantidade)
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Função para calcular o valor total do carrinho
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  // Valores e funções que ficam disponíveis para todos os componentes filhos
  const contextValue = {
    food_list, // Lista completa dos alimentos (dados do menu)
    cartItems, // Estado atual do carrinho
    setCartItems, // Permite modificar carrinho manualmente, caso necessário
    addToCart, // Função para adicionar ao carrinho
    removeFromCart, // Função para diminuir quantidade do carrinho
    getTotalCartAmount // Função para obter o valor total do carrinho
  };

  return (
    // Provider envolve toda a aplicação para que todos possam acessar o contexto
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
