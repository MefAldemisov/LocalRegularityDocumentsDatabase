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
    <div id="search_holder">
        <h1 class="hidden">{{ $t("doc_search_page") }}</h1>
        <Search form_type="search" v-if="search_mode" @done="changeMode" />
        <FilterPage v-else @done="changeMode" :resp="resp" />
    </div>
</template>

<script>
import Search from "../components/search/search_docs_page.vue";
import FilterPage from "../components/search/filter.vue";

const RESP = [
    {
        id: 1,
        owner: 2,
        name: "Приложение 4 ознакомление",
        type: "docx",
        created: "2019-04-02T12:11:00.032709Z",
        last_update: "2018-02-04T12:11:00.032709Z",
        effect_date: "2020-04-08T12:11:00.032709Z",
        expiration_date: "2017-12-10T12:11:00.032709Z"
    },
    {
        id: 2,
        owner: 4,
        name: "Приложение 3 ознакомление",
        type: "png",
        created: "2016-04-05T12:11:00.032709Z",
        last_update: "2017-02-04T12:11:00.032709Z",
        effect_date: "2020-04-07T12:11:00.032709Z",
        expiration_date: "2014-04-04T12:11:00.032709Z"
    },
    {
        id: 3,
        owner: 8,
        name: "Приложение 2 ознакомление",
        type: "pdf",
        created: "2018-11-04T12:11:00.032709Z",
        last_update: "2017-04-04T12:11:00.032709Z",
        effect_date: "2020-01-04T12:11:00.032709Z",
        expiration_date: "2015-09-04T12:11:00.032709Z"
    },
    {
        id: 4,
        owner: 16,
        name: "Приложение 1 ознакомление",
        type: "docx",
        created: "2019-04-04T12:11:00.032709Z",
        last_update: "2018-04-04T12:11:00.032709Z",
        effect_date: "2020-03-04T12:11:00.032709Z",
        expiration_date: "2020-02-04T12:11:00.032709Z"
    }
];

export default {
    name: "SearchDocs",
    components: {
        Search,
        FilterPage
    },
    data: function() {
        return {
            search_mode: true,
            resp: RESP
        };
    },
    methods: {
        changeMode: function() {
            this.search_mode = !this.search_mode;
        }
    }
};
</script>
