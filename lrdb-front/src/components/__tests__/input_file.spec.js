import { mount, createLocalVue } from "@vue/test-utils";
import InputFile from "../search/input_items/input_file.vue";
import VueI18n from "vue-i18n";
import { faItalic } from "@fortawesome/fontawesome-free-solid";

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
describe("InputFile", () => {
    // required props are set
    let val = "";
    const props = { value: val };
    const wrapper = mount(InputFile, { localVue, i18n, propsData: props });

    it(`file name is shown`, async () => {
        const fileName = "fileName";
        const testData = { name: fileName };
        wrapper.vm.previewFiles({ target: { files: [testData] } });
        expect(wrapper.vm.$data.filename).toBe(fileName);
    });

    it(`input is handled in appropriate way`, async () => {
        const testData = "gt53n";
        wrapper.vm.handleInput({ target: { files: [testData] } });
        expect(wrapper.emitted().input[0][0]).toBe(testData);
    });
});
