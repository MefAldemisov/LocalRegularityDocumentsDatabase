<template>
    <div>
        <h1 class="hidden">{{ $t("page_with_docs_user") }}</h1>
        <section>
            <h2>{{ $t("docs_name_ment") }}</h2>
            <Representation :response="mentioned" />
        </section>
        <section>
            <h2>{{ $t("docs_up_by_me") }}</h2>
            <!-- make a carousel -->
            <Representation />
        </section>
    </div>
</template>
<script>
import Representation from "../components/represent/doc_representation.vue";
import apiCalls from "../request/index.js";

const RESPONSE = require("../assets/test_data.json");

export default {
    name: "MyDocs",
    components: { Representation },
    data: function() {
        return {
            id: 1,
            mentioned: RESPONSE,
        };
    },
    created: function() {
        apiCalls
            .getOwnersDocuments("Степанюк Валентин Валерьевич/")
            .then(function(data) {
                this.mentioned = data.data;
            })
            .catch(function(error) {
                console.log("Some error occured");
            });
    },
};
</script>
