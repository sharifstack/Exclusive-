import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./Features/Auth/AuthContext.jsx";
import { store } from "../src/Features/store.js";
import { Provider } from "react-redux";
import CartProvider from "./Features/Cart/CartContext.jsx";
import WishlistProvider from "./Features/Wishlist/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
