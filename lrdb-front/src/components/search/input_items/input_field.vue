<template>
    <label class="col-lg input-group mb-1">
        <div class="input-group-prepend">
            <span class="input-group-text">{{ $t(name) }}</span>
        </div>
        <input
            v-model="val"
            :type="type"
            class="form-control"
            :required="required"
            @input="handleInput"
        />
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
    computed: {
        inp_name: function() {
            return this.name + "_inp";
        },
    },
    methods: {
        handleInput: function(e) {
            this.$emit("input", this.val);
        },
    },
};
</script>
