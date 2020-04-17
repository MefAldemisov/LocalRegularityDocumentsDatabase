<style scoped>
.search_form *,
.filter_form * {
    font-size: 0.7rem;
}
.str_by {
    margin: 0;
}
</style>
<template>
    <div>
        <h1 class="hidden">{{ $t("doc_search_page") }}</h1>
        <Search form_type="search" v-if="search_mode" @done="changeMode" />
        <FilterPage v-else @done="changeMode" :resp="resp" />
    </div>
</template>

<script>
import Search from "../components/search/search_docs_page.vue";
import FilterPage from "../components/search/filter.vue";
const RESP = require("../assets/test_data.json");

export default {
    name: "SearchDocs",
    components: {
        Search,
        FilterPage,
    },
    data: function() {
        return {
            search_mode: true,
            resp: RESP,
        };
    },
    methods: {
        changeMode: function() {
            this.search_mode = !this.search_mode;
        },
    },
};
</script>
