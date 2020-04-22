<template>
    <div>
        <h1 class="hidden">{{ $t("page_with_docs_user") }}</h1>
        <tip></tip>
        <section>
            <h2>{{ $t("docs_name_ment") }}</h2>
            <Representation :response="mentioned" />
        </section>
        <section>
            <h2>{{ $t("docs_up_by_me") }}</h2>
            <!-- make a carousel -->
            <Representation :response="mentioned" />
        </section>
    </div>
</template>
<script>
import Representation from "../components/represent/doc_representation.vue";
import apiCalls from "../request/index.js";
import tip from "../components/tips.vue";
export default {
    name: "MyDocs",
    components: { Representation, tip },
    data: function() {
        return {
            id: 1,
            mentioned: [],
        };
    },
    created: async function() {
        console.log("start");
        let mentioned = [];
        await apiCalls
            .getOwnersDocuments("Третьяков Владимир Владимирович/")
            .then(function(data) {
                console.log("DAA", data);
                mentioned = data.data;
            })
            .catch(function(error) {
                mentioned = require("../assets/test_data.json");
                console.log("Some error occured");
            });
        this.setMentioned(mentioned);
    },
    methods: {
        setMentioned: function(res) {
            console.log("Res", res);
            this.mentioned = res;
        },
    },
};
</script>
