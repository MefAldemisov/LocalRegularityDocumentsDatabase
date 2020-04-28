<template>
    <div>
        <h1 class="hidden">{{ $t("page_with_docs_user") }}</h1>
        <tip-container :tips="tips"></tip-container>
        <section>
            <h2>{{ $t("docs_name_ment") }}</h2>
            <Representation :response="mentioned" />
        </section>
        <section>
            <h2>{{ $t("my") }}</h2>
            <!-- make a carousel -->
            <Representation :response="mentioned" />
        </section>
    </div>
</template>
<script>
import Representation from "../components/represent/doc_representation.vue";
import apiCalls from "../request/index.js";
import tipContainer from "../components/tips/tip_container.vue";

export default {
    name: "MyDocs",
    components: { Representation, tipContainer },
    data: function() {
        return {
            id: 1,
            mentioned: [],
            tips: ["prev", "nav"],
        };
    },
    methods: {
        setMentioned: function(res) {
            this.mentioned = res;
            this.$store.commit("setMyDocs", res);
        },
    },
    created: async function() {
        // let st = this.$store.getters;
        let mentioned = [];
        if (!this.$store.getters.my_documents) {
            await apiCalls
                .getOwnersDocuments("Третьяков Владимир Владимирович/")
                .then(function(data) {
                    console.log("My data:", data);
                    mentioned = data.data;
                })
                .catch(function(error) {
                    mentioned = require("../assets/test_data.json");
                    console.log("Some error occured");
                });
        } else {
            mentioned = this.$store.getters.my_documents;
        }
        this.setMentioned(mentioned);
    },
};
</script>
