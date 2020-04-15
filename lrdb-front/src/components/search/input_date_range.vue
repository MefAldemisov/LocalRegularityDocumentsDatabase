<template>
    <VueCtkDateTimePicker
        v-else
        class="my-1"
        :label="$t(name)"
        v-model="val"
        :locale="lang"
        :range="range"
        :only-date="day"
        color="#0f870d"
        button-color="#0f870d"
    />
</template>
<script>
export default {
    name: "DateRange",
    props: {
        name: {
            required: true,
            type: String
        },
        range: {
            default: true,
            type: Boolean
        }
    },
    data: function() {
        return {
            t: true,
            day: true,
            val: null
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
        }
    }
};
</script>
