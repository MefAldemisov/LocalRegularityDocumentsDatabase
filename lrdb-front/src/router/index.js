import Vue from "vue";
import VueRouter from "vue-router";
// import SearchDocs from "../views/search_docs.vue";
// import MyDocs from "../views/my_docs.vue";
// import DocLoader from "../views/load_docs.vue";
// import LoginForm from "../views/login.vue";
// import History from "../views/history.vue";
// import NewDoc from "../views/load/new_doc.vue";
// import ChangeDoc from "../views/load/change_doc.vue";

Vue.use(VueRouter);

function loadView(view) {
    return () =>
        import(/* webpackChunkName: "view-[request]" */ `../views/${view}.vue`);
}

const routes = [
    {
        path: "/my_docs",
        name: "my",
        component: loadView("MyDocsPage"),
    },
    {
        path: "/search",
        name: "search",
        component: loadView("SearchPage"),
    },
    {
        path: "/",
        name: "login",
        component: loadView("LoginPage"),
    },
    {
        path: "/load",
        name: "load",
        component: loadView("LoadDocsPage"),
        redirect: "load/new",
        children: [
            {
                path: "/load/new",
                name: "new",
                component: loadView("load/LoadDocsPageNew"),
            },
            {
                path: "/load/change",
                name: "change",
                component: loadView("load/LoadDocsPageChange"),
            },
        ],
    },
    {
        path: "/history/:id",
        name: "History",
        component: loadView("HistoryPage"),
        props: true,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
