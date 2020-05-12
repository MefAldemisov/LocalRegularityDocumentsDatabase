import { shallowMount, createLocalVue } from "@vue/test-utils";
import LoadDocsPageNew from "../../views/load/LoadDocsPageNew.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";
import "../../plugins/fontawersome.js";

const localVue = createLocalVue();
localVue.use(VueI18n);
localVue.use(require("vue-shortkey"), { prevent: ["input", "textarea"] });
let i18n = new VueI18n(i18n_obj);

describe("LoadDocsPageNew", () => {
    const w = shallowMount(LoadDocsPageNew, {
        localVue,
        i18n,
    });
    test("all fields are required", () => {
        expect(w.vm.req).toBe(true);
    });
});
