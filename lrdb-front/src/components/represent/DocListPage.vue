<script>
import DocListPageItem from "./DocListPageItem.vue";

export default {
    name: "DocListPage",
    components: {
        DocListPageItem,
    },
    props: {
        info: {
            type: Array,
            required: true,
        },
    },
};
</script>
<template>
    <div class="page-content">
        <doc-list-page-item
            v-for="i in info"
            :key="i.id"
            class="my-lg-3 shadow-sm my-5"
            :info="i"
        />
    </div>
</template>
