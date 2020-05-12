<script>
import BaseParams from "../../components/search/BaseParams.vue";
import BaseInputField from "../../components/search/input_items/BaseInputField.vue";
import apiCalls from "../../request/index.js";

export default {
    name: "LoadDocsPageChange",
    data: function() {
        return {
            val_id: "",
            req: true,
            value: "",
            propagate: "",
        };
    },
    components: {
        BaseParams,
        BaseInputField,
    },
    methods: {
        searchDoc: async function() {
            let val = "";
            await apiCalls
                .getDockById(this.val_id)
                .then(function(data) {
                    console.log(data.data);
                    val = data.data;
                })
                .catch(function(error) {
                    console.log("Error, search by id");
                });
            this.setVal(val);
        },
        setVal: function(val) {
            this.value = val;
            this.propagate = { name: val.name, owner: val.owner };
        },
    },
};
</script>
<template>
    <div>
        <form v-if="value" @submit.prevent>
            <!-- TODO: write function + hotkeys to submit -->
            <base-params
                form_type="upload"
                :required="req"
                v-model="value"
                :initial="propagate"
            />
            <button
                type="submit"
                @click.prevent
                class="btn btn-success btn-block"
            >
                {{ $t("upl_doc_data") }}
            </button>
        </form>
        <form
            v-else
            @submit.prevent="searchDoc"
            v-shortkey="['shift', 'enter']"
            @shortkey="searchDoc()"
        >
            <base-input-field
                v-model="val_id"
                class="my-4"
                name="srch_id"
                type="number"
                :required="req"
            >
                <template #append>
                    <div class="input-group-append">
                        <button class="btn btn-success " type="submit">
                            {{ $t("login_submit") }}
                        </button>
                    </div>
                </template>
            </base-input-field>
        </form>
    </div>
</template>
