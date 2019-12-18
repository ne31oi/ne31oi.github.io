(function ($) {
    $.fn.mySlider = function (options) {
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
            var intID        = null; // ID интервала (нужен для сброса интервала)
            var marginValue  = settings.slideMargin + 30;
            var sliderActive = 1;
            var visibleCount = 2;

            $carousel.children().each(function (indx) {
                $(this).addClass('filter-' + $(this).attr('data-group'));
            });

            function slide(dir) {
                var direction  = !dir ? -1 : 1; // выбираем направление в зависимости от переданного параметра (влево или вправо)
                var leftIndent = 0;
                if (!running) {
                    running = true; // ставим флажок, что анимация в процессе

                    if (!dir) { // вперед
                        leftIndent    = "-=" + marginValue + "px";
                        var itemFirst = $('.gallery__item').eq(0).clone();
                        itemFirst.appendTo($carousel);
                    } else { // если мотаем к предыдущему элементу
                        leftIndent   = "+=" + marginValue + "px";
                        var itemLast = $('.gallery__item').eq(itemsTotal - 1).clone();
                        itemLast.prependTo($carousel);
                        var leftIndent1 = "-=" + marginValue + "px";
                        $carousel.css('margin-left', leftIndent1);
                    }


                    $carousel.animate({'marginLeft': leftIndent}, {
                        queue: false, duration: 600, complete: function () {
                            $('.gallery__item').removeClass('gallery__item_visible');
                            if (!dir) {
                                $('.gallery__item').eq(0).remove();
                                leftIndent = "+=" + marginValue + "px";
                                $carousel.css('margin-left', leftIndent);
                            } else {
                                $('.gallery__item').eq(itemsTotal).remove();
                            }
                            $('.gallery__item').eq(sliderActive).addClass('gallery__item_visible');
                            $('.gallery__item').eq(sliderActive + 1).addClass('gallery__item_visible');

                            var firstElem  = $('.gallery__item').eq($(".gallery__item_visible").eq(0).index() - 1);
                            var FourthElem = $('.gallery__item').eq($(".gallery__item_visible").last().index() + 1);
                            $(".gallery__item_visible .gallery__item_photo img").each(function () {
                                $(this).attr('src', $(this).attr('data-original'));
                            });
                            firstElem.find('.gallery__item_photo img').each(function () {
                                $(this).attr('src', $(this).attr('data-original'));
                            });
                            FourthElem.find('.gallery__item_photo img').each(function () {
                                $(this).attr('src', $(this).attr('data-original'));
                            });

                            var galleryGroup = $('.gallery__item_visible').eq(0).attr('data-group');
                            //alert(Number(galleryGroup)+1);
                            $('.gallery__filteritem').removeClass('gallery__filteritem_active').eq(Number(galleryGroup) - 1).addClass('gallery__filteritem_active');
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

            $('.gallery__filteritem').on('click', function () {
                if (!$(this).hasClass('gallery__filteritem_active')) {
                    var bigPhoto     = $carousel.children();
                    var filterId     = $(this).index() + 1;
                    var BigSlide     = $('.gallery__item[data-group=' + filterId + ']').index();
                    var bigPhotoSort = $.merge(bigPhoto.slice(BigSlide), bigPhoto.slice(0, BigSlide));
                    console.log(bigPhotoSort);
                    $carousel.html(bigPhotoSort);


                    leftIndent   = "+=" + marginValue + "px";
                    var itemLast = $('.gallery__item').eq(itemsTotal - 1).clone();
                    itemLast.prependTo($carousel);
                    var leftIndent1 = "-=" + marginValue + "px";
                    $carousel.css('margin-left', leftIndent1);

                    $carousel.animate({'marginLeft': leftIndent}, {
                        queue: false, duration: 600, complete: function () {
                            $('.gallery__item').removeClass('gallery__item_visible');
                            $('.gallery__item').eq(itemsTotal).remove();

                            $('.gallery__item').eq(sliderActive).addClass('gallery__item_visible');
                            $('.gallery__item').eq(sliderActive + 1).addClass('gallery__item_visible');

                            var firstElem  = $('.gallery__item').eq($(".gallery__item_visible").eq(0).index() - 1);
                            var FourthElem = $('.gallery__item').eq($(".gallery__item_visible").last().index() + 1);
                            $(".gallery__item_visible .gallery__item_photo img").each(function () {
                                $(this).attr('src', $(this).attr('data-original'));
                            });
                            firstElem.find('.gallery__item_photo img').each(function () {
                                $(this).attr('src', $(this).attr('data-original'));
                            });
                            FourthElem.find('.gallery__item_photo img').each(function () {
                                $(this).attr('src', $(this).attr('data-original'));
                            });

                            $('.gallery__filteritem').removeClass('gallery__filteritem_active').eq(filterId - 1).addClass('gallery__filteritem_active');
                            running = false; // отмечаем, что анимация завершена
                        }
                    });

                }

            });
        });
    };
})(jQuery);

$(function () {
    if ($(window).width() > 1600) {
        $('.gallery__slider_in').css('margin-left', '-270px');
    } else if ($(window).width() < 768) {
        var galleryWidth = $(window).width() - 30;
        $('.gallery__item').css('width', galleryWidth + 'px');
        $('.gallery__slider_in').css('margin-left', -$(window).width() + 'px');
    } else if ($(window).width() < 1170) {
        var sliderMargin = $('.container').position().left + 15 - $('.gallery__item').width();
        $('.gallery__slider_in').css('margin-left', sliderMargin + 'px');
    } else {
        var sliderMargin = $('.container').position().left + 15 - $('.gallery__item').width();
        $('.gallery__slider_in').css('margin-left', sliderMargin + 'px');
    }

    var slideItemWidth = $('.gallery__item').width();

    var firstElem  = $('.gallery__item').eq($(".gallery__item_visible").eq(0).index() - 1);
    var FourthElem = $('.gallery__item').eq($(".gallery__item_visible").last().index() + 1);
    $(".gallery__item_visible .gallery__item_photo img").each(function () {
        $(this).attr('src', $(this).attr('data-original'));
    });
    firstElem.find('.gallery__item_photo img').each(function () {
        $(this).attr('src', $(this).attr('data-original'));
    });
    FourthElem.find('.gallery__item_photo img').each(function () {
        $(this).attr('src', $(this).attr('data-original'));
    });

    $('.gallery__slider').mySlider({
        slideMargin: slideItemWidth,
        btnNext    : $('.gallery__slider_next'),
        btnPrev    : $('.gallery__slider_prev')
    });

    /*$('.gallery__item_button').on('click', function(){
     var projectContent = $('#projectCart');
     lightboxShow(projectContent);
     $('.lightbox__content #projectCart').addClass('projectcart__gallery');
     });*/
});


$(function () {
    var galProjects = [
        {
            fullImg : '/images/project1_b.jpg',
            region  : 'g-1Кировская область, Порошино',
            title   : 'Большой дом «под ключ» с двумя спальнями',
            kind    : 'русская рубка',
            material: 'сосна 30-32 см в вершине',
            square  : '247м2',
            garantee: '10 лет на выполненные работы',
            time    : 'сруб – от 3 мес, отделка – от 2 лет',
            project : '3D-эскиз',
            price   : '7 340 000'
        },
        {
            fullImg : '/images/project1_b.jpg',
            region  : 'g-2Кировская область, Порошино',
            title   : 'Большой дом «под ключ» с двумя спальнями',
            kind    : 'русская рубка',
            material: 'сосна 30-32 см в вершине',
            square  : '247м2',
            garantee: '10 лет на выполненные работы',
            time    : 'сруб – от 3 мес, отделка – от 2 лет',
            project : '3D-эскиз',
            price   : '7 340 000'
        },
        {
            fullImg : '/images/project1_b.jpg',
            region  : 'g-3Кировская область, Порошино',
            title   : 'Большой дом «под ключ» с двумя спальнями',
            kind    : 'русская рубка',
            material: 'сосна 30-32 см в вершине',
            square  : '247м2',
            garantee: '10 лет на выполненные работы',
            time    : 'сруб – от 3 мес, отделка – от 2 лет',
            project : '3D-эскиз',
            price   : '7 340 000'
        },
        {
            fullImg : '/images/project1_b.jpg',
            region  : 'g-4Кировская область, Порошино',
            title   : 'Большой дом «под ключ» с двумя спальнями',
            kind    : 'русская рубка',
            material: 'сосна 30-32 см в вершине',
            square  : '247м2',
            garantee: '10 лет на выполненные работы',
            time    : 'сруб – от 3 мес, отделка – от 2 лет',
            project : '3D-эскиз',
            price   : '7 340 000'
        },
        {
            fullImg : '/images/project1_b.jpg',
            region  : 'g-5Кировская область, Порошино',
            title   : 'Большой дом «под ключ» с двумя спальнями',
            kind    : 'русская рубка',
            material: 'сосна 30-32 см в вершине',
            square  : '247м2',
            garantee: '10 лет на выполненные работы',
            time    : 'сруб – от 3 мес, отделка – от 2 лет',
            project : '3D-эскиз',
            price   : '7 340 000'
        },
        {
            fullImg : '/images/project1_b.jpg',
            region  : 'g-6Кировская область, Порошино',
            title   : 'Большой дом «под ключ» с двумя спальнями',
            kind    : 'русская рубка',
            material: 'сосна 30-32 см в вершине',
            square  : '247м2',
            garantee: '10 лет на выполненные работы',
            time    : 'сруб – от 3 мес, отделка – от 2 лет',
            project : '3D-эскиз',
            price   : '7 340 000'
        },
        {
            fullImg : '/images/project1_b.jpg',
            region  : 'g-7Кировская область, Порошино',
            title   : 'Большой дом «под ключ» с двумя спальнями',
            kind    : 'русская рубка',
            material: 'сосна 30-32 см в вершине',
            square  : '247м2',
            garantee: '10 лет на выполненные работы',
            time    : 'сруб – от 3 мес, отделка – от 2 лет',
            project : '3D-эскиз',
            price   : '7 340 000'
        },
        {
            fullImg : '/images/project1_b.jpg',
            region  : 'g-8Кировская область, Порошино',
            title   : 'Большой дом «под ключ» с двумя спальнями',
            kind    : 'русская рубка',
            material: 'сосна 30-32 см в вершине',
            square  : '247м2',
            garantee: '10 лет на выполненные работы',
            time    : 'сруб – от 3 мес, отделка – от 2 лет',
            project : '3D-эскиз',
            price   : '7 340 000'
        },
        {
            fullImg : '/images/project1_b.jpg',
            region  : 'g-9Кировская область, Порошино',
            title   : 'Большой дом «под ключ» с двумя спальнями',
            kind    : 'русская рубка',
            material: 'сосна 30-32 см в вершине',
            square  : '247м2',
            garantee: '10 лет на выполненные работы',
            time    : 'сруб – от 3 мес, отделка – от 2 лет',
            project : '3D-эскиз',
            price   : '7 340 000'
        },
        {
            fullImg : '/images/project1_b.jpg',
            region  : 'g-10Кировская область, Порошино',
            title   : 'Большой дом «под ключ» с двумя спальнями',
            kind    : 'русская рубка',
            material: 'сосна 30-32 см в вершине',
            square  : '247м2',
            garantee: '10 лет на выполненные работы',
            time    : 'сруб – от 3 мес, отделка – от 2 лет',
            project : '3D-эскиз',
            price   : '7 340 000'
        }
    ];

    function loadContentGal(projectId, projectNode) {
        var galBody = galProjects[projectId];
        projectNode.find('.projectcart__photo img').attr('src', galBody.fullImg);

        if (projectId != 0) {
            projectNode.find('.projectcart__photo_unactivebody1 img').attr('src', galProjects[projectId - 1].fullImg);
        } else projectNode.find('.projectcart__photo_unactivebody1 img').attr('src', galProjects[galProjects.length - 1].fullImg);

        if (projectId != (galProjects.length - 1)) {
            projectNode.find('.projectcart__photo_unactivebody2 img').attr('src', galProjects[projectId + 1].fullImg);
        } else projectNode.find('.projectcart__photo_unactivebody2 img').attr('src', galProjects[0].fullImg);

        projectNode.find('.projectcart__region').text(galBody.region);
        projectNode.find('.projectcart__title').text(galBody.title);
        projectNode.find('.projectcart__kind').text(galBody.kind);
        projectNode.find('.projectcart__material').text(galBody.material);
        projectNode.find('.projectcart__square').text(galBody.square);
        projectNode.find('.projectcart__garant').text(galBody.garantee);
        projectNode.find('.projectcart__time').text(galBody.time);
        projectNode.find('.projectcart__project').text(galBody.project);
        projectNode.find('.projectcart__pricein').html(galBody.price + ' <img src="/images/rouble.svg">');
        projectNode.find('.projectform__title').val(galBody.title);
        return projectNode;
    }

    $('.gallery__item_button').on('click', function () {
        var projectId = $(this).parents('.gallery__item').index();
        console.log(projectId);
        var projectContent = $('#projectCart');
        lightboxShow(loadContentGal(projectId, projectContent));
        $('.lightbox__content #projectCart').addClass('projectcart__gallery');

        function projectcartArrowGal(dir) {
            if (dir) {
                if (projectId != (galProjects.length - 1)) {
                    projectId++;
                } else projectId = 0;
            } else {
                if (projectId == 0) {
                    projectId = galProjects.length - 1;
                } else projectId--;
            }
            //lightboxShow(loadContent(projectId,projectContent));
            var otherProject = loadContentGal(projectId, projectContent).clone();
            $('.lightbox__content').html(otherProject).prepend('<div class="lightbox__close"></div>');
            $('.lightbox__content #projectCart').addClass('projectcart__gallery');

            $('.lightbox__close').on('click', function () {
                lightBoxClose();
            });

            $('.projectcart__gallery .projectcart__next').on('click', function () {
                projectcartArrowGal(true);
            });

            $('.projectcart__gallery .projectcart__prev').on('click', function () {
                projectcartArrowGal(false);
            });

        }

        $('.projectcart__gallery .projectcart__next').on('click', function () {
            projectcartArrowGal(true);
        });
        $('.projectcart__gallery .projectcart__prev').on('click', function () {
            projectcartArrowGal(false);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.gallery__slider_next').click();

    $('[data-video]').on('click', function () {
        var src = $(this).attr('data-video');
        if (!src) return;

        var iframe = document.createElement( "iframe" );

        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "" );
        iframe.setAttribute( "src", src +"?rel=0&showinfo=0&autoplay=1" );

        this.innerHTML = "";
        this.appendChild( iframe );
        $(this).addClass('gallery__item-video_active');
        $(this).css({
            'height' : $('.gallery__slider').height()
        });

    });
});
