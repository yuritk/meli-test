import axios from "axios";

const URL = "";
const ITEMS_URL = `${URL}/items`

export function searchItemsApi(search) {
  return axios
    .get(ITEMS_URL, { q: search })
    .then(({ data }) => data)
    .catch(e => console.log(e));
}

export function getProductApi(id) {
  const url = `${ITEMS_URL}/${id}`
  return axios
    .get(url)
    .then(({ data }) => data)
    .catch(e => console.log(e));
}
