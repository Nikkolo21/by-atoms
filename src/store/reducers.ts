import { combineReducers } from "redux";
import products from "./reducers/products";
import { RootReducer } from "./types";

const rootReducer = () =>
  combineReducers<RootReducer>({
    products,
  });

export { rootReducer };
