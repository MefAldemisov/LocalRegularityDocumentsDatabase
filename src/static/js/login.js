// form action modifier
const link = window.location.href.split("?")[0] // to rempve GET part if it is
$("#login_form").attr("action", link)
// baisic bootstrap validation TODO: write myself
$("#login_form").on("submit", function (event) {
    if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
    }
    form.classList.add('was-validated')
})
