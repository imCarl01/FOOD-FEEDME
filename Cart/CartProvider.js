import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCartCount(cartCount + 1);
    setCart((prevCart)=>[...prevCart,item]);

  };

  const deleteFromCart =(idMeal)=>{
    setCart((prevCart)=>prevCart.filter((item)=> item.idMeal !== idMeal));
  };

  return (
    <CartContext.Provider value={{ cartCount, cart ,addToCart, deleteFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
