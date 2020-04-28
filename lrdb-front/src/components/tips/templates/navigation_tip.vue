<template>
    <tip type="nav">
        {{ $t("hotkeys") }}
        <br />
        <span class="border rounded">ctrl</span>+
        <span class="border rounded"
            ><font-awesome-icon icon="arrow-left"></font-awesome-icon
        ></span>
        {{ $t("or") }}
        <span class="border rounded"
            ><font-awesome-icon icon="arrow-right"></font-awesome-icon
        ></span>
        {{ $t("to_nav_sect") }}
    </tip>
</template>
<script>
import tip from "../tips.vue";
export default {
    name: "navTip",
    components: { tip },
};
</script>
