import React from "react";  
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Index";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home/>} />
    </Route>
  )
);


const App = () => {  
  return <RouterProvider router={router} />
};

export default App;
