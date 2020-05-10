<template>
    <div>
        <h1>
            {{ $t("history") }} <br />
            &laquo;{{ $route.params.name }}&raquo;
        </h1>
        <doc-list :response="response" />
    </div>
</template>
<script>
import DocList from "../components/represent/DocList.vue";
import comparator from "../plugins/comparator.js";

export default {
    name: "History",
    components: {
        DocList,
    },
    data: function() {
        return {
            response: {},
        };
    },
    created: function() {
        this.response = require("../assets/test_data.json");
        this.response = this.response.sort(
            comparator.compareValues("created", "desc")
        );
    },
};
</script>
