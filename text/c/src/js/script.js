(function() {
  $('.slider').slick({
    infinite: true,
    speed: 200,
    responsive: true,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    // prevArrow: '<svg class="prev"" style="fill: #fff"><use xlink:href="/img/sprite-svg.svg#back"></use></svg>',
    // nextArrow: '<svg class="next" style="fill: #fff"><use xlink:href="/img/sprite-svg.svg#next"></use></svg>'
    autoplay: true,
    autoplaySpeed: 3000,
  });
})();

(function() {
  $('.slider-stage').slick({
    infinite: true,
    autoplay: true,
    speed: 200,
    responsive: true,
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<svg class="prev"" style="fill: #fff"><use xlink:href="/img/sprite-svg.svg#back"></use></svg>',
    nextArrow: '<svg class="next" style="fill: #fff"><use xlink:href="/img/sprite-svg.svg#next"></use></svg>',
    autoplaySpeed: 3000,

  });
})();

(function() {
  $('.slider-stage-two').slick({
    infinite: true,
    speed: 200,
    responsive: true,
    slidesToShow: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<svg class="prev-two"" style="fill: #fff"><use xlink:href="/img/sprite-svg.svg#back"></use></svg>',
    nextArrow: '<svg class="next-two" style="fill: #fff"><use xlink:href="/img/sprite-svg.svg#next"></use></svg>',
    autoplaySpeed: 3000,

  });
})();

$(document).on('click', '.phone-link', function() {
  $('html, body').animate({ scrollTop: $('#feedback-phone').offset().top }, 1000);
  return false;
});

$(document).on('click', '.first-stage', function() {
  $('html, body').animate({ scrollTop: $('.stage-one').offset().top }, 1000);
  return false;
});

$(document).on('click', '.header__adress', function() {
  $('html, body').animate({ scrollTop: $('.map').offset().top }, 1000);
  return false;
});

$(function() {
  $(".order__form-input").mask("+7(999) 999-99-99");
});
//const axios = require('axios');
function sendMail() {
  var title = "Заказ"
  var msg = document.querySelector('.order__form-input').innerText;
  var params = new URLSearchParams();
  params.append('title', title)
  params.append('msg', msg);
  axios.post('mail.php', params)
  //this.spasibo=true
}
