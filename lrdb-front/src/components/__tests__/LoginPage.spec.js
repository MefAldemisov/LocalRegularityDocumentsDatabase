import { shallowMount, createLocalVue } from "@vue/test-utils";
import LoginPage from "../../views/LoginPage.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";

const localVue = createLocalVue();
localVue.use(VueI18n);
let i18n = new VueI18n(i18n_obj);

describe(`LoginPage`, () => {
    test(`sended`, () => {
        const w = shallowMount(LoginPage, { localVue, i18n });
        expect(w.vm.sended).toBe(false);
        w.vm.validate();
        expect(w.vm.sended).toBe(true);
    });
});
