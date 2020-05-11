import { shallowMount, createLocalVue } from "@vue/test-utils";
import BaseParams from "../search/BaseParams.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";

const localVue = createLocalVue();

localVue.use(VueI18n);
let i18n = new VueI18n(i18n_obj);

describe("BaseParams", () => {
    describe(`input is checked correctly`, () => {
        test.each([
            ["search", true],
            ["load", true],
            ["upload", true],
            ["submit", false],
        ])(`form type %s, should be correct: %s`, (type, res) => {
            expect(BaseParams.props.form_type.validator(type)).toBe(res);
        });
    });
    test(`default val of initial os ok`, () => {
        expect(BaseParams.props.initial.default().name).toBe("");
        expect(BaseParams.props.initial.default().owner).toBe("");
    });

    describe(`error detection`, () => {
        test.each([
            ["search", 20, 3, true],
            ["upload", 20, 3, false],
            ["upload", 2, 3, true],
        ])(
            `form type: %s, first date %s, second date %s, should be %s`,
            (ft, d1, d2, res) => {
                let val;
                const props = { form_type: ft, value: val };
                const w = shallowMount(BaseParams, {
                    localVue,
                    i18n,
                    propsData: props,
                });
                w.setData({
                    val: {
                        file: "",
                        name: "",
                        owner: "",
                        id: 0,
                        created: "",
                        last_update: "",
                        effect_date: d1,
                        expiration_date: d2,
                        dep: "",
                    },
                });
                expect(w.vm.error_in_date).not.toBe(res);
            }
        );
    });

    describe(`filled data filter`, () => {
        test.each([
            [{ a: "", b: "" }, {}],
            [{ a: "b", c: "" }, { a: "b" }],
            [
                { a: "b", c: "k" },
                { a: "b", c: "k" },
            ],
        ])(`object %o, reduce to %o`, (data, res) => {
            const output = BaseParams.methods.filterSelected(data);
            const outKeys = Object.keys(output);
            const inKeys = Object.keys(res);
            expect(outKeys.length).toBe(inKeys.length);
            outKeys.forEach((k) => expect(inKeys.includes(k)).toBe(true));
            inKeys.forEach((k) => expect(outKeys.includes(k)).toBe(true));
            outKeys.forEach((k) => expect(output[k]).toBe(res[k]));
        });
    });

    describe(`dep id`, () => {
        test.each([
            [[false, false], 0],
            [[false, true], 1],
            [[true, false], 1],
            [[true, true], 2],
        ])("dep array: %o, expected result: %o", (arr, res) => {
            const output = BaseParams.methods.extractDepId(arr);
            expect(output.length).toBe(res);
            if (res) {
                output.forEach((i) => {
                    expect(arr[i]).toBe(true);
                });
            }
        });
    });

    describe(`input is handled properly`, () => {
        test.each([
            [
                {
                    file: "",
                    name: "Some",
                    owner: "Any",
                    id: 1,
                    created: 1,
                    last_update: 2,
                    effect_date: 3,
                    expiration_date: 4,
                    dep: "",
                },
                [false, true, false, true, false, false, false],
            ],
        ])("value: %o", (data, list) => {
            let val = "";
            const props = { value: val };
            const w = shallowMount(BaseParams, { localVue, i18n, props });
            const newData = {
                val: data,
                select_list: list,
            };
            w.setData(newData);
            w.vm.handleInput();
            // compute result
            data.dep = BaseParams.methods.extractDepId(list);
            const res = BaseParams.methods.filterSelected(data);
            // compare
            const inputEvents = w.emitted().input;
            const output = inputEvents[inputEvents.length - 1][0];
            const outKeys = Object.keys(output);
            const inKeys = Object.keys(res);
            expect(outKeys.length).toBe(inKeys.length);
            outKeys.forEach((k) => expect(inKeys.includes(k)).toBe(true));
            inKeys.forEach((k) => expect(outKeys.includes(k)).toBe(true));
            outKeys.forEach((k) => expect(output[k]).toStrictEqual(res[k]));
            // chack output on errors
        });
        test.each([
            [
                {
                    file: "",
                    name: "Some",
                    owner: "Any",
                    id: 1,
                    created: 1,
                    last_update: 2,
                    effect_date: 20,
                    expiration_date: 4,
                    dep: "",
                },
                [false, true, false, true, false, false, false],
            ],
        ])("value: %o", (data, list) => {
            let val = "";
            const props = { value: val, form_type: "upload" };
            const w = shallowMount(BaseParams, { localVue, i18n, props });
            const newData = {
                val: data,
                select_list: list,
            };
            w.setData(newData);
            w.vm.handleInput();
            const newInputEvents = w.emitted().input;
            expect(w.vm.error_in_date).toBe(true);
            expect(newInputEvents).toBe(undefined);
        });
    });
});
