import { shopAPI } from "../api/api";

const SET_ASSORTMENT = "SET_ASSORTMENT";
const SET_LOADED = "SET_LOADED";

const initialState = {
    assortments: [],
    isLoaded: false
}

const assortmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ASSORTMENT : {
            return {
                ...state,
                assortments: [...state.assortments, ...action.assortments]
            }
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

export const setAssortment = (assortments) => ({type: SET_ASSORTMENT, assortments});

export const setLoaded = (payload) => ({type: SET_LOADED, payload});

export const getAssortment = () => async (dispatch) => {
    let response = await shopAPI.getAssortment();
    dispatch(setAssortment(response.data));
}

export default assortmentReducer;