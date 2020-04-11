<style>
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
<template>
    <div class="my-1 row input-group input-group-sm">
        <div class="input-group-prepend">
            <span class="input-group-text">{{text}}</span>
        </div>
        <input
            type="text"
            class="col form-control"
            :value="controller"
            :title="controller"
            readonly
        />
    </div>
</template>
<script>
export default {
    name: "doc_desc_row",
    props: {
        text: {
            requred: true
        },
        controller: {
            default: null
        }
    }
};
</script>