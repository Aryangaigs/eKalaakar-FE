import axios from "axios";

const api = axios.create({
    baseURL: "https://ekalaakar-be.onrender.com/api"
});

export default api;