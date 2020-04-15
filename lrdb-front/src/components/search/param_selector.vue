<template>
    <div class="pb-3">
        <!-- in any case -->
        <h4 class="pt-4">Main parameters</h4>
        <div class="row">
            <input_field name="srch_name" type="text" :required="required" />
        </div>
        <!-- in any type except upload-->
        <div v-if="form_type !== 'load'" class="row">
            <input_field name="srch_owner" type="text" :required="required" />
            <input_field name="Id" type="number" :required="required" />
        </div>

        <h4 class="pt-4">Dates</h4>
        <!-- in case of  search-->
        <div v-if="form_type === 'search'" class="row">
            <date-range class="col" name="srch_create" :required="required" />
            <date-range class="col" name="srch_last" :required="required" />
        </div>
        <div v-if="form_type === 'search'" class="row">
            <date-range class="col" name="srch_start" :required="required" />
            <date-range class="col" name="srch_end" :required="required" />
        </div>
        <!-- in case of change and upload -->
        <div v-if="form_type !== 'search'" class="row">
            <date-range
                class="col"
                name="srch_start"
                :range="f"
                :required="required"
            />
            <date-range
                class="col"
                name="srch_end"
                :range="f"
                :required="required"
            />
        </div>

        <h4 class="pt-4">{{ $t("srch_dep") }}</h4>
        <div class="pb-4 d-flex justify-content-between">
            <check v-for="dep in departments" :val="dep.val"></check>
        </div>
        <!-- for upload and change -->
        <div v-if="form_type !== 'search'">
            <h4>{{ $t("selct_file") }}</h4>

            <input_file />
        </div>

        <!-- List of departments od taken from https://university.innopolis.ru/about/structure/-->
    </div>
</template>
<script>
import input_field from "./input_field.vue";
import check from "./check_item.vue";
import DateRange from "./input_date_range.vue";
import input_file from "./input_file.vue";
export default {
    name: "Params",
    components: {
        input_field,
        check,
        DateRange,
        input_file
    },
    props: {
        required: {
            default: false,
            type: Boolean
        },
        form_type: {
            default: "search", // other values: edit, upload
            type: String
        }
    },
    data: function() {
        return {
            active_select: false,
            f: false,
            departments: [
                { name: "University Development", val: "dep1" },
                { name: "Design and research activities", val: "dep2" },
                { name: "Pre-university education", val: "dep3" },
                { name: "Public relations", val: "dep4" },
                { name: "Legal issues", val: "dep5" },
                { name: "Quality education", val: "dep6" },
                {
                    name: "Administrative Policy and Informatization",
                    val: "dep7"
                }
            ]
        };
    },
    methods: {
        changeActive: function() {
            this.active_select = !this.active_select;
        }
    }
};
</script>
