<style></style>
<template>
  <div>
    <div class="row">
      <input_field
name="srch_name_inp" type="text"
label="Document name"
/>
    </div>
    <div class="row">
      <input_field
name="srch_owner_inp" type="text"
label="Document owner"
/>
      <input_field
name="srch_type_inp" type="text"
label="Document type"
/>
    </div>
    <div class="row">
      <input_field
        name="srch_create_inp"
        type="date"
        label="Date of document creation"
      />
      <input_field
        name="srch_last_inp"
        type="date"
        label="Date of document last eddition"
      />
    </div>
    <div class="row">
      <input_field
        name="srch_start_inp"
        type="date"
        label="Date of start of the document validity"
      />
      <input_field
        name="srch_end_inp"
        type="date"
        label="End of validity date"
      />
    </div>
    <div class="row">
      <div class="col input-group mb-1">
        <div class="input-group-prepend">
          <label for="srch_dep_inp" class="input-group-text" id="srch_dep"
            >Department</label
          >
        </div>
        <select
          id="srch_dep_inp"
          name="sort by"
          class="input-group-text custom-select"
        >
          <option v-for="d in departments"
value="d.val" :key="d.val">
            {{ d.name }}
          </option>
        </select>
        <!-- List of departments od taken from https://university.innopolis.ru/about/structure/-->
      </div>
      <input_field
name="srch_pg_num_inp" type="number"
label="Page amount"
/>
    </div>
  </div>
</template>
<script>
import input_field from "./input_field.vue";

export default {
  name: "Params",
  components: {
    input_field
  },
  data: function() {
    return {
      departments: [
        { name: "University Development", val: "dep1" },
        { name: "Design and research activities", val: "dep2" },
        { name: "Pre-university education", val: "dep3" },
        { name: "Public relations", val: "dep4" },
        { name: "Legal issues", val: "dep5" },
        { name: "Quality education", val: "dep6" },
        {
          name: "Administrative Policy and Informatization",
          val: "dep7"
        }
      ]
    };
  }
};
</script>
