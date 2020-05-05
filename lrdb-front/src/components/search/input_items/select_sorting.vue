<style scoped>
ul {
    display: block;
    position: absolute;
    right: 0;
    top: 2.2rem;
    background-color: #fff;
    z-index: 4;
    width: 100%;
    padding: 0.5rem 1rem;
}
.form-control {
    position: relative;
}
.dropdown-item {
    padding: 0.2rem;
}
.dropdown-item:hover,
.active {
    background-color: #0f870d;
    color: white;
}
.hidden {
    display: none;
}
</style>
<template>
    <div
        class="form-control"
        @mouseover="unhide"
        @mouseout="hide"
        v-shortkey="{ up: ['arrowup'], dwn: ['arrowdown'] }"
        @shortkey="moveActive"
    >
        <div class="controller">
            {{ $t(selected.text) }}
        </div>
        <ul
            class="shadow-lg rounded-bottom border"
            v-show="!hidden"
            v-shortkey="['enter']"
            @shortkey="hide"
        >
            <li
                class="dropdown-item rounded"
                v-for="op in options"
                :class="{ 'bg-success': selected.val === op.val }"
                value="op.val"
                @click="changeSelected(op)"
            >
                {{ $t(op.text) }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "sorting",
    props: {
        value: {
            required: true,
            type: String,
        },
    },
    data() {
        return {
            selected: { val: "name", text: "srt_name", index: 0 },
            options: [
                { val: "name", text: "srt_name", index: 0 },
                { val: "owner", text: "srt_owner", index: 1 },
                { val: "created", text: "srt_crt", index: 2 },
                { val: "last_update", text: "srch_upd", index: 3 },
                { val: "effect_date", text: "srch_start", index: 4 },
                { val: "expiration_date", text: "srch_end", index: 5 },
                { val: "department", text: "srch_dep", index: 6 },
            ],
            hidden: true,
        };
    },
    methods: {
        handleInput: function() {
            this.$emit("input", this.selected.val);
        },
        changeSelected: function(op) {
            this.selected = op;
        },
        moveActive: function(event) {
            if (event.srcKey === "dwn") {
                this.selected = this.options[
                    (this.selected.index + 1) % this.options.length
                ];
            } else {
                this.selected = this.options[
                    this.selected.index - 1 >= 0
                        ? this.selected.index - 1
                        : this.options.length - 1
                ];
            }
        },
        hide: function() {
            this.hidden = true;
        },
        unhide: function() {
            this.hidden = false;
        },
    },
};
</script>
