$(function() {

    var myMap;
    var myPlacemark=[];
    function init(){
        myMap = new ymaps.Map("yaMapPopup", {
                center: [56.772274120100846,43.994597189941295],
                zoom: 6,
                controls: ['zoomControl']
            }
        );
        myPlacemark.push (new ymaps.Placemark([58.425631, 49.782504], {
            hintContent: 'г. Киров, Кирово-Чепецкий р-н, д.Глушиха'
        }, {
            preset: 'islands#darkGreenDotIcon'
        }));
        myPlacemark.push (new ymaps.Placemark([55.80714764292461,37.38254427246084], {
            hintContent: 'г. Москва, МКАД, 65-й км, внешняя сторона (ТЦ Синдика)'
        }, {
            preset: 'islands#darkGreenDotIcon'
        }));

        myPlacemark.forEach(function (item) {
            myMap.geoObjects.add( item );
        });

    }

    $('.footer__maplink').on('click', function() {
        var mapContent = $('#mapContent');
        var itemContentId = mapContent.find('#yaMap').attr('id')+'Popup';
        lightboxShow(mapContent);
        $('.lightbox__content #yaMap').attr('id',itemContentId);
        ymaps.ready(init);
    });
});