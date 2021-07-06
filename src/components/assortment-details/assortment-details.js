import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { getAssortmentItem, setLoaded } from "../../redux/assortment-details-reducer";
import {addItemToCart} from "../../redux/cart-reducer";
import Recomendation from "../recomendation/recomendation";
import Footer from "../footer/footer";
import Basket from "../basket/basket";
import ImageSlider from "../imageSlider/imageSlider";
import {DetailsImageLoader, DetailsLoader} from "../content-loader/details-loader";

import "../cargo-details/cargo-details.css";

const AssortmentDetails = (props) => {

    const assortment = useSelector(state => state.assortmentDetails.assortmentDetails);
    const totalItem = useSelector(state => state.cart.totalItem);
    const isLoaded = useSelector(state => state.assortmentDetails.isLoaded);

    const dispatch = useDispatch();

    useEffect(() => {
        let itemId = props.match.params.itemId;
        dispatch(getAssortmentItem(itemId));
        dispatch(setLoaded(true));
    }, []);

    const onAddCargo = () => {
        dispatch(addItemToCart(assortment));
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
                    ? <ImageSlider images={assortment.imageUrl}/> 
                    : <DetailsImageLoader/>
                    }
                </div>
                <div className="cargo-description">
                    {isLoaded
                    ?   <>
                            <div className="cargo-descr_name">
                                {assortment.name}
                            </div>
                            <div className="cargo-descr_price">
                                {assortment.price} грн.
                            </div>
                            <div className="cargo-descr_btn">
                                <button onClick={onAddCargo}
                                    className="cart-btn">
                                    Додати у кошик
                                </button>
                            </div>
                            <div className="cargo-descr_store">
                                <span>Матеріали:</span>
                                {assortment.description}
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
        <Recomendation/>
        { totalItem > 0 ? <Basket/> : null}
        <Footer/>
        </div>
    )
};

export default withRouter(AssortmentDetails);