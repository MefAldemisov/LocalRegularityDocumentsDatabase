import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import BaseTip from "../tips/templates/base/BaseTip.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";
import store from "../../store/store.js";

const tip_types = ["nav", "load", "submit", "prev"];
const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueI18n);

describe("BaseTip", () => {
    const test_props = [
        ["nav", true],
        ["load", true],
        ["submit", true],
        ["prev", true],
        ["some", false],
    ];

    it(`input is checked correctly`, () => {
        test_props.forEach((option) => {
            const tester = BaseTip.props;
            const res = tester.type.validator(option[0]);
            expect(res).toBe(option[1]);
        });
    });

    let i18n = new VueI18n(i18n_obj);

    it(`initially the prop should be visible`, () => {
        tip_types.forEach((t) => {
            const props = { type: t };
            const wrapper = mount(BaseTip, {
                store,
                localVue,
                i18n,
            });
            wrapper.setProps(props);
            expect(wrapper.props("type")).toBe(t);
            expect(wrapper.classes()).not.toContain("hide");
            expect(wrapper.isVisible()).toBe(true);
            expect(store.getters[`${t}_tip`]).toBe(false);
            wrapper.vm.$forceUpdate();
        });
    });
    it(`if tip is clicked, then its hidden`, () => {
        tip_types.forEach(async (t) => {
            const props = { type: t };
            const wrapper = mount(BaseTip, {
                store,
                localVue,
                i18n,
            });
            wrapper.setProps(props);
            wrapper.trigger("click");
            expect(store.getters[`${t}_tip`]).toBe(true);
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.$data.was_clicked).toBe(true);
            expect(wrapper.isVisible()).toBe(false);
        });
    });
});
