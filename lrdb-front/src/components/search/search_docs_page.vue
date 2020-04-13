<style></style>
<template>
  <div>
    <form id="search_form"
class="search_form" @submit.prevent="done">
      <h2>
        {{$t('search_search_params')}}
      </h2>
      <Params />
      <button
        id="search_form_btn"
        type="submit"
        class="btn btn-success btn-block"
      >
        <font-awesome-icon icon="search"></font-awesome-icon>
        <span>{{$t('srch_srch_btn')}}</span>
      </button>
    </form>
  </div>
</template>
<script>
import Params from "./param_selector.vue";

export default {
  name: "Search",
  components: {
    Params
  },
  methods: {
    done: function() {
      this.$emit("done");
    }
  }
};
</script>
