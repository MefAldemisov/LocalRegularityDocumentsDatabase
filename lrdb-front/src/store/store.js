import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        my_documents: "",
        tips: {
            my: false,
            search: false,
        },
    },
    mutations: {
        setMyDocs(state, val) {
            state.my_documents = val;
        },
        hide_my_tip(state) {
            state.tips["my"] = true;
        },
        hide_search_tip(state) {
            state.tips["search"] = true;
        },
    },
    getters: {
        my_documents: (state) => state.my_documents,
        my_tip: (state) => state.tips["my"],
        search_tip: (state) => state.tips["search"],
    },
});
