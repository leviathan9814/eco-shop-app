import { shopAPI } from "../api/api";

const SET_ASSORTMENT_DETAILS = "SET_ASSORTMENT_DETAILS";
const SET_LOADED = "SET_LOADED";

const initialState = {
    assortmentDetails: [],
    isLoaded: false
}

const assortmentDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ASSORTMENT_DETAILS : 
            return {
                ...state,
                assortmentDetails: action.assortment
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

export const setAssortmentDetails = (assortment) => ({type: SET_ASSORTMENT_DETAILS, assortment});

export const setLoaded = (payload) => ({type: SET_LOADED, payload});

export const getAssortmentItem = (itemId) => async (dispatch) => {
    let response = await shopAPI.getAssortmentDetails(itemId);
    dispatch(setAssortmentDetails(response.data))
}

export default assortmentDetailsReducer;