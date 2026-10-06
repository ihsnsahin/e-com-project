import axios from "axios";

export const API = axios.create({
    baseURL: import.meta.env.VITE_API2_URL
});

export const MYAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});