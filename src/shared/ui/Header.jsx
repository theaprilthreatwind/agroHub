import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="nav relative bg-white border-b border-gray-100">
      <div className="nav-container flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <NavLink to="/" className="logo flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>
          </div>
          <span className="font-bold text-xl text-gray-900">AgroHub</span>
        </NavLink>

        <div className="nav-links hidden md:flex items-center gap-6">
          <NavLink
            to="/catalog"
            className="hover:text-emerald-600 transition-colors"
          >
            Каталог
          </NavLink>
          <NavLink to="/" className="hover:text-emerald-600 transition-colors">
            О нас
          </NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/login"
            className="btn-primary px-4 py-2 font-medium hover:text-emerald-600 transition-colors"
          >
            Войти
          </NavLink>
          <NavLink
            to="/register"
            className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-3xl transition-colors font-medium"
          >
            Зарегистрироваться
          </NavLink>
        </div>

        <button
          className="md:hidden p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0  bg-black/20 w-screen h-screen z-40 md:hidden transition-opacity"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6 ">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <NavLink
              to="/catalog"
              onClick={toggleMenu}
              className="hover:text-emerald-600"
            >
              Каталог
            </NavLink>
            <NavLink
              to="/"
              onClick={toggleMenu}
              className="hover:text-emerald-600"
            >
              О нас
            </NavLink>
          </nav>

          <hr className="border-gray-100" />

          <div className="flex flex-col gap-3">
            <NavLink
              to="/login"
              className="btn-primary px-4 py-2 font-medium text-center hover:text-emerald-600 transition-colors"
            >
              Войти
            </NavLink>
            <NavLink
              to="/register"
              onClick={toggleMenu}
              className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-3xl transition-colors font-medium"
            >
              Зарегистрироваться
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
