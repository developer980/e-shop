import { createStore } from "redux";
import { cartReducer } from "./reducers/cart";
import { sorting } from "./reducers1/sort";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
  cart: cartReducer,
  sort: sorting,
});

const store = createStore(rootreducer);

export default store;
