
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
                <div class="my-2 row input-group input-group-sm">
                    <div class="col-1 input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-file"></i></span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        :value="info.name"
                        :title="info.name"
                        readonly
                    />
                </div>
                <doc_desc_row text="Owner" :controller="info.owner"></doc_desc_row>
                <doc_desc_row text="Type" :controller="info.type"></doc_desc_row>
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
import doc_desc_row from "./dock_desc_row.vue";
const pdf_link =
    "../static/pdf/sprint_2_slides_B18-04_LocalRegularityDocumentsDatabase.pdf";

export default {
    name: "DocumentVuewer",
    // props: [pdf_link],
    props: { info: { type: Object, required: true } },
    methods: {
        excludeDate: function(date) {
            let [d, other] = date.split("T");
            let [t, ...z] = other.split(".");
            return `${d} ${t}`;
        }
    },
    computed: {
        dt_created: function() {
            return this.excludeDate(this.info.created);
        },
        dt_last_update: function() {
            return this.excludeDate(this.info.last_update);
        },
        dt_effect_date: function() {
            return this.excludeDate(this.info.effect_date);
        },
        dt_expiration_date: function() {
            return this.excludeDate(this.info.expiration_date);
        }
    },
    created: function() {
        jQuery.ajax({
            type: "GET",
            processData: false,
            url: pdf_link,
            contentType: "application/xml; charset=utf-8",
            success: function(data) {
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