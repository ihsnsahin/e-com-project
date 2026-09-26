import axios from "axios";

export const API = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com"
})
export const MYAPI = axios.create({
    baseURL: "http://localhost:8080"
})