import { shallowMount, createLocalVue } from "@vue/test-utils";
import SearchPage from "../../views/SearchPage.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";

const localVue = createLocalVue();
localVue.use(VueI18n);
let i18n = new VueI18n(i18n_obj);

describe(`SearchPage`, () => {
    test(`mode change`, () => {
        const w = shallowMount(SearchPage, { localVue, i18n });
        expect(w.vm.search_mode).toBe(true);
        w.vm.changeMode();
        expect(w.vm.search_mode).toBe(false);
    });
});
