import { shopAPI } from "../api/api";

const SET_CARGO = "SET_CARGO";
const SET_LOADED = "SET_LOADED";

const initialState = {
    cargos: [],
    isLoaded: false,
}

const cargoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARGO : 
            return {
                ...state,
                cargos: action.cargos
            }
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            };
        default: 
            return state;
    }
}

export const setCargo = (cargos) => ({type: SET_CARGO, cargos});

export const setLoaded = (payload) => ({type: SET_LOADED, payload});

export const getCargo = () => async (dispatch) => {
    let response = await shopAPI.getCargo();
    dispatch(setCargo(response.data));
}


export default cargoReducer;