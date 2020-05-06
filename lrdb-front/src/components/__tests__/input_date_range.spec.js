import { mount, createLocalVue } from "@vue/test-utils";
import DateRange from "../search/input_items/input_date_range.vue";
import VueI18n from "vue-i18n";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";

const localVue = createLocalVue();

localVue.use(VueI18n);
localVue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);

let en = require(`../../assets/langs/en.json`);
let ru = require(`../../assets/langs/ru.json`);
let tat = require(`../../assets/langs/tat.json`);

let i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: { en: en, ru: ru, tat: tat },
});

const languages_in_dp = [
    ["ru", "ru"],
    ["tat", "ru"],
    ["en", "en"],
];

describe("DateRange", () => {
    let val = "23.04.2000";
    let props = {
        name: "srch_create",
        range: true,
        value: val,
        error: false,
    };
    const wrapper = mount(DateRange, {
        localVue,
        i18n,
        VueCtkDateTimePicker,
        props: props,
    });
    // initially, there is no error class
    it(`when error prop is equal to true, 
		there are changes in the interface`, async () => {
        await wrapper.vm.$nextTick();
        expect(wrapper.element).not.toContain("error");
        // if the property is changed, the representation is changed
        wrapper.setProps({ error: true });
        expect(wrapper.props("error")).toBe(true);
        await wrapper.vm.$nextTick();
        expect(wrapper.classes()).toContain("error");
    });
    it(`the data is changed with the input`, async () => {
        wrapper.setData({ val: val });
        wrapper.vm.handleInput();
        expect(wrapper.emitted().input[0][0]).toBe(val);
    });
    it(`language in data-picker changes`, () => {
        for (let l of languages_in_dp) {
            i18n.locale = l[0];
            const wr = mount(DateRange, {
                localVue,
                i18n,
                VueCtkDateTimePicker,
                props: props,
            });
            expect(wr.vm.lang).toBe(l[1]);
        }
    });
});
