import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "../shared";
import Landing from "../pages/Landing";
import { CustomerHome } from "../pages/CustomerHome";
import { SellerHome } from "../pages/SellerHome";
import Catalog from "../pages/Catalog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Presentation } from "../pages/Presentation";
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
        <Route
          path="/catalog"
          element={
            <>
              <Header />
              <Catalog />
            </>
          }
        />
        <Route
          path="/presentation"
          element={
            <>
              <Header />
              <Presentation />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
