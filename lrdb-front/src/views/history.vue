<template>
    <div>
        <h1>
            {{ $t("history") }} <br />
            &laquo;{{ $route.params.name }}&raquo;
        </h1>
        <Representation :response="response" />
    </div>
</template>
<script>
import Representation from "../components/represent/doc_representation.vue";
import comparator from "../plugins/comparator.js";

export default {
    name: "History",
    components: {
        Representation,
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
