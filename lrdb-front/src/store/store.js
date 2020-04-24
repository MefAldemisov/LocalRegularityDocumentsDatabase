import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        my_documents: "",
    },
    mutations: {
        setMyDocs(state, val) {
            state.my_documents = val;
        },
    },
    getters: {
        my_documents: (state) => state.my_documents,
    },
});
export default store;
