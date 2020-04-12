<template>
  <div class="col input-group mb-1">
    <div class="input-group-prepend">
      <label :for="name"
class="input-group-text" id="srch_owner">
        {{ label }}
      </label>
    </div>
    <input
:id="name" :type="type" class="form-control" />
  </div>
</template>
<script>
export default {
  name: "InputField",
  props: {
    label: {
      required: true,
      type: String
    },
    type: {
      default: "text",
      type: String
    },
    name: {
      required: true,
      type: String
    }
  }
};
</script>
