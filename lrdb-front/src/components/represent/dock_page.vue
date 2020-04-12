<template>
    <div class="page-content">
        <DocumentVuewer class="my-3 shadow-sm" v-for="i in info" :info="i" :key="i.id" />
    </div>
</template>
<script>
import DocumentVuewer from "./dock_vuewer.vue";

export default {
    name: "Page",
    props: {
        info: {
            type: Array,
            required: true
        }
    },
    mounted() {},
    components: {
        DocumentVuewer
    }
};
</script>
