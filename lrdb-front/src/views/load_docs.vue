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
        <tip type="my">
            {{ $t("hotkeys") }}
            <br />
            <span class="border rounded">shift</span>+
            <span class="border rounded">enter</span>
            {{ $t("to_sbm_fm") }}
        </tip>
        <div class="row d-flex justify-content-around">
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
import tip from "../components/tips.vue";
export default {
    name: "DocLoader",
    data: function() {
        return {
            load_modes: [
                { name: "new", text: "load" },
                { name: "change", text: "update" },
            ],
        };
    },
    methods: {
        changeMode: function(event) {
            this.load_mode = !this.load_mode;
        },
    },
    computed: {
        mode: function() {
            return this.load_mode ? "load" : "update";
        },
    },
    components: {
        tip,
    },
};
</script>
