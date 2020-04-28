<style scoped>
.error-msg {
    padding: 2rem;
    color: red;
    font-size: 1rem;
    font-weight: 400;
}
</style>
<template>
    <div class="pb-3">
        <!-- in any case -->
        <h3 class="pt-4">{{ $t("main_params") }}</h3>
        <div class="row">
            <input_field
                v-model="val.name"
                name="srch_name"
                type="text"
                :required="required"
                @input="handleInput"
            />
        </div>
        <!-- in any type except upload-->
        <div v-if="form_type !== 'load'" class="row">
            <input_field
                v-model="val.owner"
                name="srch_owner"
                type="text"
                :required="required"
                @input="handleInput"
            />
            <input_field
                v-if="form_type !== 'upload'"
                v-model="val.id"
                name="srch_id"
                type="number"
                :required="required"
                @input="handleInput"
            />
        </div>

        <h3 class="pt-4">
            {{ $t("dates") }}
            <span class="error-msg" v-if="form_type !== 'search' && error_data">
                {{ $t("error_effect") }}
            </span>
        </h3>

        <!-- in case of  search-->
        <div v-if="form_type === 'search'" class="row">
            <date-range
                v-model="val.created"
                name="srch_create"
                :required="required"
                @input="handleInput"
            />
            <date-range
                v-model="val.last_update"
                name="srch_last"
                :required="required"
                @input="handleInput"
            />
        </div>
        <div v-if="form_type === 'search'" class="row">
            <date-range
                v-model="val.effect_date"
                name="srch_start"
                :required="required"
                @input="handleInput"
            />
            <date-range
                v-model="val.expiration_date"
                name="srch_end"
                :required="required"
                @input="handleInput"
            />
        </div>
        <!-- in case of change and upload -->
        <div v-if="form_type !== 'search'" class="row rounded">
            <date-range
                v-model="val.effect_date"
                name="srch_start"
                :range="f"
                :required="required"
                @input="handleInput"
                :error="error_data"
            />
            <date-range
                v-model="val.expiration_date"
                name="srch_end"
                :range="f"
                :required="required"
                @input="handleInput"
                :error="error_data"
            />
        </div>

        <h3 class="pt-4">{{ $t("srch_dep") }}</h3>
        <div class="pb-4 d-flex flex-wrap justify-content-around">
            <check
                v-for="dep in departments"
                v-model="select_list[dep.index]"
                :key="dep.val"
                @input="handleInput"
                >{{ $t(dep.val) }}</check
            >
        </div>
        <!-- for upload and change -->
        <div v-if="form_type !== 'search'">
            <h3>{{ $t("selct_file") }}</h3>
            <input_file v-model="val.file" @input="handleInput" />
        </div>
    </div>
</template>
<script>
import input_field from "./input_items/input_field.vue";
import check from "./input_items/check_item.vue";
import DateRange from "./input_items/input_date_range.vue";
import input_file from "./input_items/input_file.vue";

export default {
    name: "Params",
    components: {
        input_field,
        check,
        DateRange,
        input_file,
    },
    props: {
        required: {
            default: false,
            type: Boolean,
        },
        form_type: {
            default: "search", // other values: edit, upload
            type: String,
        },
        value: {
            required: true,
        },
        initial: {
            required: false,
            default: function() {
                return { name: "", owner: "" };
            },
        },
    },
    data: function() {
        return {
            active_select: false,
            f: false,
            departments: [
                { name: "University Development", val: "dep1", index: 0 },
                {
                    name: "Design and research activities",
                    val: "dep2",
                    index: 1,
                },
                { name: "Pre-university education", val: "dep3", index: 2 },
                { name: "Public relations", val: "dep4", index: 3 },
                { name: "Legal issues", val: "dep5", index: 4 },
                { name: "Quality education", val: "dep6", index: 5 },
                {
                    name: "Administrative Policy and Informatization",
                    val: "dep7",
                    index: 6,
                },
            ],
            val: {
                file: "",
                name: "",
                owner: "",
                id: 0,
                created: "",
                last_update: "",
                effect_date: "",
                expiration_date: "",
                dep: "",
            },
            select_list: [false, false, false, false, false, false, false],
            error_data: false,
        };
    },
    created: function() {
        this.val.name = this.initial.name;
        this.val.owner = this.initial.owner;
    },
    methods: {
        validateForm() {
            // clear array of errors
            this.errors = [];
            if (this.form_type !== "search") {
                if (
                    this.val.effect_date &&
                    this.val.expiration_date &&
                    this.val.effect_date > this.val.expiration_date
                ) {
                    this.error_data = true;
                } else {
                    this.error_data = false;
                }
            }
        },
        filterSelected: function() {
            let used = {};
            for (let key of Object.keys(this.val)) {
                if (this.val[key]) {
                    used[key] = this.val[key];
                }
            }
            return used;
        },
        changeActive: function() {
            this.active_select = !this.active_select;
        },
        handleInput: function(e) {
            if (this.validateForm()) {
                // configure department id
                const dep_indexes = Array.from(
                    Array(this.select_list.length).keys()
                );
                let sl = this.select_list;
                this.val.dep = dep_indexes.filter(function(val) {
                    return sl[val];
                });
                this.val.dep = this.val.dep.length > 0 ? this.val.dep : "";
                // selection of used only data
                this.$emit("input", this.filterSelected());
            }
        },
    },
};
</script>
