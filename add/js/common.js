$(document).ready(function() {
    $("header").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});
$('.align-items-center.slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
});
$('#problems-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    arrows: true,
    dots: true,
    responsive: [{
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false, dots: true }
    }, {
        breakpoint: 769,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
    }, {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
    }]
});
$(document).ready(function() {
    $(window).scroll(function() { if ($(this).scrollTop() > 100) { $('.scrollToTop').fadeIn(); } else { $('.scrollToTop').fadeOut(); } });
    $('.scrollToTop').click(function() { $('html, body').animate({ scrollTop: 0 }, 800); return false; });
});
if ($(window).width() < 760) { $('.header-sign').appendTo('ul.navbar-nav.mr-auto'); }
// $('button.btn.login').click(function(){
// $('.login-popup').fadeIn('1000');
// $('.log-pop-con').animate({ top: "10%"} , 1000);
// });

// $('.overlay').click(function(){
// $('.login-popup').fadeOut('1000');
// });


$(function() {
    setTimeout(function() {
        document.getElementById('videoTab1').play();
    }, 100);
    var firstVideo = $('#home').find('video');
    firstVideo.attr('controls', 'controls');
    firstVideo.get(0).play();

    $('.nav-tabs').find('a').on('click', function() {
        var tabItem = $(this).attr('href');
        var itemVideo = $(tabItem).find('video').get(0);

        itemVideo.currentTime = 0;
        itemVideo.play();
    });

});


if ($(window).width() <= '768') {

    $('.tab-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.nav.nav-tabs'
    });
    $('.nav.nav-tabs').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.tab-content',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.nav.nav-tabs').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

        var tabItem = $('.nav.nav-tabs').find('[data-slick-index="' + nextSlide + '"]').find('a');
        var tabItemHref = tabItem.attr('href');
        var itemVideo = $(tabItemHref).find('video').get(0);

        $('.slick-slide .nav-link.active').removeClass('active');
        tabItem.addClass('active');
        itemVideo.currentTime = 0;
        itemVideo.play();
    });

}


// $('a#home-tab').click(function(){
// 	$('div#myTabContent div#home').html('<span class="tabs-name">Ad on app launch </span><iframe src="01_Ads on startup_svg.html" width="340" height="674"></iframe>');
// });


// $('a#profile-tab').click(function(){
// $('div#myTabContent div#profile').html('<span class="tabs-name">Ad on user’s return back to app</span><iframe src="02_Ads for returning users_svg.html" width="340" height="674"></iframe>');
// $('div#myTabContent div#contact').html('');
// $('div#myTabContent div#four').html('');
// $('div#myTabContent div#five').html('');
// $('div#myTabContent div#home').html('');
// });

// $('a#contact-tab').click(function(){
// $('div#myTabContent div#contact').html('<span class="tabs-name">Ad on hardware "back" button press</span><iframe src="03_Ads on back button_svg.html" width="340" height="674"></iframe>');
// $('div#myTabContent div#profile').html('');
// $('div#myTabContent div#four').html('');
// $('div#myTabContent div#five').html('');
// $('div#myTabContent div#home').html('');
// });

// $('a#contact-tabss').click(function(){
// $('div#myTabContent div#four').html('<span class="tabs-name">Ad on any set time period</span><iframe src="04_Ads on timer_svg.html" width="340" height="674"></iframe>');
// $('div#myTabContent div#profile').html('');
// $('div#myTabContent div#contact').html('');
// $('div#myTabContent div#five').html('');
// $('div#myTabContent div#home').html('');
// });

// $('a#contact-tabb').click(function(){
// $('div#myTabContent div#five').html('<span class="tabs-name">Ad on device unlock if app is open</span><iframe src="05_Ads on unlock_svg.html" width="340" height="674"></iframe>');
// $('div#myTabContent div#profile').html('');
// $('div#myTabContent div#contact').html('');
// $('div#myTabContent div#four').html('');
// $('div#myTabContent div#home').html('');
// });