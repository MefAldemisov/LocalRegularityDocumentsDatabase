<template>
    <div>
            <Page v-for="i in info" :info="i.info" :key="i.index" />
            <div class="mt-3">
                <h6 class="text-center">Navigation</h6>
                <b-pagination-nav
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="n_docks"
                    aria-controls="page"
                    align="center"
                ></b-pagination-nav>
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
            currentPage: 1,
            rows: 2
        };
    },
    computed: {
        info: function() {
            let index = 1;
            let i = 0;
            let result = [
                { index: 0, info: response.slice(i, i + this.n_docks) }
            ];
            for (i = this.n_docks; i < response.length; i += this.n_docks) {
                result.concat({
                    index: index,
                    info: response.slice(i, i + this.n_docks)
                });
                index++;
            }
            return result;
        }
    },
    components: {
        Page
    }
};
</script>