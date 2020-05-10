import { shallowMount } from "@vue/test-utils";
import TipContainer from "../tips/TipContainer.vue";

describe("TipContainer", () => {
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
