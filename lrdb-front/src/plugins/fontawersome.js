import Vue from "vue";
import { library } from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faSearch,
    faFile,
    faDownload,
    faHistory,
} from "@fortawesome/fontawesome-free-solid";

library.add(faSearch, faFile, faDownload, faHistory);

Vue.component("font-awesome-icon", FontAwesomeIcon); // registered globally
