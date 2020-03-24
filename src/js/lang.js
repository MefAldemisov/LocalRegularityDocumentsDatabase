// removes some browser issues
$.ajaxPrefilter(function (options, original_Options, jqXHR) {
    options.async = true
})
// variable, that tracs current language
let current_lang
// request for laguage dictionary + lang update
function getLanguage(lang_label) {
    $.ajax({
        url: 'js/langs/' + lang_label + '.json',
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
