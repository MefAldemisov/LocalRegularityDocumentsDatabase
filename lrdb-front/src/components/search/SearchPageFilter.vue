<script>
import DocList from "../represent/DocList.vue";
import comparator from "../../plugins/comparator.js";
import BaseDropdown from "../search/input_items/BaseDropdown.vue";

export default {
    name: "SearchPageFilter",
    components: {
        DocList,
        BaseDropdown,
    },
    props: { resp: { required: true } },
    data: function() {
        return {
            criteria: "name",
            filter_options: [
                { val: "name", text: "srt_name", index: 0 },
                { val: "owner", text: "srt_owner", index: 1 },
                { val: "created", text: "srt_crt", index: 2 },
                { val: "last_update", text: "srch_upd", index: 3 },
                { val: "effect_date", text: "srch_start", index: 4 },
                { val: "expiration_date", text: "srch_end", index: 5 },
                { val: "department", text: "srch_dep", index: 6 },
            ],
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
<template>
    <div>
        <form class="filter_form" @submit.prevent>
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                    <button class="btn btn-success" @click="sort_by">
                        <span>
                            {{ $t("str_by") }}
                        </span>
                    </button>
                </div>
                <base-dropdown
                    v-model="criteria"
                    :options="filter_options"
                ></base-dropdown>
                <div class="input-group-append">
                    <button class="btn btn-success" @click.prevent="done">
                        {{ $t("next_request_btn") }}
                    </button>
                </div>
            </div>
        </form>
        <doc-list :response="resp" />
    </div>
</template>
<style scoped>
.custom-select {
    height: 2.8rem;
}
label {
    margin: 0;
}
.filter_form,
.input-group,
.input-group-append {
    z-index: 1 !important   ;
}
</style>
