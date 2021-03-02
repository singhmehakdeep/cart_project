import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async (dispatch) => {
    console.log("data from backendddddddddddd111111111111");

    const res = await fetch("http://localhost:4000/api/products");
    const data = await res.json();
    console.log(data,"data from backendddddddddddd");
    // return{
      dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    })
// }
}