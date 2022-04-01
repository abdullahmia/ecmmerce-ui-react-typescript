/*
    PRODUCT - ADD
    PRODUCT - REMOVE
    PRODUCTS - CLEAR

*/
import { cartActionTypes } from "../types"


interface AddToCart {
    type: cartActionTypes.ADD_TO_CART,
    payload: IProduct
}

interface RemoveFromCart {
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: string
}

interface ClearCart {
    type: cartActionTypes.CLEAR_CART
}

// { type: "ad_to_cart", payload: {} }
export const add_to_cart = (payload: IProduct) : AddToCart => {
    return {
        type: cartActionTypes.ADD_TO_CART,
        payload: payload
    }
}

// { type: "remove_from_cart", payload: {} }
export const remove_from_cart = (id: string) : RemoveFromCart => {
    return {
        type: cartActionTypes.REMOVE_FROM_CART,
        payload: id
    }
}

// Crear Cart
export const clear_cart = () : ClearCart => {
    return {
        type: cartActionTypes.CLEAR_CART
    }
}

type x = ReturnType<typeof add_to_cart>;
type y = ReturnType<typeof add_to_cart>;
type z = ReturnType<typeof add_to_cart>;

export type cartActionType = x | y | z;