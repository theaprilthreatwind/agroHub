import React from "react";

const Header = () => {

    return (
        <header className="nav">
        <div className="nav-container">
            <a href="index.html" className="logo">
            <div className="logo-icon">🌿</div>
            <span>AgroHub</span>
            </a>
            <div className="nav-links">
            <a href="">Каталог</a>
            <a href="" className="active">О нас</a>
            <a href="">Для инвесторов</a>
            </div>
            <a href="" className="btn-primary">Перейти в магазин</a>
        </div>
        </header>
    );

};


export default Header; 
