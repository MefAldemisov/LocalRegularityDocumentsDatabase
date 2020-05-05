import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import Tip from "../tips/tips.vue";
import VueI18n from "vue-i18n";
import store from "../../store/store.js";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueI18n);

describe("Tip", () => {
    let en = require(`../../assets/langs/en.json`);
    let ru = require(`../../assets/langs/ru.json`);
    let tat = require(`../../assets/langs/tat.json`);

    const i18n = new VueI18n({
        locale: "en",
        fallbackLocale: "en",
        messages: { en: en, ru: ru, tat: tat },
    });

    for (let t of ["nav", "load", "submit", "prev"]) {
        const props = { type: t };
        it(`if the prop value is '${t}', 
            then the type of tip should be '${t}' and visible`, () => {
            const wrapper = mount(Tip, {
                store,
                localVue,
                i18n,
            });
            wrapper.setProps(props);
            expect(wrapper.props("type")).toBe(t);
            expect(wrapper.classes()).not.toContain("hide");
            expect(wrapper.isVisible()).toBe(true);
            expect(store.getters[`${t}_tip`]).toBe(false);
            wrapper.vm.$forceUpdate();
        });
        it(`if the prop value is '${t}' and it is clicked,
            then its hidden`, async () => {
            const wrapper = mount(Tip, {
                store,
                localVue,
                i18n,
            });
            wrapper.setProps(props);
            wrapper.trigger("click");
            expect(store.getters[`${t}_tip`]).toBe(true);
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.$data.was_clicked).toBe(true);
            expect(wrapper.isVisible()).toBe(false);
        });
    }
});
