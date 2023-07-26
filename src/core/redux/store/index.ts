import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "../reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const allEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
);

const store = createStore(rootReducer, allEnhancers);

export default store;