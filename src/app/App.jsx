import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../pages/Header";
import Landing from "../pages/Landing";
import { CustomerHome } from "../pages/CustomerHome";
<<<<<<< Updated upstream
import { SellerHome } from "../pages/SellerHome";
import Login from "../pages/Login";
import Register from "../pages/Register";
=======
import Register from "../pages/Register";
import Login from "../pages/Login";
import Catalog from "../pages/Catalog";
>>>>>>> Stashed changes

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Landing />
            </>
          }
        />
        <Route
          path="/customer"
          element={
            <>
              <Header />
              <CustomerHome />
            </>
          }
        />
<<<<<<< Updated upstream
        <Route
          path="/seller"
          element={
            <>
              <Header />
              <SellerHome />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Header />
              <Register />
            </>
          }
        />
=======

        <Route path="/Catalog" element={<Catalog/>}/> 

        <Route path="/Register" element={<Register />} />
         <Route path="/Login" element={<Login />} />
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}
