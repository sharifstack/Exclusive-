const WISHLIST_KEY = "exclusive_wishlist";

export const getWishlistItems = () => {
  const data = localStorage.getItem(WISHLIST_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveWishlistItems = (items) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
};

export const toggleWishlistItem = (product) => {
  const wishlist = getWishlistItems();

  const exists = wishlist.some((item) => item.id === product.id);

  let updatedWishlist;

  if (exists) {
    updatedWishlist = wishlist.filter((item) => item.id !== product.id);
  } else {
    updatedWishlist = [...wishlist, product];
  }

  saveWishlistItems(updatedWishlist);
  return updatedWishlist;
};

export const removeWishlistItem = (productId) => {
  const wishlist = getWishlistItems().filter((item) => item.id !== productId);
  saveWishlistItems(wishlist);
  return wishlist;
};
