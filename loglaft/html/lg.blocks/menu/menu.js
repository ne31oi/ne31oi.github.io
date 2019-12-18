$(function(){
    $('.menu__item').on('click', function(){
        if ($(window).width()>=768) {
        $('.menu__item').removeClass('menu__item_active');
        $(this).addClass('menu__item_active');
        var anchor = $(this).attr("href");
            $('html, body').animate({
                scrollTop: ($(anchor).offset().top - 68) + "px"
            }, {duration: 1000});
        return false;
        }
    });
    $('.menu__button').on('click', function(){
        $('.menu').slideToggle();
    });
    var menuTopMargin = $('.header').height(); // высота шапки
    var menuWidth = $('.row').width();
    $(function(){
        $(window).scroll(function(){
            var top = $(this).scrollTop();
            var elem = $('.menu');
            if ($(window).width()>=768) {
                if (top>menuTopMargin) {
                    elem.addClass('menu_fixed');
                    elem.css('width',menuWidth+'px');
                } else {
                    elem.removeClass('menu_fixed');
                }
            }
        });
    });
    if ($(window).width()<=768) {
        $('.menu__item_arrow > a').after('<div class="plus" style="rotate(0deg);"></div>');
    }
    $i = 45;
    $('.plus').on('click', function ( e ) {
        e.preventDefault();
        $p = $(this).parent();
        console.log($(this).parent().find('.menu__item_second_level'));
        $p.find('.menu__item_second_level').slideToggle();
        console.log($(this).parent()+' .menu__item_second_level');
        $(this).parent().find('.plus').css('transform','rotate('+$i+'deg)');
        $i = $i+45;
    });
});