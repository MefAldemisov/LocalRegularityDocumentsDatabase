<style scoped>
.iframe {
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
.btn-secondary {
    background-color: #0f870d;
}
</style>
<template>
    <div class="row core">
        <div class="col">
            <div class="my-2 mx-2 my-auto">
                <label class="my-2 row input-group input-group-sm">
                    <div class="input-group-prepend">
                        <button class="py-1 btn btn-secondary">
                            <span class="hidden">{{ $t("download") }}</span>
                            <font-awesome-icon icon="file"></font-awesome-icon>
                        </button>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        :value="info.name"
                        :title="info.name"
                        readonly
                    />
                </label>
                <doc_desc_row text="srch_owner" :controller="info.owner" />
                <doc_desc_row text="srch_type" :controller="info.doc_format" />
                <doc_desc_row text="srch_create" :controller="dt_created" />
                <doc_desc_row text="srch_upd" :controller="dt_last_update" />
                <doc_desc_row text="srch_start" :controller="dt_effect_date" />
                <doc_desc_row
                    text="srch_end"
                    :controller="dt_expiration_date"
                />
                <doc_desc_row text="srch_id" :controller="info.id" />
                <doc_desc_row text="srt_dep" :controller="info.department" />
            </div>
        </div>
        <div class="col full_height shadow p-4 my-1 bg-white rounded">
            <div id="target" class="mx-1 full_height">
                <div class="iframe" />
            </div>
        </div>
    </div>
</template>
<script>
import doc_desc_row from "./doc_desc_row.vue";
// let $ = require("jquery");

// const pdf_link = "../../assets/images/UI_logo_back.png";

export default {
    name: "DocumentVuewer",
    // created: function() {
    //     $.ajax({
    //         type: "GET",
    //         processData: false,
    //         url: pdf_link,
    //         contentType: "pdf; charset=utf-8",
    //         success: function() {
    //             $(".iframe").attr("src", pdf_link);
    //         },
    //         error: function() {
    //             console.log("error");
    //         }
    //     });
    // },
    components: {
        doc_desc_row,
    },
    // props: [pdf_link],
    props: { info: { type: Object, required: true } },
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
        },
    },
    methods: {
        excludeDate: function(date) {
            let [d, other] = date.split("T");
            let z = other.split(".");
            let t = z[0];
            return `${d} ${t}`;
        },
    },
};
</script>
