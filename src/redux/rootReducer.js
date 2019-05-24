import { combineReducers } from 'redux';

import loaderReducer from './reducers/loaderReducer';

export function createRootReducer() {
  return combineReducers({
    loader: loaderReducer,
  });
}
