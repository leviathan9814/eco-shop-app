import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssortment, setLoaded } from "../../redux/assortment-reducer";
import SetsItem from "./sets-block-item";
import SetsLoader from "../content-loader/sets-loader";

import "./sets-block.css";

const SetsBlock = React.memo(() => {

    const assortments = useSelector(state => state.assortment.assortments);
    const isLoaded = useSelector(state => state.assortment.isLoaded);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAssortment());
        dispatch(setLoaded(true));
    }, []);

    return (
        <div className="sets-block" id="sets">
            <div className="sets-title">
                <h1>
                    Набори
                </h1>
                <div className="sets-title-descr">Важко обрати або кортить придбати все й одразу?<br/>
                    Ми пропонуємо вже готовi сети, якi допоможуть зiбрати все до купи та ще й зекономити!
                </div>
            </div>
            <div className="sets">
                {isLoaded
                ?  assortments.map(item => <SetsItem key={item.id}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    description={item.description}
                    price={item.price}/>)
                :   Array(6)
                    .fill(0)
                    .map((_, index) => <SetsLoader key={index} />)
                }
            </div>
        </div>
    )
});

export default SetsBlock;