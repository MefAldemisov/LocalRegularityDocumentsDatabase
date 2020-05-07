import { mount, createLocalVue } from "@vue/test-utils";
import InputField from "../search/input_items/input_field.vue";
// import i18n from "../../plugins/i18n.js";
import VueI18n from "vue-i18n";

const localVue = createLocalVue();

localVue.use(VueI18n);

let en = require(`../../assets/langs/en.json`);
let ru = require(`../../assets/langs/ru.json`);
let tat = require(`../../assets/langs/tat.json`);

let i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: { en: en, ru: ru, tat: tat },
});

const diffDataTypes = [
    ["number", 345676],
    ["text", "HelloWorld!"],
];
const forbiddenNumChars = [
    ["e", "34e5"],
    [".", "43.2"],
    ["-", "-54"],
];

describe("InputField", () => {
    let val = "";
    const props = {
        type: "number",
        required: true,
        value: val,
        name: "srch_name",
    };
    const wrapper = mount(InputField, { localVue, i18n, propsData: props });
    it(`input is handled in appropriate way for both data types`, () => {
        diffDataTypes.forEach((dt) => {
            // arguments passing
            wrapper.setProps({ type: dt[0] });
            wrapper.setData({ val: dt[1] });
            // event simulation
            wrapper.vm.handleInput();
            // event handling
            const inputEvents = wrapper.emitted().input;
            expect(inputEvents[inputEvents.length - 1][0]).toBe(dt[1]);
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
