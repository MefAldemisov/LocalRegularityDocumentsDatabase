import Vue from 'vue'
import srch_docks_comp from './search_docks.vue'

let srch = Vue.extend(srch_docks_comp)
new srch().$mount("#srch_docks_comp")