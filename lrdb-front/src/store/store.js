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
            console.log("setter");
            state.my_documents = val;
        },
        hide_tip(state) {
            state.tips["my"] = true;
        },
    },
    getters: {
        my_documents: (state) => state.my_documents,
        tip: (state) => state.tips["my"],
    },
});
