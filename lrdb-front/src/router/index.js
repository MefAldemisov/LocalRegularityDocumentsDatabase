import Vue from "vue"
import VueRouter from "vue-router"
import SearchDocks from "../views/search_docks.vue"
import MyDocks from "../views/my_docks.vue"
import DockLoader from "../views/load_docks.vue"
import LoginForm from "../views/login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/my_docs",
    name: "MyDocs",
    component: MyDocks
  },
  {
    path: "/search",
    name: "Search",
    component: SearchDocks
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm
  },
  {
    path: "/load",
    name: "Load",
    component: DockLoader
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
