import { ADD_TO_CART, SET_ADDRESS, SET_CART, SET_PAYMENT } from "../actions/shoppingCartActions";

const initialState = {
    cart: [],
    payment: {},
    address: {}
}
const shoppingCartReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CART:
            return { ...state, cart: action.payload };
        case SET_PAYMENT:
            return { ...state, payment: action.payload };
        case SET_ADDRESS:
            return { ...state, address: action.payload };

        case ADD_TO_CART: {
            const hasProduct = state.cart.find(
                (cartItem) => cartItem.product.id === action.payload.id
            );

            if (hasProduct) {
                return {
                    ...state,
                    cart: state.cart.map((cartItem) =>
                        cartItem.product.id === action.payload.id
                            ? { ...cartItem, count: cartItem.count + 1 }
                            : cartItem
                    )
                };
            }
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        count: 1,
                        checked: true,
                        product: action.payload
                    }
                ]
            };
        }
        default:
            return state;
    }
}
export default shoppingCartReducer; 