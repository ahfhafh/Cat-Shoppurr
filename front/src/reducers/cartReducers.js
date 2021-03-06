import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

export const cartReducer = (state = {cartItems:[]}, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.productID === item.productID)
            if (existItem) {
                return {
                    ...state, cartItems:  state.cartItems.map((x) => x.productID === existItem.productID ? item : x),
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, item]};
            }
        case CART_REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter((x) => x.productID !== action.payload)};
        default:
            return state;
    }
}