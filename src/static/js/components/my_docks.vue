<style>
</style>
<template>
    <div>
        <h1 class="hidden">Page with documents of the user</h1>
        <h3>Hello, user with id {{ id }}</h3>
        <h2>Documents, where my name is mentioned:</h2>
        <div id="page">
            <div class="page-content">
                <DocumentVuewer />
                <!-- <DocumentVuewer /> -->
            </div>
            <div class="mt-3">
                <h6 class="text-center">Navigation</h6>
                <b-pagination-nav
                    base-url="#"
                    align="center"
                    v-model="currentPage"
                    :total-rows="2"
                    :per-page="perPage"
                    aria-controls="my-table"
                ></b-pagination-nav>
            </div>
        </div>

        <h2>Documents uploaded by me</h2>
        <!-- make a carousel -->
    </div>
</template>
<script>
import DocumentVuewer from "./dock_vuewer.vue";

export default {
    name: "MyDocks",
    data: function() {
        return {
            id: 1 // default value
        };
    },
    components: {
        DocumentVuewer
    }
};
</script>