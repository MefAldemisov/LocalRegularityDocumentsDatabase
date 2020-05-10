<style scoped>
.tab {
    display: inline-block;
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    background-color: #edf1f5;
    text-align: center;
    text-decoration: none;
    color: #000;
}
.active {
    background-color: #0f870d;
    color: white;
}
h1 {
    display: none;
}
h2 {
    font-size: 1.2rem;
    margin: 0;
}
</style>
<template>
    <div>
        <h1>{{ $t("form_load_upd") }}</h1>
        <tip-container :tips="tips"></tip-container>
        <div
            class="row d-flex justify-content-around"
            v-shortkey="{
                right: ['shift', 'arrowright'],
                left: ['shift', 'arrowleft'],
            }"
            @shortkey="changeMode"
        >
            <router-link
                v-for="mode in load_modes"
                class="tab col mx-3 rounded-lg border"
                active-class="active"
                :to="{ name: mode.name }"
                :key="mode.name"
            >
                <h2>
                    {{ $t(mode.text) }}
                </h2>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import TipContainer from "../components/tips/TipContainer.vue";
export default {
    name: "LoadDocsPage",
    data: function() {
        return {
            load_modes: [
                { name: "new", text: "load" },
                { name: "change", text: "update" },
            ],
            tips: ["nav", "load", "submit"],
        };
    },
    methods: {
        changeMode: function(event) {
            console.log("hi");
            const index = event.srcKey === "left" ? 0 : 1;
            this.$router.push({ name: this.load_modes[index].name });
        },
    },
    components: {
        TipContainer,
    },
};
</script>
