import { createContext, useEffect, useMemo, useState } from "react";
import {
  getWishlistItems,
  removeWishlistItem,
  toggleWishlistItem,
} from "./wishlistStorage";

export const WishlistContext = createContext(null);

export default function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    setWishlistItems(getWishlistItems());
  }, []);

  const refreshWishlist = () => {
    setWishlistItems(getWishlistItems());
  };

  const toggleWishlist = (product) => {
    const updated = toggleWishlistItem(product);
    setWishlistItems(updated);
  };

  const removeFromWishlist = (productId) => {
    const updated = removeWishlistItem(productId);
    setWishlistItems(updated);
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const value = useMemo(
    () => ({
      wishlistItems,
      toggleWishlist,
      removeFromWishlist,
      isInWishlist,
      refreshWishlist,
    }),
    [wishlistItems],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
