<script>
import BaseTip from "./base/BaseTip.vue";
export default {
    name: "ThePrevTip",
    components: { BaseTip },
};
</script>
<template>
    <base-tip type="prev">
        {{ $t("hotkeys") }}
        <span class="border rounded">ctrl</span>+<span class="border rounded"
            >shift</span
        >+
        <span class="border rounded"
            ><font-awesome-icon icon="arrow-left"></font-awesome-icon
        ></span>
        {{ $t("or") }}
        <span class="border rounded"
            ><font-awesome-icon icon="arrow-right"></font-awesome-icon
        ></span>
        {{ $t("to_nav_pg") }}
    </base-tip>
</template>
