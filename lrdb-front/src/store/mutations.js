export default {
    setMyDocs(state, val) {
        state.my_documents = val;
    },
    hide_nav_tip(state) {
        state.tips["nav"] = true;
    },
    hide_submit_tip(state) {
        state.tips["submit"] = true;
    },
    hide_load_tip(state) {
        state.tips["load"] = true;
    },
    hide_prev_tip(state) {
        state.tips["prev"] = true;
    },
};
