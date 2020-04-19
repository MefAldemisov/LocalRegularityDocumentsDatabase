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
        request: function() {
            apiCalls
                .getAll()
                .then(function(data) {
                    this.val = data.data;
                })
                .catch(function(error) {
                    console.log("Not possible to load all documents");
                });
        },
        handleInput: function(value) {
            this.$emit("done", this.val);
        },
    },
};
</script>
