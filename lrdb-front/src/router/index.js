import Vue from "vue";
import VueRouter from "vue-router";
import SearchDocs from "../views/search_docs.vue";
import MyDocs from "../views/my_docs.vue";
import DocLoader from "../views/load_docs.vue";
import LoginForm from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/my_docs",
        name: "MyDocs",
        component: MyDocs
    },
    {
        path: "/search",
        name: "Search",
        component: SearchDocs
    },
    {
        path: "/",
        name: "Login",
        component: LoginForm
    },
    {
        path: "/load",
        name: "Load",
        component: DocLoader
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
