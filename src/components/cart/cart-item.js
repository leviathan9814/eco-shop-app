import React from "react";

import "./cart.css";

const CartItem = ({ id, name, imageUrl, description, totalPrice, totalItem, onRemove, onMinus, onPlus }) => {

    const handleRemoveClick = () => {
        onRemove(id);
    };
    
    const handlePlusItem = () => {
    onPlus(id);
    };
    
    const handleMinusItem = () => {
    onMinus(id);
    };

    return (
        <div className="cart-item">
            <div className="cart-item__img">
                <img src={imageUrl} alt="cargo"/>
            </div>
            <div className="cart-item__name">
                <span>{name}</span>
                <div className="cart-item__descr">{description}</div>
            </div>
            <div className="cart-item__counter">
                <div className="cart-item__counter_plus counter" onClick={handlePlusItem}>
                    &#43;
                </div>
                <div className="current-count">{totalItem}</div>
                <div className="cart-item__counter_minus counter" onClick={handleMinusItem}>
                    &#8722;
                </div>
            </div>
            <div className="cart-item__price">
                {totalPrice}грн
            </div>
            <div className="cart-item__cancel" onClick={handleRemoveClick}>
                &#10006;
            </div>
        </div>
    )
}

export default CartItem;