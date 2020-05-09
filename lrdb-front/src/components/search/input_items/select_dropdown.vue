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
            {{ $t(options[selected_index].text) }}
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
                :class="{ 'bg-success': selected_index === op.index }"
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
    name: "selectDropdown",
    props: {
        value: {
            required: true,
            type: String,
        },
        options: {
            required: true,
            type: Array,
        },
    },
    data() {
        return {
            selected_index: 0,
            hidden: true,
        };
    },
    methods: {
        handleInput: function() {
            this.$emit("input", this.options[this.selected_index].val);
        },
        changeSelected: function(op) {
            this.selected_index = op.index;
            this.handleInput();
        },
        moveActive: function(event) {
            if (event.srcKey === "dwn") {
                this.selected_index =
                    (this.selected_index + 1) % this.options.length;
            } else {
                this.selected_index =
                    this.selected_index > 0
                        ? this.selected_index - 1
                        : this.options.length - 1;
            }
        },
        hide: function() {
            this.hidden = true;
            this.handleInput();
        },
        unhide: function() {
            this.hidden = false;
        },
    },
};
</script>
