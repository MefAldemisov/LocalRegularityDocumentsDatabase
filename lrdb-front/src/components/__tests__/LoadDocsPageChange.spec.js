import { shallowMount, createLocalVue } from "@vue/test-utils";
import LoadDocsPageChange from "../../views/load/LoadDocsPageChange.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";
import "../../plugins/fontawersome.js";

const localVue = createLocalVue();
localVue.use(VueI18n);
localVue.use(require("vue-shortkey"), { prevent: ["input", "textarea"] });
let i18n = new VueI18n(i18n_obj);

describe("LoadDocsPageChange", () => {
    let val = "something";
    const props = { value: val };
    const w = shallowMount(LoadDocsPageChange, {
        localVue,
        i18n,
        propsData: props,
    });
    test("set Value", () => {
        const data = { name: "test", owner: "smt", key: true };
        w.vm.setVal(data);
        expect(Object.keys(w.vm.value).length).toBe(Object.keys(data).length);
        expect(Object.keys(w.vm.propagate).length).toBe(2);
    });
});
