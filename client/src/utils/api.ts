import axios from "axios";
import config from "../environments/config";

const api = axios.create({
  baseURL: config.apiUrl,
});

export default api;
