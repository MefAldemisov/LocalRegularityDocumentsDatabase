import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import { i18n } from "./plugins/i18n.js";
import "./plugins/fontawersome.js";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

Vue.config.productionTip = false;

Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);

new Vue({
    VueCtkDateTimePicker,
    router,
    i18n,
    render: h => h(App)
}).$mount("#app");
