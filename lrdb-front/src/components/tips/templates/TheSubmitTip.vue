<script>
import BaseTip from "./base/BaseTip.vue";
export default {
    name: "TheSubmitTip",
    components: { BaseTip },
};
</script>
<template>
    <base-tip type="submit">
        {{ $t("hotkeys") }}
        <br />
        <span class="border rounded">shift</span>+
        <span class="border rounded">enter</span>
        {{ $t("to_sbm_fm") }}
    </base-tip>
</template>
