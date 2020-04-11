import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "x-access-token": localStorage.getItem("token"),
  },
});
