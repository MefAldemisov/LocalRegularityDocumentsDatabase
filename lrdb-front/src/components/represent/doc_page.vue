<template>
    <div class="page-content">
        <DocumentVuewer
            v-for="i in info"
            :key="i.id"
            class="my-lg-3 shadow-sm my-5"
            :info="i"
        />
    </div>
</template>
<script>
import DocumentVuewer from "./doc_vuewer.vue";

export default {
    name: "Page",
    components: {
        DocumentVuewer,
    },
    props: {
        info: {
            type: Array,
            required: true,
        },
    },
};
</script>
