$(document).ready(function() {

    /* scroll */

    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    /* timer */

    function update() {
        var Now = new Date(),
            Finish = new Date();
        Finish.setHours(23);
        Finish.setMinutes(59);
        Finish.setSeconds(59);
        if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
            Finish.setDate(Finish.getDate() + 1);
        }
        var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
        var hrs = Math.floor(sec / 3600);
        sec -= hrs * 3600;
        var min = Math.floor(sec / 60);
        sec -= min * 60;
        $(".timer .hours").html(pad(hrs));
        $(".timer .minutes").html(pad(min));
        $(".timer .seconds").html(pad(sec));
        setTimeout(update, 200);
    }

    function pad(s) {
        s = ("00" + s).substr(-2);
        return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
    }
    update();

    /* sliders */

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        dots: false,
        nav: true,
        navText: ""
    });


    /* validate form */
    function getParameterByName(name) {
        if (name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
            var results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    }
    $(".order_form").submit(function() {
        document.getElementById('referrer').value = document.referrer;
        document.getElementById('page').value = window.location;
        var utm_source = getParameterByName('utm_source') ? ('utm_source=' + getParameterByName(utm_source) + '\n') : "";
        var utm_medium = getParameterByName('utm_medium') ? ('utm_medium=' + getParameterByName(utm_medium) + '\n') : "";
        var utm_campaign = getParameterByName('utm_campaign') ? ('utm_campaign=' + getParameterByName(utm_campaign) + '\n') : "";
        var utm_content = getParameterByName('utm_content') ? ('utm_content=' + getParameterByName(utm_content) + '\n') : "";
        var utm_term = getParameterByName('utm_term') ? ('utm_term=' + getParameterByName(utm_term)) : "";
        document.getElementById('utms').value = utm_source + utm_medium + utm_campaign + utm_content + utm_term;
        if ($(this).find("input[name='name']").val() == "" && $(this).find("input[name='phone']").val() == "") {
            alert("Введите Ваши имя и телефон");
            $(this).find("input[name='name']").focus();
            return false;
        } else if ($(this).find("input[name='name']").val() == "") {
            alert("Введите Ваше имя");
            $(this).find("input[name='name']").focus();
            return false;
        } else if ($(this).find("input[name='phone']").val() == "") {
            alert("Введите Ваш телефон");
            $(this).find("input[name='phone']").focus();
            return false;
        }
        return true;
    });

});