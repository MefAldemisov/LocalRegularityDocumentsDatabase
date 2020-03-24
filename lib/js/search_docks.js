"use strict";

$("form").submit(function (event) {
  event.preventDefault();
});

function switch_filter_and_sort_forms() {
  $("#search_form").toggleClass("hidden");
  $("#filter_form").toggleClass("hidden");
}

$("#search_form_btn").click(function () {
  switch_filter_and_sort_forms();
});
$("#next_request_btn").click(function () {
  switch_filter_and_sort_forms();
});