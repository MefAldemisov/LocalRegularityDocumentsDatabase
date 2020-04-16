<template>
    <div class="col input-group mb-1">
        <div class="input-group-prepend">
            <label :for="inp_name" class="input-group-text">{{
                $t(name)
            }}</label>
        </div>
        <input
            v-model="val"
            :id="inp_name"
            :type="type"
            class="form-control"
            :required="required"
            @input="handleInput"
        />
    </div>
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
