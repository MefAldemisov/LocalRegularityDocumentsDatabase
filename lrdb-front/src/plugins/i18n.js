import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

let en = require(`../assets/langs/en.json`);
let ru = require(`../assets/langs/ru.json`);
let tat = require(`../assets/langs/tat.json`);

export const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en", // time options
    messages: { en: en, ru: ru, tat: tat },
});
