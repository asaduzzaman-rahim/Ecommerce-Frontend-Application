import React from "react";
import "./App.css";
// *! React DOM Router

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Layout from "./Layout.jsx";
import Home from "./Page/Home.jsx";
import About from "./Page/About.jsx";
import Contact from "./Page/Contact.jsx";
import ErrorPage from "./Page/ErrorPage.jsx";
import CartSection from "./Page/CartSection.jsx";
import ProductDetailsPage from "./Page/ProductDetailsPage.jsx";
import WishListPage from "./Page/WishListPage.jsx";
import SignInPage from "./Page/SignInPage.jsx";
import SignUpPage from "./Page/SignUpPage.jsx";
import MyAccount from "./Page/MyAccount.jsx";
import CheckOut from "./Page/CheckOut.jsx";
import ShopPage from "./Page/Shop.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {index: true, Component: Home},
      {path: "about",Component: About},
      {path: "shop", Component: ShopPage},
      {path: "contact", Component: Contact},
      {path: "signup", Component: SignUpPage},
      {path: "wishlist",Component: WishListPage},
      {path: "products/:id",Component: ProductDetailsPage},
      {path: "myaccount",Component: MyAccount,},
      {path: "signin",Component: SignInPage},
      {path: "CheckOut",Component: CheckOut},
      {path: "cart",Component: CartSection},
      {path: "*",Component: ErrorPage},
    ],
  },
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App;
