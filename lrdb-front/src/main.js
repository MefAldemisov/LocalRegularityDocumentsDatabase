import Vue from "vue"
import router from "./router"
import App from "./App.vue"
import { i18n } from "./plugins/i18n.js"
import "./plugins/fontawersome.js"

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app")
