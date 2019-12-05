document.addEventListener("DOMContentLoaded", function(event) {
    [].slice.call(document.querySelectorAll('.vx_floatingLabel')).forEach(function(element) {
        element.addEventListener("focus", (e) => {
            var label = e.target && e.target.parentElement;
            label.classList.add('hasFocus');
            if (e.target.value && e.target.value.length < 0) label.classList.remove('hasValue');
            label.classList.remove('vx_has-error-with-message');
        }, true);
        element.addEventListener("blur", (e) => {
            var label = e.target && e.target.parentElement;
            label.classList.remove('hasFocus');
            if (!check(e.target)) label.classList.add('vx_has-error-with-message');
            if (e.target.value && e.target.value.length > 0) label.classList.add('hasValue');
        }, true);
    });
});

function check(el) {
    if (el && el.id) {
        var id = el.id;
        if ((id == 'routingNumberGroup' && el.value.length == 8) || (id == 'accountNumber' && el.value.length > 6) || id == 'bankName' || (el.value.length === 0)) return true;
    }
    return false;
}

function checkForm() {
    event.preventDefault();
    [].slice.call(document.querySelectorAll('.vx_floatingLabel input')).forEach(function(element) {
        if (!(check(element) && element.value.length > 0) || !check(element)) {
            var label = element.parentElement;
            label.classList.add('vx_has-error-with-message');
        } else {
            var spinner = document.getElementById('spinner');
            if (spinner) {
                spinner.style.display = 'flex';
                setTimeout(function() { spinner.style.display = ''; }, 3000);
            }
        }
    });
}
//vx_has-error-with-message
//hasValue