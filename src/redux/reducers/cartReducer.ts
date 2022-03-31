/*
    action -> add to cart/remove from cat/clear cart
    action.type??
    add to cart/remove from cat/clear cart -> modify the cart state
    return the cart state

    dispathcer -> dispatch -> {type: string, "add_to_cart", payload: {}}
*/

import { cartActionTypes } from "../types";

const cartReducer = (state: IProduct[] = [], action: {type: string, payload: any}) => { // Action type should be fixed
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            return [...state, action.payload]
        case cartActionTypes.REMOVE_FROM_CART:
            return state.filter((item) => item._id === action.payload.id);
        case cartActionTypes.CLEAR_CART:
            return [];
        default:
            return state;
    }
}

export default cartReducer;