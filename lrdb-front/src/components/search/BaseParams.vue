<script>
import BaseInputField from "./input_items/BaseInputField.vue";
import BaseCheckItem from "./input_items/BaseCheckItem.vue";
import BaseDateRange from "./input_items/BaseDateRange.vue";
import BaseInputFile from "./input_items/BaseInputFile.vue";

export default {
    name: "BaseParams",
    components: {
        BaseInputField,
        BaseCheckItem,
        BaseDateRange,
        BaseInputFile,
    },
    props: {
        required: {
            default: false,
            type: Boolean,
        },
        form_type: {
            default: "search", // other values: edit, upload
            type: String,
            validator(val) {
                return ["search", "load", "upload"].includes(val);
            },
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
            f: false,
            departments: [
                { val: "dep1", index: 0 },
                { val: "dep2", index: 1 },
                { val: "dep3", index: 2 },
                { val: "dep4", index: 3 },
                { val: "dep5", index: 4 },
                { val: "dep6", index: 5 },
                { val: "dep7", index: 6 },
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
        };
    },
    created: function() {
        this.val.name = this.initial.name;
        this.val.owner = this.initial.owner;
    },
    computed: {
        error_in_date: function() {
            return (
                this.form_type !== "search" &&
                this.val.effect_date &&
                this.val.expiration_date &&
                this.val.effect_date > this.val.expiration_date
            );
        },
    },
    methods: {
        filterSelected: function(obj) {
            let used = {};
            for (let key of Object.keys(obj)) {
                if (obj[key]) {
                    used[key] = obj[key];
                }
            }
            return used;
        },
        extractDepId(dep_list) {
            const dep_indexes = Array.from(Array(dep_list.length).keys());
            let sl = dep_list;
            let res = dep_indexes.filter(function(val) {
                return sl[val];
            });
            return res.length > 0 ? res : "";
        },
        handleInput: function(e) {
            if (!this.error_in_date) {
                this.val.dep = this.extractDepId(this.select_list);
                this.$emit("input", this.filterSelected(this.val));
            }
        },
    },
};
</script>
<template>
    <div class="pb-3">
        <!-- in any case -->
        <h3 class="pt-4">{{ $t("main_params") }}</h3>
        <div class="row">
            <base-input-field
                v-model="val.name"
                name="srch_name"
                type="text"
                :required="required"
                @input="handleInput"
            />
        </div>
        <!-- in any type except upload-->
        <div v-if="form_type !== 'load'" class="row">
            <base-input-field
                v-model="val.owner"
                name="srch_owner"
                type="text"
                :required="required"
                @input="handleInput"
            />
            <base-input-field
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
            <span
                class="error-msg"
                v-if="form_type !== 'search' && error_in_date"
            >
                {{ $t("error_effect") }}
            </span>
        </h3>

        <!-- in case of  search-->
        <div v-if="form_type === 'search'" class="row">
            <base-date-range
                v-model="val.created"
                name="srch_create"
                :required="required"
                @input="handleInput"
            />
            <base-date-range
                v-model="val.last_update"
                name="srch_last"
                :required="required"
                @input="handleInput"
            />
        </div>
        <div v-if="form_type === 'search'" class="row">
            <base-date-range
                v-model="val.effect_date"
                name="srch_start"
                :required="required"
                @input="handleInput"
            />
            <base-date-range
                v-model="val.expiration_date"
                name="srch_end"
                :required="required"
                @input="handleInput"
            />
        </div>
        <!-- in case of change and upload -->
        <div v-if="form_type !== 'search'" class="row rounded">
            <base-date-range
                v-model="val.effect_date"
                name="srch_start"
                :range="f"
                :required="required"
                @input="handleInput"
                :error="error_in_date"
            />
            <base-date-range
                v-model="val.expiration_date"
                name="srch_end"
                :range="f"
                :required="required"
                @input="handleInput"
                :error="error_in_date"
            />
        </div>

        <h3 class="pt-4">{{ $t("srch_dep") }}</h3>
        <div class="pb-4 d-flex flex-wrap justify-content-around">
            <base-check-item
                v-for="dep in departments"
                v-model="select_list[dep.index]"
                :key="dep.val"
                @input="handleInput"
                >{{ $t(dep.val) }}</base-check-item
            >
        </div>
        <!-- for upload and change -->
        <div v-if="form_type !== 'search'">
            <h3>{{ $t("selct_file") }}</h3>
            <base-input-file v-model="val.file" @input="handleInput" />
        </div>
    </div>
</template>
<style scoped>
.error-msg {
    padding: 2rem;
    color: red;
    font-size: 1rem;
    font-weight: 400;
}
</style>
