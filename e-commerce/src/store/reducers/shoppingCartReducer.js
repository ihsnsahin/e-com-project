import { ADD_TO_CART, DECREASE_COUNT, INCREASE_COUNT, REMOVE_FROM_CART, RESET_CHECKOUT, SET_ADDRESS, SET_BILLING_ADDRESS, SET_CART, SET_PAYMENT, TOGGLE_ALL_CART_ITEMS, TOGGLE_CART_ITEM } from "../actions/shoppingCartActions";

const initialState = {
    cart: [],
    payment: {},
    address: {},
    billingAddress: {}
}
const shoppingCartReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CART:
            return { ...state, cart: action.payload };
        case SET_PAYMENT:
            return { ...state, payment: action.payload };
        case SET_ADDRESS:
            return { ...state, address: action.payload };
        case SET_BILLING_ADDRESS:
            return { ...state, billingAddress: action.payload };
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
        case REMOVE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((cartItem) =>
                    cartItem.product.id !== action.payload)
            };
        }
        case INCREASE_COUNT: {
            return {
                ...state,
                cart: state.cart.map((cartItem) =>
                    cartItem.product.id === action.payload
                        ? { ...cartItem, count: cartItem.count + 1 }
                        : cartItem
                )
            };
        }
        case DECREASE_COUNT: {
            return {
                ...state,
                cart: state.cart.map((cartItem) =>
                    cartItem.product.id === action.payload
                        ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : cartItem.count }
                        : cartItem
                )
            };
        }
        case TOGGLE_CART_ITEM: {
            return {
                ...state,
                cart: state.cart.map((cartItem) =>
                    cartItem.product.id === action.payload
                        ? { ...cartItem, checked: !cartItem.checked }
                        : cartItem
                )
            };
        }
        case TOGGLE_ALL_CART_ITEMS: {
            //Hepsi seçili mi? Every koşulu sağlayıp sağlamadığını kontrol eder

            const allChecked = state.cart.every(
                (cartItem) => cartItem.checked
            );
            //Hepsi seçili ise kaldır, değilse seç.
            return {
                ...state,
                cart: state.cart.map((cartItem) => ({
                    ...cartItem,
                    checked: !allChecked
                }))
            };
        }
        case RESET_CHECKOUT:
            return {
                ...state,
                cart: state.cart.filter((item) => !item.checked),
                payment: {},
                address: {},
                billingAddress: {}
            };
        default:
            return state;
    }
}
export default shoppingCartReducer; 