import { useEffect, useState } from "react";
import AddressCard from "./AddressCard";
import AddressFormModal from "./AdressFormModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddressList } from "../store/actions/clientActions";
import { setAddress, setBillingAddress } from "../store/actions/shoppingCartActions";

function Address() {
    const [sameAddress, setSameAddress] = useState(true);
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);

    const selectedAddress = useSelector(
        (state) => state.shoppingCart.address
    );
    const selectedBillingAddress = useSelector(
        (state) => state.shoppingCart.billingAddress
    );

    const addressList = useSelector(state => state.client.addressList)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAddressList())
    }, [dispatch]);

    useEffect(() => {
        if (sameAddress && selectedAddress?.id) {
            dispatch(setBillingAddress(selectedAddress));
        }
    }, [sameAddress, selectedAddress, dispatch]);

    return (
        <>
            <div className="flex flex-row gap-2 border border-[#D6EEF9] bg-white rounded-sm w-full p-4">
                <div className="w-5 h-5 bg-[#23A6F0] text-white rounded-full flex items-center justify-center font-bold mt-0.5 shrink-0">
                    i
                </div>

                <p className="font-normal">
                    For corporate invoiced purchases, uncheck "Send My Invoice to
                    the Same Address" and select your registered Corporate Invoice
                    Address as the billing address.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 border border-[#D6EEF9] w-full bg-white rounded-sm p-4">
                    <div className="flex flex-row items-center justify-between w-full">
                        <h3 className="text-lg">Delivery Address</h3>

                        <div className="flex gap-2 items-center">
                            <input
                                id="bill"
                                type="checkbox"
                                checked={sameAddress}
                                onChange={(e) =>
                                    setSameAddress(e.target.checked)}
                                className="w-4 h-4"
                            />

                            <label
                                htmlFor="bill"
                                className="font-normal text-sm"
                            >
                                Send My Invoice to the Same Address
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <div
                            onClick={() => setIsAddressModalOpen(true)}
                            className="flex flex-col items-center justify-center w-full md:w-[calc(50%-4px)] border border-[#D6EEF9] rounded-sm bg-[#FAFAFA] py-10 cursor-pointer hover:border-[#23A6F0] transition-colors">
                            <span className="text-[#23A6F0] text-lg">+</span>
                            <h3>Add New Address</h3>
                        </div>

                        {addressList.map((address) => (
                            <AddressCard
                                type="delivery"
                                key={address.id}
                                address={address}
                                selected={selectedAddress?.id === address.id}
                                onSelect={() => {
                                    dispatch(setAddress(address));
                                }}
                                onEdit={() => {
                                    setEditingAddress(address);
                                    setIsAddressModalOpen(true);
                                }}
                            />
                        ))}
                    </div>
                </div>

                {!sameAddress && (
                    <div className="flex flex-col gap-2 border border-[#D6EEF9] w-full bg-white rounded-sm p-4">
                        <div className="flex flex-col items-start w-full gap-2">
                            <h3 className="text-lg">Billing Address</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {addressList.map((address) => (
                                <AddressCard
                                    type="billing"
                                    key={address.id}
                                    address={address}
                                    selected={selectedBillingAddress.id === address.id}
                                    onSelect={() => {
                                        dispatch(setBillingAddress(address));
                                    }}
                                    onEdit={() => {
                                        setEditingAddress(address);
                                        setIsAddressModalOpen(true);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {isAddressModalOpen && (
                    <AddressFormModal
                        address={editingAddress}
                        onClose={() => {
                            setIsAddressModalOpen(false);
                            setEditingAddress(null);
                        }}
                    />
                )}
            </div>
        </>
    );
}

export default Address;