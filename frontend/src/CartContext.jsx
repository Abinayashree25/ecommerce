import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {   // 👈 change here
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find(item => item.name === product.name);

      if (exist) {
        return prev.map(item =>
          item.name === product.name
            ? { ...item, qty: item.qty + product.qty }
            : item
        );
      } else {
        return [...prev, { ...product, qty: product.qty || 1 }];
      }
    });
  };

  const removeFromCart = (name) => {
    setCart(prev => prev.filter(item => item.name !== name));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};