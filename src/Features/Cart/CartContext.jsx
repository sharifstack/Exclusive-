import { createContext, useEffect, useMemo, useState } from "react";
import {
  addToCartStorage,
  clearCartStorage,
  getCartItems,
  removeFromCartStorage,
  updateCartQuantity,
} from "./cartStorage";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const refreshCart = () => {
    setCartItems(getCartItems());
  };

  const addToCart = (product) => {
    addToCartStorage(product);
    refreshCart();
  };

  const incrementCartItem = (
    productId,
    selectedSize = "",
    selectedColor = "",
  ) => {
    updateCartQuantity(productId, "increment", selectedSize, selectedColor);
    refreshCart();
  };

  const decrementCartItem = (
    productId,
    selectedSize = "",
    selectedColor = "",
  ) => {
    updateCartQuantity(productId, "decrement", selectedSize, selectedColor);
    refreshCart();
  };

  const removeCartItem = (productId, selectedSize = "", selectedColor = "") => {
    removeFromCartStorage(productId, selectedSize, selectedColor);
    refreshCart();
  };

  const clearCart = () => {
    clearCartStorage();
    refreshCart();
  };

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      incrementCartItem,
      decrementCartItem,
      removeCartItem,
      clearCart,
    }),
    [cartItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
