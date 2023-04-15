import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/auth/refresh`,
          {
            token: localStorage.getItem("refresh_token"),
          }
        );
        const { access_token } = response.data;
        localStorage.setItem("access_token", access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
        return api(originalRequest);
      } catch (err) {
        // handle refresh token error
        // redirect to login page or show error message
      }
    }
    return Promise.reject(error);
  }
);

export default api;
