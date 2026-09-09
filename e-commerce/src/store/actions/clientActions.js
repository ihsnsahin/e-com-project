import { toast } from "react-toastify";
import useLocalStorage from "../../hooks/useLocalStorage";
import { API } from "../../services/api";

export const SET_USER = "SET_USER";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
export const SET_CREDIT_CARDS = "SET_CREDIT_CARDS";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setUser = (user) => {
    return { type: SET_USER, payload: user }
}
export const setAddressList = (addressList) => {
    return { type: SET_ADDRESS_LIST, payload: addressList };
};

export const setCreditCards = (creditCards) => {
    return { type: SET_CREDIT_CARDS, payload: creditCards };
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
                toast.success("Başarıyla giriş yapıldı!");
                return user;
            }
        ).catch(
            (error) => {
                const errorMsg = error.response?.data?.message || "Giriş başarısız! E-posta veya şifre hatalı.";
                toast.error(errorMsg);
                throw error;
            }
        )
}
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
            console.error("Token doğrulanamadı veya süresi dolmuş:", error);
            dispatch(setUser(null));
            delete API.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
        });
}