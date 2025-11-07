import React, { createContext, useState } from "react";
import { food_list as foodList } from "../assets/assets";

// Contexto global da aplicação
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  // Adiciona 1 unidade ao item
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Remove 1 unidade do item (sem valores negativos)
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const currentQty = prev[itemId] || 0;
      if (currentQty <= 1) {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      }
      return { ...prev, [itemId]: currentQty - 1 };
    });
  };

  // Retorna o valor total do carrinho
  const getCartTotal = () => {
    return Object.entries(cartItems).reduce((total, [id, quantity]) => {
      const item = foodList.find((product) => product._id === id);
      return item ? total + item.price * quantity : total;
    }, 0);
  };

  const store = {
    foodList,
    cartItems,
    addToCart,
    removeFromCart,
    getCartTotal,
  };

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
