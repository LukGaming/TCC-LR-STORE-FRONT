import axios from "axios";
import store from "@/store/index";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
const $http = axios.create({
  baseURL: "http://192.168.0.3:8000/api/",
});

$http.interceptors.request.use((config) => {
  store.dispatch("utilitiesStore/setIsLoading", true);
  return config;
});

$http.interceptors.response.use((config) => {
  store.dispatch("utilitiesStore/setIsLoading", false);
  return config;
});

export default $http;
