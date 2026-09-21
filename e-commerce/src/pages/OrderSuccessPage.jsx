import { CircleCheckBig } from "lucide-react";
import { Redirect, useHistory, useLocation } from "react-router-dom";

function OrderSuccessPage() {
    const history = useHistory();
    const location = useLocation();
    const order = location.state?.order;

    if (!order) {
        return <Redirect to="/" />;
    }

    return (
        <section className="bg-white py-8">
            <div className="layout-flex flex-col gap-6">
                <div className="layout-flex flex-col items-center justify-center gap-2.5">
                    <CircleCheckBig className="w-12 h-12 text-[#23A6F0]" />

                    <h2 className="text-4xl text-[#252B42] text-center max-w-2xs sm:max-w-sm">
                        Order Confirmed!
                    </h2>

                    <h4 className="text-lg text-[#737373] font-normal text-center">
                        Thank you for your purchase. Your order has been successfully created.
                    </h4>

                    <div className="flex flex-col gap-4 w-full md:max-w-[60%] border border-[#D6EEF9] rounded-xl bg-[#FAFAFA] p-4">
                        <h3 className="text-base text-[#252B42] mb-2 text-center">
                            Order Details
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <div className="flex flex-col items-start justify-between w-full gap-2">
                                <h4 className="font-normal text-[#737373]">
                                    Total Amount
                                </h4>
                                <h4 className="font-medium text-[#23A6F0]">
                                    ${order.price.toFixed(2)}
                                </h4>
                            </div>

                            <div className="flex flex-col items-start justify-between w-full gap-2">
                                <h4 className="font-normal text-[#737373]">
                                    Order Number
                                </h4>
                                <h4 className="font-medium text-[#252B42]">
                                    {order.id}
                                </h4>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <div className="flex flex-col items-start justify-between w-full gap-2">
                                <h4 className="font-normal text-[#737373]">
                                    Order Date
                                </h4>
                                <h4 className="font-medium text-[#252B42]">
                                    {new Date(order.order_date).toLocaleDateString()}
                                </h4>
                            </div>

                            <div className="flex flex-col items-start justify-between w-full gap-2">
                                <h4 className="font-normal text-[#737373]">
                                    Status
                                </h4>
                                <h4 className="font-medium text-[#23A6F0]">
                                    Confirmed
                                </h4>
                            </div>
                        </div>

                    </div>
                    <h3 className="text-lg text-[#252B42] max-w-2xs sm:max-w-sm">
                        What's Next?
                    </h3>

                    <p className="text-base text-[#737373] font-normal text-center">
                        Your order is being processed. We'll notify you when it's ready to ship.
                    </p>
                    <button
                        onClick={() => history.push("/shop")}
                        className="text-white bg-[#23A6F0] hover:bg-[#1d91d1] transition-colors duration-300 cursor-pointer px-6 py-3 rounded-sm"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </section>
    );
}

export default OrderSuccessPage;