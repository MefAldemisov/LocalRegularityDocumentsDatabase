<template>
    <div>
        <h1 class="hidden">{{ $t("page_with_docs_user") }}</h1>
        <tip>
            {{ $t("hotkeys") }}
            <span class="border rounded">ctrl</span>+<span
                class="border rounded"
                >shift</span
            >+
            <span class="border rounded"
                ><font-awesome-icon icon="arrow-left"></font-awesome-icon
            ></span>
            {{ $t("or") }}
            <span class="border rounded"
                ><font-awesome-icon icon="arrow-right"></font-awesome-icon
            ></span>
            {{ $t("to_nav_pg") }}
        </tip>
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
import tip from "../components/tips.vue";
import store from "../store/store.js";
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
        if (!store.getters.my_documents) {
            await apiCalls
                .getOwnersDocuments("Третьяков Владимир Владимирович/")
                .then(function(data) {
                    console.log("DAA", data);
                    mentioned = data.data;
                    store.commit("setMyDocs", mentioned);
                })
                .catch(function(error) {
                    mentioned = require("../assets/test_data.json");
                    console.log("Some error occured");
                    store.commit("setMyDocs", mentioned);
                });
            this.setMentioned(mentioned);
        } else {
            this.setMentioned(store.getters.my_documents);
        }
    },
    methods: {
        setMentioned: function(res) {
            console.log("Res", res);
            this.mentioned = res;
        },
    },
};
</script>
