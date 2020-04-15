<style scoped>
input[type="file"] {
    display: none;
}
</style>
<template>
    <div class="row">
        <div class="col input-group mb-1">
            <label
                id="srch_owner"
                for="srch_file_inp"
                :class="{ 'bg-success': filename }"
                class="w-100 input-group-text"
            >
                {{ $t("selct_file") }}
                <span v-if="filename">:</span>
                {{ filename }}
            </label>
        </div>
        <input
            id="srch_file_inp"
            type="file"
            class="form-control"
            @change="previewFiles"
        />
    </div>
</template>
<script>
export default {
    name: "input_file",
    methods: {
        previewFiles: function(event) {
            this.filename = event.target.files[0].name;
        }
    },
    data: function() {
        return {
            filename: ""
        };
    }
};
</script>
