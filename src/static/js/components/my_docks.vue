<style>
.caousel-inner {
    border: 1px solid black;
    background-color: #c5d9e7;
}
iframe {
    margin: 0 15%;
    width: 70%;
    height: 100%;
}
.carousel-control-prev,
.carousel-control-next {
    width: 5%;
    background-color: black;
}
</style>
<template>
    <div>
        <h1 class="hidden">Page with documents of the user</h1>
        <h3>Hello, user with id {{ id }}</h3>
        <h2>Documents, where my name is mentioned:</h2>
        <div id="demo" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active targetDiv"></div>
                <div class="carousel-item targetDiv"></div>
            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>

        <h2>Documents uploaded by me</h2>
        <!-- make a carousel -->
    </div>
</template>
<script>
const filename =
    "../static/pdf/sprint_2_slides_B18-04_LocalRegularityDocumentsDatabase.pdf";
$(function(e) {
    jQuery.ajax({
        type: "GET",
        processData: false,
        url: filename,
        contentType: "application/xml; charset=utf-8",
        success: function(data) {
            var iframe = $("<iframe>");
            iframe.attr("src", filename);
            $(".targetDiv").append(iframe);
        }
    });
});

export default {
    name: "MyDocks",
    data: function() {
        return {
            id: 1 // default value
        };
    }
};
</script>