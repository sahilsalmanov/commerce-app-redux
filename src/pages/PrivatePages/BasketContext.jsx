import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);



  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }])
   
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));

  };

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };


  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalQuantity,
        getTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
