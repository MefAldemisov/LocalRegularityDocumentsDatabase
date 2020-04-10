
<style>
iframe {
    width: calc(100% - 3rem);
    position: absolute;
    height: calc(100% - 3rem);
    border: none;
}

.full_height {
    min-height: 100%;
}

.row {
    display: flex;
    flex-wrap: wrap;
}
</style>
<template>
    <div class="row core">
        <div class="col">
            <div class="my-2 mx-2 my-auto">
                <doc_desc_row text="Document name" :controller="name"></doc_desc_row>
                <doc_desc_row text="Owner" :controller="owner"></doc_desc_row>
                <doc_desc_row text="Type" :controller="type"></doc_desc_row>
                <doc_desc_row text="Creation date" :controller="dt_created"></doc_desc_row>
                <doc_desc_row text="Last update" :controller="dt_last_update"></doc_desc_row>
                <doc_desc_row text="Effect update" :controller="dt_effect_date"></doc_desc_row>
                <doc_desc_row text="Expiration date" :controller="dt_expiration_date"></doc_desc_row>
            </div>
        </div>
        <div class="col full_height shadow p-4 my-1 bg-white rounded">
            <div id="target" class="mx-1 full_height">
                <iframe></iframe>
            </div>
        </div>
    </div>
</template>
<script>
import doc_desc_row from "./dock_desc_row.vue"
const pdf_link =
    "../static/pdf/sprint_2_slides_B18-04_LocalRegularityDocumentsDatabase.pdf";

export default {
    name: "DocumentVuewer",
    // props: [pdf_link],
    data: 
        function() {
            return {
                id: 3,
                owner: 2,
                name: "Приложение 4 ознакомление",
                type: "docx",
                created: "2020-04-04T12:11:00.032709Z",
                last_update: "2020-04-04T12:11:00.032709Z",
                effect_date: "2020-04-04T12:11:00.032709Z",
                expiration_date: "2020-04-04T12:11:00.032709Z"
            };
        }
    ,
    methods: {
        excludeDate: function (date) {
            let [d, other] = date.split("T");
            console.log("d", other);
            let [t, ...z] = other.split(".");
            return `${d} ${t}`;
        }
    },
    computed: {
        dt_created: function() {
            return this.excludeDate(this.created);
        },
        dt_last_update: function() {
            return this.excludeDate(this.last_update);
        },
        dt_effect_date: function() {
            return this.excludeDate(this.effect_date);
        },
        dt_expiration_date: function() {
            return this.excludeDate(this.expiration_date);
        }
    },
    created: function() {
        jQuery.ajax({
            type: "GET",
            processData: false,
            url: pdf_link,
            contentType: "application/xml; charset=utf-8",
            success: function(data) {
                console.log(this.pdf_link);
                $("iframe").attr("src", pdf_link);
            },
            error: function() {
                console.log("error");
            }
        });
    },
    components: {
        doc_desc_row
    }
};
</script>