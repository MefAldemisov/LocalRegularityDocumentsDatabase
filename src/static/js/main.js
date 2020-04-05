import Vue from 'vue'
import srch_docks_comp from './search_docks.vue'
import my_docks_comp from './my_docks.vue'
import load_docks_comp from './load_docks.vue'

new Vue({
    el: '#srch_docks_comp',
    render: h => h(srch_docks_comp)
})
new Vue({
    el: '#my_docks_comp',
    render: h => h(my_docks_comp)
})
new Vue({
    el: '#load_docks_comp',
    render: h => h(load_docks_comp)
})
