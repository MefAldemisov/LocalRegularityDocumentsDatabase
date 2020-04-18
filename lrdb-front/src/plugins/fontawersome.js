import Vue from "vue";
import { library } from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faSearch,
    faFile,
    faDownload,
    faHistory,
    faBars,
} from "@fortawesome/fontawesome-free-solid";

library.add(faSearch, faFile, faDownload, faHistory, faBars);

Vue.component("font-awesome-icon", FontAwesomeIcon); // registered globally
