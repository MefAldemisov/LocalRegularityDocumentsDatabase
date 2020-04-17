<style scoped>
.page-item {
    padding: 0;
}
.page-link {
    color: black;
}
.pagination {
    width: 100%;
}
.active {
    background-color: #edf1f5;
    font-weight: 900;
}
</style>
<template>
    <div>
        <Page
            v-for="i in info"
            v-show="currentPage == i.index"
            :key="i.index"
            :info="i.info"
        />
        <div class="mt-3">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <span
                        class="page-link"
                        @click="changePage(currentPage - 1)"
                        >{{ $t("prev") }}</span
                    >
                </li>
                <li v-for="n in pages" class="page-item" :key="n">
                    <span
                        :class="{ active: currentPage === n }"
                        class="page-link"
                        href="#"
                        @click="changePage(n)"
                        >{{ n }}</span
                    >
                </li>
                <li class="page-item">
                    <span
                        class="page-link"
                        @click="changePage(currentPage + 1)"
                        >{{ $t("next") }}</span
                    >
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Page from "./doc_page.vue";

const RESPONSE = require("../../assets/test_data.json");

export default {
    name: "Representation",
    components: {
        Page,
    },
    props: {
        response: {
            default: function() {
                return RESPONSE;
            },
            type: Array,
        },
        n_docs: {
            default: 2,
            type: Number,
        },
    },
    data: function() {
        return {
            currentPage: 1,
        };
    },
    computed: {
        info: function() {
            let index = 1;
            let i = 0;
            let result = [
                { index: 1, info: this.response.slice(i, i + this.n_docs) },
            ];
            for (i = this.n_docs; i < this.response.length; i += this.n_docs) {
                result.push({
                    index: index + 1,
                    info: this.response.slice(i, i + this.n_docs),
                });
                index++;
            }
            return result;
        },
        pages: function() {
            return this.info.length;
        },
    },
    methods: {
        changePage(pageNum) {
            if (pageNum > 0 && pageNum < this.pages + 1) {
                this.currentPage = pageNum;
            }
            // TODO: add disabled class
        },
    },
};
</script>
