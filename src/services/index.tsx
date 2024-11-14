import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

const options = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export const API = axios.create({
  baseURL: "https://api.themoviedb.org/",
  ...options,
});
