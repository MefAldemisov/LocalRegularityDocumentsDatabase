import { shallowMount, createLocalVue } from "@vue/test-utils";
import SearchPageFilter from "../search/SearchPageFilter.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";
const test_data = require("../../assets/test_data.json");
const localVue = createLocalVue();

localVue.use(VueI18n);
let i18n = new VueI18n(i18n_obj);

const props = { resp: test_data };
const w = shallowMount(SearchPageFilter, {
    propsData: props,
    localVue,
    i18n,
});

describe("SearchPageFilter", () => {
    test(`"done" event is emmited`, () => {
        w.vm.done();
        const events = Object.keys(w.emitted());
        expect(events).toContain("done");
    });
    // sorting test
    describe(`sorting`, () => {
        test.each([
            ["name"],
            ["owner"],
            ["created"],
            ["last_update"],
            ["effect_date"],
            ["expiration_date"],
            ["department"],
            ["nothing"],
        ])("sorted by %s", (criteria) => {
            const newData = { criteria: criteria };
            w.setData(newData);
            w.vm.sort_by();
            const resp = w.vm.resp;
            for (let i = 1; i < resp.length; i++) {
                if (Object.keys(resp[i]).includes(criteria)) {
                    const comp = resp[i - 1][criteria] <= resp[i][criteria];
                    expect(comp).toBe(true);
                } else {
                    expect(resp.length).toBe(test_data.length);
                }
            }
        });
    });
});
