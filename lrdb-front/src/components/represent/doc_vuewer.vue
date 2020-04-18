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
@media (max-width: 1000px) {
    .col-lg {
        display: block;
    }
    .full_height {
        min-height: 40vh;
    }
}
</style>
<template>
    <article class="row">
        <div class="col-lg">
            <div class="my-2 mx-2 my-auto">
                <doc_desc_row text="version" :controller="info.version" />
                <doc_desc_row text="commit" :controller="info.commit" />
                <doc_desc_row text="srch_name" :controller="info.name" />
                <doc_desc_row text="srch_owner" :controller="info.owner" />
                <doc_desc_row text="srch_create" :controller="dt_created" />
                <doc_desc_row text="srch_upd" :controller="dt_last_update" />
                <doc_desc_row text="srch_start" :controller="dt_effect_date" />
                <doc_desc_row
                    text="srch_end"
                    :controller="dt_expiration_date"
                />
                <doc_desc_row text="srch_id" :controller="info.id" />
                <doc_desc_row text="srt_dep" :controller="info.department" />
                <doc_desc_row text="srt_size" :controller="info.doc_size" />
                <doc_desc_row text="srch_type" :controller="info.doc_format" />
                <div class="my-2 row input-group input-group-sm">
                    <button class="form-control py-1 btn btn-secondary mr-1">
                        <span>{{ $t("download") }} </span>
                        <font-awesome-icon icon="download"></font-awesome-icon>
                    </button>
                    <router-link
                        class="ml-1 form-control py-1 btn btn-secondary"
                        :to="{
                            name: 'History',
                            params: { id: info.id, name: info.name },
                        }"
                    >
                        <span>{{ $t("show_history") }} </span>
                        <font-awesome-icon icon="history"></font-awesome-icon>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="col-lg full_height shadow p-4 my-1 bg-white rounded">
            <div id="target" class="mx-1 full_height">
                <iframe class="iframe" :src="doc_file" title="$t(preview)" />
            </div>
        </div>
    </article>
</template>
<script>
import doc_desc_row from "./doc_desc_row.vue";
export default {
    name: "DocumentVuewer",
    data: function() {
        return {
            doc_file: "https://vuejs.org",
        };
    },
    components: {
        doc_desc_row,
    },
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
