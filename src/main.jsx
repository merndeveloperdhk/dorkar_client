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
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import PaginationButton from "./Component/Pagination/PaginationButton";

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
        path:'/details/:id',
        element:<ProductDetails></ProductDetails>,
        loader:({params}) => fetch(`http://localhost:5000/addPost/${params.id}`)
      },
      {
        path:'/postAdd',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/elements',
        element:<PrivateRoute><Elements></Elements></PrivateRoute>
      },
      {
        path:'/singleElement',
        element:<SingleElement></SingleElement>
      },
      {
        path:'/pagination',
        element:<PaginationButton></PaginationButton>,
        loader: ()=> fetch('http://localhost:5000/productsCount')
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
