import Vue from "vue";
import Vuex from "vuex";
import mut from "./mutations.js";
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
    mutations: mut,
    getters: {
        my_documents: (state) => state.my_documents,
        nav_tip: (state) => state.tips["nav"],
        submit_tip: (state) => state.tips["submit"],
        load_tip: (state) => state.tips["load"],
        prev_tip: (state) => state.tips["prev"],
    },
});
