<style scoped>
.tab {
    display: inline-block;
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    background-color: #edf1f5;
    text-align: center;
}
.active {
    background-color: #0f870d;
    color: white;
}
h1 {
    display: none;
}
</style>
<template>
    <div>
        <h1>{{ $t("form_load_upd") }}</h1>
        <div class="row d-flex justify-content-around">
            <h4
                :class="{ active: load_mode }"
                class=" tab col mx-3 rounded-lg border"
                @click="changeMode"
            >
                {{ $t("load") }}
            </h4>
            <h4
                :class="{ active: !load_mode }"
                class="tab col mx-3 rounded-lg border"
                @click="changeMode"
            >
                {{ $t("update") }}
            </h4>
        </div>
        <form @submit.prevent :class="{ 'was-validated': subm }">
            <Params :form_type="mode" :required="req" v-model="value" />
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
        Params,
    },
    data: function() {
        return {
            filename: "",
            req: true,
            subm: false,
            load_mode: true,
            value: "",
        };
    },
    methods: {
        checkForm: function(event) {
            this.subm = true;
        },
        changeMode: function(event) {
            this.load_mode = !this.load_mode;
        },
    },
    computed: {
        mode: function() {
            return this.load_mode ? "load" : "update";
        },
    },
};
</script>
