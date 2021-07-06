import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./basket.css";

const Basket = (props) => {

    const {totalItem, totalPrice} = useSelector(({ cart }) => cart);

    return (
        <div>
            <Link to="/cart" className="basket">
                <div className="shoping-basket">
                    <img src="https://static.tildacdn.com/tild3661-6265-4132-b638-626238326436/3st_bag2.svg" alt="ordering" />  
                </div>
                <div className="cart-counter">
                    {totalItem}
                </div>
                <div className="show-price">= {totalPrice}грн.</div>
            </Link>
        </div>
    )
}



export default Basket;