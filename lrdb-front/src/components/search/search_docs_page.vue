<template>
    <div>
        <form @submit.prevent="request">
            <h2>{{ $t("search_search_params") }}</h2>
            <Params :form_type="form_type" v-model="params" />
            <button type="submit" class="btn btn-success btn-block">
                <font-awesome-icon icon="search"></font-awesome-icon>
                <span>{{ $t("srch_srch_btn") }}</span>
            </button>
        </form>
    </div>
</template>
<script>
import Params from "./param_selector.vue";
import apiCalls from "../../request/index.js";

export default {
    name: "Search",
    data: function() {
        return {
            params: "",
            val: "",
        };
    },
    components: {
        Params,
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
