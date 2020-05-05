import { mount } from "@vue/test-utils";
import check from "../search/input_items/check_item.vue";

describe("Check", () => {
    let val = "";
    const wrapper = mount(check, { props: { value: val } });
    it(`initially, the check id off`, () => {
        expect(wrapper.find("label").classes()).not.toContain("active");
    });

    it(`initially, 
		the check on click the value of check is set to true`, async () => {
        wrapper.find("input").setChecked();
        await wrapper.vm.$nextTick();
        wrapper.vm.$forceUpdate();
        expect(wrapper.find("label").classes()).toContain("active");
    });
});
