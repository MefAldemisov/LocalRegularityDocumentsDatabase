import { mount, createLocalVue } from "@vue/test-utils";
import SelectDropdown from "../search/input_items/select_dropdown.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";

const localVue = createLocalVue();

localVue.use(VueI18n);
localVue.use(require("vue-shortkey"), { prevent: ["input", "textarea"] });

let i18n = new VueI18n(i18n_obj);

describe("SelectDropdown", () => {
    // required props are set
    let val = "";
    const opt = [
        { val: "name", text: "srt_name", index: 0 },
        { val: "owner", text: "srt_owner", index: 1 },
        { val: "created", text: "srt_crt", index: 2 },
        { val: "last_update", text: "srch_upd", index: 3 },
        { val: "effect_date", text: "srch_start", index: 4 },
    ];
    const props = { value: val, options: opt };
    const wrapper = mount(SelectDropdown, { localVue, i18n, propsData: props });
    // handle input
    it(`function "handleInput()" propagates the data`, () => {
        const initialPosition = { selected_index: 0 };
        wrapper.setData(initialPosition);
        wrapper.vm.handleInput();
        const inputEvents = wrapper.emitted().input;
        expect(inputEvents[inputEvents.length - 1][0]).toBe(opt[0].val);
    });
    // selected changes the ouptut value
    it(`value of selector changes correctly after the click 
        on some item from the list`, () => {
        for (let index = 1; index < opt.length; index++) {
            wrapper.find(`ul li:nth-child(${index + 1})`).trigger("click");
            expect(wrapper.vm.$data.selected_index).toBe(opt[index].index);
        }
    });
    // hide and unhide on mousever
    it(`if mouse is on, list is visible,
        otherwise it is hidden`, async () => {
        wrapper.vm.hide();
        await wrapper.vm.$nextTick();
        expect(wrapper.find("ul").isVisible()).toBe(false);
        wrapper.vm.unhide();
        await wrapper.vm.$nextTick();
        expect(wrapper.find("ul").isVisible()).toBe(true);
    });
    // hide and submit on eneter
    it(`pushing "enter" result in data propagation`, () => {
        const init_length = wrapper.emitted().input.length;
        wrapper.trigger("keydown.enter");
        wrapper.trigger("keyup.enter");
        const new_length = wrapper.emitted().input.length;
        expect(new_length).toBe(init_length);
    });

    const move_indexes = [
        [4, 3],
        [3, 2],
        [2, 1],
        [1, 0],
        [0, 4],
    ];

    const moves = ["up", "dwn"];

    moves.forEach((m) => {
        const move = { srcKey: m };
        move_indexes.forEach((el) => {
            let old, next;
            if (m === "up") {
                [old, next] = el;
            } else {
                [next, old] = el;
            }
            it(`usage of arrows ${m} changes the active value 
            from ${old} to ${next}`, () => {
                // set old position
                const initialPosition = { selected_index: old };
                wrapper.setData(initialPosition);
                expect(wrapper.vm.$data.selected_index).toBe(opt[old].index);
                // move
                wrapper.vm.moveActive(move);
                expect(wrapper.vm.$data.selected_index).toBe(opt[next].index);
            });
        });
    });
});
