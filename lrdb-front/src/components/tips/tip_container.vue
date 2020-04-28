<style scoped>
aside {
    position: absolute;
    top: 0;
    right: -10rem;
    width: 15rem;
    z-index: 2;
}
</style>
<template>
    <aside>
        <load-tip v-if="tips.includes('load')"></load-tip>
        <nav-tip v-if="tips.includes('nav')"></nav-tip>
        <prev-tip v-if="tips.includes('prev')"></prev-tip>
        <submit-tip v-if="tips.includes('submit')"></submit-tip>
    </aside>
</template>
<script>
import loadTip from "./templates/load_nav_tip.vue";
import navTip from "./templates/navigation_tip.vue";
import prevTip from "./templates/prev_tip.vue";
import submitTip from "./templates/submit_tip.vue";
export default {
    name: "tipContainer",
    props: {
        tips: {
            type: Array,
            required: false,
        },
    },
    components: {
        loadTip,
        navTip,
        prevTip,
        submitTip,
    },
};
</script>
