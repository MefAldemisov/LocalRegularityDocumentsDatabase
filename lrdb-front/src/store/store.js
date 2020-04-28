import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        my_documents: "",
        tips: {
            nav: false,
            submit: false,
            load: false,
            prev: false,
        },
    },
    mutations: {
        setMyDocs(state, val) {
            state.my_documents = val;
        },
        hide_nav_tip(state) {
            state.tips["nav"] = true;
        },
        hide_submit_tip(state) {
            state.tips["submit"] = true;
        },
        hide_load_tip(state) {
            state.tips["load"] = true;
        },
        hide_prev_tip(state) {
            state.tips["prev"] = true;
        },
    },
    getters: {
        my_documents: (state) => state.my_documents,
        nav_tip: (state) => state.tips["nav"],
        submit_tip: (state) => state.tips["submit"],
        load_tip: (state) => state.tips["load"],
        prev_tip: (state) => state.tips["prev"],
    },
});
