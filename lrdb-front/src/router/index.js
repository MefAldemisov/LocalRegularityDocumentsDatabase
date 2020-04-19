import Vue from "vue";
import VueRouter from "vue-router";
import SearchDocs from "../views/search_docs.vue";
import MyDocs from "../views/my_docs.vue";
import DocLoader from "../views/load_docs.vue";
import LoginForm from "../views/login.vue";
import History from "../views/history.vue";
import NewDoc from "../views/load/new_doc.vue";
import ChangeDoc from "../views/load/change_doc.vue";

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
        children: [
            {
                path: "/load/new",
                name: "new",
                component: NewDoc,
            },
            {
                path: "/load/change",
                name: "change",
                component: ChangeDoc,
            },
        ],
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
