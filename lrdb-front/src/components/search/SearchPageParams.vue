<script>
import BaseParams from "./BaseParams.vue";
import apiCalls from "../../request/index.js";

export default {
    name: "SearchPageParams",
    data: function() {
        return {
            params: "",
            val: "",
        };
    },
    components: {
        BaseParams,
    },
    props: {
        form_type: {
            default: "search",
            type: String,
        },
        value: {
            required: true,
        },
    },
    methods: {
        request: async function() {
            let val = [];
            await apiCalls
                .getDocuments(this.params)
                .then(function(data) {
                    console.log(data.data);
                    val = data.data;
                })
                .catch(function(error) {
                    console.log("Not possible to load all documents", error);
                    val = require("../../assets/test_data.json");
                });
            this.setVal(val);
        },
        setVal: function(data) {
            this.val = data;
            this.$emit("input", this.val);
        },
    },
};
</script>
<template>
    <form
        @submit.prevent="request"
        v-shortkey="['shift', 'enter']"
        @shortkey="request()"
    >
        <h2>{{ $t("search_search_params") }}</h2>
        <base-params :form_type="form_type" v-model="params" />
        <button type="submit" class="btn btn-success btn-block">
            <font-awesome-icon icon="search"></font-awesome-icon>
            <span>{{ $t("srch_srch_btn") }}</span>
        </button>
    </form>
</template>
