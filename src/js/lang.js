var language
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false
    $.ajax({
        url: 'js/langs/' + localStorage.getItem('language') + '.json',
        dataType: 'json', async: false, dataType: 'json',
        success: function (lang) { language = lang }
    })  
}
function setLanguage(lang) {
    localStorage.setItem('language', lang)
    getLanguage()
    // change words
    Object.keys(language).forEach(function(key) {
        $("#" + key).html(language[key])
    })
}

$("#lang_marker").change(function () {
    const lang = this.value.toLowerCase()
    // change global language
    setLanguage(lang)
})
