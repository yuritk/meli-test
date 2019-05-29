import { CLEAN_ITEMS, SET_ITEMS } from "../types/itemsTypes";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ITEMS:
      return action.payload.items;
    case CLEAN_ITEMS:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
