import { combineReducers } from "redux";

import loaderReducer from "./reducers/loaderReducer";
import itemsReducer from "./reducers/itemsReducer";
import productReducer from "./reducers/productReducer";

export function createRootReducer() {
  return combineReducers({
    loader: loaderReducer,
    items: itemsReducer,
    product: productReducer
  });
}
