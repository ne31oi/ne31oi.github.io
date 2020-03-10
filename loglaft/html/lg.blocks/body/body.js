function scrollWidth() {
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    return scrollWidth;
}
$(document).ready(function() {
    $(".fancybox").fancybox();
});

function lightboxShow(lighboxContent) {
    $('body').append("<div class='lightbox__overlay'><div class='lightbox__wrap'><div class='lightbox__content'><div class='lightbox__close'></div></div></div></div>");
    var lightBoxContent = lighboxContent.clone();
    $('.lightbox__content').html(lightBoxContent).prepend('<div class="lightbox__close"></div>');
    $('body').css('overflow', 'hidden').css('padding-right', scrollWidth() + 'px');
    $('.lightbox__overlay, .lightbox__wrap').fadeIn();

    $('.lightbox__content').on('click', function(event) {
        event.stopPropagation();
    });

    $('.lightbox__close').on('click', function() {
        lightBoxClose();
    });
    $('.lightbox__overlay').on('click', function() {
        lightBoxClose();
    });
};

function lightBoxClose() {
    $('.lightbox__overlay, .lightbox__wrap').fadeOut();
    $('body').css('overflow', 'auto').css('padding-right', '0px');
    $('.lightbox__overlay, .lightbox__wrap').remove();
};
$(function() {
    //var testLightbox = $('#modalform');
    //lightboxShow(testLightbox);
    //alert(location.href);
    if (location.search == '?message=ok') {
        var messLightbox = $('#message_ok');
        lightboxShow(messLightbox);
    }
    if (location.search == '?message=spam') {
        var messLightbox = $('#message_spam');
        lightboxShow(messLightbox);
    }
    $('#grid_gallery__btn').on('click',
        function() {
            $('.grid_gallery__item--hide').show();

            function getCoords(elem) {
                var box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                };
            }
            $('html,body').stop().animate({ scrollTop: getCoords($('.grid_gallery__item--hide')[0]).top - 200 }, 1000);
            $('#grid_gallery__btn').hide();
        }
    );
});