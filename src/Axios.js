import axios from "axios";

// axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.baseURL = "https://meal-server.herokuapp.com";
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const auth = token ? `Bearer ${token}` : "";
    config.headers.common["Authorization"] = auth;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axios;
