<script>
import DocListPageItemRow from "./DocListPageItemRow.vue";
import prev from "../../assets/images/prev.jpg";
export default {
    name: "DocListPageItem",
    // data: function() {
    //     return {
    //         doc_file: prev,
    //     };
    // },
    components: {
        DocListPageItemRow,
    },
    props: {
        doc_file: {
            default: prev,
            required: false,
        },
        info: {
            type: Object,
            required: true,
            validator(val) {
                // keys are valid
                const keys = Object.keys(val);
                let res = true;
                [
                    "created",
                    "last_update",
                    "effect_date",
                    "expiration_date",
                    "name",
                    "id",
                ].forEach((f) => {
                    res = res && keys.includes(f);
                });
                if (!res) {
                    return res;
                }
                // date in appropriate format
                const regexp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.*$/;
                [
                    "created",
                    "last_update",
                    "effect_date",
                    "expiration_date",
                ].forEach((f) => {
                    const local_res = val[f].match(regexp) != null;
                    res = res && local_res;
                });
                return res;
            },
        },
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
<template>
    <article class="row">
        <div class="col-lg">
            <div class="my-2 mx-2 my-auto">
                <doc-list-page-item-row
                    text="version"
                    :controller="info.version"
                />
                <doc-list-page-item-row
                    text="commit"
                    :controller="info.commit"
                />
                <doc-list-page-item-row
                    text="srch_name"
                    :controller="info.name"
                />
                <doc-list-page-item-row
                    text="srch_owner"
                    :controller="info.owner"
                />
                <doc-list-page-item-row
                    text="srch_create"
                    :controller="dt_created"
                />
                <doc-list-page-item-row
                    text="srch_upd"
                    :controller="dt_last_update"
                />
                <doc-list-page-item-row
                    text="srch_start"
                    :controller="dt_effect_date"
                />
                <doc-list-page-item-row
                    text="srch_end"
                    :controller="dt_expiration_date"
                />
                <doc-list-page-item-row text="srch_id" :controller="info.id" />
                <doc-list-page-item-row
                    text="srt_dep"
                    :controller="info.department"
                />
                <doc-list-page-item-row
                    text="srt_size"
                    :controller="info.doc_size"
                />
                <doc-list-page-item-row
                    text="srch_type"
                    :controller="info.doc_format"
                />
                <div class="my-sm-2 row input-group input-group-sm">
                    <button class="col-sm py-sm-1 btn btn-success mr-1">
                        <a :href="doc_file" download="document.pdf">
                            <span class="btn_content"
                                >{{ $t("download") }}
                                <font-awesome-icon
                                    icon="download"
                                ></font-awesome-icon>
                            </span>
                        </a>
                    </button>
                    <router-link
                        class="ml-1 col-sm py-1 btn btn-success"
                        :to="{
                            name: 'History',
                            params: { id: info.id, name: info.name },
                        }"
                    >
                        <span class="btn_content"
                            >{{ $t("show_history") }}
                            <font-awesome-icon
                                icon="history"
                            ></font-awesome-icon>
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="col-lg full_height shadow p-4 my-1 bg-white rounded">
            <div id="target" class="mx-1 full_height">
                <img class="iframe" :src="doc_file" alt="$t(preview)" />
            </div>
        </div>
    </article>
</template>
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
@media (max-width: 1000px) {
    .col-lg {
        display: block;
    }
    .full_height {
        min-height: 40vh;
    }
}
</style>
