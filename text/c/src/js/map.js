ymaps.ready(init);
var myMap;

function init(){     
   myMap = new ymaps.Map("map", {
    center: [55.75527206897546,37.66600949999998],
    zoom: 12
  });

  myMap.behaviors.disable(['scrollZoom']);

  var myPlacemark = new ymaps.Placemark([55.75527206897546,37.66600949999998], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/marker.png',
    iconImageSize: [30, 42],
    iconImageOffset: [0, 0]
  });

  myMap.geoObjects.add(myPlacemark);
}
