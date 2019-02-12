$(function() {

    var screenWidth = screen.width; //ширина экрана


    /*
     *  Tabs
     */

    $('.tab-link').click(function(e) {
        try {
            e.preventDefault();
            let tabLink = $(this).attr('href');
            $(this).parent('li').addClass('active').siblings('li').removeClass('active');
            $(tabLink).fadeIn().addClass('active').siblings('.tab').hide().removeClass('active');

            if (tabLink == '#all') {
                window.myMap.setBounds(window.myMap.geoObjects.getBounds());
            } else {

                var a = $(tabLink).find(".points-section__addr").find('span');
                var coordes = [],
                    boundss = []
                for (var i = 0; i < a.length; i++) {
                    var adrs = a[i].innerHTML;

                    ymaps.geocode(adrs, {
                        results: 1
                    }).then(function(res) {
                        var firstGeoObject = res.geoObjects.get(0),
                            coords = firstGeoObject.geometry.getCoordinates(),
                            bounds = firstGeoObject.properties.get('boundedBy');
                        coordes.push(coords)
                        bounds.forEach(function(ff) {
                            boundss.push(ff)
                        })
                    });

                }
                setTimeout(function() {
                    try {
                        window.myMap.setBounds(boundss, { checkZoomRange: true });
                        //map.setBounds(bounds,);
                        console.log(coordes)
                    } catch (e) {}
                }, 400)
            }

        } catch (e) {}
    });

    /*
     *  Menu
     */

    $('.menu__toggle').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.menu__list').slideToggle();
        e.stopPropagation();
    });

    $('.menu').click(function(e) {
        e.stopPropagation();
    });

    $('body').on('click', function() {
        $('.menu__toggle').toggleClass('open');
        $('.menu__list').slideUp();
    });

    $('.menu__list>li').hover(
        function() {
            $(this).find('a').addClass('open').siblings('.second-menu').show();
        },
        function() {
            $(this).find('a').removeClass('open').siblings('.second-menu').hide();
        },
        200
    );

    /*
     *  Mobile-menu
     */

    $('.headerbar-mobile__toggle').click(function() {
        $('.mobile-menu').addClass('open');
        $('body').append('<div class="overlay-menu" id="js-overlay-menu"></div>');
    });
    $('.mobile-menu__close').click(function() {
        $('.mobile-menu').removeClass('open');
        $('#js-overlay-menu').remove();
    });
    $('.mobile-menu__toggle').click(function() {
        $(this).toggleClass('open').siblings('.mobile-menu__dropdown').slideToggle();
    });

    /*
     *  Banner
     */

    $('.banner__carousel').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    /*
     *  Modal
     */

    $('.js-modal-show').on('click', function() {
        var currentModal = $(this).attr('href');
        $(currentModal).fadeIn(500);
        $('body').addClass('modal-open').append('<div class="overlay" id="js-overlay"></div>');
    });
    $('.js-modal-close').on('click', function(e) {
        e.preventDefault();
        $('.js-modal').fadeOut(100);
        $('#js-overlay').remove();
        $('body').removeClass('modal-open');
    });
    $('body').on('click', '#js-overlay', function() {
        $('.js-modal').fadeOut(100);
        $('#js-overlay').remove();
        $('body').removeClass('modal-open');
    });

    /*
     *  Скрыть / Показать пароль
     */

    $('body').on('click', '.pass-hide', function() {
        $(this).toggleClass('visible');
        let inputPass = $(this).siblings('.password');
        let type = $(inputPass).attr('type') === "text" ? "password" : 'text';
        $(inputPass).prop('type', type);
    });

    $('body').on('click', '.reg-pass-hide', function() {
        let btn = $(this).parents('.reg__section').find('.reg-pass-hide');
        btn.toggleClass('visible');
        let inputPass = $('.reg-password');
        let type = $(inputPass).attr('type') === "text" ? "password" : 'text';
        $(inputPass).prop('type', type);
    });

    /*
     *  Плавный скрол
     */

    $('.js-anchor').click(function() {
        let elementClick = $(this).attr('href');
        let destination = $(elementClick).offset().top;
        $('html,body').animate({ scrollTop: destination }, 1100);
        return false;
    });
    /*
     *  Кнопка наверх
     */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    /*
     *   Маска телефона
     */

    $('.phone').mask('+7 (999) 999-99-99');

    /*
     *  Личный кабинет
     */


    if (screenWidth > 991) { // Desktope
        $('.private__user').click(function() {
            $(this).toggleClass('open').siblings('.private__hidden').slideToggle();
        });
    } else { // Mobile
        $('.private-mobile__toggle').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('open').siblings('.private__info').slideToggle();
        });
    }

    /*
     *  Search-mobile
     */

    $('.search-select__input').click(function() {
        $(this).toggleClass('open');
        $(this).siblings('.search-select__list').slideToggle();
    });
    $('.search-select__list li').click(function() {
        let $this = $(this);
        let valueInput = $this.attr('data-value');
        let textInput = $this.attr('data-text');
        let placeholderInput = $this.attr('data-placeholder');
        $this.parent().siblings('.search-select__input').html(textInput).removeClass('open');
        $this.parent().siblings('input').val(valueInput);
        $this.parents('.search-select').siblings('.search-mobile__input').attr('placeholder', placeholderInput);
        $this.parent().slideUp();
    });
    /*
     *  Filter 
     */

    $('.filter__more').click(function(e) {
        e.preventDefault();
        $(this).siblings('.filter__hidden').slideToggle();
    });
    /*
     *  Filter sliders
     */

    $('#slider-range-price').slider({
        range: true,
        min: 0,
        max: 100000,
        values: [2000, 75000],
        slide: function(event, ui) {
            $('#min-price').val(ui.values[0] + ' руб.');
            $('#max-price').val(ui.values[1] + ' руб.');
        }
    });

    $('#min-price').val($('#slider-range-price').slider('values', 0) + ' руб.');
    $('#max-price').val($('#slider-range-price').slider('values', 1) + ' руб.');

    $('#slider-range-days').slider({
        range: true,
        min: 0,
        max: 75,
        values: [0, 75],
        slide: function(event, ui) {
            $('#min-days').val(ui.values[0] + ' дн.');
            $('#max-days').val(ui.values[1] + ' дн.');
        }
    });

    $('#min-days').val($('#slider-range-days').slider('values', 0) + ' дн.');
    $('#max-days').val($('#slider-range-days').slider('values', 1) + ' дн.');

    $('#slider-range-pieces').slider({
        range: true,
        min: 0,
        max: 5000,
        values: [1, 3250],
        slide: function(event, ui) {
            $('#min-pieces').val(ui.values[0] + ' шт.');
            $('#max-pieces').val(ui.values[1] + ' шт.');
        }
    });

    $('#min-pieces').val($('#slider-range-pieces').slider('values', 0) + ' шт.');
    $('#max-pieces').val($('#slider-range-pieces').slider('values', 1) + ' шт.');

    /*
     *  Плюс - минус
     */

    (function quantityModal() {

        $('.modal__qnt .quantity-arrow-minus').click(function() {
            var $quantityNum = $(this).siblings('.quantity-num');
            if (parseInt($quantityNum.val()) > 1) {
                $quantityNum.val((parseInt($quantityNum.val()) - 1) + ' шт.');
            }
        });

        $('.modal__qnt .quantity-arrow-plus').click(function() {
            var $quantityNum = $(this).siblings('.quantity-num');
            $quantityNum.val((parseInt($quantityNum.val()) + 1) + ' шт.');
        });

    })();

    (function quantityBasket() {

        $('.basket-table__qnt .quantity-arrow-minus').click(function() {
            var $quantityNum = $(this).siblings('.quantity-num');
            if (parseInt($quantityNum.val()) > 1) {
                $quantityNum.val((parseInt($quantityNum.val()) - 1));
            }
        });

        $('.basket-table__qnt .quantity-arrow-plus').click(function() {
            var $quantityNum = $(this).siblings('.quantity-num');
            $quantityNum.val((parseInt($quantityNum.val()) + 1));
        });

    })();

    /*
     *  Форма поиска
     */

    $('.filter__toggle').click(function() {
        $(this).siblings('.filter').slideToggle();
    });

    /*
     *  Галерея товара
     */

    $('.gallery__thumbs a').hover(function() {
        let link = $(this).attr('data-target');
        $(link).show().addClass('active').siblings('.gallery__img').hide().removeClass('active');
    }, 200);

    /*
     *  Галерея бренда
     */

    $('.modal__thumbs a').hover(function() {
        let link = $(this).attr('data-target');
        $(this).addClass('active').siblings('a').removeClass('active');
        $(link).show().addClass('active').siblings('.modal__img').hide().removeClass('active');
    }, 200);

    /*
     *  Отключение Fancybox в описании бренда на мобилах
     */

    if (screenWidth < 568) {
        $('.modal__thumbs a').removeAttr('data-fancybox').unbind();
        $('.modal__thumbs a').click(function(e) {
            e.preventDefault();
            let link = $(this).attr('data-target');
            $(this).addClass('active').siblings('a').removeClass('active');
            $(link).show().addClass('active').siblings('.modal__img').hide().removeClass('active');
        });
    }

    /*
     *  Результаты поиска
     */

    $('.result-item__show').click(function(e) {
        e.preventDefault();
        if (!$(this).hasClass('open')) {
            $(this).html('Свернуть').addClass('open').siblings('.result-item__hidden').slideDown().parents('.result-item').addClass('open');
        } else {
            $(this).html('Показать ещё').removeClass('open').siblings('.result-item__hidden').slideUp().parents('.result-item').removeClass('open');
        }
    });

    /*
     *  Выделение всех чекбоксов
     */

    (function checkAll() {
        let $checks = $('.basket-table__checkbox input[type="checkbox"]');

        $('#checkall').on('change', function() {
            let $this = $(this);
            $checks.prop('checked', $this.prop('checked'));
        });
    })();

    /*
     *  Удаление из корзины
     */

    $('.basket-del').click(function(e) {
        e.preventDefault();
        $(this).parents('.basket-table__row').remove();
    });

    /*
     *  Меню в корзине
     */

    $('.basket-table__menu .menu').click(function(e) {
        e.preventDefault();
        $(this).siblings('.basket-table__hid').fadeIn();
    });

    $('.basket-table__menu .close').click(function(e) {
        e.preventDefault();
        $(this).parents('.basket-table__hid').fadeOut();
    });

    /*
     *  Меню в заказах
     */

    $('.orders-table__item .menu').click(function(e) {
        e.preventDefault();
        $(this).siblings('.orders-table__hid').fadeIn();
    });

    $('.orders-table__item .close').click(function(e) {
        e.preventDefault();
        $(this).parents('.orders-table__hid').fadeOut();
    });

    /*
     *  Отслеживание изменения класса у элемента
     */

    (function() {
        var originalAddClassMethod = jQuery.fn.addClass;
        var originalRemoveClassMethod = jQuery.fn.removeClass;
        jQuery.fn.addClass = function() {
            var result = originalAddClassMethod.apply(this, arguments);
            jQuery(this).trigger('classChanged');
            return result;
        };
        jQuery.fn.removeClass = function() {
            var result = originalRemoveClassMethod.apply(this, arguments);
            jQuery(this).trigger('classChanged');
            return result;
        };
    })();

    /*
     *  Валидация формы регистрации
     */

    $("#js-registr-form").validate({
        rules: {
            reg_inn: {
                required: true
            },
            reg_org: {
                required: true
            },
            reg_city: {
                required: true
            },
            reg_point: {
                required: true
            },
            reg_last_name: {
                required: true
            },
            reg_first_name: {
                required: true
            },
            reg__tel: {
                required: true
            },
            reg_email: {
                required: true,
                email: true
            },
            reg_pass: {
                required: true
            },
            reg_repeat_pass: {
                required: true,
                equalTo: '#reg-pass'
            }
        },
        messages: {
            reg_inn: {
                required: "Это поле обязательно для заполнения"
            },
            reg_org: {
                required: "Это поле обязательно для заполнения"
            },
            reg_city: {
                required: "Это поле обязательно для заполнения"
            },
            reg_point: {
                required: "Это поле обязательно для заполнения"
            },
            reg_last_name: {
                required: "Это поле обязательно для заполнения"
            },
            reg_first_name: {
                required: "Это поле обязательно для заполнения"
            },
            reg__tel: {
                required: "Это поле обязательно для заполнения"
            },
            reg_email: {
                required: "Это поле обязательно для заполнения",
                email: "Введите адрес электронной почты"
            },
            reg_pass: {
                required: "Это поле обязательно для заполнения"
            },
            reg_repeat_pass: {
                required: "Это поле обязательно для заполнения",
                equalTo: 'Повторите пароль'
            }
        }
    });

    /*
     *  Отображение успешной валидации полей регистрации
     */

    $('#js-registr-form input').bind('classChanged', function() {
        if ($(this).hasClass('valid')) {
            $(this).siblings('div.valid').fadeIn();
        } else {
            $(this).siblings('div.valid').fadeOut();
        }
    });

    /*
     *  Popup форме регистрации
     */

    if (screenWidth > 991) {
        $('#reg-org').hover(
            function() {
                $(this).siblings('.reg__popup').fadeIn(200);
            },
            function() {
                $(this).siblings('.reg__popup').fadeOut(200);
            },
            200
        );
    }

    /*
     *  Calendar
     */

    if ($('#calendar').length > 0) {
        $('#calendar').dateRangePicker({
            autoClose: true,
            format: 'DD-MM-YYYY',
            separator: ' - ',
            startOfWeek: 'monday'
        });
    }

    /*
     *  Fancybox
     */

    $('[data-fancybox]').fancybox({
        loop: true
    });

    /*
     * Возврат товара
     */

    $('.returns__select-item').click(function(e) {
        e.preventDefault();
        let link = $(this).attr('href');
        $(this).addClass('active').siblings('.returns__select-item').removeClass('active');
        $(link).fadeIn().siblings('form').hide();
    });

    /*
     * Возврат товара, добавление фото (десктоп)
     */

    $('.returns__file input[type=file]').change(function() {
        let $this = $(this);
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                let image = $this.parents('.returns__file').find('.returns__img');
                image.fadeIn().find('img').attr('src', e.target.result);
            };
            reader.readAsDataURL(this.files[0]);
        }
    });

    /*
     * Возврат товара, добавление фото (мобил)
     */

    $('.img-file input[type=file]').change(function() {
        let fileName = $(this).val().replace(/.*\\/, "");
        $(this).parents('.returns__file-mob').find('.returns__file-name span').html(fileName);
    });

    /*
     *  Загрузка файла
     */

    var countFile = 1;

    $('.feedback__files').on('change', '.form-file input[type=file]', function() {
        $(this).parents('.form-file').find('label').hide();
        let fileName = $(this).val().replace(/.*\\/, "");
        $(this).parents('.form-file').find('.filename').find('span').html(fileName);
        $(this).parents('.form-file').find('.filename').fadeIn().addClass('open');
        $(this).parents('.form-file').after('<div class="form-file"><div class="filename"><div class="icon"><svg><use xlink:href="img/icons/sprite.svg#icon-pdf"></use></svg></div><span> </span><button class="file-remove" type="button"><svg><use xlink:href="img/icons/sprite.svg#icon-close"></use></svg></button></div><label for="file' + countFile + '"><input id="file' + countFile + '" type="file" name="file' + countFile + '"><div class="icon"><svg><use xlink:href="img/icons/sprite.svg#icon-plus"></use></svg></div><span>Добавить файл</span></label></div>');
        countFile++;
    });

    $('.feedback__files').on('click', '.file-remove', function() {
        $(this).parents('.form-file').remove();
    });

    /*
     * Меню доставки (мобил)
     */

    if (screenWidth < 568) {
        $('.delivery__nav a.current').click(function(e) {
            e.preventDefault();
            $(this).siblings('a').slideToggle();
        });
    }

    /*
     *  Tooltip
     */

    $('.tooltip').webuiPopover();

    /*
     *  Дополнительные параметры поиска по марке
     */

    if (screenWidth < 414) {
        $('.selection__toggle').click(function() {
            $(this).siblings('.form-group').slideToggle();
        });
    }

    /*
     *  Меню поиска запчастей по марке
     */

    $('.parts-menu .toggle').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('open').siblings('.parts-second').slideToggle(300);
    });

    /*
     *  Выбор города на странице контактов
     */

    if (screenWidth < 992) {
        $('.points__menu li').click(function() {
            let $this = $(this);
            let parentUl = $this.parents('ul');

            if (!parentUl.hasClass('open')) {
                console.log('Yes');
                $this.siblings('li').slideDown();
                parentUl.addClass('open');
            } else {
                console.log('No');
                $this.siblings('li').slideUp();
                parentUl.removeClass('open');
            }
        });
    }
    ymaps.ready(init);

    function init() {
        // Создание карты.    
        document.getElementById('ymaps').style.opacity = 0;
        window.myMap = new ymaps.Map("ymaps", {
            center: [55.76, 37.64],
            zoom: 7
        });
        var a = $('.points__tab');
        var b = [];
        for (var i = 0; i < a.length; i++) {
            if (a[i].id !== 'all') {
                var x = $('#' + a[i].id).find(".points-section__addr").find("span");
                for (var j = 0; j < x.length; j++) {
                    b.push(x[j].innerHTML);
                }
            }
        }
        for (var i = 0; i < b.length; i++) {
            var adrs = b[i];
            ymaps.geocode(adrs, {
                results: 1
            }).then(function(res) {
                var firstGeoObject = res.geoObjects.get(0),
                    coords = firstGeoObject.geometry.getCoordinates(),
                    bounds = firstGeoObject.properties.get('boundedBy');

                firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
                // Получаем строку с адресом и выводим в иконке геообъекта.
                firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
                firstGeoObject.id = 0;

                // Добавляем первый найденный геообъект на карту.
                myMap.geoObjects.add(firstGeoObject);
                // Масштабируем карту на область видимости геообъекта.
                myMap.setBounds(bounds, {
                    // Проверяем наличие тайлов на данном масштабе.
                    checkZoomRange: true
                });
            });
        }
        var r = false

        function bb() {
            if (window.myMap.geoObjects.getBounds()) {
                window.myMap.setBounds(window.myMap.geoObjects.getBounds());
                r = true;
                document.getElementById('ymaps').style.opacity = 1;
            } else {
                setTimeout(function() {
                    bb();
                }, 500)
            }
        }
        bb();

    }


});