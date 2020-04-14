<style scoped>
/* .centered_container {
    display: flexbox;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
}
.check {
    align-self: center;
    flex-grow: 1;
} */
</style>
<template>
    <div>
        <!-- in any case -->
        <h4 class="pt-4">Main parameters</h4>
        <div class="row">
            <input_field name="srch_name" type="text" :required="required" />
        </div>
        <!-- in any type except upload-->
        <div v-if="form_type !== 'upload'" class="row">
            <input_field name="srch_owner" type="text" :required="required" />
        </div>
        <h4 class="pt-4">Dates</h4>
        <div class="row">
            <input_field name="srch_create" type="date" :required="required" />
            <input_field name="srch_last" type="date" :required="required" />
        </div>
        <div class="row">
            <input_field name="srch_start" type="date" :required="required" />
            <input_field name="srch_end" type="date" :required="required" />
        </div>
        <h4 class="pt-4">{{ $t("srch_dep") }}</h4>

        <div class="pb-4 d-flex justify-content-between">
            <check
                class="check"
                v-for="dep in departments"
                :val="dep.val"
            ></check>
        </div>
        <!-- List of departments od taken from https://university.innopolis.ru/about/structure/-->
    </div>
</template>
<script>
import input_field from "./input_field.vue";
import check from "./check_item.vue";

export default {
    name: "Params",
    components: {
        input_field,
        check
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
