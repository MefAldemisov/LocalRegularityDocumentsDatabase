<style scoped>
label {
    z-index: 0;
}
</style>
<template>
    <label class="col-lg input-group mb-1">
        <div class="input-group-prepend ">
            <span class="input-group-text">{{ $t(name) }}</span>
        </div>
        <input
            v-model="val"
            :type="type"
            class="form-control"
            :required="required"
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
        };
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
                } else if (this.val.indexOf("-") >= 0) {
                    console.log("here");
                    const splitten = this.val.split("-");
                    this.val = parseInt(splitten[1]);
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
