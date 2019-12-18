(function ($) {
    $.fn.mySlider1 = function (options) {
        // дефолтные настройки
        var settings = {
            btnNext      : null, // кнопка перемотки к следующему элементу
            btnPrev      : null, // кнопка перемотки к предыдущему элементу
            sliderTimeOut: false,
            slideMargin  : 0
        };
        return this.each(function () {
            if (options) {
                $.extend(settings, options);
            }
            var $this        = $(this); // сохраняем контекст
            var $carousel    = $this.children(':first'); // находим первого потомка в нашем контейнере (.container), т.е. <ul>
            var itemWidth    = $carousel.children(':first').width(); // находим ширину одного элемента внутри нашего контейнера
            var itemsTotal   = $carousel.children().length; // определяем сколько всего элементов у нашей карусели
            var running      = false; // флаг, который хранит информацию о том проигрывается ли анимация на данный момент
            var marginValue  = settings.slideMargin + 30;
            var sliderActive = 1;
            var numberThumb  = 1;

            $carousel.children().each(function (indx) {
                $(this).attr('data-thumb', indx);
            });

            function slide(dir) {
                var direction  = !dir ? -1 : 1; // выбираем направление в зависимости от переданного параметра (влево или вправо)
                var leftIndent = 0;
                if (!running) {
                    running = true; // ставим флажок, что анимация в процессе

                    if (!dir) { // вперед
                        leftIndent    = "-=" + marginValue + "px";
                        var itemFirst = $('.proizv__slideitem').eq(0).clone();
                        itemFirst.appendTo($carousel);
                        if (numberThumb == 3) {
                            numberThumb = 0;
                        } else {
                            numberThumb++;
                        }
                    } else { // если мотаем к предыдущему элементу
                        leftIndent   = "+=" + marginValue + "px";
                        var itemLast = $('.proizv__slideitem').eq(itemsTotal - 1).clone();
                        itemLast.prependTo($carousel);
                        var leftIndent1 = "-=" + marginValue + "px";
                        $carousel.css('margin-left', leftIndent1);
                        if (numberThumb == 0) {
                            numberThumb = 3;
                        } else {
                            numberThumb--;
                        }
                    }


                    $carousel.animate({'marginLeft': leftIndent}, {
                        queue: false, duration: 600, complete: function () {
                            $('.proizv__slideitem .proizv__slidephoto').removeClass('proizv__slidephoto_visible');
                            $('.proizv__thumb').removeClass('proizv__thumb_active');
                            if (!dir) {
                                $('.proizv__slideitem').eq(0).remove();
                                leftIndent = "+=" + marginValue + "px";
                                $carousel.css('margin-left', leftIndent);
                            } else {
                                $('.proizv__slideitem').eq(itemsTotal).remove();
                            }
                            $('.proizv__slideitem').eq(sliderActive).find('.proizv__slidephoto').addClass('proizv__slidephoto_visible');
                            $('.proizv__thumb').eq(numberThumb).addClass('proizv__thumb_active');
                            running = false; // отмечаем, что анимация завершена
                        }
                    });

                }

                return false;
            }

            $(settings.btnNext).on('click', function () {

                return slide(false);
            });

            // назначаем обработчик на событие click для кнопки previous
            $(settings.btnPrev).on('click', function () {
                return slide(true);
            });

            $(window).on('resize', function () {
                if (settings.sliderResponsive) {
                    $carousel.children().css('width', $this.width() + 'px');
                    marginValue = $this.width();
                }
            });

            $('.proizv__thumb').on('click', function () {
                if (!$(this).hasClass('proizv__thumb_active')) {
                    var bigPhoto     = $carousel.children();
                    var thumbId      = $(this).index();
                    var BigSlide     = $('.proizv__slideitem[data-thumb=' + thumbId + ']').index();
                    var bigPhotoSort = $.merge(bigPhoto.slice(BigSlide), bigPhoto.slice(0, BigSlide));
                    $carousel.html(bigPhotoSort);


                    running      = true;
                    leftIndent   = "+=" + marginValue + "px";
                    var itemLast = $('.proizv__slideitem').eq(itemsTotal - 1).clone();
                    itemLast.prependTo($carousel);
                    var leftIndent1 = "-=" + marginValue + "px";
                    $carousel.css('margin-left', leftIndent1);
                    numberThumb = thumbId;

                    $carousel.animate({'marginLeft': leftIndent}, {
                        queue: false, duration: 600, complete: function () {
                            $('.proizv__slideitem .proizv__slidephoto').removeClass('proizv__slidephoto_visible');
                            $('.proizv__thumb').removeClass('proizv__thumb_active');
                            $('.proizv__slideitem').eq(itemsTotal).remove();
                            $('.proizv__slideitem').eq(sliderActive).find('.proizv__slidephoto').addClass('proizv__slidephoto_visible');
                            $('.proizv__thumb').eq(thumbId).addClass('proizv__thumb_active');
                            running = false; // отмечаем, что анимация завершена
                        }
                    });

                }

            });
        });
    };
})(jQuery);

$(function () {
    if ($(window).width() >= 1600) {
        $('.proizv__slider_in').css('margin-left', '-808px');
    } else if ($(window).width() < 768) {
        var galleryWidth = $(window).width() - 30;
        $('.proizv__slideitem').css('width', galleryWidth + 'px');
        $('.proizv__slider_in').css('margin-left', -$(window).width() + 'px');
    } else if ($(window).width() < 1170) {
        var sliderMargin = $('.container').position().left + 15 - $('.proizv__slideitem').width();
        $('.proizv__slider_in').css('margin-left', sliderMargin + 'px');
    }
     else if (($(window).width() > 1200) && ($(window).width() < 1400)){
        var sliderMargin = $('.container').position().left +65 - $('.proizv__slideitem').width();
        $('.proizv__slider_in').css('margin-left', sliderMargin + 'px');
    }
    else{
        var sliderMargin = $('.container').position().left +15 - $('.proizv__slideitem').width();
        $('.proizv__slider_in').css('margin-left', sliderMargin + 'px');
    }
    var slideItemWidth1 = $('.proizv__slideitem').width();
    $('.proizv__slider').mySlider1({
        slideMargin: slideItemWidth1,
        btnNext    : $('.proizv__slider_next'),
        btnPrev    : $('.proizv__slider_prev')
    });
});