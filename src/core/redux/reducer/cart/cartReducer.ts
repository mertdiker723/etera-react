import * as cartActionTypes from "../../actionConstants/cartActionType";

type CartReducerType = {
    id: string;
    name: string;
    price: string;
}

const cartReducer = (state = [], action: { type: string; payload: CartReducerType; }) => {
    switch (action.type) {
        case cartActionTypes.CART_ADD:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default cartReducer;