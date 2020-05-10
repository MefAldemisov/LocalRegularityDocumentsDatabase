<template>
    <base-tip type="nav">
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
    </base-tip>
</template>
<script>
import BaseTip from "./base/BaseTip.vue";
export default {
    name: "TheNavTip",
    components: { BaseTip },
};
</script>
