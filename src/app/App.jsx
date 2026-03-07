import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../pages/Header";
import Landing from "../pages/Landing";
import { CustomerHome } from "../pages/CustomerHome";

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
      </Routes>
    </BrowserRouter>
  );
}
