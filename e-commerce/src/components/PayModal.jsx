import { CreditCard, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createOrder, resetCheckout } from "../store/actions/shoppingCartActions";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function PayModal({ cart, address, card, total, onClose }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        mode: "onChange"
    });
    const dispatch = useDispatch();
    const history = useHistory();

    const getCardType = (cardNo) => {
        if (cardNo.startsWith("4")) {
            return "Visa";
        }

        if (
            cardNo.startsWith("51") ||
            cardNo.startsWith("52") ||
            cardNo.startsWith("53") ||
            cardNo.startsWith("54") ||
            cardNo.startsWith("55")
        ) {
            return "Mastercard";
        }

        if (
            cardNo.startsWith("34") ||
            cardNo.startsWith("37")
        ) {
            return "American Express";
        }

        if (cardNo.startsWith("9792")) {
            return "TROY";
        }

        return "Unknown";
    };

    const handlePayment = async (data) => {
        const orderData = {
            address_id: address.id,
            order_date: new Date().toISOString(),
            card_no: card.card_no,
            card_name: card.name_on_card,
            card_expire_month: card.expire_month,
            card_expire_year: card.expire_year,
            card_ccv: data.card_ccv,
            price: total,
            products: cart
                .filter((item) => item.checked)
                .map((item) => ({
                    product_id: item.product.id,
                    count: item.count
                }))
        };
        try {
            const order = await dispatch(createOrder(orderData));
            dispatch(resetCheckout());
            onClose();
            toast.success("Order created successfully!");
            history.push("/order-success", { order });
        } catch (error) {
            console.error("Order creation failed:", error);
        }
    };

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
            <div className="flex flex-col gap-6 w-full max-w-xl rounded-xl bg-white p-4 mx-2">

                <div className="flex items-center justify-between">
                    <h3 className="text-xl">
                        Payment
                    </h3>

                    <button
                        type="button"
                        onClick={onClose}
                        className="transition-colors duration-300 cursor-pointer opacity-70 hover:opacity-100"
                    >
                        <X />
                    </button>
                </div>

                {/* Selected Card */}
                <div className="flex flex-col gap-2 border border-[#D6EEF9] rounded-sm p-4">
                    <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />

                        <span className="font-medium">
                            {getCardType(card.card_no)}
                        </span>

                        <span>
                            •••• {card.card_no.slice(-4)}
                        </span>
                    </div>

                    <p className="text-[#737373] font-normal">
                        {card.name_on_card}
                    </p>

                    <p className="text-[#737373] font-normal">
                        Expires:{" "}
                        {String(card.expire_month).padStart(2, "0")}/
                        {card.expire_year}
                    </p>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between border-y border-[#D6EEF9] py-4">
                    <span className="text-lg">
                        Total
                    </span>

                    <span className="text-xl font-medium text-[#23A6F0]">
                        ${total.toFixed(2)}
                    </span>
                </div>

                <form
                    onSubmit={handleSubmit(handlePayment)}
                    className="flex flex-col w-full items-start justify-center gap-5"
                >
                    {/* CCV */}
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="card_ccv">
                            CCV
                        </label>

                        <input
                            id="card_ccv"
                            type="text"
                            inputMode="numeric"
                            maxLength={3}
                            placeholder="123"
                            {...register("card_ccv", {
                                required: "Card CCV is required",
                                pattern: {
                                    value: /^\d{3}$/,
                                    message: "CCV must be 3 digits"
                                }
                            })}
                            className="text-[#737373] font-medium px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                        />

                        {errors.card_ccv && (
                            <span className="text-sm text-red-500">
                                {errors.card_ccv.message}
                            </span>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex w-full items-center justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-white border font-medium border-[#D6EEF9] transition-colors duration-300 hover:bg-gray-50 cursor-pointer px-6 py-2 rounded-sm"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`px-6 py-2 rounded-sm font-medium transition-colors ${!isValid
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "text-white bg-[#23A6F0] hover:bg-[#1d91d1] cursor-pointer"
                                }`}
                        >
                            Pay ${total.toFixed(2)}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PayModal;