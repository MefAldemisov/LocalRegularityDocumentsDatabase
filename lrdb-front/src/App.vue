<style>
.btn-success {
    /*UI style*/
    /* background-color: #15b012;  */
    /* Accessability low treshhold */
    color: #fff;
    background-color: #0f870d;
}
.bg-success {
    color: #fff;
    background-color: #0f870d !important; /*bootstrap uses important, thus to rewrite it...*/
}
.border-success {
    border-color: #0f870d;
}
.hidden {
    display: none;
}
</style>
<style scoped>
/* Header - footter*/
.symbolic {
    background-color: #edf1f5;
    min-height: 3.5rem;
}
footer {
    margin-top: 2rem;
}
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
    color: black;
}
.active,
.clickbel:hover {
    color: black;
    font-weight: 900;
    font-size: 1.2rem;
    cursor: pointer;
    text-decoration: none;
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
    min-height: 90vh;
}
</style>
<template>
    <div>
        <header>
            <nav class="symbolic">
                <ul>
                    <li>
                        <img class="iu_logo" :src="img_link" :alt="alt" />
                    </li>
                    <router-link
                        tag="li"
                        v-if="user_id > 0"
                        active-class="active"
                        class="clickbel navigation"
                        to="/my_docs"
                        >{{ $t("my") }}</router-link
                    >
                    <router-link
                        tag="li"
                        v-if="user_id > 0"
                        active-class="active"
                        class="clickbel navigation"
                        to="/search"
                        >{{ $t("search") }}</router-link
                    >
                    <router-link
                        tag="li"
                        v-if="user_id > 0"
                        active-class="active"
                        class="clickbel navigation"
                        to="/load"
                        >{{ $t("load") }}</router-link
                    >

                    <li v-if="user_id > 0" class="clickbel navigation">
                        <a :href="logout_link" class="logout">
                            {{ $t("logout") }}
                        </a>
                    </li>
                    <li>
                        <label for="lang_marker" class="navigation">{{
                            $t("lang_text")
                        }}</label>
                        <select
                            id="lang_marker"
                            v-model="selected"
                            class="lang_marker"
                            @change="changeLang"
                        >
                            <option
                                v-for="lang in langs"
                                :key="lang"
                                class="lang_label"
                                :value="lang"
                                >{{ lang }}</option
                            >
                        </select>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer class="symbolic"></footer>
    </div>
</template>
<script>
// styles
import "./assets/css/reset.css";
import "./assets/css/main.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/modile.css"
// components
import SearchDocs from "./views/search_docs.vue";
import MyDocs from "./views/my_docs.vue";
import DocLoader from "./views/load_docs.vue";
import LoginForm from "./views/login.vue";
import UI_logo from "./assets/images/IU_logo_black.png";

export default {
    name: "App",
    components: {
        SearchDocs,
        MyDocs,
        DocLoader,
        LoginForm,
    },
    props: {
        user_id: {
            type: Number,
            default: 23,
        },
        logout_link: {
            type: String,
            default: "#",
        },
        img_link: {
            type: String,
            default: UI_logo,
        },
    },
    data: function() {
        return {
            selected: "EN",
            langs: ["EN", "RU", "TAT"],
            alt: "$t('alt_logo')",
        };
    },
    methods: {
        changeLang: function() {
            this.$i18n.locale = this.selected.toLowerCase();
        },
    },
    // default language of the user's browser
    //     const userLang = navigator.language || navigator.userLanguage;
    //     switch (userLang[0]) {
    //         case "r":
    //             this.selected = "RU";
    //             break;
    //         default:
    //             this.selected = "EN";
    //     }
};
</script>
