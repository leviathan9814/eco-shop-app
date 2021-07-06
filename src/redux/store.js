import { createStore, combineReducers, applyMiddleware } from "redux";
import cargoReducer from "./cargo-reducer";
import assortmentReducer from "./assortment-reducer";
import cargoDetailsReducer from "./cargo-details-reducer";
import assortmentDetailsReducer from "./assortment-details-reducer";
import recomendationReducer from "./recomendation-reducer";
import cartReducer from "./cart-reducer";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    cargo: cargoReducer,
    assortment: assortmentReducer,
    cargoDetails: cargoDetailsReducer,
    assortmentDetails: assortmentDetailsReducer,
    recomendation: recomendationReducer,
    form: formReducer,
    cart: cartReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;