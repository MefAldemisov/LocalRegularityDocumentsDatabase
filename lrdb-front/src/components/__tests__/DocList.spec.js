import { shallowMount, createLocalVue } from "@vue/test-utils";
import DocList from "../represent/DocList.vue";
import VueI18n from "vue-i18n";
import { i18n_obj } from "../../plugins/i18n_constant.js";

const localVue = createLocalVue();

localVue.use(VueI18n);
let i18n = new VueI18n(i18n_obj);
localVue.use(require("vue-shortkey"), { prevent: ["input", "textarea"] });

function createWrapperOfLength(length, n) {
    let data = [];
    for (let i = 0; i < length; i++) {
        data.push({ id: i });
    }
    const props = { n_docs: n, response: data };
    return shallowMount(DocList, {
        localVue,
        i18n,
        propsData: props,
    });
}

describe("DocList", () => {
    const test_props = [
        [2, true],
        [-1, false],
        [0, false],
    ];

    it(`input n_docs prop is checked correctly`, () => {
        test_props.forEach((option) => {
            const tester = DocList.props;
            const res = tester.n_docs.validator(option[0]);
            expect(res).toBe(option[1]);
        });
    });

    // sample data generation

    // info is computed properly:
    // array of shape [n//n_docs, n_docs] + allsub-arrays(pages) are indexed from 1

    describe(`computed properties are correct`, () => {
        test.each`
            length | n
            ${13}  | ${2}
            ${3}   | ${3}
            ${1}   | ${2}
            ${1}   | ${3}
            ${13}  | ${4}
            ${13}  | ${3}
        `(
            `if response length is $length then the shape should be $length//$n`,
            ({ length, n }) => {
                const wrap = createWrapperOfLength(length, n);
                const info = wrap.vm.info;
                expect(info.length).toBe(Math.ceil(length / n));
                let counter = 1;
                info.forEach((page) => {
                    expect(page.info.length).toBeLessThanOrEqual(n);
                    expect(page.index).toBe(counter++);
                });
                expect(wrap.vm.pages).toBe(info.length);
            }
        );
    });

    // changePage(n) changes the page and checks, if it is in appropriate range

    describe(`pages are changed correcly`, () => {
        const wrapper = createWrapperOfLength(15, 3); // 5 pages
        test.each([
            [2, true],
            [3, true],
            [1, true],
            [0, false],
            [5, true],
            [6, false],
        ])(`if request page %i, then page will be changed is %s`, (i, res) => {
            wrapper.vm.changePage(i);
            if (res) {
                expect(wrapper.vm.currentPage).toBe(i);
            } else {
                expect(wrapper.vm.currentPage).not.toBe(i);
            }
        });
    });

    // changeKeyPage slides pages if the coursor is active
    describe(`page change on hotkey`, () => {
        describe(`active coursor`, () => {
            const wrapper = createWrapperOfLength(15, 5); // 3 pages
            // initial position
            wrapper.vm.setActCours(true);
            wrapper.vm.changePage(1);
            test.each([
                ["right", 2],
                ["left", 1],
                ["left", 1],
                ["right", 2],
                ["right", 3],
                ["right", 3],
            ])(
                `arrow %s, old index ${wrapper.vm.currentPage}, new index %i`,
                (dir, res) => {
                    const event = { srcKey: dir };
                    wrapper.vm.changeKeyPage(event);
                    expect(wrapper.vm.currentPage).toBe(res);
                }
            );
        });
        describe(`not active coursor`, () => {
            const wrapper = createWrapperOfLength(15, 5); // 3 pages
            // initial position
            wrapper.vm.setActCours(false);
            wrapper.vm.changePage(2);
            test.each([
                ["right", 2],
                ["left", 2],
                ["left", 2],
            ])(
                `if the arrow is %s, then the new page has index %i`,
                (dir, res) => {
                    const event = { srcKey: dir };
                    wrapper.vm.changeKeyPage(event);
                    expect(wrapper.vm.currentPage).toBe(res);
                }
            );
        });
    });
});
