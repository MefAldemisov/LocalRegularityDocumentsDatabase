import Vue from 'vue'
import PageWithSlider from './components/page_with_slider.vue'

const img_part = $IMG_LINK ? ":img_link='img_link'" : ""
const template = `<page-with-slider :logout_link="logout_link" ${img_part} ></page-with-slider>`

new Vue({
    el: "#page_with_slider",
    components: { PageWithSlider },
    data: {
        logout_link: $LOGOUT_LINK,
        user_id: $ID,
        img_link: $IMG_LINK
    },
    template: template
})
