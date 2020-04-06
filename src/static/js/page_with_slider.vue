<template>
    <div>
        <header>
            <nav class="symbolic">
                <ul>
                    <li id="logo">
                        <img
                            class="iu_logo"
                            src="../images/IU_logo_black.png"
                            alt="logo of Innopolis University"
                        />
                    </li>
                    <!-- {%if id > 0%} -->
                    <li id="my" class="clickbel navigation" @click="set('my')">My Documents</li>
                    <li
                        id="search"
                        class="clickbel navigation"
                        @click="set('search')"
                    >Search Documents</li>
                    <li id="load" class="clickbel navigation" @click="set('load')">Load Documents</li>
                    <li class="clickbel navigation">
                        <!-- <a href="{{ url_for('logout') }}">Logout</a> -->
                    </li>
                    <!-- {%endif%} -->
                    <li id="change">
                        <label for="lang_marker" id="lang_text" class="navigation">Language:</label>
                        <select id="lang_marker" v-model="selected" @change="changeLang()">
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
                <my_docks_comp></my_docks_comp>
            </div>
            <div v-if="display_mode === 'search'">
                <srch_docks_comp></srch_docks_comp>
            </div>
            <div v-if="display_mode === 'load'">
                <load_docks_comp></load_docks_comp>
            </div>
        </main>
    </div>
</template>
<script>
import srch_docks_comp from "./search_docks.vue";
import my_docks_comp from "./my_docks.vue";
import load_docks_comp from "./load_docks.vue";

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
            getLanguage(this.selected);
        },
        changeLang: function() {
            console.log(this.selected);
            getLanguage(this.selected);
        }
    },
    created: function() {
        // set current tab
        if ($ID > 0) {
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
        getLanguage(this.selected);
    },
    components: {
        srch_docks_comp,
        my_docks_comp,
        load_docks_comp
    }
};
</script>