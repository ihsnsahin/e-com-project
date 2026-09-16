import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CartDropdown() {
    const history = useHistory();
    const cart = useSelector((state) => state.shoppingCart.cart);
    const totalCartCount = cart.reduce((total, cartItem) => total + cartItem.count, 0);


    return (<div className="relative group">
        <div onClick={() => history.push("/cart")} className="flex items-center gap-1.5 cursor-pointer transition-transform duration-200 hover:scale-110">
            <ShoppingCart className="w-7 h-7 nav:w-4 nav:h-4" />
            <span className="text-xs font-normal">{totalCartCount === 0 ? "" : totalCartCount}</span>
        </div>
        <div className="hidden nav:flex absolute top-full right-0 mt-3 z-50 bg-white text-[#252B42] flex-col  w-[350px] rounded-md p-4 gap-2 shadow-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
            <h3 className="text-base text-left">My Cart {totalCartCount === 0 ? "" : `(${totalCartCount} ${totalCartCount === 1 ? "Item" : "Items"})`}</h3>
            {cart.length === 0 ?
                (<p className="text-sm text-[#737373] py-4 text-center">
                    Your cart is empty
                </p>) :
                (<>
                    <div className="flex flex-col divide-y divide-[#E8E8E8] max-h-96 overflow-y-auto">
                        {cart.map((cartItem) => {
                            return (
                                <div className="flex flex-row gap-3 py-3 items-start justify-start" key={cartItem.product.id}>
                                    <div className="aspect-[3/4] w-[25%] shrink-0 rounded-md overflow-hidden">
                                        <img src={cartItem.product.images?.[0]?.url} alt={cartItem.product.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-full gap-1 min-w-0">
                                        <h4 className="text-sm min-w-0 line-clamp-2">{cartItem.product.name}</h4>
                                        <p className="text-xs font-normal text-[#737373]">Quantity: {cartItem.count}</p>
                                        <h4 className="text-sm text-[#23A6F0]">${(cartItem.product.price * cartItem.count).toFixed(2)}</h4>
                                    </div>
                                </div>)
                        }
                        )}
                    </div>
                    <button
                        onClick={() => history.push("/cart")}
                        className="text-sm w-full bg-[#23A6F0] text-white py-2 rounded-md transition-colors duration-300 hover:bg-[#1d91d1] cursor-pointer">Checkout</button>
                </>)
            }
        </div>
    </div>)
}
export default CartDropdown;