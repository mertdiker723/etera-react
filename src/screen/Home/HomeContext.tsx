import { createContext, useContext, useReducer } from "react";
import { ProductType } from "../../components/HomeContainer/types";

type ReducerType = {
    productListing?: ProductType[];
    radioSortBy?: string;
}
const initialState: ReducerType = {
    productListing: [],
    radioSortBy: ""
}
const homeReducer = (state: ReducerType, action: { type: string; payload: ReducerType }) => {
    const { type, payload } = action;
    const { radioSortBy, productListing } = payload;
    switch (type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                productListing
            };
        case "SORT_RADIO":
            return {
                ...state,
                radioSortBy
            }
        default:
            return state;
    }
}

export const ProductStateContext = createContext<ReducerType>({} as ReducerType);
export const ProductDispatchContext = createContext<React.Dispatch<{ type: string; payload: ReducerType }>>({} as React.Dispatch<{ type: string; payload: ReducerType }>);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(homeReducer, initialState);

    return (
        <ProductStateContext.Provider value={state}>
            <ProductDispatchContext.Provider value={dispatch}>
                {children}
            </ProductDispatchContext.Provider>
        </ProductStateContext.Provider>
    )
}

export const useDataState = () => {
    const context = useContext(ProductStateContext);
    if (!context) {
        throw new Error("useDataState has to be used within <ProductStateContext.Provider>");
    }
    return context;
}

export const useDataDispatch = () => {
    const context = useContext(ProductDispatchContext);
    if (!context) {
        throw new Error("useDataState has to be used within <ProductDispatchContext.Provider>");
    }
    return context;
}
