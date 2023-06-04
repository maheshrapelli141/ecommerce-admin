import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { authReducer } from "./reducers/authReducer";
import { countriesReducer } from "./reducers/countriesReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    auth: authReducer,
    countries: countriesReducer
}),
    composeEnhancers(applyMiddleware()));

export default store;