import axios from "axios";

// create an axios instance
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// interceptors
axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("userToken")}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("TOKEN");
      window.location.reload();
      return error;
    }
    throw error;
  }
);

export default axiosClient;
