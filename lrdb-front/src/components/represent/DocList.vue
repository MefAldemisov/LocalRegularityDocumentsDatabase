<script>
import DocListPage from "./DocListPage.vue";

// const RESPONSE = require("../../assets/test_data.json");

export default {
    name: "DocList",
    components: {
        DocListPage,
    },
    props: {
        response: {
            require: true,
            type: Array,
        },
        n_docs: {
            default: 2,
            type: Number,
            validator(n) {
                return n > 0;
            },
        },
    },
    data: function() {
        return {
            currentPage: 1,
            cursor_active: false,
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
        },
        changeKeyPage(event) {
            if (this.cursor_active) {
                if (event.srcKey === "right") {
                    this.changePage(this.currentPage + 1);
                } else {
                    this.changePage(this.currentPage - 1);
                }
            }
        },
        setActCours(val) {
            this.cursor_active = val;
        },
    },
};
</script>
<template>
    <div
        @mouseover="setActCours(true)"
        @mouseout="setActCours(false)"
        :class="{ act: cursor_active }"
    >
        <doc-list-page
            :key="info[currentPage - 1].index"
            :info="info[currentPage - 1].info"
        />
        <div class="mt-3">
            <ul
                class="pagination justify-content-center"
                v-shortkey="{
                    right: ['ctrl', 'shift', 'arrowright'],
                    left: ['ctrl', 'shift', 'arrowleft'],
                }"
                @shortkey="changeKeyPage"
            >
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
.active,
.page-link:hover {
    background-color: #0f870d;
    color: white;
}
</style>
