import { mount, createLocalVue } from "@vue/test-utils";
import BaseInputField from "../search/input_items/BaseInputField.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";

const localVue = createLocalVue();

localVue.use(VueI18n);
let i18n = new VueI18n(i18n_obj);

const diffDataTypes = [
    ["number", 345676],
    ["number", "345"],
    ["text", "HelloWorld!"],
];
const forbiddenNumChars = [
    ["e", "34e5"],
    [".", "43.2"],
    ["-", "-54"],
];

describe("BaseInputField", () => {
    const test_props = [
        ["number", true],
        ["text", true],
        ["something", false],
    ];

    it(`input is checked correctly`, () => {
        test_props.forEach((option) => {
            const tester = BaseInputField.props;
            const res = tester.type.validator(option[0]);
            expect(res).toBe(option[1]);
        });
    });

    let val = "";
    const props = {
        type: "number",
        required: true,
        value: val,
        name: "srch_name",
    };

    const wrapper = mount(BaseInputField, { localVue, i18n, propsData: props });
    it(`input is handled in appropriate way for both data types`, () => {
        diffDataTypes.forEach((dt) => {
            // arguments passing
            wrapper.setProps({ type: dt[0] });
            wrapper.setData({ val: dt[1] });
            // event simulation
            wrapper.vm.handleInput();
            // event handling
            const inputEvents = wrapper.emitted().input;
            expect("" + inputEvents[inputEvents.length - 1][0]).toBe(
                "" + dt[1]
            );
        });
    });

    forbiddenNumChars.forEach((forb) => {
        let [char, example] = forb;
        it(`in number field ${char} does not work`, async () => {
            wrapper.setProps({ type: "number" });
            wrapper.setData({ val: example });
            // event simulation
            wrapper.vm.handleInput();
            await wrapper.vm.$nextTick();
            expect("" + wrapper.vm.$data.val).not.toContain(char);
            const inputEvents = wrapper.emitted().input;
            expect("" + inputEvents[inputEvents.length - 1][0]).not.toBe(
                example
            );
        });
    });
});
