import { shallowMount, createLocalVue } from "@vue/test-utils";
import LoadDocsPage from "../../views/LoadDocsPage.vue";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";
import { i18n_obj } from "../../plugins/i18n_constant.js";
import router from "../../router/index.js";

const localVue = createLocalVue();
localVue.use(VueI18n);
localVue.use(VueRouter);
let i18n = new VueI18n(i18n_obj);
localVue.use(require("vue-shortkey"), { prevent: ["input", "textarea"] });
// const router = new VueRouter();

describe(`LoadDocsPage`, () => {
    describe(`mode is changed`, () => {
        test.each([
            ["right", "change"],
            ["right", "change"],
            ["left", "new"],
            ["left", "new"],
            ["right", "change"],
        ])(`action %s page "%s"`, async (dir, res) => {
            const w = shallowMount(LoadDocsPage, { localVue, i18n, router });
            const event = { srcKey: dir };
            w.vm.changeMode(event);
            await w.vm.$nextTick();
            expect(w.vm.$route.name).toBe(res);
        });
    });
});
