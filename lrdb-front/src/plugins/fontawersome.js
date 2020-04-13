import Vue from 'vue'
import { library } from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faSearch,
	faFile,
} from '@fortawesome/fontawesome-free-solid'

library.add(
	faSearch,
	faFile
)

Vue.component('font-awesome-icon', FontAwesomeIcon) // registered globally