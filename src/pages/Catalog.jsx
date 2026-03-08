import React, { useState } from "react";
import ProductModal from "../pages/Modal/ProductModal";

const Catalog = () => {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Все");

  const products = [
    {
      id: 1,
      name: "Домашние яйца",
      price: 900,
      category: "Молочные",
      image: "https://images.unsplash.com/photo-1589923188651-268a9765e432",
      description: "Свежие деревенские яйца",
    },

    {
      id: 2,
      name: "Козье молоко",
      price: 1200,
      category: "Молочные",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
      description: "Натуральное козье молоко",
    },

    {
      id: 3,
      name: "Лесной мёд",
      price: 3500,
      category: "Мёд",
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924",
      description: "Натуральный мёд с пасеки",
    },

    {
      id: 4,
      name: "Картофель",
      price: 700,
      category: "Овощи",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
      description: "Картофель нового урожая",
    },

    {
      id: 5,
      name: "Домашний сыр",
      price: 2800,
      category: "Молочные",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d",
      description: "Фермерский сыр",
    },

    {
      id: 6,
      name: "Свежие яблоки",
      price: 800,
      category: "Фрукты",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
      description: "Сладкие фермерские яблоки",
    },

    {
      id: 7,
      name: "Морковь",
      price: 450,
      category: "Овощи",
      image: "https://images.unsplash.com/photo-1582515073490-dc1a3c6d65b2",
      description: "Органическая морковь",
    },

    {
      id: 8,
      name: "Свежие огурцы",
      price: 600,
      category: "Овощи",
      image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
      description: "Фермерские огурцы",
    },

    {
      id: 9,
      name: "Клубника",
      price: 2200,
      category: "Фрукты",
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
      description: "Свежая клубника",
    },

    {
      id: 10,
      name: "Тыква",
      price: 950,
      category: "Овощи",
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
      description: "Фермерская тыква",
    },
  ];

  const categories = ["Все", "Молочные", "Овощи", "Фрукты", "Мёд"];

  const filtered = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category === "Все" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className=" bg-albaster h-screen w-screen">
      <div className="max-w-7xl mx-auto pt-32 albaster">

      <main className="catalog-page">
        
        <h1 className="catalog-title">Каталог товаров</h1>

        <div className="catalog-top">
          <input
            className="search"
            placeholder="Поиск товаров..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={category === cat ? "category active" : "category"}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="catalog-grid">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => setSelected(product)}
            >
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p>{product.price} ₸</p>
            </div>
          ))}
        </div>

        <ProductModal product={selected} close={() => setSelected(null)} />
      </main>
      </div>
    </div>
  );
};

export default Catalog;
