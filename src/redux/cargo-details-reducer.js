import { shopAPI } from "../api/api";

const SET_CARGO_DETAILS = "SET_CARGO_DETAILS";
const SET_LOADED = "SET_LOADED";

const initialState = {
    cargoDetails: [],
    isLoaded: false
}

const cargoDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARGO_DETAILS : 
            return {
                ...state,
                cargoDetails: action.cargo
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

export const setCargoDetails = (cargo) => ({type: SET_CARGO_DETAILS, cargo});

export const setLoaded = (payload) => ({type: SET_LOADED, payload});

export const getCargoItem = (itemId) => async (dispatch) => {
    let response = await shopAPI.getCargoDetails(itemId);
    dispatch(setCargoDetails(response.data))
}

export default cargoDetailsReducer;