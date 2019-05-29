import { SET_PRODUCT } from "../types/productTypes";
import { getProductApi } from "../../resources/Api/Meli";

function setProductCreator(payload) {
  return {
    type: SET_PRODUCT,
    payload
  };
}

export const getProductAction = id => async dispatch => {
  const data = await getProductApi(id);
  
  dispatch(setProductCreator({ data }));
};
