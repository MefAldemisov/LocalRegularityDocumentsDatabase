<style scoped>
@media (min-width: 1200px) {
    .toast {
        display: inline-block;
        width: 15rem;
        opacity: 100;
        z-index: 100;
        cursor: pointer;
    }
}
span {
    background-color: #edf1f5;
    font-weight: 800;
    min-height: 1.2rem;
    padding: 0 4px;
}
</style>
<template>
    <div @click="hide" class="toast" v-show="!was_clicked">
        <div class="toast-header bg-success">
            {{ $t("tip") }}
        </div>
        <div class="toast-body">
            <slot> </slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "BaseTip",
    data() {
        return {
            was_clicked: false,
        };
    },
    created: function() {
        this.was_clicked = this.$store.getters[this.type + "_tip"];
    },
    props: {
        type: {
            reqired: true,
            type: String,
        },
    },
    methods: {
        hide(event) {
            this.was_clicked = true;
            this.$store.commit("hide_" + this.type + "_tip");
        },
    },
};
</script>
