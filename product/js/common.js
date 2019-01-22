$(document).ready(function() {

    // Mobile menu =============================================================
    $(function() {
        function burger() {
            $('.main-nav').toggleClass('nav-show');
        };
        $('.burger-menu').click(function() {
            burger();
        });
        $('.close').click(function() {
            $('.main-nav').removeClass('nav-show');
        });
        $(window).resize(function() {
            var w = $(window).width();
            if (w >= 768) {
                $('.main-nav').removeAttr('style');
            }
        });
    });

    // menu fixed on scroll ====================================================
    $(window).on("scroll load resize", function() {
        if ($(this).scrollTop()) {
            $('.header-wrap').addClass('header-fixed');
        } else {
            $('.header-wrap').removeClass('header-fixed');
        }
    });

    // slider ==================================================================
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        //   spaceBetween: 83,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // slider hover animate ====================================================
    $('.gallery-wrap').hover(function() {
        $('.swiper-slide').toggleClass('slider-animate');
    });
    $('.gallery-wrap').mouseleave(function() {
        $('.swiper-slide').removeClass('slider-animate');
    });

});
