<style>
.page-item {
    padding: 0;
}
.page-link {
    color: black;
}
.pagination {
    width: 100%;
}
</style>
<template>
    <div>
        <Page v-for="i in info" :info="i.info" v-show="currentPage == i.index" :key="i.index" />
        <div class="mt-3">
            <h6 class="text-center">Current page: {{currentPage}}</h6>
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <span  id="link-prev" class="page-link" @click="changePage(currentPage - 1)">Previous</span>
                </li>
                <li class="page-item" v-for="n in pages" :key="n">
                    <span class="page-link" href="#" @click="changePage(n)">{{n}}</span>
                </li>
                <li class="page-item">
                    <span id="link-next" class="page-link" @click="changePage(currentPage + 1)">Next</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Page from "./dock_page.vue";

const response = [
    {
        id: 1,
        owner: 2,
        name: "Приложение 4 ознакомление",
        type: "docx",
        created: "2020-04-04T12:11:00.032709Z",
        last_update: "2020-04-04T12:11:00.032709Z",
        effect_date: "2020-04-04T12:11:00.032709Z",
        expiration_date: "2020-04-04T12:11:00.032709Z"
    },
    {
        id: 2,
        owner: 2,
        name: "Приложение 3 ознакомление",
        type: "docx",
        created: "2020-04-04T12:11:00.032709Z",
        last_update: "2020-04-04T12:11:00.032709Z",
        effect_date: "2020-04-04T12:11:00.032709Z",
        expiration_date: "2020-04-04T12:11:00.032709Z"
    },
    {
        id: 3,
        owner: 2,
        name: "Приложение 2 ознакомление",
        type: "docx",
        created: "2020-04-04T12:11:00.032709Z",
        last_update: "2020-04-04T12:11:00.032709Z",
        effect_date: "2020-04-04T12:11:00.032709Z",
        expiration_date: "2020-04-04T12:11:00.032709Z"
    },
    {
        id: 4,
        owner: 2,
        name: "Приложение 4 ознакомление",
        type: "docx",
        created: "2020-04-04T12:11:00.032709Z",
        last_update: "2020-04-04T12:11:00.032709Z",
        effect_date: "2020-04-04T12:11:00.032709Z",
        expiration_date: "2020-04-04T12:11:00.032709Z"
    }
];

export default {
    name: "Representation",
    data: function() {
        return {
            n_docks: 2,
            currentPage: 1
        };
    },
    computed: {
        info: function() {
            let index = 1;
            let i = 0;
            let result = [
                { index: 1, info: response.slice(i, i + this.n_docks) }
            ];
            for (i = this.n_docks; i < response.length; i += this.n_docks) {
                result.push({
                    index: index + 1,
                    info: response.slice(i, i + this.n_docks)
                });
                index++;
            }
            return result;
        },
        pages: function() {
            return this.info.length;
        }
    },
    components: {
        Page
    },
    methods: {
        changePage(pageNum) {
            if (pageNum > 0 && pageNum < this.pages + 1) {
                this.currentPage = pageNum;
            }
            // TODO: add disabled class
        }
    }
};
</script>