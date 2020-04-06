import Vue from 'vue'
import PageWithSlider from './components/page_with_slider.vue'

new Vue({
    el: "#page_with_slider",
    components: { PageWithSlider },
    data: {
        logout_link: $LOGOUT_LINK,
        user_id: $ID
    },
    template: `<page-with-slider :logout_link="logout_link" :user_id="user_id"></page-with-slider>`
})
