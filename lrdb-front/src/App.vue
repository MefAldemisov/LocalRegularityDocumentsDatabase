<script>
// import "./node_modules/reset-css/reset.css";
import "./assets/css/main.css";
import "bootstrap-css-only";
import UI_logo from "./assets/images/IU_logo_black.png";
import BaseDropdown from "./components/search/input_items/BaseDropdown.vue"

export default {
    name: "App",
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
            selected_lang: "EN",
            alt: "$t('alt_logo')",
            navs: ["my", "search", "load"],
            languages: [
                {val:"EN", text: "EN", index: 0}, 
                {val:"RU", text: "RU", index: 1},
                {val:"TAT", text: "TAT", index: 2}
            ]
        };
    },
    watch: {
        selected_lang:  function(new_l, old_l){
            this.$i18n.locale = new_l.toLowerCase();
            // change language of the web page
            document
                .getElementsByTagName("html")[0]
                .setAttribute("lang", this.$i18n.locale);
        }
    },
    methods: {
        changeTab: function(event){
            const current = this.$router.currentRoute.name;
            const index = this.navs.indexOf(current) === -1 ? 2 : this.navs.indexOf(current);
            
            if (event.srcKey ==="left"){
                console.log("true")
                this.$router.push({name : this.navs[(index-1) >= 0 ? (index - 1) : 2]});
            } else {
                this.$router.push({name : this.navs[(index+1)%this.navs.length]});
            }
        },
        goToMy: function(){
            this.$router.push({name : "my"});
        }
    },
    created: function() {
        // set language as default language of the user's browser
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang[0] === "r") {
            this.selected_lang = "RU";
        } else {
            this.selected_lang = "EN";
        }
        this.$i18n.locale = this.selected_lang.toLowerCase();
    },
    components: {
        BaseDropdown
    }
};
</script>
<template>
    <div>
        <header>
            <nav class="symbolic">
                <ul
                    class="container d-flex flex-wrap justify-content-between align-items-baseline"
                >
                    <li class="burger clickbel">
                        <span>
                            <font-awesome-icon icon="bars"></font-awesome-icon>
                        </span>
                        <ul class="burger_list shadow-lg">
                            <router-link
                                class="dropdown-item rounded-lg"
                                active-class="burger_active"
                                tag="li"
                                v-for="nav in navs"
                                :to="{ name: nav }"
                                :key="nav"
                                >{{ $t(nav) }}</router-link
                            >
                            <li class="dropdown-item rounded-lg">
                                <a :href="logout_link" class="logout">
                                    {{ $t("logout") }}
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <img @click="goToMy" class="iu_logo" :src="img_link" :alt="alt" />
                    </li>
                    <router-link
                        tag="li"
                        v-for="nav in navs"
                        active-class="active"
                        class="clickbel navigation"
                        :to="{ name: nav }"
                        :key="nav"
                        >
                        {{ $t(nav) }}
                    </router-link>
                    <li class="clickbel navigation">
                        <a :href="logout_link" class="logout">
                            {{ $t("logout") }}
                        </a>
                         
                    </li>
                    <li class="selector">
                        <span class="active transparent">
                            H
                        </span>
                        <span class="navigation"
                            >{{ $t("lang_text") }} : 
                        </span>
                        <base-dropdown class="navigation lang-control"
                            v-model="selected_lang" 
                            :options="languages"
                        >
                        </base-dropdown>
                        </select>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="container" v-shortkey="{right: ['ctrl','arrowright'], left: ['ctrl','arrowleft']}"  @shortkey="changeTab">
            <router-view></router-view>
        </main>
        <footer class="symbolic"></footer>
    </div>
</template>
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
.symbolic {
    background-color: #edf1f5;
    min-height: 3.5rem;
}
footer {
    margin-top: 2rem;
}
.iu_logo {
    width: 8rem;
    cursor: pointer;
}
ul.container {
    width: 70%;
}
ul.container > li {
    height: 100%;
    padding: 0.5rem;
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
    font-size: 1rem;
    color: black;
}
.transparent {
    opacity: 0;
}
.active,
ul>li.clickbel:hover {
    color: black;
    font-weight: 900;
    font-size: 1.2rem;
    cursor: pointer;
    text-decoration: none;
}
main {
    padding-top: 1rem;
    margin: auto;
    width: 70%;
    min-height: 90vh;
    position: relative;
}
ul > li.burger {
    position: relative;
    display: none;
    padding: 0;
}
.burger_list {
    display: none;
    position: absolute;
    background-color: #fff;
    z-index: 4;
    padding: 12px 16px;
}
.burger_list > * {
    font-weight: 400;
}
.dropdown-item:active,
.burger_active {
    background-color: #0f870d;
    color: white;
}
select.custom-select {
    width: 50%;
    padding-left: 1rem;
}
.lang-control {
    display: inline-block;
    max-width: 4.3rem;
    min-width: 4.3rem;
    background-color: #edf1f5;
    border: none;
}
@media (max-width: 1200px) {
    main.container,
    ul.container {
        width: 90%;
        padding-right: 0;
        padding-left: 0;
    }
}
@media (max-width: 1000px) {
    ul > li.clickbel {
        display: none;
    }
    ul.container > li.burger {
        display: inline-block;
    }
    .burger:hover .burger_list,
    .burger:focus .burger_list {
        display: block;
    }
}
@media(min-width: 2000px) {
    main {
        min-height: 97vh;
    }
}
</style>
