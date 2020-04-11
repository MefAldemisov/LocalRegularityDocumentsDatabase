<style>
.search_form *,
.filter_form * {
    font-size: 0.7rem;
}
.str_by {
    margin: 0;
}
</style>
<template>
    <div id="search_holder">
        <h1 class="hidden">Document search page</h1>
        <Search @done="changeMode" v-if="search_mode" />
        <FilterPage @done="changeMode" v-else />
    </div>
</template>

<script>
import Search from "./search/search_docks_page.vue";
import FilterPage from "./search/filter.vue";

export default {
    name: "SearchDocks",
    data: function() {
        return { search_mode: true };
    },
    methods: {
        changeMode: function() {
            this.search_mode = !this.search_mode;
        }
    },
    components: {
        Search,
        FilterPage
    }
};
</script>
