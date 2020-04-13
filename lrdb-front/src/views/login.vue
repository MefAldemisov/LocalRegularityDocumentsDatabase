<template>
  <div class="container login_container">
    <h1 class="hidden">
      {{$t("login_login")}}
    </h1>
    <form id="login_form"
method="POST" class="was-validated">
      <h2>
        {{$t('login_title')}}
      </h2>
      <div class="input-group mb-3 input-group-sm">
        <div class="input-group-prepend">
          <label
for="login_login_inp"
class="input-group-text">{{$t('login_login')}}</label>
        </div>
        <input
          id="login_login_inp"
          type="text"
          class="form-control"
          placeholder="please fill out this field"
          required
          name="username"
        >
      </div>
      <div class="input-group mb-3 input-group-sm">
        <div class="input-group-prepend">
          <label
            for="login_pswd_inp"
            class="input-group-text"
            name="password"
            >{{$t('login_password')}}</label
          >
        </div>
        <input
          id="login_pswd_inp"
          type="password"
          class="form-control"
          placeholder="please fill out this field"
          required
        >
      </div>

      <button type="submit"
class="btn btn-success btn-block">
        {{$t('login_submit')}}
      </button>
    </form>
  </div>
</template>
<script>
let $ = require("jquery");

// form action modifier
const link = window.location.href.split("?")[0]; // to rempve GET part if it is
$("#login_form").attr("action", link);
// baisic bootstrap validation TODO: write myself
$("#login_form").on("submit", function(event) {
  if (this.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  this.classList.add("was-validated");
});

export default {
  name: "LoginForm"
};
</script>
