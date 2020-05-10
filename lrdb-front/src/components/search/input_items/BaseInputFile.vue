<style scoped>
input[type="file"] {
    display: none;
}
</style>
<template>
    <label class="row">
        <div class="col input-group mb-1">
            <div
                :class="{ 'bg-success': filename }"
                class="w-100 input-group-text"
            >
                {{ $t("selct_file") }}
                <span v-if="filename">:</span>
                {{ filename }}
            </div>
        </div>
        <input
            id="srch_file_inp"
            type="file"
            class="form-control"
            @change="previewFiles"
            @input="handleInput"
        />
    </label>
</template>
<script>
export default {
    name: "BaseInputFile",
    props: {
        value: {
            required: true,
        },
    },
    methods: {
        previewFiles: function(event) {
            this.filename = event.target.files[0].name;
        },
        handleInput: function(event) {
            this.$emit("input", event.target.files[0]);
        },
    },
    data: function() {
        return {
            filename: "",
        };
    },
};
</script>
