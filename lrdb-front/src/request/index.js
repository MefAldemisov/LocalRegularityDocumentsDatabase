// import Vue from "vue";
import axios from "axios";
// import VueAxios from "vue-axios";

// Vue.use(VueAxios, axios);
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
const apiClient = axios.create({
    baseURL: "http://10.147.17.97:1488",
});

export default {
    getOwnersDocuments(name) {
        return apiClient.get("/docowner/" + name);
    },
    addDocuments(data) {
        let fd = new FormData();
        fd.append("owner", data.owner);
        fd.append("name", data.name);
        fd.append("doc_dormat", data.file.name.split(".")[1]); // TODO
        fd.append("department", "Департамент Управления Образованием"); //temp
        fd.append("document", data.file);
        console.log("" + fd);
        return apiClient.post(`/documents/`, fd);
    },
    getDockById(id) {
        return apiClient.get(`/documents/${id}/`);
    },
    getAll() {
        return apiClient.get(`/documents/`);
    },
};
