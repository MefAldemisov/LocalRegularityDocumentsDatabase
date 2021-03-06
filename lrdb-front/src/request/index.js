import apiClient from "./client.js";

export default {
    getOwnersDocuments(name) {
        return apiClient.get("/docowner/" + name);
    },
    addDocuments(data) {
        let fd = new FormData();
        fd.append("owner", "Админ");
        fd.append("name", data.name);
        fd.append("doc_format", data.file.name.split(".")[1]); // TODO
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
    getDocuments(params) {
        const keys = Object.keys(params);
        if (keys.length === 0) {
            return this.getAll();
        }
        let fd = new FormData();
        for (let k of keys) {
            fd.append(k, params[k]);
        }
        return apiClient.post(`/search/`, fd);
    },
    putDocument(data) {
        let fd = new FormData();
        fd.append("name", data.name);
        fd.append("department", 1); 
        fd.append("document", data.file);
        fd.append("doc_format", data.file.name.split(".")[1]); // TODO
        return apiClient.put(`/update/1/`, fd);
    },
    getHistory(doc_id) {
        return apiClient.get(`/update/${doc_id}/`)
    }
};
