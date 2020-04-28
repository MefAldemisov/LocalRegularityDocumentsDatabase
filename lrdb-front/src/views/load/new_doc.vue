<template>
    <form
        @submit.prevent="postData"
        v-shortkey="['shift', 'enter']"
        @shortkey="postData()"
    >
        <Params form_type="load" :required="req" v-model="value" />
        <button type="submit" class="btn btn-success btn-block">
            {{ $t("upl_doc_data") }}
        </button>
    </form>
</template>
<script>
import Params from "../../components/search/param_selector.vue";
import apiCalls from "../../request/index.js";
export default {
    name: "NewDoc",
    data: function() {
        return {
            req: true,
            value: "",
        };
    },
    components: {
        Params,
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
