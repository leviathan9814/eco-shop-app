import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { getCargoItem, setLoaded } from "../../redux/cargo-details-reducer";
import {addItemToCart} from "../../redux/cart-reducer";
import Recomendation from "../recomendation/recomendation";
import Footer from "../footer/footer";
import Basket from "../basket/basket";
import ImageSlider from "../imageSlider/imageSlider";
import {DetailsImageLoader, DetailsLoader} from "../content-loader/details-loader";

import "./cargo-details.css";


const CargoDetails = (props) => {

    const cargo = useSelector(state => state.cargoDetails.cargoDetails);
    const totalItem = useSelector(state => state.cart.totalItem);
    const isLoaded = useSelector(state => state.cargoDetails.isLoaded);

    const dispatch = useDispatch();

    useEffect(() => {
        let itemId = props.match.params.itemId;
        dispatch(getCargoItem(itemId));
        dispatch(setLoaded(true));
    }, []);

    const onAddCargo = () => {
        dispatch(addItemToCart(cargo));
    };

    return (
        <div>
            <div className="cargo-details">
            <div className="back-shop">
                <Link to="/">Повернутися до каталогу</Link>
            </div>
            <div className="details">
                <div className="cargo-slider">
                    {isLoaded
                    ? <ImageSlider images={cargo.imageUrl}/> 
                    : <DetailsImageLoader/>
                    }
                </div>
                <div className="cargo-description">
                    {isLoaded
                    ?   <>
                            <div className="cargo-descr_name">
                                {cargo.name}
                            </div>
                            <div className="cargo-descr_price">
                                {cargo.price} грн.
                            </div>
                            <div className="cargo-descr_btn">
                                <button onClick={onAddCargo}
                                    className="cart-btn">
                                    Додати у кошик
                                </button>
                            </div>
                            <div className="cargo-descr_store">
                                <span>Матеріали:</span>
                                {cargo.description}
                            </div>
                            <div className="cargo-descr_delivery">
                                <Link to="/delivery-and-payment">Доставка та оплата</Link>
                                При замовленні від 500 грн. доставка БЕЗКОШТОВНА.
                            </div>
                        </>
                    : <DetailsLoader/>
                    }
                </div>
            </div>
        </div>
        { totalItem > 0 ? <Basket/> : null}
        <Recomendation/>
        <Footer/>
        </div>
    )
};

export default withRouter(CargoDetails);