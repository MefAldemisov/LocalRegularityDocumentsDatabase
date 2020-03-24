"use strict";

// baisic bootstrap validation TODO: write myself
".needs-validation".on("submit", function (event) {
  // event.preventDefault();
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  form.classList.add('was-validated');
});