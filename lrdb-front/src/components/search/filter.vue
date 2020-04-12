<template>
    <div>
        <form id="filter_form" class="filter_form" @submit.prevent>
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                    <button class="btn btn-success" @click="sort_by" id="str_by_btn">
                        <label id="str_by" class="str_by" for="str_by_inp">Sort by</label>
                    </button>
                </div>
                <select
                    id="str_by_inp"
                    v-model="criteria"
                    class="input-group-text custom-select"
                >
                    <option value="name" id="srt_name">Document name</option>
                    <option value="owner" id="srt_owner">Owner of the document</option>
                    <option value="created" id="srt_crt">Date of createion</option>
                    <option value="last_update" id="srt_upd">Date of the last update</option>
                    <option value="start_valid" id="srt_start">Date of start of being valid</option>
                    <option value="validity date" id="srt_end">Validity date</option>
                    <option value="department" id="srt_dep">Department</option>
                    <option value="size" id="srt_size">Size of the document</option>
                    <option value="peolple" id="srt_ment">Amount of mentioned people</option>
                </select>
                <div class="input-group-append">
                    <button
                        id="next_request_btn"
                        class="btn btn-success"
                        @click.prevent="done"
                    >Next request</button>
                </div>
            </div>
        </form>
        <Representation :response="resp" />
    </div>
</template>
<script>
import Representation from "../represent/dock_representation.vue";

export default {
    name: "FilterPage",
    data: function() {
        return {
             criteria: ""
        };
    },
    props: { resp: { required: true } },
    components: {
        Representation
    },
    methods: {
        compareValues: function(key, order = "asc") {
            return function innerSort(a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
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
            this.resp = this.resp.sort(this.compareValues(this.criteria))
        }
    }
};
</script>