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
            :for="val"
        >
            <input
                type="checkbox"
                :value="val"
                class="hidden"
                name="dep"
                :id="val"
                v-model:checked="selected"
            />{{ $t(val) }}
        </label>
    </div>
</template>
<script>
export default {
    name: "check",
    data: function() {
        return {
            selected: false
        };
    },
    props: {
        val: {
            required: true,
            type: String
        }
    }
};
</script>
