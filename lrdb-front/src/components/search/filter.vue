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
                <div class="input-group-prepend">
                    <button class="btn btn-success" @click="sort_by">
                        <span>
                            {{ $t("str_by") }}
                        </span>
                    </button>
                </div>
                <sorting v-model="criteria"></sorting>
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
import sorting from "../search/input_items/select_sorting.vue";

export default {
    name: "FilterPage",
    components: {
        Representation,
        sorting,
    },
    props: { resp: { required: true } },
    data: function() {
        return {
            criteria: "name",
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
