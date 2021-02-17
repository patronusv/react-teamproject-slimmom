import axios from "axios";
import { addProductAction } from "../actions/healthActions";

export const addNewProductDairyOperation = (product) => (dispatch, getState) => {
    const idToken = getState().auth.user.accessToken;
    // dispatch(setLoading())
    axios.post(
        `https://slimmom-backend.goit.global/day?auth=${idToken}`,
        product
    )
        .then(response => console.log(response))
    // .then(response => dispatch(addProductAction({ ...product, id: response.data.productId })))
    // .catch(error => dispatch(setError(error)))
    // .finally(dispatch(setLoading()))
}