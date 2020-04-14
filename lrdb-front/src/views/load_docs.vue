<style>
input[type="file"] {
    display: none;
}
</style>
<template>
    <div>
        <h1 class="hidden">{{ $t("form_load_upd") }}</h1>
        <h2>{{ $t("load") }}</h2>
        <form @submit.prevent :class="{ 'was-validated': subm }">
            <Params :required="req" />
            <div class="row">
                <div class="col input-group mb-1">
                    <label
                        id="srch_owner"
                        for="srch_file_inp"
                        :class="{ 'bg-success': filename }"
                        class="w-100 input-group-text"
                    >
                        {{ $t("selct_file") }}
                        <span v-if="filename">:</span>
                        {{ filename }}
                    </label>
                </div>
                <input
                    id="srch_file_inp"
                    type="file"
                    class="form-control"
                    @change="previewFiles"
                />
            </div>
            <button
                type="submit"
                @submit.prevent="checkForm"
                @click.prevent="checkForm"
                class="btn btn-success btn-block"
            >
                {{ $t("upl_doc_data") }}
            </button>
        </form>
    </div>
</template>
<script>
import Params from "../components/search/param_selector.vue";

export default {
    name: "DocLoader",
    components: {
        Params
    },
    data: function() {
        return {
            filename: "",
            req: true,
            subm: false
        };
    },
    methods: {
        previewFiles: function(event) {
            this.filename = event.target.files[0].name;
        },
        checkForm: function(event) {
            this.subm = true;
        }
    }
};
</script>
