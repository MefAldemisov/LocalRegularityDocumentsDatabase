import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
export default axios.create({
    baseURL: "http://10.147.17.97:1488",
});
