// removes some browser issues
$.ajaxPrefilter(function (options, original_Options, jqXHR) {
    options.async = true
})
// variable, that tracs current language
let current_lang
// request for laguage dictionary + lang update
function getLanguage(lang_label) {
    $.ajax({
        url: `${$SCRIPT_ROOT}static/js/langs/${lang_label}.json`,
        dataType: 'json', async: false, dataType: 'json',
        success: function (language_dict) {
            Object.keys(language_dict).forEach(function (key) {
                $("#" + key).html(language_dict[key])
            })
            current_lang = lang_label
            $("html").attr("lang", current_lang)
        }
    })
}
// change laguage by click
$("#lang_marker").change(function () {
    getLanguage(this.value.toLowerCase())
})
// load of the default page
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
// change page
$(".clickbel").click(function () {
    if (this.id) {
        $("#content").load(`${$SCRIPT_ROOT}/static/html/${this.id}_docks.html`)
        getLanguage(current_lang)
    }
})