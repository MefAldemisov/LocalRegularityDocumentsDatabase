<style scoped>
.toast,
div.hide {
    display: none;
}
@media (min-width: 1200px) {
    .toast {
        display: inline;
        position: absolute;
        top: 0;
        right: -10rem;
        opacity: 100;
        z-index: 2;
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
    <div @click="hide" class="toast" :class="{ hide: was_clicked }">
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
    name: "tip",
    data() {
        return { was_clicked: false };
    },
    methods: {
        hide() {
            this.was_clicked = true;
        },
    },
};
</script>
