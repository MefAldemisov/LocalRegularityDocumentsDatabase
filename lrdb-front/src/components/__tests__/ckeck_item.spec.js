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
        expect(wrapper.find("label").classes()).toContain("active");
    });

    it(`on input the variable prpagates to the parent`, () => {
        const checked_modes = [false, true, false];
        for (let i = 0; i < checked_modes.length; i++) {
            const mode = checked_modes[i];
            wrapper.vm.handleInput({ target: { checked: mode } });
            expect(wrapper.emitted().input[i][0]).toBe(mode);
        }
    });
});
