import { shallowMount } from "@vue/test-utils";
import TipContainer from "../tips/TipContainer.vue";

describe("TipContainer", () => {
    const test_props = [
        [["nav"], true],
        [["load", "nav"], true],
        [["submit", "hi"], false],
        [["prev", "submit"], true],
        [["some", "vue"], false],
    ];

    it(`input is checked correctly`, () => {
        test_props.forEach((option) => {
            const tester = TipContainer.props;
            const res = tester.tips.validator(option[0]);
            expect(res).toBe(option[1]);
        });
    });

    it("should render to a snapshot when tips list has items", () => {
        const propsData = { tips: ["search", "load"] };
        const wrapper = shallowMount(TipContainer, { propsData });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("the order of elements in the props shouldn't affect fie behaviour", () => {
        const propsData = { tips: ["load", "search"] };
        const wrapper = shallowMount(TipContainer, { propsData });
        expect(wrapper.element).toMatchSnapshot();
    });
});
