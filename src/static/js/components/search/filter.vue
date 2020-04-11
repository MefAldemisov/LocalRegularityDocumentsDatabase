<template>
    <div>
        <form id="filter_form" class="filter_form" @submit.prevent="done">
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                    <button class="btn btn-success" type="submit" id="str_by_btn">
                        <label id="str_by" class="str_by" for="str_by_inp">Sort by</label>
                    </button>
                </div>
                <select id="str_by_inp" name="sort by" class="input-group-text custom-select">
                    <option selected value="name" id="srt_name">Document name</option>
                    <option value="owner" id="srt_owner">Owner of the document</option>
                    <option value="date" id="srt_crt">Date of createion</option>
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
                        @click.prevent
                    >Next request</button>
                </div>
            </div>
        </form>
        <Representation />
    </div>
</template>
<script>
import Representation from "../represent/dock_representation.vue";
export default {
    name: "FilterPage",
    components: {
        Representation
    },
    methods: {
        done: function() {
            this.$emit("done");
        }
    }
};
</script>