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
        <tip v-if="search_mode" type="search">
            {{ $t("hotkeys") }}
            <br />
            <span class="border rounded">ctrl</span>+
            <span class="border rounded"
                ><font-awesome-icon icon="arrow-left"></font-awesome-icon
            ></span>
            {{ $t("or") }}
            <span class="border rounded"
                ><font-awesome-icon icon="arrow-right"></font-awesome-icon
            ></span>
            {{ $t("to_nav_sect") }}
        </tip>
        <h1 class="hidden">{{ $t("doc_search_page") }}</h1>
        <Search
            form_type="search"
            v-if="search_mode"
            @input="changeMode"
            v-model="resp"
        />
        <FilterPage v-else @done="changeMode" :resp="resp" />
    </div>
</template>

<script>
import Search from "../components/search/search_docs_page.vue";
import FilterPage from "../components/search/filter.vue";
const RESP = require("../assets/test_data.json");
import tip from "../components/tips.vue";

export default {
    name: "SearchDocs",
    components: {
        Search,
        FilterPage,
        tip,
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
