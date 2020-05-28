<script>
import DocList from "../components/represent/DocList.vue";
import apiCalls from "../request/index.js";
import TipContainer from "../components/tips/TipContainer.vue";

export default {
    name: "MyDocsPage",
    components: { DocList, TipContainer },
    data: function() {
        return {
            id: 1,
            mentioned: [],
            tips: ["prev", "nav"],
        };
    },
    methods: {
        setMentioned: function(res) {
            if (res) {
                this.mentioned = res;
                this.$store.commit("setMyDocs", res);
            } else {
                this.mentioned = this.$store.getters.my_documents;
            }
        },
        getData: async function() {
            let res = [];
            await apiCalls
                .getOwnersDocuments("Третьяков Владимир Владимирович/")
                .then(function(data) {
                    console.log("My data:", data);
                    res = data.data;
                })
                .catch(function(error) {
                    console.log("Some error occured");
                    res = require("../assets/test_data.json");
                });
            return res;
        },
    },
    created: async function() {
        const storage_data = this.$store.getters.my_documents;
        if (!storage_data) {
            const d = await this.getData();
            this.setMentioned(d);
        } else {
            this.mentioned = storage_data;
        }
    },
};
</script>
<template>
    <div>
        <h1 class="hidden">{{ $t("page_with_docs_user") }}</h1>
        <tip-container :tips="tips"></tip-container>
        <section>
            <h2>{{ $t("docs_name_ment") }}</h2>
            <doc-list :response="mentioned" />
        </section>
        <section>
            <h2>{{ $t("my") }}</h2>
            <!-- make a carousel -->
            <doc-list :response="mentioned" />
        </section>
    </div>
</template>
