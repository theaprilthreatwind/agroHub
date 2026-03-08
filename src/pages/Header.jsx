import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
<<<<<<< Updated upstream
  return (
    <header className="nav">
      <div className="nav-container">
        <a href="#" className="logo">
          <div class="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
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
              data-lucide="leaf"
              aria-hidden="true"
              class="lucide lucide-leaf w-5 h-5 text-white"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>
          </div>
          <span>AgroHub</span>
        </a>
        <div className="nav-links">
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="/">О нас</NavLink>
        </div>
        <div className="flex gap-3">
          <NavLink to="/login" className="btn-primary">
            Войти
          </NavLink>
          <NavLink
            to="/register"
            className="border border-emerald-600 px-4 py-2 rounded-3xl"
          >
            Зарегистрироваться
          </NavLink>
        </div>
      </div>
    </header>
  );
=======

    return (
        <header className="nav">
            <div className="nav-container">
                <a href="index.html" className="logo">
                <div className="logo-icon">🌿</div>
                <span>AgroHub</span>
                </a>
                <div className="nav-links">
                <a href="/Catalog">Каталог</a>
                <a href="" className="active">О нас</a>
                <a href="">Для инвесторов</a>
                </div>
                <a href="/Register" className="btn-primary">Зарегистрироваться</a>
            </div>
        </header>
    );

>>>>>>> Stashed changes
};

export default Header;
