<style scoped>
.error > input {
    color: red;
    border: 2px solid red;
}
.error > div.input-group-prepend > span.input-group-text {
    color: red;
}
label {
    z-index: 0;
}
</style>
<template>
    <label class="col-lg input-group mb-1" :class="{ error: error }">
        <div class="input-group-prepend ">
            <span class="input-group-text">{{ $t(name) }}</span>
        </div>
        <input
            v-model="val"
            :type="type"
            class="form-control"
            :required="required"
            :max="max"
            :min="min"
            @input="handleInput"
        />
        <slot name="append"></slot>
    </label>
</template>
<script>
export default {
    name: "InputField",
    props: {
        type: {
            default: "text",
            type: String,
        },
        name: {
            required: true,
            type: String,
        },
        required: {
            default: false,
            type: Boolean,
        },
        value: {
            required: true,
        },
    },
    data: function() {
        return {
            val: "",
            error: false,
        };
    },
    computed: {
        inp_name: function() {
            return this.name + "_inp";
        },
        min: function() {
            return this.type === "number" ? 1 : "";
        },
        max: function() {
            return this.type === "number" ? 10000000 : "";
        },
    },
    created: function() {
        this.val = this.value;
    },
    methods: {
        validate: function() {
            if (
                this.type === "number" &&
                typeof this.val === typeof "string" &&
                this.val.length > 0
            ) {
                if (this.val.indexOf("e") >= 0) {
                    const splitten = this.val.split("e");
                    this.val =
                        parseInt(splitten[0]) * Math.pow(10, splitten[1]);
                } else if (this.val.indexOf(".") >= 0) {
                    const splitten = this.val.split(".");
                    this.val = parseInt(splitten[0]);
                }
                return parseInt(this.val);
            }
            return this.val;
        },
        handleInput: function(e) {
            this.$emit("input", this.validate());
        },
    },
};
</script>
