/*
    PRODUCT - ADD
    PRODUCT - REMOVE
    PRODUCTS - CLEAR

*/
import { cartActionTypes } from "../types"


// { type: "ad_to_cart", payload: {} }
export const add_to_cart = (payload: IProduct) => {
    return {
        type: cartActionTypes.ADD_TO_CART,
        payload: payload
    }
}

// { type: "remove_from_cart", payload: {} }
export const remove_from_cart = (id: string) => {
    return {
        type: cartActionTypes.REMOVE_FROM_CART,
        payload: id
    }
}

// Crear Cart
export const clear_cart = () => {
    return {
        type: cartActionTypes.CLEAR_CART
    }
}