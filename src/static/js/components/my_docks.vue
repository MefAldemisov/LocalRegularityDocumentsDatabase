<style>
</style>
<template>
    <div>
        <h1 class="hidden">Page with documents of the user</h1>
        <h3>Hello, user with id {{ id }}</h3>
        <h2>Documents, where my name is mentioned:</h2>
        <Representation />
        <h2>Documents uploaded by me</h2>
        <!-- make a carousel -->
        <Representation />
    </div>
</template>
<script>
import Representation from './represent/dock_representation.vue'
export default {
    name: "MyDocks",
    data: function() {
        return {id: 1}
    },
    components: {Representation}
}
</script>