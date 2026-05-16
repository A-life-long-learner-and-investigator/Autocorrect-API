import axios from "axios";

export const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const correctWord = async (word) => {
  const res = await API.post("/correct", { word });
  return res.data;
};