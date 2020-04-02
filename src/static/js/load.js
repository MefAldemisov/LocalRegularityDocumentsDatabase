
$(function () {
    // load the login page
    if ($ID > 0) {
        $("#content").load(`${$SCRIPT_ROOT}static/html/my_docks.html`)
    } else {
        $("#content").load(`${$SCRIPT_ROOT}static/html/login.html`)
    }
    // default language of the user's browser
    const userLang = navigator.language || navigator.userLanguage
    switch (userLang[0]) {
        case "r":
            current_lang = "ru"
            breaktype = "script/"
        default:
            current_lang = "en"
    }
    getLanguage(current_lang)
})
$(".clickbel").click(function () {
    $("#content").load(`${$SCRIPT_ROOT}/static/html/${this.id}_docks.html`)
    getLanguage(current_lang)
})