import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayOut from "./Component/MainLayOut/MainLayOut";
import Error from "./Component/Error/Error";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import FormicRegister from "./Component/Registration/FormicRegister";
import LogIn from "./Component/Login/LogIn";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import AddProduct from "./Component/AddProduct/AddProduct";
import Elements from "./Component/Elements/Elements";
import SingleElement from "./Component/Elements/SingleElement";
import AuthProvider from "./Provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/register',
        element:<FormicRegister></FormicRegister>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/details',
        element:<ProductDetails></ProductDetails>
      },
      {
        path:'/postAdd',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/elements',
        element:<Elements></Elements>
      },
      {
        path:'/singleElement',
        element:<SingleElement></SingleElement>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
      <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
      </AuthProvider>
    <Toaster />
    
    </div>
  </React.StrictMode>
);
