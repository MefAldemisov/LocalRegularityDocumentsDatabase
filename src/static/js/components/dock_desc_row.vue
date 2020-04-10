<style>
</style>
<template>
    <div class="my-1 row input-group input-group-sm">
        <div class="col input-group-prepend">
            <span class="col input-group-text">{{text}}</span>
        </div>
        <input type="text" class="col form-control" :value="controller" :title="controller" readonly />
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