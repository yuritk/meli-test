import { SET_PRODUCT, CLEAN_PRODUCT } from "../types/productTypes";

const initialState = {};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.payload.product;
    case CLEAN_PRODUCT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
