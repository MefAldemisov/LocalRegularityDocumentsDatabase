<style></style>
<template>
    <div>
        <form id="search_form" class="search_form" @submit.prevent="done">
            <h2 id="search_search_params">Search parameters</h2>
            <Params />
            <button type="submit" class="btn btn-success btn-block" id="search_form_btn">
                <span class="fa fa-search"></span>
                <span id="srch_srch_btn">Search</span>
            </button>
        </form>
    </div>
</template>
<script>
import Params from "./param_selector.vue";

export default {
    name: "Search",
    methods: {
        done: function() {
            this.$emit("done");
        }
    },
    components: {
        Params
    }
};
</script>
