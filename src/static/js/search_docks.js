new Vue({
    el: "#search_holder",
    data: {
        search_mode: true
    },
    methods: {
        change_form: function () {
            this.search_mode = !this.search_mode
        }
    }
})
