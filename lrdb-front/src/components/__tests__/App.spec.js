import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "../../App.vue";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";
import { i18n_obj } from "../../plugins/i18n_constant.js";
import router from "../../router/index.js";
import "../../plugins/fontawersome.js";

const localVue = createLocalVue();
localVue.use(VueI18n);
localVue.use(VueRouter);
localVue.use(require("vue-shortkey"), { prevent: ["input", "textarea"] });
let i18n = new VueI18n(i18n_obj);
describe(`App`, () => {
    // language is taken from navigator
    test.each([
        ["ru", "ru"],
        ["en", "en"],
        ["fr", "en"],
    ])(`initial language %s is taken from navigator`, async (lang, res) => {
        Object.defineProperty(window.navigator, "language", {
            value: lang,
            configurable: true,
        });
        Object.defineProperty(window.navigator, "userLanguage", {
            value: lang,
            configurable: true,
        });
        // const dom = new JSDOM();
        // global.document = dom.window.document;

        const w = shallowMount(App, { i18n, localVue, router });
        expect(w.vm.$i18n.locale).toBe(res);
        // await w.vm.$nextTick();
        // expect(
        //     global.document.getElementsByTagName("html")[0].getAttribute("lang")
        // ).toBe(res);
    });
    // language of html is updated with the paguage of user -- not testabe now

    // tab change
    describe(`tab change`, () => {
        const w = shallowMount(App, { i18n, localVue, router });
        w.vm.$router.push({ name: "my" });

        test.each([
            ["my", "right", "search"],
            ["search", "left", "my"],
            ["my", "left", "new"],
            ["new", "left", "search"],
            ["search", "right", "new"],
            ["new", "right", "my"],
        ])(`from '%s' to %s result '%s'`, async (current, dir, res) => {
            // w.vm.$router.push({ name: current });
            // await w.vm.$nextTick();
            expect(w.vm.$router.currentRoute.name).toBe(current);
            const event = { srcKey: dir };
            w.vm.changeTab(event);
            await w.vm.$nextTick();
            expect(w.vm.$router.currentRoute.name).toBe(res);
        });
    });

    describe(`go to My page`, () => {
        const w = shallowMount(App, { i18n, localVue, router });

        test.each([["my"], ["search"], ["new"]])(
            `from '%s'`,
            async (current) => {
                w.vm.$router.push({ name: current });
                await w.vm.$nextTick();
                expect(w.vm.$router.currentRoute.name).toBe(current);
                w.vm.goToMy();
                // await w.vm.$nextTick();
                expect(w.vm.$router.currentRoute.name).toBe("my");
            }
        );
    });

    // go to My
});
