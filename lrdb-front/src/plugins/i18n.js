import Vue from "vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "./i18n_constant.js";

Vue.use(VueI18n);
export default new VueI18n(i18n_obj);
