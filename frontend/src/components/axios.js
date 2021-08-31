import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://127.0.0.1:8000";
let config = {};

// To avoid 401 in login if token is invalid
if (Cookies.get("token")) {
  config = {
    Authorization: `Token ${Cookies.get("token")}`,
    "Content-Type": "application/json",
    accept: "application/json",
  };
} else {
  config = {
    "Content-Type": "application/json",
    accept: "application/json",
  };
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: config,
});
