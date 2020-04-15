<style scoped></style>
<template>
    <div class="col input-group mb-1">
        <div class="input-group-prepend">
            <label :for="inp_name" class="input-group-text" id="srch_owner">{{
                $t(name)
            }}</label>
        </div>
        <input
            v-if="type !== 'date'"
            :id="inp_name"
            :type="type"
            class="form-control"
            :required="required"
        />
    </div>
</template>
<script>
export default {
    name: "InputField",
    props: {
        type: {
            default: "text",
            type: String
        },
        name: {
            required: true,
            type: String
        },
        required: {
            default: false,
            type: Boolean
        }
    },
    data: function() {
        return {
            val: "",
            active: false,
            dates: {}
        };
    },
    computed: {
        inp_name: function() {
            return this.name + "_inp";
        },
        imp_place: function() {
            return !this.active ? "click me" : "ready";
        },
        rangeDates: function() {
            if (Object.keys(this.dates).length === 2) {
                return `${parseTime(this.dates.start, "y-m-d")}  -  ${parseTime(
                    this.dates.end,
                    "y-m-d"
                )}`;
            } else {
                return "";
            }
        }
    },
    methods: {
        changeActive: function() {
            this.active = !this.active;
        }
    }
};
</script>
