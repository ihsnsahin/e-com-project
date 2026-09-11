import { API } from "../../services/api";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

export const setCategories = (categories) => {
    return { type: SET_CATEGORIES, payload: categories };
};

export const setProductList = (productList) => {
    return { type: SET_PRODUCT_LIST, payload: productList };
};

export const setTotal = (total) => {
    return { type: SET_TOTAL, payload: total };
};

export const setFetchState = (fetchState) => {
    return { type: SET_FETCH_STATE, payload: fetchState };
};

export const setLimit = (limit) => {
    return { type: SET_LIMIT, payload: limit };
};

export const setOffset = (offset) => {
    return { type: SET_OFFSET, payload: offset };
};

export const setFilter = (filter) => {
    return { type: SET_FILTER, payload: filter };
};

export const fetchCategories = () => (dispatch) => {
    API.get("/categories")
        .then((response) => {
            dispatch(setCategories(response.data));
        }
        )
        .catch((error) => console.log(error))
}
export const fetchProducts = (params) => (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    API.get("/products", { params })
        .then((response) => {
            console.log(response.data);
            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState("FETCHED"));
        })
        .catch((error) => {
            console.log(error);
            dispatch(setFetchState("FAILED"));
        })
}