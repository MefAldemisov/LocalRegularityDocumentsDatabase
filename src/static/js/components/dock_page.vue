<template>
    <div class="page-content">
        <DocumentVuewer class="my-3 shadow-sm " v-for="n in n_docks" :key="n" />
    </div>
</template>
<script>
import DocumentVuewer from "./dock_vuewer.vue";

export default {
    name: "Page",
    props: {
        n_docks: {
            default: 1,
            type: Number
        }
    },
    // create: function() {
    //     let i;
    //     for (i = 0; i < this.n_docks; i++) {
    //         $(".page-content").add("");
    //     }
    // },
    components: {
        DocumentVuewer
    }
};
</script>