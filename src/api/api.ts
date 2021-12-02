import axios from "axios";

export const api = axios.create({
  baseURL: "https://reactlabapi.herokuapp.com/api/",
});
