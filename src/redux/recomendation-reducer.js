const SET_RECOMENDATION = "SET_RECOMENDATION";
const SET_LOADED = "SET_LOADED";

const initialState = {
    recomendationItem: [],
    isLoaded: false
}

const recomendationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECOMENDATION : 
            return {
                ...state,
                recomendationItem: action.recomendationItem
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

export const setRecomendation = (recomendationItem) => ({type: SET_RECOMENDATION, recomendationItem});

export const setLoaded = (payload) => ({type: 'SET_LOADED', payload});

export default recomendationReducer;