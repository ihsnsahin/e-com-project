import { X } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
    addToAddressList,
    updateAddressList,
} from "../store/actions/clientActions";

const cities = [
    "İstanbul",
    "Ankara",
    "İzmir",
    "Bursa",
    "Antalya",
    "Adana",
    "Konya",
    "Gaziantep",
    "Mersin",
    "Kayseri",
    "Eskişehir",
    "Samsun",
    "Trabzon",
    "Ordu",
    "Diyarbakır",
    "Erzurum",
    "Malatya",
    "Denizli",
    "Şanlıurfa",
    "Kocaeli",
    "Van"
];

function AddressFormModal({ address, onClose }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid }
    } = useForm({
        mode: "onChange",
        defaultValues:
        {
            title: address?.title || "",
            name: address?.name || "",
            surname: address?.surname || "",
            phone: address?.phone || "",
            city: address?.city || "",
            district: address?.district || "",
            neighborhood: address?.neighborhood || "",
            address: address?.address || ""
        }
    });

    const dispatch = useDispatch();


    const addNewAddress = async (data) => {
        try {
            await dispatch(addToAddressList(data));
            onClose();
        } catch (error) {
            console.error("Failed to add address:", error);
        }
    };

    const updateAddress = async (data) => {
        try {
            await dispatch(
                updateAddressList({
                    ...data,
                    id: address.id
                })
            );
            onClose();
        } catch (error) {
            console.error("Failed to update address:", error);
        }
    };

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
            <div className="flex flex-col gap-6 w-full max-w-xl rounded-xl bg-white p-4 mx-2">

                <div className="flex items-center justify-between">
                    <h3 className="text-xl">
                        {address ? "Edit Address" : "Add New Address"}
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
                        address ? updateAddress : addNewAddress
                    )}
                    className="flex flex-col w-full items-start justify-center gap-5"
                >
                    {/* Address Title */}
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="title" className="font-medium">
                            Address Title
                        </label>

                        <input
                            id="title"
                            type="text"
                            placeholder="e.g Home, Work"
                            {...register("title", {
                                required: "Address title is required"
                            })}
                            className="text-[#737373] font-medium px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                        />

                        {errors.title && (
                            <span className="text-sm text-red-500">
                                {errors.title.message}
                            </span>
                        )}
                    </div>

                    {/* Name & Surname */}
                    <div className="flex flex-wrap gap-2 w-full">
                        <div className="flex flex-col w-full md:w-[calc(50%-4px)] gap-2">
                            <label htmlFor="name" className="font-medium">
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                {...register("name", {
                                    required: "Name is required"
                                })}
                                className="text-[#737373] font-medium px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                            />

                            {errors.name && (
                                <span className="text-sm text-red-500">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col w-full md:w-[calc(50%-4px)] gap-2">
                            <label htmlFor="surname" className="font-medium">
                                Surname
                            </label>

                            <input
                                id="surname"
                                type="text"
                                placeholder="Your surname"
                                {...register("surname", {
                                    required: "Surname is required"
                                })}
                                className="text-[#737373] font-medium px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                            />

                            {errors.surname && (
                                <span className="text-sm text-red-500">
                                    {errors.surname.message}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="phone" className="font-medium">
                            Phone
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            placeholder="0 5XX XXX XX XX"
                            {...register("phone", {
                                required: "Phone is required"
                            })}
                            className="text-[#737373] font-medium px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                        />

                        {errors.phone && (
                            <span className="text-sm text-red-500">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>

                    {/* City & District */}
                    <div className="flex flex-wrap gap-2 w-full">
                        <div className="flex flex-col w-full md:w-[calc(50%-4px)] gap-2">
                            <label htmlFor="city" className="font-medium">
                                City
                            </label>

                            <select
                                id="city"
                                {...register("city", {
                                    required: "City is required"
                                })}
                                className="text-[#737373] font-medium px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full bg-white"
                            >
                                <option value="" disabled>
                                    Select a city
                                </option>

                                {cities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>

                            {errors.city && (
                                <span className="text-sm text-red-500">
                                    {errors.city.message}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col w-full md:w-[calc(50%-4px)] gap-2">
                            <label htmlFor="district" className="font-medium">
                                District
                            </label>

                            <input
                                id="district"
                                type="text"
                                placeholder="District"
                                {...register("district", {
                                    required: "District is required"
                                })}
                                className="text-[#737373] font-medium px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                            />

                            {errors.district && (
                                <span className="text-sm text-red-500">
                                    {errors.district.message}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Neighborhood */}
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="neighborhood" className="font-medium">
                            Neighborhood
                        </label>

                        <textarea
                            id="neighborhood"
                            placeholder="Neighborhood"
                            {...register("neighborhood", {
                                required: "Neighborhood is required"
                            })}
                            className="text-[#737373] font-medium px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full resize-none"
                        />

                        {errors.neighborhood && (
                            <span className="text-sm text-red-500">
                                {errors.neighborhood.message}
                            </span>
                        )}
                    </div>

                    {/* Address */}
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="address" className="font-medium">
                            Address
                        </label>

                        <textarea
                            id="address"
                            placeholder="Street, building number, apartment number..."
                            rows="3"
                            {...register("address", {
                                required: "Address is required"
                            })}
                            className="text-[#737373] font-medium px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full resize-none"
                        />

                        {errors.address && (
                            <span className="text-sm text-red-500">
                                {errors.address.message}
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
                            disabled={!isDirty || !isValid}
                            className={`px-6 py-2 rounded-sm font-medium transition-colors ${!isDirty || !isValid
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "text-white bg-[#23A6F0] hover:bg-[#1d91d1] cursor-pointer"
                                }`}
                        >
                            {address ? "Update" : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddressFormModal;