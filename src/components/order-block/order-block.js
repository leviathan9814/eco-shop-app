import React from "react";
import {Link} from "react-router-dom";

import "./order-block.css";

const OrderBlock = () => {
    return (
        <div className="order-block" id="order">
            <div className="order">
                <div className="order-item">
                    <div className="order-icon">
                        <img src="https://static.tildacdn.com/tild3661-6265-4132-b638-626238326436/3st_bag2.svg" alt="ordering" />
                    </div>
                    <div className="order-descr">
                        <span>Замовлення</span>
                        <div className="descr-info">
                            Ви можете зробити ваше замовлення через сайт або через наш <a href="#">Instagram</a> аккаунт
                        </div>
                    </div>
                </div>

                <div className="order-item">
                    <div className="order-icon">
                        <img src="https://static.tildacdn.com/tild3064-3933-4966-a431-653931653766/store_card.svg" alt="payment"/>
                    </div>
                    <div className="order-descr">
                        <span>Оплата</span>
                        <div className="descr-info">
                            Ми працюємо за 100% передоплатою на платіжну картку.
                        </div>
                    </div>
                </div>

                <div className="order-item">
                    <div className="order-icon">
                        <img src="https://static.tildacdn.com/tild6333-3762-4235-b337-396261656230/return-box.svg" alt="delivery"/>
                    </div>
                    <div className="order-descr">
                        <span>Доставка</span>
                        <div className="descr-info">
                            Доставляємо товар по всій Україні до відділень Нової Пошти.<br/>
                            При замовленнi вiд 500 грн - доставка безкоштовна!
                        </div>
                        <div className="delivery">Детальніше про <Link to="/delivery-and-payment">доставку та оплату</Link></div>
                    </div>
                </div>
            </div>
            <div className="order-block-img">
                <img src="https://static.tildacdn.com/tild6439-6536-4337-b636-346533323434/photo1449247709967d4461a6a6103.jpg" alt="order"/>
            </div>
        </div>
    )
}

export default OrderBlock;