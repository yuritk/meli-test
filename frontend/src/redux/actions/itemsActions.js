import { SET_ITEMS } from "../types/itemsTypes";
import { searchItemsApi } from "../../resources/Api/Meli";

function setItemsCreator(payload) {
  return {
    type: SET_ITEMS,
    payload
  };
}

export const searchItemsAction = search => async dispatch => {
  const data = await searchItemsApi(search);

  dispatch(setItemsCreator({ data }));
};
