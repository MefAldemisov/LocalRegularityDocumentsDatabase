<template>
    <form
        @submit.prevent="postData"
        v-shortkey="['shift', 'enter']"
        @shortkey="postData()"
    >
        <base-params form_type="load" :required="req" v-model="value" />
        <button type="submit" class="btn btn-success btn-block">
            {{ $t("upl_doc_data") }}
        </button>
    </form>
</template>
<script>
import BaseParams from "../../components/search/BaseParams.vue";
import apiCalls from "../../request/index.js";
export default {
    name: "LoadDocsPageNew",
    data: function() {
        return {
            req: true,
            value: "",
        };
    },
    components: {
        BaseParams,
    },
    methods: {
        postData: async function() {
            await apiCalls
                .addDocuments(this.value)
                .then(function(data) {
                    console.log("loading complete");
                })
                .catch(function(error) {
                    console.log("Error, post file");
                });
        },
    },
};
</script>
