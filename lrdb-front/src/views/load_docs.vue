<style>
input[type="file"] {
  display: none;
}
</style>
<template>
  <div>
    <h1 class="hidden">
      Form to load documents or update them
    </h1>
    <h2>Load Documents</h2>
    <form @submit.prevent>
      <Params />
      <div class="row">
        <div class="col input-group mb-1">
          <label
            id="srch_owner"
            for="srch_file_inp"
            :class="{ 'bg-success': filename }"
            class="w-100 input-group-text"
          >
            Select file
            <span v-if="filename">:</span>
            {{ filename }}
          </label>
        </div>
        <input
          id="srch_file_inp"
          type="file"
          class="form-control"
          @change="previewFiles"
        />
      </div>
      <button type="submit"
class="btn btn-success btn-block">
        Upload document data
      </button>
    </form>
  </div>
</template>
<script>
import Params from "../components/search/param_selector.vue";

export default {
  name: "DocLoader",
  components: {
    Params
  },
  data: function() {
    return {
      filename: ""
    };
  },
  methods: {
    previewFiles: function(event) {
      this.filename = event.target.files[0].name;
    }
  }
};
</script>
