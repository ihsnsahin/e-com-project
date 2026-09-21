import { toast } from "react-toastify";

import { API } from "../../services/api";

export const SET_USER = "SET_USER";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";
export const SET_CREDIT_CARDS = "SET_CREDIT_CARDS";
export const ADD_CREDIT_CARD = "ADD_CREDIT_CARD";
export const UPDATE_CREDIT_CARD = "UPDATE_CREDIT_CARD";
export const DELETE_CREDIT_CARD = "DELETE_CREDIT_CARD";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_ORDERS = "SET_ORDERS";

export const setUser = (user) => {
    return { type: SET_USER, payload: user }
}
export const setAddressList = (addressList) => {
    return { type: SET_ADDRESS_LIST, payload: addressList };
};
export const addAddress = (address) => {
    return { type: ADD_ADDRESS, payload: address };
};
export const deleteAddress = (addressId) => {
    return { type: DELETE_ADDRESS, payload: addressId };
};
export const updateAddress = (address) => {
    return { type: UPDATE_ADDRESS, payload: address };
};
export const setCreditCards = (creditCards) => {
    return { type: SET_CREDIT_CARDS, payload: creditCards };
};
export const addCreditCard = (creditCard) => {
    return { type: ADD_CREDIT_CARD, payload: creditCard };
};
export const updateCreditCard = (creditCard) => {
    return { type: UPDATE_CREDIT_CARD, payload: creditCard };
};
export const deleteCreditCard = (creditCardId) => {
    return { type: DELETE_CREDIT_CARD, payload: creditCardId };
};
export const setRoles = (roles) => {
    return { type: SET_ROLES, payload: roles };
};

export const setTheme = (theme) => {
    return { type: SET_THEME, payload: theme };
};

export const setLanguage = (language) => {
    return { type: SET_LANGUAGE, payload: language };
};
export const setOrders = (orders) => {
    return { type: SET_ORDERS, payload: orders };
};

export const fetchRoles = () => (dispatch) => {
    API.get("/roles").then(
        (response) => {
            dispatch(setRoles(response.data))
        }
    ).catch(
        (error) => { console.log(error) }
    )
}

export const logUser = (data) => (dispatch) => {
    const payload = {
        email: data.email,
        password: data.password,
    };
    return API.post("/login", payload)
        .then(
            (response) => {
                const user = response.data
                dispatch(setUser(user));
                if (user.token) {
                    API.defaults.headers.common["Authorization"] = user.token;
                    if (data.remember) {
                        localStorage.setItem("token", user.token);
                    }
                }
                toast.success("Successfully logged in!");
                return user;
            }
        ).catch(
            (error) => {
                const errorMsg = error.response?.data?.message || "Login failed! Incorrect email or password.";
                toast.error(errorMsg);
                throw error;
            }
        )
}

export const logout = () => (dispatch) => {
    delete API.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
    dispatch(setUser({}));
    toast.success("Successfully logged out!");
};

export const verifyUser = () => (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;
    API.defaults.headers.common["Authorization"] = token;
    API.get("/verify").then((response) => {
        const user = response.data
        dispatch(setUser(user));
        //Yanıtta gelen token ile bilgilerimizi güncelliyoruz.
        API.defaults.headers.common["Authorization"] = user.token;
        localStorage.setItem("token", user.token)
    })
        .catch((error) => {
            console.error("Token could not be verified or has expired.", error);
            dispatch(setUser(null));
            delete API.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
        });
}
export const fetchAddressList = () => (dispatch) => {
    API.get("/user/address")
        .then((response) => {
            dispatch(setAddressList(response.data));
        })
        .catch((error) => console.log(error));
};

export const addToAddressList = (address) => (dispatch) => {
    return API.post("/user/address", address)
        .then((response) => {
            dispatch(addAddress(response.data[0]));
            return response.data[0];
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};
export const deleteFromAddressList = (addressId) => (dispatch) => {
    return API.delete(`/user/address/${addressId}`)
        .then(() => {
            dispatch(deleteAddress(addressId));
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};
export const updateAddressList = (address) => (dispatch) => {
    return API.put("/user/address", address)
        .then((response) => {
            dispatch(updateAddress(response.data[0]));
            return response.data[0];
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};

export const fetchCreditCards = () => (dispatch) => {
    API.get("/user/card")
        .then((response) => {
            dispatch(setCreditCards(response.data));
        })
        .catch((error) => console.log(error));
};
export const addToCreditCards = (creditCard) => (dispatch) => {
    return API.post("/user/card", creditCard)
        .then((response) => {
            dispatch(addCreditCard(response.data[0]));
            return response.data[0];
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};
export const deleteFromCreditCards = (creditCardId) => (dispatch) => {
    return API.delete(`/user/card/${creditCardId}`)
        .then(() => {
            dispatch(deleteCreditCard(creditCardId));
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};
export const updateCreditCards = (creditCard) => (dispatch) => {
    return API.put("/user/card", creditCard)
        .then((response) => {
            dispatch(updateCreditCard(response.data[0]));
            return response.data[0];
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};
export const fetchOrders = () => (dispatch) => {
    API.get("/order").then(
        (response) => {
            dispatch(setOrders(response.data))
        }
    ).catch(
        (error) => { console.log(error) }
    )
}
