import { combineReducers } from "redux";

import loaderReducer from "./reducers/loaderReducer";
import resultsReducer from "./reducers/resultsReducer";
import productReducer from "./reducers/productReducer";

export function createRootReducer() {
  return combineReducers({
    loader: loaderReducer,
    results: resultsReducer,
    product: productReducer
  });
}
