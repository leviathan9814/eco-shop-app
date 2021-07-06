import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoaded, setRecomendation } from "../../redux/recomendation-reducer";
import {Link} from "react-router-dom";
import RecomendationLoader from "../content-loader/recomendation-loader";

import "./recomendation.css";
import "../cargo-block/cargo-block.css";

const Recomendation = () => {

    const recomendationItem = useSelector(state => state.recomendation.recomendationItem);

    const isLoaded = useSelector(state => state.recomendation.isLoaded);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:3001/recomendation")
            .then(response => {
                dispatch(setRecomendation(response.data));
                dispatch(setLoaded(true));
            });
    }, []);

    return (
        <div className="recomendation">
            <div className="recomendation-title">
                Рекомендовані товари
            </div>
            <div className="recomendation-item">
                {isLoaded 
                ?   recomendationItem.map(item => {
                        return (
                            <Link to={`/cargo-details/${item.id}`}>
                                <div className="cargo-item" key={item.id}>
                                    <div className="cargo-img">
                                        <img src={item.imageUrl} alt="cargo"/>
                                    </div>
                                    <div className="cargo-name">
                                        <h1>{item.name}</h1>
                                    </div>
                                    <div className="cargo-price">
                                        {item.price} грн.
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                :   Array(4)
                    .fill(0)
                    .map((_, index) => <RecomendationLoader key={index} />)
                }
                
            </div>
        </div>
    )
}

export default Recomendation;