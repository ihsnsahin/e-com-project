import { useState } from "react";
import { useSelector } from "react-redux";
import Address from "../components/Address";
import Payment from "../components/Payment";
import PayModal from "../components/PayModal";

function CreateOrderPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isPayModalOpen, setIsPayModalOpen] = useState(false);
    const selectedAddress = useSelector(
        (state) => state.shoppingCart.address
    );

    const selectedBillingAddress = useSelector(
        (state) => state.shoppingCart.billingAddress
    );

    const selectedCard = useSelector((state) => state.shoppingCart.payment);
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
    const cart = useSelector((state) => state.shoppingCart.cart);
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



    const handleContinue = () => {
        if (currentStep === 1) {
            setCurrentStep(2);
        }
        if (currentStep === 2) {
            setIsPayModalOpen(true);
        }
    };


    const hasAddress = selectedAddress?.id && selectedBillingAddress?.id;

    const canContinue =
        currentStep === 1
            ? hasAddress
            : hasAddress && selectedCard?.id;


    return (
        <section className="bg-[#FAFAFA] py-8" >
            <div className="layout-flex items-start md:flex-row w-full gap-6">
                <div className="flex flex-col gap-2 flex-1 overflow-hidden w-full ">
                    <div className="flex">
                        <div
                            onClick={() => setCurrentStep(1)}
                            className={`flex flex-col gap-2 border border-[#D6EEF9] border-b-3 rounded-sm w-1/2 p-4 opacity-40  ${currentStep === 1 && "opacity-100 bg-white border-b-[#23A6F0] border-b-3 min-w-0"} `}>
                            <h2 className={`text-lg font-medium ${currentStep === 1 && "text-[#23A6F0]"}`}>Adres Bilgileri</h2>
                            <p className="font-normal line-clamp-3">
                                {selectedAddress?.id
                                    ? `${selectedAddress.title} - ${selectedAddress.address}, ${selectedAddress.neighborhood}, ${selectedAddress.district} / ${selectedAddress.city}`
                                    : "Adres seçin"}
                            </p>
                        </div>
                        <div
                            className={`flex flex-col gap-2 border border-[#D6EEF9]  border-b-3 rounded-sm w-1/2 p-4 opacity-40  ${currentStep === 2 && "opacity-100 bg-white border-b-[#23A6F0] border-b-3"} `}>
                            <h2 className={`text-lg font-medium ${currentStep === 2 && "text-[#23A6F0]"}`}>Ödeme Seçenekleri</h2>
                            <p className="font-normal">
                                {selectedCard?.card_no
                                    ? `${getCardType(selectedCard.card_no)} •••• ${selectedCard.card_no.slice(-4)}`
                                    : "Banka/Kredi Kartı ile güvenle ödeyin"}
                            </p>
                        </div>
                    </div>
                    {currentStep === 1 && <Address />}
                    {currentStep === 2 && <Payment />}
                </div>
                <div className="flex flex-col gap-4 w-full md:max-w-[30%] md:sticky md:top-40 md:self-start">
                    <button
                        onClick={handleContinue}
                        disabled={!canContinue}
                        className={`text-white py-3 rounded-sm w-full transition-colors duration-300 ${canContinue
                            ? "bg-[#23A6F0] hover:bg-[#1d91d1] cursor-pointer"
                            : "bg-gray-300 cursor-not-allowed"
                            }`}
                    >
                        {currentStep === 2 ? "Make a Payment" : "Save and Continue"}
                    </button>
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
                        onClick={handleContinue}
                        disabled={!canContinue}
                        className={`text-white py-3 rounded-sm w-full transition-colors duration-300 ${canContinue
                            ? "bg-[#23A6F0] hover:bg-[#1d91d1] cursor-pointer"
                            : "bg-gray-300 cursor-not-allowed"
                            }`}
                    >
                        {currentStep === 2 ? "Make a Payment" : "Save and Continue"}
                    </button>
                </div>
            </div>
            {isPayModalOpen &&
                <PayModal
                    cart={cart}
                    address={selectedAddress}
                    card={selectedCard}
                    total={grandTotal}
                    onClose={() => setIsPayModalOpen(false)}
                />
            }
        </section >)
}
export default CreateOrderPage;