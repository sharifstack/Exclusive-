const CART_KEY = "exclusive_cart";

export const getCartItems = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const saveCartItems = (items) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

export const addToCartStorage = (product) => {
  const cart = getCartItems();

  const itemKey = `${product.id}-${product.selectedSize || ""}-${product.selectedColor || ""}`;

  const existingItemIndex = cart.findIndex(
    (item) =>
      `${item.id}-${item.selectedSize || ""}-${item.selectedColor || ""}` ===
      itemKey,
  );

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCartItems(cart);
  return cart;
};

export const updateCartQuantity = (
  productId,
  type,
  selectedSize = "",
  selectedColor = "",
) => {
  const cart = getCartItems();

  const updatedCart = cart.map((item) => {
    const sameItem =
      item.id === productId &&
      (item.selectedSize || "") === selectedSize &&
      (item.selectedColor || "") === selectedColor;

    if (!sameItem) return item;

    if (type === "increment") {
      return { ...item, quantity: item.quantity + 1 };
    }

    if (type === "decrement") {
      return { ...item, quantity: Math.max(1, item.quantity - 1) };
    }

    return item;
  });

  saveCartItems(updatedCart);
  return updatedCart;
};

export const removeFromCartStorage = (
  productId,
  selectedSize = "",
  selectedColor = "",
) => {
  const cart = getCartItems().filter(
    (item) =>
      !(
        item.id === productId &&
        (item.selectedSize || "") === selectedSize &&
        (item.selectedColor || "") === selectedColor
      ),
  );

  saveCartItems(cart);
  return cart;
};

export const clearCartStorage = () => {
  localStorage.removeItem(CART_KEY);
};
