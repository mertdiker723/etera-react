import * as cartActionTypes from "../../actionConstants/cartActionType";

type CartReducerType = {
    id: string;
    name: string;
    price: string;
    count?: number;
}

const cartReducer = (state: CartReducerType[] = [], action: { type: string; payload: CartReducerType; }) => {
    const { type, payload } = action;
    switch (type) {
        case cartActionTypes.CART_ADD:
            const findedItem = state.find(item => item.id === payload.id);
            if (findedItem) {
                return state.map(item => item.id === findedItem.id ? { ...payload, count: (findedItem.count || 1) + 1 } : item);
            }
            return [...state, { ...payload, count: 1 }]
        case cartActionTypes.CART_MINUS:
            const findedItemMinus = state.find(item => item.id === payload.id);

            if (findedItemMinus) {
                if (findedItemMinus.count === 1) {
                    return state.filter(item => item.id !== findedItemMinus.id);
                }
                return state.map(item => item.id === findedItemMinus.id ? { ...payload, count: (findedItemMinus.count || 1) - 1 } : item);
            }
            return state;
        default:
            return state;
    }
}

export default cartReducer;