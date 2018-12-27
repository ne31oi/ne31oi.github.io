'use strict';

function initMap() {
    // The location of Uluru
    var uluru = { lat: 55.7321518, lng: 37.58908210000004 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 17, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}
jQuery(document).ready(function($) {


    $("a.scroll").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if ($.browser && $.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }
        return false;
    });
    if (typeof(IMask) == 'function') {
        var element = document.getElementById('phone');
        var maskOptions = {
            mask: '+{7}(000)000-00-00'
        };
        var mask = new IMask(element, maskOptions);
        var element = document.getElementById('email');
        var maskOptions = {
            mask: /[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}/
        };
        var mask = new IMask(element, maskOptions);
    }
    try {
        initMap();

    } catch (e) {}
    if (typeof($(".form").validate) == 'function') {
        $(".form").validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                name: "required",
                email: {
                    required: true,
                    // Specify that email should be validated
                    // by the built-in "email" rule
                    email: true
                },
                phone: {
                    required: true,
                    minlength: 5
                }
            },
            // Specify validation error messages
            messages: {
                name: "Please enter your firstname",
                phone: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                email: "Please enter a valid email address"
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
                form.submit();
                showThanks()
            }
        });
    }

    $('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
        $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    })
    $('button.back').on('click', function(e) {
        e.preventDefault();
        window.history.back();
    });


});

function showThanks() {
    $(location).attr("href", "thanks.html");
}

'use strict';

/*
    This file can be used as entry point for webpack!
 */
