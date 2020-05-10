<template>
    <base-tip type="load">
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
    </base-tip>
</template>
<script>
import BaseTip from "./base/BaseTip.vue";
export default {
    name: "TheLoadTip",
    components: { BaseTip },
};
</script>
