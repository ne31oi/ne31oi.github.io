$('document').ready(function () {

    var timeout_link; // задержка при вводе в поле

    if (device.tablet() || device.mobile() || $(window).width() < 1023) {
        set_height();

        $(window).resize(set_height());

        $('.mobile-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false
        });

        setTimeout(function () {
            $('.promo__slider_img').animate({'opacity': 1}, 500)
        }, 1500)
    }

    $('.lending__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        speed: 500,
        dots: true,
        fade: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                adaptiveHeight: true,
                draggable: true
            }
        }]

    });

    // let img = [];
    // $('.promo__slider_img .promo__img img').each(function () {
    //     let nav_el = {};
    //     nav_el['img'] = $(this).attr('src');
    //     nav_el['text'] = $(this).data('text');
    //     img.push(nav_el);
    // });
    //
    // $('.promo__slider_img').on('init', function (slick) {
    //     if (!$('.promo__nav_wrap').length) {
    //         img.forEach(function (item, key) {
    //             let html = '<img src="' + item['img'] + '" alt /> <span>' + item['text'] + '</span>';
    //
    //             $('.promo__slider_img .slick-dots li').eq(key).find('button').html(html);
    //         })
    //     } else {
    //         $('.promo__slider_img .slick-dots li').each(function () {
    //             $(this).find('button').html('');
    //         })
    //     }
    // });

    $('.promo__slider_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        touchMove: false,
        speed: 700,
        fade: false,
        dots: false,
        asNavFor: '.promo__slider_btn, .promo__slider_content',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    draggable: false,
                    touchMove: false,
                    dots: true
                }
            },
            {
                breakpoint: 765,
                settings: {
                    dots: true
                }
            }
        ]
    });

    $('.promo__slider_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        touchMove: false,
        speed: 700,
        dots: true,
        asNavFor: '.promo__slider_btn, .promo__slider_img',
        adaptiveHeight: false,
        fade: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    draggable: false,
                    touchMove: false
                }
            }
        ]
    });

    $('.promo__slider_btn').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        touchMove: false,
        speed: 700,
        dots: false,
        asNavFor: '.promo__slider_content, .promo__slider_img',
        adaptiveHeight: false,
        fade: true,
        cssEase: 'linear'
    });

    setTimeout(function () {
        $('.promo__slider_content .slick-active .promo__content').animate({'opacity': 1}, 300)
    }, 500);

    // $('.promo__slider_content').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    //     $('.promo__slider_content .slick-active .promo__content').addClass('fadeInRight animated');
    // });
    // $('.promo__slider_content').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //      $('.promo__slider_content .slick-slide[data-slick-index = ' + currentSlide +'] .promo__content').addClass('fadeOutLeft animated');
    //      $('.promo__slider_content .slick-slide[data-slick-index = ' + nextSlide +'] .promo__content').addClass('fadeInRight animated');
    // });


    $('.promo__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.promo__slider_img, .promo__slider_content',
        dots: false,
        speed: 700,
        //infinite: false,
        draggable: false,
        focusOnSelect: true,
        touchMove: false,
        responsive: [
            {
                breakpoint: 1921,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    draggable: false,
                    touchMove: false
                }
            }
        ]
    });

    function set_height() {
        let height = $(window).height();
        $('.promo').css('height', height);
        //$('.header__menu').css('height', height);
    }

    $('.js--toggle-menu').on('click', function () {
        if ($('.header').hasClass('visible')) {
            hide_menu();
        } else {
            show_menu();
        }
        return false;
    });

    function show_menu() {
        $('.header').addClass('visible');
        $('#mCSB_1_container')/*.css('height', $('.header__menu').height())*/.addClass('fixed');
        $('#mCSB_1_scrollbar_vertical').addClass('hidden-block');
        //$('.header__menu').css('height', window.innerHeight);
        $('.header__menu').stop().css({'transform': 'translateY(0)'});
        setTimeout(function () {
            $('.header__nav').stop().animate({'opacity': '1'}, 200);
            $('.social').stop().animate({'opacity': '1'}, 200);
            $('body').addClass('fixed');
        }, 200)
    }

    function hide_menu() {
        $('.header__nav').stop().animate({'opacity': '0'}, 100);
        $('.social').stop().animate({'opacity': '0'}, 100);
        setTimeout(function () {
            $('.header__menu').stop().css({'transform': 'translateY(-100%)'});
            $('.header').removeClass('visible');
        }, 300)
        setTimeout(function () {
            $('#mCSB_1_container').removeClass('fixed');
            $('#mCSB_1_scrollbar_vertical').removeClass('hidden-block')
            $('body').removeClass('fixed');
        }, 600)
    }

    $('.header__menu').on('click', function (e) {
        if ($(e.target).hasClass('js--close-menu')) {
            hide_menu();
        }
    });

    // фильтр новостей
    $('.js--change-filter').on('input', function () {
        let input = $(this);

        if (input.closest('div').hasClass('filter__params')) {
            let index = input.closest('label').index();
            $('.header__news .label-radio').eq(index).find('input').prop('checked', 'checked')
        }

        filter_refresh();
        return false
    });

    function filter_refresh() {
        let form = $('.filter');
        let data = form.serialize();
        let type = form.attr('method');
        let action = form.attr('action');
        $.ajax({
            type: type,
            url: action,
            data: data,
            success: function (data) {
                $('.load-container').empty().html(data);
            }
        });
    }

    // фильтр новостй в шаке
    $('.js--change-params').on('input', function () {
        let input = $(this);
        let index = input.closest('label').index();
        $('.filter .filter__params .label-radio').eq(index).find('input').prop('checked', 'checked')

        filter_refresh();
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    //$('.inp-phone').mask('+9(999)999-99-99');

    $(document).on('click', '.js--form-submit', function () {

        var btn = $(this);
        var form = btn.closest('.main-form');
        var errors = false;

        $(form).find('.required').each(function () {
            var inp = $(this);
            var val = inp.prop('value');
            if (val == '') {
                inp.addClass('error');
                errors = true;
            } else {
                if (inp.hasClass('inp-mail')) {
                    if (validateEmail(val) == false) {
                        inp.addClass('error');
                        errors = true;
                    }
                }
            }
        });

        if (errors == false) {
            var button_value = btn.text();
            btn.text('Отправляем...');

            var method = form.attr('method');
            var data = form.serialize();
            var action = form.attr('action');

            $.ajax({
                type: method,
                url: action,
                data: data,
                success: function (data) {
                    form.find('.inp').each(function () {
                        $(this).prop('value', '')
                    });
                    btn.text(button_value);
                    if (form.find('input[name="backurl"]').length) {
                        window.location = $('input[name="backurl"]').val();
                    } else {
                        form.addClass('hidden-block').next('.form__sended').removeClass('hidden-block')
                    }
                },
                error: function (data) {
                    btn.text('Ошибка');
                    setTimeout(function () {
                        btn.text(button_value);
                    }, 2000);
                }
            });
        }

        return false;
    });

    $(document).on('focus', '.inp', function () {
        $(this).removeClass('error');
    });

    if ($('#map').length) {
        var styledMapType = new google.maps.StyledMapType(
            [
                {
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "elementType": "labels",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 15
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 5
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "weight": 0.5
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                }
            ],
            {name: 'Styled Map'});

        var map;

        function initMap() {
            var myLatlng = {lat: 51.508867, lng: -0.194990};

            map = new google.maps.Map(document.getElementById('map'), {
                center: myLatlng,
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: false,
                disableDefaultUI: true,
                zoom: 17
            });

            var geocoder = new google.maps.Geocoder();
            geocodeAddress(geocoder, map);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map
            });

            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');

            function geocodeAddress(geocoder, resultsMap) {
                var address = document.getElementById('map').getAttribute('data-location');
                geocoder.geocode({'address': address}, function (results, status) {
                    if (status === 'OK') {
                        resultsMap.setCenter(results[0].geometry.location);
                        var marker = new google.maps.Marker({
                            map: resultsMap,
                            position: results[0].geometry.location
                        });
                    } /*else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }*/
                });
            }
        }

        initMap()
    }

    $('.js--play-video').on('click', function () {
        var $video = $('#video'),
            src = $video.attr('src');
        $video.attr('src', src + '&autoplay=1');
        setTimeout(function () {
            $('.author__poster').fadeOut(200);
        }, 500)
        return false;
    });

    //if (!(device.mobile() || device.tablet())) {
    // $('.page-wrap').mCustomScrollbar({
    //     scrollInertia: 500,
    //     //snapAmount: 400,
    //     snapOffset: 200
    // });

    //new SimpleBar($('body')[0]);
    //}

    $('.js--toggle-search').on('click', function () {
        let btn = $(this);
        if (!device.mobile()) {
            if (!btn.closest('.header__search').hasClass('open')) {
                btn.closest('.header__search').addClass('open');
                btn.closest('.header__search').find('.inp').focus();
                return false;
            }
        }
    });

    $('body').on('click', function (e) {

        if (!$(e.target).parents().hasClass('header__search')) {
            $('.header__search').removeClass('open');
        }
    });


        $('.js--close-cookies').on('click', function () {
            $('.cookies').addClass('hidden-block');
            document.cookie = "cookies_agree=true";
            return false;
        });

})
;




