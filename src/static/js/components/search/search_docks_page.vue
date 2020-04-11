<style>
</style>
<template>
    <div>
        <form id="search_form" class="search_form" @submit.prevent="done">
            <h2 id="search_search_params">Search parameters</h2>
            <div class="row">
                <div class="col input-group mb-1">
                    <div class="input-group-prepend">
                        <label
                            for="srch_owner_inp"
                            class="input-group-text"
                            id="srch_owner"
                        >Document owner</label>
                    </div>
                    <input id="srch_owner_inp" type="text" class="form-control" />
                </div>
                <div class="col input-group mb-1">
                    <div class="input-group-prepend">
                        <label
                            for="srch_type_inp"
                            class="input-group-text"
                            id="srch_type"
                        >Document type</label>
                    </div>
                    <input id="srch_type_inp" type="text" class="form-control" />
                </div>
            </div>
            <div class="row">
                <div class="col input-group mb-1">
                    <div class="input-group-prepend">
                        <label
                            for="srch_create_inp"
                            class="input-group-text"
                            id="srch_create"
                        >Date of document creation</label>
                    </div>
                    <input
                        id="srch_create_inp"
                        type="date"
                        name="creation_date"
                        max="3000-12-31"
                        min="1000-01-01"
                        class="form-control"
                    />
                </div>
                <div class="col input-group mb-1">
                    <div class="input-group-prepend">
                        <label
                            for="srch_last_inp"
                            class="input-group-text"
                            id="srch_last"
                        >Date of document last eddition</label>
                    </div>
                    <input
                        id="srch_last_inp"
                        type="date"
                        name="creation_date"
                        max="3000-12-31"
                        min="1000-01-01"
                        class="form-control"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col input-group mb-1">
                    <div class="input-group-prepend">
                        <label
                            for="srch_srat_inp"
                            class="input-group-text"
                            id="srch_start"
                        >Date of start of the document validity</label>
                    </div>
                    <input
                        id="srch_srat_inp"
                        type="date"
                        name="creation_date"
                        max="3000-12-31"
                        min="1000-01-01"
                        class="form-control"
                    />
                </div>
                <div class="col input-group mb-1">
                    <div class="input-group-prepend">
                        <label
                            for="srch_end_inp"
                            class="input-group-text"
                            id="srch_end"
                        >End of validity date</label>
                    </div>
                    <input
                        id="srch_end_inp"
                        type="date"
                        name="creation_date"
                        max="3000-12-31"
                        min="1000-01-01"
                        class="form-control"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col input-group mb-1">
                    <div class="input-group-prepend">
                        <label for="srch_dep_inp" class="input-group-text" id="srch_dep">Department</label>
                    </div>
                    <select id="srch_dep_inp" name="sort by" class="input-group-text custom-select">
                        <option value="owner" id="dep1">University Development</option>
                        <option value="date" id="dep2">Design and research activities</option>
                        <option value="start_valid" id="dep3">Pre-university education</option>
                        <option value="validity date" id="dep4">Public relations</option>
                        <option value="department" id="dep5">Legal issues</option>
                        <option value="size" id="dep6">Quality education</option>
                        <option value="peolple" id="dep7">Administrative Policy and Informatization</option>
                    </select>
                    <!-- List of departments od taken from https://university.innopolis.ru/about/structure/-->
                </div>
                <div class="col input-group mb-1">
                    <div class="input-group-prepend">
                        <label
                            for="srch_pg_num_inp"
                            class="input-group-text"
                            id="srch_pg_num"
                        >Page amount</label>
                    </div>
                    <input id="srch_pg_num_inp" type="number" class="form-control" />
                </div>
            </div>
            <button type="submit" class="btn btn-success btn-block" id="search_form_btn">
                <span class="fa fa-search"></span>
                <span id="srch_srch_btn">Search</span>
            </button>
        </form>
        <Representation />
    </div>
</template>
<script>
import Representation from "../represent/dock_representation.vue";

export default {
    name: "Search",
    methods: {
        done: function() {
            this.$emit("done");
        }
    },
    components: {
        Representation
    }
};
</script>