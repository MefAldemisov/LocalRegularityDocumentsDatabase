$(function () {
    // load the login page
    $("#content").load("login.html")
    // default language of the user's browser
    const userLang = navigator.language || navigator.userLanguage; 
    switch(userLang[0]) {
        case "r":
            current_lang = "ru"
            break
        default:
            current_lang = "en"
    }
    getLanguage(current_lang)
});
$(".clickbel").click(function () {
    $("#content").load(this.id + "_docks.html")
    getLanguage(current_lang)
})
