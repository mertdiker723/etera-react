import * as actionTypes from "../actionConstants/cartActionType";


export const getUserAction = (payload: { id: string; price: number; name: string; count: number; }) => {
    return {
        type: actionTypes.CART_ADD,
        payload
    }
}

