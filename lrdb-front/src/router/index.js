import Vue from "vue";
import VueRouter from "vue-router";
import SearchDocs from "../views/search_docs.vue";
import MyDocs from "../views/my_docs.vue";
import DocLoader from "../views/load_docs.vue";
import LoginForm from "../views/login.vue";
import History from "../views/history.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/my_docs",
        name: "my",
        component: MyDocs,
    },
    {
        path: "/search",
        name: "search",
        component: SearchDocs,
    },
    {
        path: "/",
        name: "login",
        component: LoginForm,
    },
    {
        path: "/load",
        name: "load",
        component: DocLoader,
    },
    {
        path: "/history/:id",
        name: "History",
        component: History,
        props: true,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
