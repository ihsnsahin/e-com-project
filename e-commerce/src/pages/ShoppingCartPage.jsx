import { ArrowLeft, ChevronRight, ShoppingBag, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { decreaseCount, increaseCount, removeFromCart, toggleAllCartItems, toggleCartItem } from "../store/actions/shoppingCartActions";


function ShoppingCartPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shoppingCart.cart);
    const totalProductCount = cart.length;
    const selectedProductCount = (cart.filter((cartItem) => cartItem.checked)).length;
    const total = cart.reduce(
        (total, cartItem) =>
            cartItem.checked
                ? total + (cartItem.product.price * cartItem.count)
                : total,
        0
    );
    const freeShippingPrice = 300;
    const shippingIsFree = total >= freeShippingPrice;
    const shipping = total === 0 ? 0 : 5;
    const grandTotal = shippingIsFree ? total : total + shipping;

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    }

    const handleIncreaseCartItem = (productId) => {
        dispatch(increaseCount(productId));
    }
    const handleDecreaseCartItem = (productId) => {
        dispatch(decreaseCount(productId));
    }
    const handleToggleItem = (productId) => {
        dispatch(toggleCartItem(productId));
    }
    const handleToggleAllItems = () => {
        dispatch(toggleAllCartItems());
    }
    const allChecked = cart.length > 0 && cart.every(
        (cartItem) => cartItem.checked
    );


    return (
        <>
            <section className="bg-[#FAFAFA] py-8">
                <div className="layout-flex gap-7 sm:flex-row sm:justify-between">
                    <div className="flex justify-center items-center  cursor-pointer text-[#737373] transition-colors duration-200 ease-in-out hover:text-[#252B42]" onClick={() => history.push("/shop")}>
                        <ArrowLeft className="w-4 h-4" />
                        <h6>Continue Shopping</h6>
                    </div>
                    <div className="flex justify-center items-center ">
                        <Link to="/" className="cursor-pointer">Home</Link>
                        <ChevronRight className="w-4 h-4 text-[#BDBDBD]" />
                        <h6 className="text-[#737373] cursor-pointer">Shopping Cart</h6>
                    </div>
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-8">
                <div className="layout-flex gap-6">
                    <div className="layout-flex items-center justify-center gap-2.5">
                        <h2 className="text-4xl text-center max-w-2xs sm:max-w-sm">Shopping Cart</h2>
                        <p className="text-[#737373] text-center font-normal max-w-2xs sm:max-w-md md:max-w-lg">Manage your cart items and proceed to checkout</p>
                    </div>
                </div>
            </section>
            {cart.length > 0
                ? (<section className="bg-[#FAFAFA] py-8">
                    <div className="layout-flex items-start md:flex-row w-full gap-6">
                        <div className="border border-[#D6EEF9] rounded-xl flex-1 bg-white overflow-hidden w-full">
                            <div className="border-b border-[#D6EEF9] bg-[#F5FBFE]">
                                <div className="flex flex-row items-center py-4 px-3">
                                    <div className="flex flex-row flex-1 items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={allChecked}
                                            onChange={handleToggleAllItems}
                                            className="w-4 h-4 accent-[#23A6F0] cursor-pointer"
                                        />
                                        <h6>All Items</h6>
                                    </div>
                                    <div className="hidden sm:flex flex-row items-center justify-center w-[40%]">
                                        <h6 className="w-1/3 text-center">Quantity</h6>
                                        <h6 className="w-1/3 text-center">Price</h6>
                                        <h6 className="w-1/3 text-center">Remove</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col divide-y divide-[#D6EEF9]">
                                {cart.map((cartItem) => (
                                    <div
                                        className="relative flex flex-col sm:flex-row gap-3 p-3 items-start sm:items-center justify-between"
                                        key={cartItem.product.id} >
                                        <div className=" flex flex-row flex-1 items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={cartItem.checked}
                                                onChange={() => handleToggleItem(cartItem.product.id)}
                                                className="w-4 h-4 accent-[#23A6F0] cursor-pointer"
                                            />
                                            <div className="aspect-[3/4] max-h-[100px] shrink-0 rounded-md overflow-hidden">
                                                <img src={cartItem.product.images?.[0]?.url} alt={cartItem.product.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col items-start justify-start w-full gap-1 min-w-0">
                                                <h4 className="min-w-0 line-clamp-2">{cartItem.product.name}</h4>
                                                <p className="min-w-0 line-clamp-2 text-xs font-normal text-[#737373]">{cartItem.product.description}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between sm:justify-center w-full sm:w-[40%]">
                                            <div className="flex justify-center sm:w-1/3">
                                                <div className="flex items-center border border-[#E8E8E8] rounded-md">

                                                    <button
                                                        onClick={() => handleDecreaseCartItem(cartItem.product.id)}
                                                        className="w-8 h-8 flex items-center justify-center text-[#737373] hover:text-[#23A6F0] cursor-pointer">
                                                        −
                                                    </button>
                                                    <span className="w-8 text-center ">
                                                        {cartItem.count}
                                                    </span>
                                                    <button
                                                        onClick={() => handleIncreaseCartItem(cartItem.product.id)}
                                                        className="w-8 h-8 flex items-center justify-center text-[#737373] hover:text-[#23A6F0] cursor-pointer">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <h4 className="text-base text-[#23A6F0] w-1/3 text-center">${(cartItem.product.price * cartItem.count).toFixed(2)}</h4>
                                            <div className="absolute top-3 right-3  sm:static sm:w-1/3 flex justify-center">
                                                <Trash
                                                    onClick={() => handleRemoveFromCart(cartItem.product.id)}
                                                    className="w-4 h-4 text-[#737373] hover:text-red-500 cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="border-t border-[#D6EEF9] bg-[#F5FBFE]">
                                <div className="flex items-center justify-between py-2 px-3">
                                    <h4 className=" font-normal text-[#252B42]">
                                        {cart.length > 0 ? `${selectedProductCount} of ${totalProductCount} products selected` : "No products have been selected yet"}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:max-w-[30%] md:sticky md:top-40 md:self-start">
                            <button className="text-white bg-[#23A6F0] transition-colors duration-300 hover:bg-[#1d91d1] cursor-pointer py-3 rounded-sm w-full"
                            >Create Order</button>
                            <div className="flex flex-col gap-2 py-4 px-3 border border-[#D6EEF9] rounded-xl bg-white overflow-hidden">
                                <h3 className="text-base mb-2">Order Summary</h3>
                                <div className="flex items-center justify-between w-full gap-2">
                                    <h4 className="font-normal">Products Total</h4>
                                    <h4>${total.toFixed(2)}</h4>
                                </div>
                                <div className="flex items-center justify-between w-full gap-2">
                                    <h4 className="font-normal">Shipping</h4>
                                    <h4>${shipping.toFixed(2)}</h4>
                                </div>
                                {shippingIsFree &&
                                    <div className="flex items-center justify-between w-full gap-2">
                                        <h4 className="font-normal min-w-0 line-clamp-2">Free shipping on orders over ${freeShippingPrice}</h4>
                                        <h4 className="text-[red]">-${shipping.toFixed(2)}</h4>
                                    </div>}
                                <hr className="text-[#D6EEF9]" />
                                <div className="flex items-center justify-between w-full">
                                    <h3 className="text-base">Grand Total</h3>
                                    <h3 className="text-base text-[#23A6F0]">${grandTotal.toFixed(2)}</h3>
                                </div>

                            </div>
                            <button
                                onClick={() => history.push("/create-order")}
                                className="text-white bg-[#23A6F0] transition-colors duration-300 hover:bg-[#1d91d1] cursor-pointer py-3 rounded-sm w-full"
                            >Create Order</button>
                        </div>

                    </div>
                </section>)
                :
                <section className="bg-[#FAFAFA] py-8">
                    <div className="layout-flex flex-col gap-6">
                        <div className="layout-flex items-center justify-center gap-2.5">
                            <ShoppingBag className="w-10 h-10 text-[#737373] opacity-70" />
                            <h4 className="text-lg text-[#252B42] text-center">
                                Your cart is empty
                            </h4>
                            <p className="text-sm text-[#737373] text-center">
                                You don't have any items in your shopping cart yet.
                            </p>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}

export default ShoppingCartPage;