const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const CLEAR_CART = "CLEAR_CART";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
const PLUS_CART_ITEM = "PLUS_CART_ITEM";
const MINUS_CART_ITEM = "MINUS_CART_ITEM";

const initialState = {
 items: {},
 totalItem: 0,
 totalPrice: 0 
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            const currentItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
        
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                items: currentItems,
                totalPrice: getTotalPrice(currentItems),
                },
            };
        
            const totalItem = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
        
            return {
                ...state,
                items: newItems,
                totalItem,
                totalPrice,
            };
        }
    
        case REMOVE_CART_ITEM: {
            const newItems = {
                ...state.items,
            };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalItem = newItems[action.payload].items.length;
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalItem: state.totalItem - currentTotalItem,
            };
        }
    
        case PLUS_CART_ITEM: {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
                },
            };
        
            const totalItem = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
        
            return {
                ...state,
                items: newItems,
                totalItem,
                totalPrice,
            };
        }
    
        case MINUS_CART_ITEM: {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
                },
            };
        
            const totalItem = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
        
            return {
                ...state,
                items: newItems,
                totalItem,
                totalPrice,
            };
        }
    
        case CLEAR_CART:
            return { totalPrice: 0, totalItem: 0, items: {} };      
        default:
            return state;
    }
}

export const addItemToCart = (itemObj) => ({type: ADD_ITEM_TO_CART, payload: itemObj});
  
export const clearCart = () => ({type: CLEAR_CART});
  
export const removeCartItem = (id) => ({type: REMOVE_CART_ITEM, payload: id});
  
export const plusCartItem = (id) => ({type: PLUS_CART_ITEM, payload: id});
  
export const minusCartItem = (id) => ({type: MINUS_CART_ITEM, payload: id});
  

export default cartReducer;