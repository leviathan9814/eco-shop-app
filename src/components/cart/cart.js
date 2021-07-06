import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import Modal from "react-modal";
import { Field, reduxForm } from "redux-form";
import CartItem from "./cart-item";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from "../../redux/cart-reducer";
import 'pure-react-carousel/dist/react-carousel.es.css';
import Footer from "../footer/footer";

import cartEmptyImg from "../../assets/images/cart_is_empty.png";
import "./cart.css";
import "./modal-cart.css";


Modal.setAppElement("#root");

const CartForm = ({handleSubmit}) => {

    const onClickOrder = () => {
        alert('YOUR ORDER')
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="modal-form">
                    <div>
                        <Field component="input" name="fullName" placeholder="ПІБ"/>
                    </div>
                    <div>
                        <Field component="input" name="phone" placeholder="Телефон"/>
                    </div>
                    <div>
                        <Field component="input" name="city" placeholder="Місто"/>
                    </div>
                    <div>
                        <Field component="input" name="post" placeholder="Відділення Нової Пошти / Адреса доставки"/>
                    </div>
                    <div>
                        <Field component="input"  name="comment"placeholder="Коментар до замовлення"/>
                    </div>
                    <div className="modal-block-btn">
                        <button className="modal-btn" onClick={onClickOrder}>Замовити</button>
                    </div>
            </div>
        </form>
    )
}

const CartReduxForm = reduxForm({form: "cartForm"})(CartForm);

const Cart = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const dispatch = useDispatch();
    const { totalPrice, totalItem, items } = useSelector(({ cart }) => cart);
  
    const addedItem = Object.keys(items).map((key) => {
      return items[key].items[0];
    });
  
    const onClearCart = () => {
      if (window.confirm('Are you sure you want to empty the trash?')) {
        dispatch(clearCart());
      }
    };
  
    const onRemoveItem = (id) => {
      if (window.confirm('Do you really want to delete?')) {
        dispatch(removeCartItem(id));
      }
    };
  
    const onPlusItem = (id) => {
      dispatch(plusCartItem(id));
    };
  
    const onMinusItem = (id) => {
      dispatch(minusCartItem(id));
    };


    return (
        <>
            <div className="cart">
                <div className="back-shop">
                    <Link to="/">Повернутися до каталогу</Link>
                </div>
                <div className="cart-content">
                    {  totalItem ? (
                        <>
                            <div className="cart-title">
                            Кошик
                            <span className="clean-cart" onClick={onClearCart}>Очистити кошик</span>
                            </div>
                            <div className="cart-items-content">
                                {addedItem.map((obj) => (
                                    <CartItem
                                        key={obj.id}
                                        id={obj.id}
                                        name={obj.name}
                                        description={obj.description}
                                        imageUrl={obj.imageUrl[0]}
                                        totalPrice={items[obj.id].totalPrice}
                                        totalItem={items[obj.id].items.length}
                                        onRemove={onRemoveItem}
                                        onMinus={onMinusItem}
                                        onPlus={onPlusItem}
                                    />
                                ))}
                            </div>
                            <div className="cart-total">
                                <span>Кількість товарів: {totalItem}</span>
                                <span>Разом: {totalPrice}грн.</span>
                            </div>
                            <div className="cart-bottom">
                                <span onClick={() => setModalIsOpen(true)}>Замовити</span>
                            </div>
                        </>
                    ) : (
                        <div className="cart-empty">
                            <img src={cartEmptyImg} alt="cart empty" />
                            <Link to="/">Повернутися до каталогу</Link>
                        </div>
                    )
                    }
                </div>
                <Modal isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    className="modal"
                    preventScroll={true}
                    overlayClassName="overlay">
                    <div className="modal-title">
                        <h2>Дані для замовлення</h2>
                        <span onClick={() => setModalIsOpen(false)}>&#10006;</span>
                    </div>
                    <CartReduxForm/>
                </Modal>
            </div>
            <Footer/>
        </>
    )
}

export default Cart;