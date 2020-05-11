import { shallowMount, createLocalVue } from "@vue/test-utils";
import SearchPageParams from "../search/SearchPageParams.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";
import "../../plugins/fontawersome.js";

const localVue = createLocalVue();
localVue.use(VueI18n);
localVue.use(require("vue-shortkey"), { prevent: ["input", "textarea"] });
let i18n = new VueI18n(i18n_obj);

describe("SearchPageParams", () => {
    let val = "something";
    const props = { value: val };
    const w = shallowMount(SearchPageParams, {
        localVue,
        i18n,
        propsData: props,
    });
    test(" ", () => {
        const data = "test";
        w.vm.setVal(data);
        expect(w.vm.val).toBe(data);
        const events = w.emitted().input;
        expect(events[events.length - 1][0]).toBe(data);
    });
});
