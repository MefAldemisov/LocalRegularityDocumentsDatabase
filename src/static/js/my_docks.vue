<template>
    <div>
        <h1 class="hidden">Page with documents of the user</h1>
        <h3>Hello, user with id {{ id }}</h3>
        <h2>Documents, where my name is mentioned:</h2>
        <!-- Make a carousel https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html -->
        <h2>Documents uploaded by me</h2>
        <!-- make a carousel -->
    </div>
</template>
<script>
export default {
    name: "MyDocks",
    data: function() {
        return {
            id: 1 // default value
        };
    }
};
</script>