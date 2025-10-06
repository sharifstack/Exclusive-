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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootMainLayOut />}>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<BreadCrumb />}></Route>
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
