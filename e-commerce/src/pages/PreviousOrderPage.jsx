import {
    ArrowLeft,
    ChevronDown,
    ChevronRight,
    Package
} from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
    fetchAddressList,
    fetchOrders
} from "../store/actions/clientActions";

function PreviousOrdersPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    const orders = useSelector((state) => state.client.orders);
    const addressList = useSelector((state) => state.client.addressList);

    const [openOrderId, setOpenOrderId] = useState(null);

    useEffect(() => {
        dispatch(fetchOrders());
        dispatch(fetchAddressList());
    }, [dispatch]);

    const handleToggleOrder = (orderId) => {
        setOpenOrderId(
            openOrderId === orderId ? null : orderId
        );
    };

    return (
        <>
            <section className="bg-[#FAFAFA] py-8">
                <div className="layout-flex gap-7 sm:flex-row sm:justify-between">
                    <div
                        className="flex justify-center items-center cursor-pointer text-[#737373] transition-colors duration-200 ease-in-out hover:text-[#252B42]"
                        onClick={() => history.push("/shop")}
                    >
                        <ArrowLeft className="w-4 h-4" />

                        <h6>
                            Continue Shopping
                        </h6>
                    </div>

                    <div className="flex justify-center items-center">
                        <Link
                            to="/"
                            className="cursor-pointer"
                        >
                            Home
                        </Link>

                        <ChevronRight className="w-4 h-4 text-[#BDBDBD]" />

                        <h6 className="text-[#737373]">
                            Previous Orders
                        </h6>
                    </div>
                </div>
            </section>

            <section className="bg-[#FAFAFA] py-8">
                <div className="layout-flex gap-6">
                    <div className="layout-flex items-center justify-center gap-2.5">
                        <h2 className="text-4xl text-center max-w-2xs sm:max-w-sm">
                            Previous Orders
                        </h2>

                        <p className="text-[#737373] text-center font-normal max-w-2xs sm:max-w-md md:max-w-lg">
                            View your previous orders and order details
                        </p>
                    </div>
                </div>
            </section>

            {orders.length > 0 ? (
                <section className="bg-[#FAFAFA] py-8">
                    <div className="layout-flex w-full">
                        <div className="border border-[#D6EEF9] rounded-xl flex-1 bg-white overflow-hidden w-full">

                            {/* Table Header */}
                            <div className="border-b border-[#D6EEF9] bg-[#F5FBFE]">
                                <div className="flex flex-row items-center py-4 px-3">

                                    <div className="flex-1">
                                        <h6>
                                            Order
                                        </h6>
                                    </div>

                                    <div className="hidden sm:flex flex-row items-center justify-center w-[50%]">
                                        <h6 className="w-1/4 text-center">
                                            Date
                                        </h6>

                                        <h6 className="w-1/4 text-center">
                                            Products
                                        </h6>

                                        <h6 className="w-1/4 text-center">
                                            Total
                                        </h6>
                                    </div>

                                    <div className="w-8"></div>
                                </div>
                            </div>

                            {/* Orders */}
                            <div className="flex flex-col divide-y divide-[#D6EEF9]">

                                {orders.map((order) => {
                                    const isOpen =
                                        openOrderId === order.id;

                                    const address = addressList.find(
                                        (address) =>
                                            address.id === order.address_id
                                    );

                                    return (
                                        <div key={order.id}>

                                            {/* Order Row */}
                                            <button
                                                onClick={() =>
                                                    handleToggleOrder(order.id)
                                                }
                                                className="flex flex-row items-center w-full px-3 py-4 cursor-pointer hover:bg-[#F5FBFE] transition-colors duration-200"
                                            >
                                                <div className="flex flex-col items-start flex-1 min-w-0">
                                                    <h4 className="text-base text-[#252B42]">
                                                        Order #{order.id}
                                                    </h4>

                                                    <p className="text-xs text-[#737373] sm:hidden">
                                                        {new Date(
                                                            order.order_date
                                                        ).toLocaleDateString("en-GB")}
                                                    </p>
                                                </div>

                                                <div className="hidden sm:flex flex-row items-center justify-center w-[50%]">

                                                    <h4 className="font-normal text-sm w-1/4 text-center">
                                                        {new Date(
                                                            order.order_date
                                                        ).toLocaleDateString("en-GB")}
                                                    </h4>

                                                    <h4 className="font-normal text-sm w-1/4 text-center">
                                                        {order.products.length}
                                                    </h4>

                                                    <h4 className="text-base text-[#23A6F0] w-1/4 text-center">
                                                        ${order.price.toFixed(2)}
                                                    </h4>

                                                </div>

                                                <div className="flex items-center justify-center w-8">
                                                    {isOpen ? (
                                                        <ChevronDown className="w-5 h-5 text-[#737373]" />
                                                    ) : (
                                                        <ChevronRight className="w-5 h-5 text-[#737373]" />
                                                    )}
                                                </div>
                                            </button>

                                            {/* Order Details */}
                                            {isOpen && (
                                                <div className="bg-[#FAFAFA] border-t border-[#D6EEF9] px-3 py-4">
                                                    <div className="flex flex-col gap-4">

                                                        {/* Order Information */}
                                                        <div className="flex flex-col gap-3">

                                                            <div className="flex items-center justify-between">
                                                                <h4 className="text-base text-[#252B42]">
                                                                    Order Details
                                                                </h4>
                                                            </div>
                                                            <div className="border border-[#D6EEF9] rounded-xl bg-white overflow-hidden">

                                                                <div className="flex flex-col">

                                                                    <div className="flex flex-row items-center">
                                                                        <div className="w-1/3 py-3 px-3 border-r border-[#D6EEF9] bg-[#F5FBFE]">
                                                                            <h6>
                                                                                Status
                                                                            </h6>
                                                                        </div>

                                                                        <div className="w-2/3 py-3 px-3">
                                                                            <p className="text-sm text-[#23A6F0]">
                                                                                Order Placed
                                                                            </p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="flex flex-row items-center border-t border-[#D6EEF9]">
                                                                        <div className="w-1/3 py-3 px-3 border-r border-[#D6EEF9] bg-[#F5FBFE]">
                                                                            <h6>
                                                                                Delivery Address
                                                                            </h6>
                                                                        </div>

                                                                        <div className="w-2/3 py-3 px-3">
                                                                            <p className="text-sm text-[#252B42]">
                                                                                {address?.title || "-"}
                                                                            </p>
                                                                        </div>
                                                                    </div>

                                                                    {address && (
                                                                        <div className="flex flex-row items-center border-t border-[#D6EEF9]">
                                                                            <div className="w-1/3 py-3 px-3 border-r border-[#D6EEF9] bg-[#F5FBFE]">
                                                                                <h6>
                                                                                    Address
                                                                                </h6>
                                                                            </div>

                                                                            <div className="w-2/3 py-3 px-3">
                                                                                <p className="text-sm text-[#737373]">
                                                                                    {address.name}{" "}
                                                                                    {address.surname},{" "}
                                                                                    {address.neighborhood},{" "}
                                                                                    {address.district},{" "}
                                                                                    {address.city}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    )}

                                                                </div>

                                                            </div>
                                                        </div>

                                                        {/* Products */}
                                                        <div className="flex flex-col gap-3">

                                                            <h4 className="text-base text-[#252B42]">
                                                                Products
                                                            </h4>

                                                            <div className="border border-[#D6EEF9] rounded-xl bg-white overflow-hidden">

                                                                {/* Products Header */}
                                                                <div className="border-b border-[#D6EEF9] bg-white">
                                                                    <div className="hidden sm:flex flex-col sm:flex-row items-center py-4 px-3">
                                                                        <div className="flex-1">
                                                                            <h6>
                                                                                Product
                                                                            </h6>
                                                                        </div>

                                                                        <div className="flex flex-row items-center justify-center w-[25%]">
                                                                            <h6 className="w-1/2 text-center">
                                                                                Quantity
                                                                            </h6>
                                                                            <h6 className="w-1/2 text-center">
                                                                                Price
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Product Rows */}
                                                                <div className="flex flex-col divide-y divide-[#D6EEF9]">

                                                                    {order.products.map(
                                                                        (product) => (
                                                                            <div
                                                                                key={product.id}
                                                                                className="flex flex-col items-start sm:flex-row sm:items-center gap-3 p-3 bg-white"
                                                                            >

                                                                                <div className="aspect-[3/4] w-16 shrink-0 rounded-md overflow-hidden">
                                                                                    <img
                                                                                        src={
                                                                                            product.images?.[0]?.url
                                                                                        }
                                                                                        alt={
                                                                                            product.name
                                                                                        }
                                                                                        className="w-full h-full object-cover"
                                                                                    />
                                                                                </div>

                                                                                <div className="flex flex-col gap-1 min-w-0 flex-1">
                                                                                    <h4 className="text-sm text-[#252B42] line-clamp-2">
                                                                                        {product.name}
                                                                                    </h4>

                                                                                    <p className="text-xs text-[#737373] line-clamp-2">
                                                                                        {product.description}
                                                                                    </p>
                                                                                </div>
                                                                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center w-full sm:w-[25%]">

                                                                                    <div className="text-sm text-start sm:text-center w-full sm:w-1/2">
                                                                                        <span className="sm:hidden">
                                                                                            Quantity:{" "}
                                                                                        </span>

                                                                                        <span>
                                                                                            {product.count}
                                                                                        </span>
                                                                                    </div>

                                                                                    <div className="text-sm  text-start sm:text-center text-[#23A6F0] w-full sm:w-1/2">
                                                                                        <span>
                                                                                            ${product.price.toFixed(2)}
                                                                                        </span>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    )}

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}

                            </div>

                            {/* Footer */}
                            <div className="border-t border-[#D6EEF9] bg-[#F5FBFE]">
                                <div className="flex items-center justify-between py-2 px-3">
                                    <h4 className="font-normal text-[#252B42]">
                                        {orders.length} orders
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            ) : (
                <section className="bg-[#FAFAFA] py-8">
                    <div className="layout-flex flex-col gap-6">
                        <div className="layout-flex items-center justify-center gap-2.5">

                            <Package className="w-10 h-10 text-[#737373] opacity-70" />

                            <h4 className="text-lg text-[#252B42] text-center">
                                No previous orders
                            </h4>

                            <p className="text-sm text-[#737373] text-center">
                                You haven't placed any orders yet.
                            </p>

                            <button
                                onClick={() => history.push("/shop")}
                                className="text-white bg-[#23A6F0] hover:bg-[#1d91d1] transition-colors duration-300 cursor-pointer px-6 py-3 rounded-sm"
                            >
                                Start Shopping
                            </button>

                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default PreviousOrdersPage;