export const setToken = (token) => localStorage.setItem("access_token", token);

export const getToken = () => localStorage.getItem("access_token");
