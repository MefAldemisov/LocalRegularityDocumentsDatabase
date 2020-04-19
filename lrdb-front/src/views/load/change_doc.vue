<template>
    <div>
        <form v-if="value" @submit.prevent>
            <Params
                form_type="upload"
                :required="req"
                v-model="value"
                :initial="propogate"
            />
            <button
                type="submit"
                @click.prevent
                class="btn btn-success btn-block"
            >
                {{ $t("upl_doc_data") }}
            </button>
        </form>
        <form v-else @submit.prevent="searchDoc">
            <input_field
                v-model="val_id"
                class="my-4"
                name="srch_id"
                type="number"
                :required="req"
            >
                <template v-slot:append>
                    <button class="btn btn-success" type="submit">
                        {{ $t("login_submit") }}
                    </button>
                </template>
            </input_field>
        </form>
    </div>
</template>
<script>
import Params from "../../components/search/param_selector.vue";
import input_field from "../../components/search/input_items/input_field.vue";
import apiCalls from "../../request/index.js";

export default {
    name: "ChangeDoc",
    data: function() {
        return {
            val_id: "",
            req: true,
            value: "",
            propogate: "",
        };
    },
    components: {
        Params,
        input_field,
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
            console.log("set");
            this.value = val;
            this.propogate = { name: val.name, owner: val.owner };
            console.log(this.propogate);
        },
    },
};
</script>
