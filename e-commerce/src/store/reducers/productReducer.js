import { SET_CATEGORIES, SET_FETCH_STATE, SET_FILTER, SET_LIMIT, SET_OFFSET, SET_PRODUCT_LIST, SET_TOTAL, SET_PRODUCT_DETAIL, SET_PRODUCT_DETAIL_FETCH_STATE } from "../actions/productActions";


const initialState = {
    categories: [],
    productList: [],
    productDetail: null,
    total: 0,
    limit: 8,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",
    productDetailFetchState: "NOT_FETCHED"
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: action.payload };

        case SET_PRODUCT_LIST:
            return { ...state, productList: action.payload };

        case SET_PRODUCT_DETAIL:
            return { ...state, productDetail: action.payload };

        case SET_TOTAL:
            return { ...state, total: action.payload };

        case SET_FETCH_STATE:
            return { ...state, fetchState: action.payload };

        case SET_LIMIT:
            return { ...state, limit: action.payload };

        case SET_OFFSET:
            return { ...state, offset: action.payload };

        case SET_FILTER:
            return { ...state, filter: action.payload };
        case SET_PRODUCT_DETAIL_FETCH_STATE:
            return { ...state, productDetailFetchState: action.payload };

        default:
            return state;
    }
};
export default productReducer;