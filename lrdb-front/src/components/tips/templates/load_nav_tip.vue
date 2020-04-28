<template>
    <tip type="load">
        {{ $t("hotkeys") }}
        <br />
        <span class="border rounded">shift</span>+
        <span class="border rounded"
            ><font-awesome-icon icon="arrow-left"></font-awesome-icon
        ></span>
        {{ $t("or") }}
        <span class="border rounded"
            ><font-awesome-icon icon="arrow-right"></font-awesome-icon
        ></span>
        {{ $t("to_nav_pg") }}
    </tip>
</template>
<script>
import tip from "../tips.vue";
export default {
    name: "load",
    components: { tip },
};
</script>
