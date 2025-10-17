import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Index";
import RootMainLayOut from "./components/RootLayOut/RootMainLayOut";
import BreadCrumb from "./components/CommonComponents/BreadCrumb";
import Products from "./pages/Products/Index";
import ProductDetails from "./pages/ProductDetails/Index";
import Login from "./pages/Login/Index";
import SignUp from "./pages/SignUp/Index";
import Wishlist from "./pages/Wishlist/Index";
import Cart from "./pages/Cart/Index";
import Error from "./pages/Error/Index";
import MyAccount from "./pages/MyAccount/Index";
import { CheckOut } from "./pages/CheckOut/Index";
import About from "./pages/About/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootMainLayOut />}>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/account" element={<MyAccount />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
