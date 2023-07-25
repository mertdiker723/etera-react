import { createContext, useContext, useReducer, useState } from "react";
import { ProductType } from "../../components/Home/types";

type ReducerType = {
    productListing: ProductType[];
}
export type InitialContext = {
    state: ReducerType;
    onGetProducts: (item: ProductType[]) => void;
}

export const ProductContext = createContext<InitialContext>({} as InitialContext);


export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useReducer((currentState: ReducerType, newState: ReducerType) => ({ ...currentState, ...newState }), {
        productListing: [],
    });

    const onGetProducts = (productListing: ProductType[]) => {
        setState({
            productListing
        })
    }
    return (
        <ProductContext.Provider value={{ state, onGetProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useDataState = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useDataState has to be used within <ProductContext.Provider>");
    }
    return context;
}
