<template>
    <div>
        <h1>
            {{ $t("history") }} <br />
            &laquo;{{ $route.params.name }}&raquo;
        </h1>
        <Representation />
    </div>
</template>
<script>
import Representation from "../components/represent/doc_representation.vue";

export default {
    name: "History",
    components: {
        Representation,
    },
};
</script>
