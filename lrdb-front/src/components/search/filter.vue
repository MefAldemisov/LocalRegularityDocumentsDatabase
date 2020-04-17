<style scoped>
.custom-select {
    height: 2.8rem;
}
</style>
<template>
    <div>
        <form class="filter_form" @submit.prevent>
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                    <button class="btn btn-success" @click="sort_by">
                        <label for="str_by_inp">
                            {{ $t("str_by") }}
                        </label>
                    </button>
                </div>
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
        compareValues: function(key, order = "asc") {
            return function innerSort(a, b) {
                if (!a[key] || !b[key]) {
                    // property doesn't exist on either object
                    return 0;
                }
                const varA =
                    typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
                const varB =
                    typeof b[key] === "string" ? b[key].toLowerCase() : b[key];
                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return order === "desc" ? comparison * -1 : comparison;
            };
        },
        done: function() {
            this.$emit("done");
        },
        sort_by: function() {
            this.resp = this.resp.sort(this.compareValues(this.criteria));
        },
    },
};
</script>
