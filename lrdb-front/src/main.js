import Vue from "vue";
import router from "./router";
import App from "./App.vue";
// coplugins
import i18n from "./plugins/i18n.js";
import "./plugins/fontawersome.js";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import store from "./store/store.js";

Vue.config.productionTip = false;

Vue.use(require("vue-shortkey"), { prevent: ["input", "textarea"] });
Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);

new Vue({
    VueCtkDateTimePicker,
    store,
    router,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
