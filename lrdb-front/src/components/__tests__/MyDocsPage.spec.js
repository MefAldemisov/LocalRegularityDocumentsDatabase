import { mount, createLocalVue } from "@vue/test-utils";
import MyDocsPage from "../../views/MyDocsPage.vue";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";
import { i18n_obj } from "../../plugins/i18n_constant.js";
import "../../plugins/fontawersome.js";
import router from "../../router/index.js";
import axios from "axios";
import apiCalls from "../../request/index.js";
import store from "../../store/store.js";

// import MockAdapter from "axios-mock-adapter";
// import apiCalls from "../../request/index.js";

const localVue = createLocalVue();
localVue.use(VueI18n);
localVue.use(VueRouter);
let i18n = new VueI18n(i18n_obj);
localVue.use(require("vue-shortkey"), { prevent: ["input", "textarea"] });

const data = { response: true };
jest.mock("axios");
global.API_URL =
    "http://10.147.17.97:1488/docowner/" + "Третьяков Владимир Владимирович/";
describe("LoadDocsPageNew", async () => {
    const results = [];
    const mockAxiosSpreadResult = jest.fn();

    beforeAll(() => {
        // axios.get.mockClear();
        axios.get.mockReturnValue(data);
    });

    test(`data is taken from the server`, async () => {
        const w = mount(MyDocsPage, {
            localVue,
            i18n,
            router,
            store,
        });
        await w.vm.getData();
        await w.vm.$nextTick();
        expect(axios.get).toHaveBeenCalled();
        expect(w.vm.mentioned.response).toBe(true);
    });
    // w.vm.$nextTick();

    // created with data from router, or from request
});
