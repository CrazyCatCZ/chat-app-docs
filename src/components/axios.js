import axios from "axios";
import Cookies from "js-cookie";

let config = {};
const FULL_URL = process.env.REACT_APP_FULL_URL;

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
  baseURL: FULL_URL,
  headers: config,
});
