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
    text-transform: capitalize;
}
.active {
    background-color: #0f870d;
    color: white;
}
</style>
<template>
    <div class="form-check-inline">
        <label
            class="rounded-lg border"
            :class="{ active: selected }"
            :for="name"
        >
            <input
                type="checkbox"
                class="hidden"
                :id="name"
                v-model="selected"
                @input="handleInput"
            />{{ $t(name) }}
        </label>
    </div>
</template>
<script>
export default {
    name: "check",
    data: function() {
        return {
            selected: false,
        };
    },
    props: {
        name: {
            required: true,
            type: String,
        },
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
