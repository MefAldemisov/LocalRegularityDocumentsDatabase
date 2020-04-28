<template>
    <tip type="submit">
        {{ $t("hotkeys") }}
        <br />
        <span class="border rounded">shift</span>+
        <span class="border rounded">enter</span>
        {{ $t("to_sbm_fm") }}
    </tip>
</template>
<script>
import tip from "../tips.vue";
export default {
    name: "submitTip",
    components: { tip },
};
</script>
