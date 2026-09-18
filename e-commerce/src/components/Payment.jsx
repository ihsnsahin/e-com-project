import { CreditCard } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCreditCards } from "../store/actions/clientActions";
import CardFormModal from "./CardFormModal";

function Payment() {
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCreditCards());
    }, [dispatch]);
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 border border-[#D6EEF9] w-full bg-white rounded-sm p-4">
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex gap-2 items-center">
                        <CreditCard className="w-6 h-6" />
                        <h3 className="text-lg">Credit Cards</h3>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsCardModalOpen(true)}
                        className="flex gap-2 items-center text-white bg-[#23A6F0] px-4 py-2 rounded-sm font-medium transition-colors hover:bg-[#1d91d1] cursor-pointer">
                        <span>+</span>
                        <h3>Add Card</h3>
                    </button>
                </div>
            </div>
            {isCardModalOpen && (
                <CardFormModal
                    onClose={() => {
                        setIsCardModalOpen(false);
                    }}
                />
            )}
        </div>
    )
}
export default Payment;