import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
    addToCreditCards,
    updateCreditCards
} from "../store/actions/clientActions";

function CardFormModal({ card, onClose }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid }
    } = useForm({
        mode: "onChange",
        defaultValues: {
            card_no: card?.card_no || "",
            name_on_card: card?.name_on_card || "",
            expire_month: card?.expire_month || "",
            expire_year: card?.expire_year || ""
        }
    });

    const dispatch = useDispatch();

    const addNewCard = async (data) => {
        try {
            await dispatch(addToCreditCards(data));
            onClose();
        } catch (error) {
            console.error("Failed to add card:", error);
        }
    };

    const updateCard = async (data) => {
        try {
            await dispatch(
                updateCreditCards({
                    ...data,
                    id: card.id
                })
            );
            onClose();
        } catch (error) {
            console.error("Failed to update card:", error);
        }
    };

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
            <div className="flex flex-col gap-6 w-full max-w-xl rounded-xl bg-white p-4 mx-2">

                <div className="flex items-center justify-between">
                    <h3 className="text-xl">
                        {card ? "Edit Card" : "Add New Card"}
                    </h3>

                    <button
                        type="button"
                        onClick={onClose}
                        className="transition-colors duration-300 cursor-pointer opacity-70 hover:opacity-100"
                    >
                        <X />
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit(
                        card ? updateCard : addNewCard
                    )}
                    className="flex flex-col w-full items-start justify-center gap-5"
                >
                    {/* Card Number */}
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="card_no">
                            Card Number
                        </label>

                        <input
                            id="card_no"
                            type="text"
                            placeholder="1234 1234 1234 1234"
                            maxLength={16}
                            {...register("card_no", {
                                required: "Card number is required"
                            })}
                            className="text-[#737373] font-medium px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                        />

                        {errors.card_no && (
                            <span className="text-sm text-red-500">
                                {errors.card_no.message}
                            </span>
                        )}
                    </div>

                    {/* Name on Card */}
                    <div className="flex flex-col w-full gap-2">
                        <label
                            htmlFor="name_on_card"
                            className="font-medium"
                        >
                            Name on Card
                        </label>

                        <input
                            id="name_on_card"
                            type="text"
                            placeholder="Name on card"
                            {...register("name_on_card", {
                                required: "Name is required"
                            })}
                            className="text-[#737373] font-medium px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                        />

                        {errors.name_on_card && (
                            <span className="text-sm text-red-500">
                                {errors.name_on_card.message}
                            </span>
                        )}
                    </div>

                    {/* Month & Year */}
                    <div className="flex flex-wrap gap-2 w-full">

                        {/* Month */}
                        <div className="flex flex-col w-full md:w-[calc(50%-4px)] gap-2">
                            <label
                                htmlFor="expire_month"
                                className="font-medium"
                            >
                                Month
                            </label>

                            <select
                                id="expire_month"
                                {...register("expire_month", {
                                    required: "Expire month is required"
                                })}
                                className="font-normal border border-[#D6EEF9] rounded-sm p-3 focus:outline-none focus:border-[#1d91d1]"
                            >
                                <option value="">Month</option>

                                {Array.from(
                                    { length: 12 },
                                    (_, index) => (
                                        <option
                                            key={index + 1}
                                            value={index + 1}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </option>
                                    )
                                )}
                            </select>

                            {errors.expire_month && (
                                <span className="text-sm text-red-500">
                                    {errors.expire_month.message}
                                </span>
                            )}
                        </div>

                        {/* Year */}
                        <div className="flex flex-col w-full md:w-[calc(50%-4px)] gap-2">
                            <label
                                htmlFor="expire_year"
                                className="font-medium"
                            >
                                Year
                            </label>

                            <select
                                id="expire_year"
                                {...register("expire_year", {
                                    required: "Expire year is required"
                                })}
                                className="font-normal border border-[#D6EEF9] rounded-sm p-3 focus:outline-none focus:border-[#1d91d1]"
                            >
                                <option value="">Year</option>

                                {Array.from(
                                    { length: 10 },
                                    (_, index) => {
                                        const year =
                                            new Date().getFullYear() + index;

                                        return (
                                            <option
                                                key={year}
                                                value={year}
                                            >
                                                {year}
                                            </option>
                                        );
                                    }
                                )}
                            </select>

                            {errors.expire_year && (
                                <span className="text-sm text-red-500">
                                    {errors.expire_year.message}
                                </span>
                            )}
                        </div>
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
                            disabled={!isDirty || !isValid}
                            className={`px-6 py-2 rounded-sm font-medium transition-colors ${!isDirty || !isValid
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "text-white bg-[#23A6F0] hover:bg-[#1d91d1] cursor-pointer"
                                }`}
                        >
                            {card ? "Update" : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CardFormModal;