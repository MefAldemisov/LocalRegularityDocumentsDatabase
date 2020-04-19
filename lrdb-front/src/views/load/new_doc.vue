<template>
    <form @submit.prevent>
        <Params form_type="load" :required="req" v-model="value" />
        <button
            type="submit"
            @submit.prevent="checkForm"
            @click.prevent="checkForm"
            class="btn btn-success btn-block"
        >
            {{ $t("upl_doc_data") }}
        </button>
    </form>
</template>
<script>
import Params from "../../components/search/param_selector.vue";
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
};
</script>
