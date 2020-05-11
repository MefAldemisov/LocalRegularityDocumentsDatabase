import { shallowMount, createLocalVue } from "@vue/test-utils";
import DocListPageItem from "../represent/DocListPageItem.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";

const localVue = createLocalVue();

localVue.use(VueI18n);
let i18n = new VueI18n(i18n_obj);

describe("DocListPageItem", () => {
    // parameters validation (required fields check)
    describe(`parameters are validated properly`, () => {
        test.each([
            [{ id: 3 }, false],
            [
                {
                    id: 4,
                    name: "djd",
                    effect_date: "2015-0-02T12:11:00.032709Z",
                    expiration_date: "2020-04-08T12:11:00.032709Z",
                    last_update: "2000-04-08T12:11:00.032709Z",
                    created: "200-04-08T12:11:00.032709Z",
                },
                false,
            ],
            [
                {
                    id: 4,
                    name: "djd",
                    effect_date: "2015-01-02T12:11:00.032709Z",
                    expiration_date: "2020-04-08T12:11:00.032709Z",
                    last_update: "2000-08T12:11:00.032709Z",
                    created: "200-04-08T12:11:00.032709Z",
                },
                false,
            ],
            [
                {
                    id: 4,
                    name: "djd",
                    effect_date: "2015-01-02T12:11:00.032709Z",
                    expiration_date: "2020-04-08T12:11:00.032709Z",
                    last_update: "2000-04-08T12:11:00.032709Z",
                    created: "2000-04-08T12:11:00.032709Z",
                },
                true,
            ],
        ])(`on input %o, result %s`, (data, res) => {
            const tester = DocListPageItem.props;
            expect(tester.info.validator(data)).toBe(res);
        });
    });

    // method that excludes date works
    describe(`date exclusion`, () => {
        test.each([
            ["2015-01-02T12:11:00.032709Z", "2015-01-02 12:11:00"],
            ["2035-01-02T02:13:05.032709Z", "2035-01-02 02:13:05"],
        ])(`input %s, result %s`, (date, res) => {
            expect(DocListPageItem.methods.excludeDate(date)).toBe(res);
        });
    });

    // computed props are extracted properly
    describe(`computed props`, () => {
        const extracter = DocListPageItem.methods.excludeDate;
        const data_fields = [
            "effect_date",
            "expiration_date",
            "last_update",
            "created",
        ];
        test.each([
            [
                {
                    id: 4,
                    name: "djd",
                    effect_date: "2015-01-02T12:11:00.032709Z",
                    expiration_date: "2020-04-08T12:11:00.032709Z",
                    last_update: "2000-04-08T12:11:00.032709Z",
                    created: "2000-04-08T12:11:00.032709Z",
                },
            ],
        ])(`data %o`, (data) => {
            const props = {
                info: data,
            };
            const w = shallowMount(DocListPageItem, {
                localVue,
                i18n,
                propsData: props,
            });
            data_fields.forEach((f) => {
                expect(w.vm["dt_" + f]).toBe(extracter(data[f]));
            });
        });
    });
});
