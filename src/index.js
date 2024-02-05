import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import AllFeatures from "./Features/AllFeatures";
import AllDownloads from "./Downloads/AllDownloads";
import Allproducts from "./Products/Allproducts";
import Allshop from "./shop/Allshop";
import Allcart from "./cart/Allcart";
import { CartProvider } from "react-use-cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
 
  {
    path: "features",
    element: <AllFeatures/>,
  },

  {
    path: "download",
    element:<AllDownloads/>,
  },
  {
    path: "products",
    element:<Allproducts/>,
  },
  {
    path: "shop",
    element:<Allshop/>,
  }
  ,
  {
    path: "cart",
    element:<Allcart/>,
  }
]);

createRoot(document.getElementById("root")).render(
 <CartProvider>
  <RouterProvider router={router} />
  </CartProvider>
);






















// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
