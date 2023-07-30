import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "../reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any
    }
}

const allEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, allEnhancers);

export default store;