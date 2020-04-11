<style>
.iu_logo {
    width: 6rem;
}
ul {
    margin: auto;
    width: 70%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
}
li {
    height: 100%;
    padding: 0.5rem;
    flex-shrink: 1;
    display: inline-block;
}
.logout:link,
.logout:visited,
.logout:hover,
.logout:active {
    text-decoration: none;
}
.logout {
    color: inherit;
    pointer-events: none;
}
.navigation {
    font-size: 0.7rem;
}
.active,
.clickbel:hover {
    font-weight: 900;
    font-size: 1.2rem;
    cursor: pointer;
}
.hidden {
    display: none;
}
.lang_marker {
    cursor: pointer;
    background-color: transparent;
    border: none;
}
.lang_marker:hover {
    font-weight: 600;
}
/* Main part */
main {
    padding-top: 1rem;
    margin: auto;
    width: 70%;
}
</style>
<template>
    <div>
        <header>
            <nav class="symbolic">
                <ul>
                    <li id="logo">
                        <img class="iu_logo" :src="img_link" alt="logo of Innopolis University" />
                    </li>
                    <li
                        v-if="user_id > 0"
                        id="my"
                        :class="{'active': display_mode=='my'}"
                        class="clickbel navigation"
                        @click="set('my')"
                    >My Documents</li>
                    <li
                        v-if="user_id > 0"
                        id="search"
                        :class="{'active': display_mode=='search'}"
                        class="clickbel navigation"
                        @click="set('search')"
                    >Search Documents</li>
                    <li
                        v-if="user_id > 0"
                        id="load"
                        :class="{'active': display_mode=='load'}"
                        class="clickbel navigation"
                        @click="set('load')"
                    >Load Documents</li>
                    <li v-if="user_id > 0" class="clickbel navigation">
                        <a v-bind:href="logout_link" id="logout" class="logout">Logout</a>
                    </li>
                    <li id="change">
                        <label for="lang_marker" id="lang_text" class="navigation">Language:</label>
                        <select id="lang_marker" class="lang_marker" v-model="selected" @change="changeLang()">
                            <option
                                class="lang_label"
                                v-for="lang in langs"
                                v-bind:value="lang"
                                :key="lang"
                            >{{ lang}}</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </header>
        <main id="content">
            <div v-if="display_mode === 'my'">
                <MyDocks />
            </div>
            <div v-if="display_mode === 'search'">
                <SearchDocks />
            </div>
            <div v-if="display_mode === 'load'">
                <DockLoader />
            </div>
            <div v-if="display_mode === 'login'">
                <LoginForm />
            </div>
        </main>
    </div>
</template>
<script>
import SearchDocks from "./search_docks.vue";
import MyDocks from "./my_docks.vue";
import DockLoader from "./load_docks.vue";
import LoginForm from "./login.vue";
import UI_logo from "../../images/IU_logo_black.png";

function getLanguage(lang_label) {
    lang_label = lang_label.toLowerCase();
    $.ajax({
        // url: `${$SCRIPT_ROOT}static/js/langs/${lang_label}.json`,
        url: `../static/js/langs/${lang_label}.json`,
        dataType: "json",
        async: false,
        dataType: "json",
        success: function(language_dict) {
            Object.keys(language_dict).forEach(function(key) {
                $("#" + key).html(language_dict[key]);
            });
            $("html").attr("lang", lang_label);
        }
    });
}

export default {
    name: "PageWithSlider",
    props: {
        user_id: {
            type: Number,
            default: 23
        },
        logout_link: {
            type: String,
            default: "#"
        },
        img_link: {
            type: String,
            default: UI_logo
        }
    },
    data: function() {
        return {
            selected: "",
            display_mode: "my",
            langs: ["EN", "RU", "TAT"]
        };
    },
    methods: {
        set: function(mode) {
            this.display_mode = mode;
            // getLanguage(this.selected);
        },
        changeLang: function() {
            // getLanguage(this.selected);
        }
    },
    created: function() {
        // set current tab
        if (this.user_id > 0) {
            this.display_mode = "my";
        } else {
            this.display_mode = "login";
        }
        // default language of the user's browser
        const userLang = navigator.language || navigator.userLanguage;
        switch (userLang[0]) {
            case "r":
                this.selected = "RU";
            default:
                this.selected = "EN";
        }
        // getLanguage(this.selected);
    },
    components: {
        SearchDocks,
        MyDocks,
        DockLoader,
        LoginForm
    }
};
</script>