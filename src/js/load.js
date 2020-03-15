$(function () {
    $("#content").load("login.html")
    getLanguage(current_lang)
});
$(".clickbel").click(function () {
    $("#content").load(this.id + "_docks.html")
    getLanguage(current_lang)
})
