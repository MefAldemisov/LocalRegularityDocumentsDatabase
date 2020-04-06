Vue.options.delimiters = ['<%', '%>']
// removes some browser issues
$.ajaxPrefilter(function (options, original_Options, jqXHR) {
    options.async = true
})
// variable, that tracs current language
// let current_lang
// request for laguage dictionary + lang update
function getLanguage(lang_label) {
    lang_label = lang_label.toLowerCase()
    console.log("ASKED")
    $.ajax({
        // url: `${$SCRIPT_ROOT}static/js/langs/${lang_label}.json`,
        url: `../static/js/langs/${lang_label}.json`,
        dataType: 'json', async: false, dataType: 'json',
        success: function (language_dict) {
            Object.keys(language_dict).forEach(function (key) {
                $("#" + key).html(language_dict[key])
            })
            $("html").attr("lang", lang_label)
        }
    })
}

let nav = new Vue({
    el: "#navigation",
    data: {
        selected: "",
        display_mode: "my",
        langs: [
            { name: "EN" },
            { name: "RU" },
            { name: "TAT" }
        ]
    },
    methods: {
        set: function (mode) {
            this.display_mode = mode
            getLanguage(this.selected)
        },
        changeLang: function () {
            console.log(this.selected)
            getLanguage(this.selected)
        }
    },
    created: function () {
        // set current tab
        if ($ID > 0) {
            this.display_mode = "my"
        } else {
            this.display_mode = "login"
        }
        // default language of the user's browser
        const userLang = navigator.language || navigator.userLanguage
        switch (userLang[0]) {
            case "r":
                this.selected = "RU"
            default:
                this.selected = "EN"
        }
        getLanguage(this.selected)
    }
})
let content = new Vue({
    el: "#content",
    computed: {
        my: function () { return nav.display_mode === "my" },
        search: function () { return nav.display_mode === "search" },
        load: function () { return nav.display_mode === "load" },
        login: function () { return nav.display_mode === "login" },
    }
})
