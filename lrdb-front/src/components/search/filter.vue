<style scoped>
.custom-select {
    height: 2.8rem;
}
label {
    margin: 0;
}
</style>
<template>
    <div>
        <form class="filter_form" @submit.prevent>
            <div class="input-group mb-1">
                <label for="str_by_inp" class="input-group-prepend">
                    <button class="btn btn-success" @click="sort_by">
                        <span>
                            {{ $t("str_by") }}
                        </span>
                    </button>
                </label>
                <select
                    id="str_by_inp"
                    v-model="criteria"
                    class="custom-select"
                >
                    <option value="name" selected>{{ $t("srt_name") }}</option>
                    <option value="owner">{{ $t("srt_owner") }}</option>
                    <option value="created">{{ $t("srt_crt") }}</option>
                    <option value="last_update">{{ $t("srch_upd") }}</option>
                    <option value="effect_date">{{ $t("srch_start") }}</option>
                    <option value="expiration_date">{{
                        $t("srch_end")
                    }}</option>
                    <option value="department">{{ $t("srch_dep") }}</option>
                </select>
                <div class="input-group-append">
                    <button class="btn btn-success" @click.prevent="done">
                        {{ $t("next_request_btn") }}
                    </button>
                </div>
            </div>
        </form>
        <Representation :response="resp" />
    </div>
</template>
<script>
import Representation from "../represent/doc_representation.vue";
import comparator from "../../plugins/comparator.js";

export default {
    name: "FilterPage",
    components: {
        Representation,
    },
    props: { resp: { required: true } },
    data: function() {
        return {
            criteria: "",
        };
    },
    methods: {
        done: function() {
            this.$emit("done");
        },
        sort_by: function() {
            this.resp = this.resp.sort(comparator.compareValues(this.criteria));
        },
    },
};
</script>
