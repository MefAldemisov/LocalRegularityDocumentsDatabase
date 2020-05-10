<script>
import SearchPageParams from "../components/search/SearchPageParams.vue";
import SearchPageFilter from "../components/search/SearchPageFilter.vue";
const RESP = require("../assets/test_data.json");
import TipContainer from "../components/tips/TipContainer.vue";

export default {
    name: "SearchDocs",
    components: {
        SearchPageParams,
        SearchPageFilter,
        TipContainer,
    },
    data: function() {
        return {
            search_mode: true,
            resp: RESP,
            tips: ["nav", "submit"],
        };
    },
    methods: {
        changeMode: function() {
            this.search_mode = !this.search_mode;
        },
    },
};
</script>
<template>
    <div>
        <tip-container :tips="tips"></tip-container>
        <h1 class="hidden">{{ $t("doc_search_page") }}</h1>
        <search-page-params
            form_type="search"
            v-if="search_mode"
            @input="changeMode"
            v-model="resp"
        />
        <search-page-filter v-else @done="changeMode" :resp="resp" />
    </div>
</template>
<style scoped>
.search_form *,
.filter_form * {
    font-size: 0.7rem;
}
.str_by {
    margin: 0;
}
</style>
