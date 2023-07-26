import { createContext, useContext, useMemo, useReducer } from "react";
import { ProductType } from "../../components/Home/types";

type ReducerType = {
    productListing: ProductType[];
    radioSortBy: string;
}
export type InitialContext = {
    state: ReducerType;
    onGetProducts: (item: ProductType[]) => void;
    onSortBy: (value: string) => void;
    memoProductListing: ProductType[];
}

export const ProductContext = createContext<InitialContext>({} as InitialContext);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useReducer((currentState: ReducerType, newState: ReducerType) => ({ ...currentState, ...newState }), {
        productListing: [],
        radioSortBy: ""
    });
    const { productListing, radioSortBy } = state;

    const onGetProducts = (productListing: ProductType[]) => {
        setState({
            ...state,
            productListing
        })
    }
    const onSortBy = (value: string) => {
        setState({
            ...state,
            radioSortBy: value
        })
    }

    const memoProductListing = useMemo(() => {
        const shallowCopyProductListing = [...productListing];
        switch (radioSortBy) {
            case "priceHighToLow":
                return shallowCopyProductListing.sort((a, b) => (+a.price < +b.price) ? 1 : (+a.price > +b.price) ? -1 : 0);
            case "priceLowToHigh":
                return shallowCopyProductListing.sort((a, b) => (+a.price > +b.price) ? 1 : (+a.price < +b.price) ? -1 : 0);
            case "oldToNew":
                return shallowCopyProductListing.sort((a, b) => (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) ? 1 : (new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()) ? -1 : 0);
            case "newToOld":
                return shallowCopyProductListing.sort((a, b) => (new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()) ? 1 : (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) ? -1 : 0);
            default:
                return productListing;
        }
    }, [radioSortBy, productListing]);

    return (
        <ProductContext.Provider value={{ state, onGetProducts, onSortBy, memoProductListing }}>
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
