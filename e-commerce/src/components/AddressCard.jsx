import { SquarePen, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteFromAddressList } from "../store/actions/clientActions";

function AddressCard({ type, address, selected, onSelect, onEdit }) {
    const dispatch = useDispatch();
    const handleDeleteFromAddressList = (addressId) => {
        dispatch(deleteFromAddressList(addressId))
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
                checked={selected}
                onChange={onSelect}
                name={
                    type === "delivery"
                        ? "deliveryAddress"
                        : "billingAddress"
                }
                className="sr-only"
            />

            <div className="flex items-center justify-between w-full">
                <h3 className="font-medium">
                    {address.title}
                </h3>

                <div className="flex items-center gap-1">
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
                            handleDeleteFromAddressList(address.id);
                        }}
                        className="text-[#737373] hover:text-red-500 transition-colors duration-300 cursor-pointer"
                    >
                        <Trash className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-1 font-normal text-[#737373]">
                <p>
                    {address.name} {address.surname}
                </p>

                <p>{address.phone}</p>
            </div>

            <div className="flex flex-col gap-1 font-normal text-[#737373]">
                <p>
                    {address.district} / {address.city}
                </p>

                <p>{address.neighborhood}</p>
            </div>
        </label>
    );
}

export default AddressCard;