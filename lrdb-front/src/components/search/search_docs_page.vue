<template>
    <div>
        <form @submit.prevent="done">
            <h2>{{ $t("search_search_params") }}</h2>
            <Params :form_type="form_type" v-model="value" />
            <button
                id="search_form_btn"
                type="submit"
                class="btn btn-success btn-block"
            >
                <font-awesome-icon icon="search"></font-awesome-icon>
                <span>{{ $t("srch_srch_btn") }}</span>
            </button>
        </form>
    </div>
</template>
<script>
import Params from "./param_selector.vue";

export default {
    name: "Search",
    data: function() {
        return {
            value: "",
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
    },
    methods: {
        done: function() {
            this.$emit("done");
        },
    },
};
</script>
