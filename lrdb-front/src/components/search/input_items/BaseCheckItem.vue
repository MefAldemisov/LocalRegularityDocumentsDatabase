<script>
export default {
    name: "BaseCheckItem",
    data: function() {
        return {
            selected: false,
        };
    },
    props: {
        value: {
            required: true,
        },
    },
    methods: {
        handleInput: function(e) {
            this.$emit("input", e.target.checked);
        },
    },
};
</script>
<template>
    <div class="form-check-inline">
        <label class="rounded-lg border" :class="{ active: selected }">
            <input
                type="checkbox"
                class="hidden"
                v-model="selected"
                @input="handleInput"
            />
            <slot></slot>
        </label>
    </div>
</template>
<style scoped>
input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}
label {
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    background-color: #edf1f5;
    text-align: center;
    font-size: 1rem;
}
.active,
label:hover {
    background-color: #0f870d;
    color: white;
}
</style>
