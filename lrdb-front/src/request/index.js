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
    addDocuments(data) {
        return apiClient.post(`/documents/' \
        --form 'owner=${data.owner}' \
        --form 'name=${data.name}' \
        --form 'doc_format=docx' \
        --form 'department=Департамент Управления Образованием' \
        --form 'document=@/D:/LocalRegulatoryDocumentDB/media/Приложение_4_ознакомление.docx'"`);
    },
    getDockById(id) {
        return apiClient.get(`/documents/${id}/`);
    },
};
