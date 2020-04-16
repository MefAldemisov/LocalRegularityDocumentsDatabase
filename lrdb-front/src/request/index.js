// import Vue from "vue";
import axios from "axios";
// import VueAxios from "vue-axios";

// Vue.use(VueAxios, axios);

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export default {
    getOwnersDocuments(name) {
        return apiClient.get("/docowner/" + name);
    },
};
