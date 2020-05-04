import { shallowMount } from "@vue/test-utils";
import tipContainer from "../tips/tip_container.vue";

describe("TodoList", () => {
    it("should render to a snapshot when tips list has items", () => {
        const propsData = { tips: ["search", "load"] };
        const wrapper = shallowMount(tipContainer, { propsData });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("the order of elements in the props shouldn't affect fie behaviour", () => {
        const propsData = { tips: ["load", "search"] };
        const wrapper = shallowMount(tipContainer, { propsData });
        expect(wrapper.element).toMatchSnapshot();
    });
});
