import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCartCount(cartCount + 1);
    setCart((prevCart)=>[...prevCart,item]);

  };

  return (
    <CartContext.Provider value={{ cartCount, cart ,addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
