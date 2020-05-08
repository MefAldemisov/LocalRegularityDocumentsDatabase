let en = require(`../assets/langs/en.json`);
let ru = require(`../assets/langs/ru.json`);
let tat = require(`../assets/langs/tat.json`);

export const i18n_obj = {
    locale: "en",
    fallbackLocale: "en", // time options
    messages: { en: en, ru: ru, tat: tat },
};
