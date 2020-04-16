<style></style>
<template>
    <div>
        <h1 class="hidden">{{ $t("page_with_docs_user") }}</h1>
        <h2>{{ $t("docs_name_ment") }}</h2>
        <Representation :response="mentioned" />
        <h2>{{ $t("docs_up_by_me") }}</h2>
        <!-- make a carousel -->
        <Representation />
    </div>
</template>
<script>
import Representation from "../components/represent/doc_representation.vue";
import apiCalls from "../request/index.js";

const RESPONSE = [
    {
        id: 1,
        owner: 2,
        name: "Приложение 4 ознакомление",
        doc_format: "docx",
        created: "2019-04-02T12:11:00.032709Z",
        last_update: "2018-02-04T12:11:00.032709Z",
        effect_date: "2020-04-08T12:11:00.032709Z",
        expiration_date: "2017-12-10T12:11:00.032709Z",
        department: "Департамент Управления Образованием",
    },
    {
        id: 2,
        owner: 4,
        name: "Приложение 3 ознакомление",
        doc_format: "png",
        created: "2016-04-05T12:11:00.032709Z",
        last_update: "2017-02-04T12:11:00.032709Z",
        effect_date: "2020-04-07T12:11:00.032709Z",
        expiration_date: "2014-04-04T12:11:00.032709Z",
        department: "Департамент Управления Образованием",
    },
    {
        id: 3,
        owner: 8,
        name: "Приложение 2 ознакомление",
        doc_format: "pdf",
        created: "2018-11-04T12:11:00.032709Z",
        last_update: "2017-04-04T12:11:00.032709Z",
        effect_date: "2020-01-04T12:11:00.032709Z",
        expiration_date: "2015-09-04T12:11:00.032709Z",
        department: "Департамент Управления Образованием",
    },
    {
        id: 4,
        owner: 16,
        name: "Приложение 1 ознакомление",
        doc_format: "docx",
        created: "2019-04-04T12:11:00.032709Z",
        last_update: "2018-04-04T12:11:00.032709Z",
        effect_date: "2020-03-04T12:11:00.032709Z",
        expiration_date: "2020-02-04T12:11:00.032709Z",
        department: "Департамент Управления Образованием",
    },
];

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
