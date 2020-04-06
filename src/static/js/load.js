Vue.options.delimiters = ['<%', '%>']
// removes some browser issues
$.ajaxPrefilter(function (options, original_Options, jqXHR) {
    options.async = true
})
// variable, that tracs current language
// let current_lang
// request for laguage dictionary + lang update
