import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCargo, setLoaded } from "../../redux/cargo-reducer";
import CargoLoader from "../content-loader/cargo-loader";
import CargoItem from "./cargo-block-item";


import "./cargo-block.css";

const CargoBlock = React.memo(() => {

    const cargos = useSelector(state => state.cargo.cargos);
    const isLoaded = useSelector(state => state.cargo.isLoaded);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCargo());
        dispatch(setLoaded(true));
    }, []);

    return (        
        <div className="cargo">
            {isLoaded
            ? cargos.map(item => <CargoItem key={item.id}
                id={item.id}
                imageUrl={item.imageUrl} 
                name={item.name}
                price={item.price}/>)
            : Array(8)
                .fill(0)
                .map((_, index) => <CargoLoader key={index} />)
            }
        </div>
    )
});

export default CargoBlock;