<script>
import TheLoadTip from "./templates/TheLoadTip.vue";
import TheNavTip from "./templates/TheNavTip.vue";
import ThePrevTip from "./templates/ThePrevTip.vue";
import TheSubmitTip from "./templates/TheSubmitTip.vue";
export default {
    name: "TipContainer",
    props: {
        tips: {
            type: Array,
            required: false,
            validator(arr) {
                let res = true;
                arr.forEach((el) => {
                    res = res && ["load", "nav", "prev", "submit"].includes(el);
                });
                return res;
            },
        },
    },
    components: {
        TheLoadTip,
        TheNavTip,
        ThePrevTip,
        TheSubmitTip,
    },
};
</script>
<template>
    <aside>
        <the-load-tip v-if="tips.includes('load')"></the-load-tip>
        <the-nav-tip v-if="tips.includes('nav')"></the-nav-tip>
        <the-prev-tip v-if="tips.includes('prev')"></the-prev-tip>
        <the-submit-tip v-if="tips.includes('submit')"></the-submit-tip>
    </aside>
</template>
<style scoped>
aside {
    position: absolute;
    top: 0;
    right: -10rem;
    width: 15rem;
    z-index: 2;
}
</style>
