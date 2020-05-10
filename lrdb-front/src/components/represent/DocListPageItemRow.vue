<script>
export default {
    name: "DocListPageItemRow",
    props: {
        text: {
            requred: true,
        },
        controller: {
            retured: true,
        },
    },
};
</script>
<template>
    <label v-if="controller" class="my-1 row input-group input-group-sm">
        <div class="input-group-prepend">
            <span class="input-group-text">{{ $t(text) }}</span>
        </div>
        <input
            type="text"
            class="col form-control"
            :value="controller"
            :title="controller"
            readonly
        />
    </label>
</template>
<style scoped>
.form-control[readonly] {
    background-color: white;
}
.form-control:focus {
    border-color: #ced4da;
    box-shadow: none;
}
.input-group-text {
    background-color: #edf1f5;
}
</style>
