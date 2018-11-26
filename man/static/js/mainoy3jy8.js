 $(document).ready(function() {
     $('.slider-for').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true,
         fade: true,
         asNavFor: '.slider-nav'
     });
     $('.slider-nav').slick({
         slidesToShow: 5,
         slidesToScroll: 1,
         asNavFor: '.slider-for',
         dots: false,
         arrows: false,
         focusOnSelect: true
     });
     $('.multiple-items').slick({
         infinite: true,
         arrows: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [{
             breakpoint: 769,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 infinite: true,
             }
         }, {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }]
     });

     window.pp1 = function() {
         $('.popup1').show();
         $('.popups').show();
     }
     window.pp2 = function() {
         $('.popup2').show();
         $('.popups').show();
     }
     $('.popups').hide();
     $('.close').click(function() {
         $('.popup').hide();
         $('.popups').hide();
     });
     ymaps.ready(init);

     function init() {
         // Создание карты.    
         var myMap = new ymaps.Map("map", {
             // Координаты центра карты.
             // Порядок по умолчанию: «широта, долгота».
             // Чтобы не определять координаты центра карты вручную,
             // воспользуйтесь инструментом Определение координат.
             center: [50.450582, 30.471882],
             // Уровень масштабирования. Допустимые значения:
             // от 0 (весь мир) до 19.
             zoom: 17
         });
     }
 });
