$(function () {
  $('.header-bg__bottom').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top + "px"
    }, {duration: 1000});
  });


  // START direct
  function parseGetParams(letiable) {
    let getURl    = window.location.search.substring(1); //Строка со всеми GET-параметрами
    let letiables = getURl.split("&"); //Получаем массив параметров
    for (let i = 0; i < letiables.length; i++) {
      let pair = letiables[i].split("="); // Получаем массив, где pair[0] - ключ, pair[1] - его значение и т.д.
      if (pair[0] === letiable) { // Если в передаваемой с директа переменной имеется данный ключ, возвращаем его, иначе - false
        return pair[1];
      }
    }
    return (false);
  }

  let utmletiable = parseGetParams('utm_term');
  // END direct
  utmletiable = decodeURIComponent(utmletiable);
  utmletiable = utmletiable.replace(/[_]/ig, ' ');

  let directWords = [
    'деревянные дома из лафета',
    'дом из лафета под ключ',
    'дом из лафета под ключ цена',
    'дом из лафета цена',
    'дома из лафета',
    'дома из лафета кедра',
    'дома из лафета кедра большого диаметра',
    'дома из лафета проекты и цены',
    'дома из лафета ручной рубки',
    'дома из норвежского лафета цены',
    'дома из сухого лафета',
    'дома лафета норвежская рубка',
    'дома норвежский лафет проекты',
    'дома норвежской рубки',
    'норвежские дома из лафета',
    'одноэтажный дом из лафета',
    'рубка домов лафета',
    'сруб из лафета',
    'сруб из лафета цена',
    'срубы домов из лафета',
    'строительство домов из лафета'
  ];

  let isUtm;
  for (let i = 0; i < directWords.length - 1; i++) {
    isUtm = (utmletiable === directWords[i]);
    if (utmletiable === directWords[i]) break;
  }

  // let imgHead;
  // let headerBg = $('.header-bg');
  // let header   = $('.header');
  // let i        = 0;
  //
  // if (isUtm) {
  //   imgHead = [
  //     '/images/slide2.jpg',
  //     '/images/slide1.jpg',
  //     '/images/slide3.jpg',
  //   ];
  // } else {
  //   imgHead = [
  //     '/images/slide1.jpg',
  //     '/images/slide2.jpg',
  //     '/images/slide3.jpg',
  //   ];
  // }
  // headerBg.css({'background': 'url(' + imgHead[i] + ')'});
  //
  // function cssHead() {
  //   if (i === 0) {
  //     // headerBg.css('background', 'none');
  //     header.animate({'background': 'none'}, 600, function () {
  //       header.css('background', 'none');
  //     });
  //     headerBg.animate({'opacity': '0'}, 600, function () {
  //       headerBg.css({'background': 'url(' + imgHead[i] + ')'});
  //       i = 1;
  //
  //     });
  //     headerBg.animate({'opacity': '1'}, 600);
  //
  //   } else if (i === 1) {
  //     header.animate({'background': 'none'}, 600, function () {
  //       header.css('background', 'none');
  //     });
  //     headerBg.animate({'opacity': '0'}, 600, function () {
  //       headerBg.css({'background': 'url(' + imgHead[i] + ')'});
  //       i = 2;
  //     });
  //     headerBg.animate({'opacity': '1.0'}, 600);
  //   } else if (i === 2) {
  //     header.animate({'background': 'none'}, 600, function () {
  //       header.css('background', 'none');
  //     });
  //     headerBg.animate({'opacity': '0'}, 600, function () {
  //       headerBg.css({'background': 'url(' + imgHead[i] + ')'});
  //       i = 0;
  //     });
  //     headerBg.animate({'opacity': '1.0'}, 600);
  //   }
  // }
  //
  // setInterval(cssHead, 4000); //4000
});
