import React from "react";

const ProductModal = ({ product, close }) => {

    if (!product) {
        return null;
    }

    return(

        <div className="modal-overlay" onClick={close}>

            <div className="modal-window" onClick={(e)=>e.stopPropagation()}>

            <button className="modal-close" onClick={close}>✕</button>

            <img src={product.image} alt={product.name}/>

            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <h3>{product.price} ₸</h3>

            <button className="buy-btn">
                Добавить в корзину
            </button>

            </div>

        </div>

    );

};

export default ProductModal;