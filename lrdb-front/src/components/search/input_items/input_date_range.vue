<style scoped>
* {
    font-size: 0.9rem;
}
</style>
<template>
    <VueCtkDateTimePicker
        v-else
        class="my-1 col-sm"
        format="YYYY-MM-DD"
        formatted="ll"
        :id="name"
        :label="$t(name)"
        v-model="val"
        :locale="lang"
        :range="range"
        :only-date="day"
        color="#0f870d"
        button-color="#0f870d"
        @input="handleInput"
    />
</template>
<script>
export default {
    name: "DateRange",
    props: {
        name: {
            required: true,
            type: String,
        },
        range: {
            default: true,
            type: Boolean,
        },
        value: {
            required: true,
        },
    },
    data: function() {
        return {
            t: true,
            day: true,
            val: null,
        };
    },
    computed: {
        lang: function() {
            let now = this.$i18n.locale;
            if (now === "tat") {
                return "ru";
            } else {
                return now;
            }
        },
    },
    methods: {
        handleInput: function(value) {
            this.$emit("input", this.val);
        },
    },
};
</script>
