//заглушка
var mainArray = [{
    'name': 'Name',
    'city': 'city',
    'worktime': 'Пн - пт',
    'addess': 'addess',
    'phone': 'phone',
    'note': 'note',
    'geo': {
        'latitude': 55.751574,
        'longitude': 37.573856
    },
    'type': 'pvz',
    'code': 1
}, {
    'name': 'Name',
    'city': 'city',
    'worktime': 'Пн - пт',
    'addess': 'addess',
    'phone': 'phone',
    'note': 'note',
    'geo': {
        'latitude': 55.7,
        'longitude': 37.57
    },
    'type': 'parcellocker',
    'code': 1
}];

//функция на клик кнопки в балуне
function ymaps_balloon_click(code) {
    console.log(code);
}
ymaps.ready(function() {
    var myMap = new ymaps.Map('yandexMap', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        );

    mainArray.forEach(function(item) {
        var MyBalloonContentLayoutClass = ymaps.templateLayoutFactory.createClass(
            '<div class="ymaps_balloon"><h3 class="ymaps_balloon_name">{{ properties.name }}</h3>' +
            '<p class="ymaps_balloon_city">{{ properties.city }}</p>' +
            '<p class="ymaps_balloon_worktime">{{ properties.worktime }}</p>' +
            '<p class="ymaps_balloon_address">{{ properties.addess }}</p>' +
            '<p class="ymaps_balloon_phone">{{ properties.phone }}</p>' +
            '<p class="ymaps_balloon_note">{{ properties.note }}</p>' +
            '<div class="ymaps_balloon_btn" onclick="ymaps_balloon_click({{ properties.code }})">Выбрать</div></div>'
        );
        myMap.geoObjects.add(new ymaps.Placemark([item.geo.latitude, item.geo.longitude], {
            name: item.name,
            city: item.city,
            worktime: item.worktime,
            addess: item.addess,
            phone: item.phone,
            note: item.note,
            code: item.code,
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'static/img/' + item.type + '.svg',
            balloonContentLayout: MyBalloonContentLayoutClass
            //iconImageSize: [30, 42]
        }))
    });
});