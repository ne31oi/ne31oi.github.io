function isMobile() {
    return $(window).width() < 768;
}
$(document).ready(function () {
    $(".fancybox-video").on('click', function () {
        if (isMobile()) {
            $.fancybox('<iframe  id="fancybox-frame" width="' + $(window).width() + '" height="' + $(window).width() / 1.55 + '" src="http://www.youtube.com/embed/' + $(this).data('href') + '?autoplay=1" frameborder="" hspace="0" allowfullscreen=""></iframe>', {padding: 2});
        }
        else {

            $.fancybox('<iframe id="fancybox-frame" width="700" height="450" frameborder="" hspace="0" src="http://www.youtube.com/embed/' + $(this).data('href') + '?autoplay=1"></iframe>');
        }
    });
});
