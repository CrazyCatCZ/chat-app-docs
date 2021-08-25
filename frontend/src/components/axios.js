import axios from "axios";

//const BASE_URL = "127.0.0.1:8000";

export const axiosInstance = axios.create({
  baseURL: "127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
