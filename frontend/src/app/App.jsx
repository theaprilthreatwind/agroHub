import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Header } from "../shared";
import Landing from "../pages/Landing";
import { CustomerHome } from "../pages/CustomerHome";
import { SellerHome } from "../pages/SellerHome";
import Catalog from "../pages/Catalog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Presentation } from "../pages/Presentation";
import { AuthProvider, useAuth } from "../context/useAuth";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/customer" element={<CustomerHome />} />
            <Route path="/seller" element={<SellerHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/presentation" element={<Presentation />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

function ProtectedRoute() {
  const { token } = useAuth();

  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }
  return children;
}
