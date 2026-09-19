import { CreditCard, SquarePen, Trash } from "lucide-react";
import { deleteFromCreditCards } from "../store/actions/clientActions";
import { useDispatch } from "react-redux";

function Card({ card, selected, onSelect, onEdit }) {
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

    const dispatch = useDispatch();

    const handleDeleteFromCreditCards = (creditCardId) => {
        dispatch(deleteFromCreditCards(creditCardId))
    }
    return (
        <label
            className={`flex flex-col items-start justify-start w-full md:w-[calc(50%-4px)] gap-2 rounded-sm bg-[#FAFAFA] cursor-pointer p-4 transition-colors ${selected
                ? "border-2 border-[#23A6F0] bg-white"
                : "border border-[#D6EEF9] hover:border-[#23A6F0]"
                }`}
        >
            <input
                type="radio"
                name="card"
                checked={selected}
                onChange={onSelect}
                className="sr-only"
            />

            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <h3>{getCardType(card.card_no)}</h3>
                    <h3 className="font-medium">•••• {card.card_no.slice(12)}</h3>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit();
                        }}
                        className="text-[#737373] hover:text-[#23A6F0] transition-colors duration-300 cursor-pointer"
                    >
                        <SquarePen className="w-4 h-4" />
                    </button>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteFromCreditCards(card.id);
                        }}
                        className="text-[#737373] hover:text-red-500 transition-colors duration-300 cursor-pointer"
                    >
                        <Trash className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-1 font-normal text-[#737373]">
                <p>
                    {card.name_on_card}
                </p>

                <p>Expires: {String(card.expire_month).padStart(2, "0")}/{card.expire_year}</p>
            </div>
        </label>
    )
}
export default Card;