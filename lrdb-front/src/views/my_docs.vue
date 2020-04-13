<style></style>
<template>
  <div>
    <h1 class="hidden">
      {{$t("page_with_docs_user")}}
    </h1>
    <h2>{{$t("docs_name_ment")}}</h2>
    <Representation />
    <h2>{{$t("docs_up_by_me")}}</h2>
    <!-- make a carousel -->
    <Representation />
  </div>
</template>
<script>
import Representation from "../components/represent/doc_representation.vue";
export default {
  name: "MyDocs",
  components: { Representation },
  data: function() {
    return { id: 1 };
  }
};
</script>
