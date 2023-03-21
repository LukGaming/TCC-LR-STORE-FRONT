import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
const $http = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export default $http;
