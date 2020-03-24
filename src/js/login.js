// baisic bootstrap validation TODO: write myself
(function () {
    'use strict'
    window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        const forms = document.getElementsByClassName('needs-validation')
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                // event.preventDefault();
                if (form.checkValidity() === false) {
                    // event.preventDefault();
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, false)
})()