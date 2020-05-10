<script>
import BaseInputField from "../components/search/input_items/BaseInputField.vue";

export default {
    name: "LoginPage",
    data: function() {
        return {
            t: true,
            login: "",
            password: "",
            sended: false,
        };
    },
    components: {
        BaseInputField,
    },
    methods: {
        validate: function() {
            this.sended = true;
        },
    },
};
</script>
<template>
    <div>
        <h1 class="hidden">{{ $t("login_login") }}</h1>
        <form
            :class="{ 'was-validated': sended }"
            @submit.prevent="validate"
            v-shortkey="['shift', 'enter']"
            @shortkey="validate()"
        >
            <h2 class="px-4 pb-4">{{ $t("login_title") }}</h2>
            <base-input-field
                v-model="login"
                name="login_login"
                type="text"
                :required="t"
            />
            <base-input-field
                v-model="password"
                name="login_password"
                type="password"
                :required="t"
            />
            <div class="px-3 pt-3">
                <button type="submit" class="btn btn-success btn-block">
                    {{ $t("login_submit") }}
                </button>
            </div>
        </form>
    </div>
</template>
