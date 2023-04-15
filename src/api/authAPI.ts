import api from "./api";

const login = (email: string, password: string) => {
  return api.post("/auth/login", { email, password });
};

const refresh = (refreshToken: string) => {
  return api.post("/auth/refresh", { refreshToken });
};

export default {
  login,
  refresh,
};
