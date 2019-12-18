$(function() {
    // $('.photos__imgs').slick({
    //     lazyLoad : 'ondemand',
    //     arrows : false,
    //     autoplay: true,
    //     draggable: false,
    //     pauseOnHover: false,
    //     pauseOnFocus: false
    // });
    $('.jsSlickSlider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        dots: false,
        asNavFor: '.jsSlickSliderThumb',
        prevArrow: '<div class="photos__arrow photos__arrow_prev"></div>',
        nextArrow: '<div class="photos__arrow photos__arrow_next"></div>'
    });

    $('.jsSlickSliderThumb').slick({
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        asNavFor: '.jsSlickSlider',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    $('.photos__button').on('click', function(){
        var otherContent = $('#photos-modal-form');
        lightboxShow(otherContent);
    });
});

