import React from "react";

const CatalogHeader = () => {

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
            <a href="/Register" className="btn-primary">Зарегистрироваться</a>
        </div>
        </header>
    );

};

export default CatalogHeader; 
