<script>
import DocList from "../components/represent/DocList.vue";
import comparator from "../plugins/comparator.js";
import apiCalls from "../request/index.js";

export default {
    name: "History",
    components: {
        DocList
    },
    data: function() {
        return {
            response: {}
        };
    },
    methods: {
        setHistory: function(res) {
            this.response = res;
        },
        getData: async function() {
            let res = [];
            let id = 1;
            // $route.params.id;
            await apiCalls
                .getHistory(id)
                .then(function(data) {
                    console.log("Histry data:", data);
                    res = data.data;
                })
                .catch(function(error) {
                    console.log("Some error occured");
                    res = require("../assets/test_data.json");
                });
            return res;
        }
    },
    created: async function() {
        const d = await this.getData();
        this.setHistory(d);
    }
};
</script>
<template>
    <div>
        <h1>
            {{ $t("history") }}
            <br />
            &laquo;{{ $route.params.name }}&raquo;
        </h1>
        <div v-if="this.response.length>0">
            <doc-list :response="response" />
        </div>
    </div>
</template>
