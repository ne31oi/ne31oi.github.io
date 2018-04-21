var $ = jQuery;

var swiper = new Swiper('.swiper-head', {
  loop: true,
  speed: 1000,
  autoplay: {
        delay: 7000,
    },
  pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  navigation: {
          nextEl: '.sbn1',
          prevEl: '.sbp1',
      },
      
});

var swiper = new Swiper('.swiper-phones-1', {
  loop: true,
  slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    speed: 1000,
  navigation: {
          nextEl: '.sbn2',
          prevEl: '.sbp2',
      },
    breakpoints: {
      1275: {
          spaceBetween: 30,
      },

      965: {
          slidesPerView: 3,
          slidesPerGroup: 3,
      },

      780: {
          slidesPerView: 2,
          slidesPerGroup: 2,
      },

      490: {
          slidesPerView: 1,
          slidesPerGroup: 1,
      },
  },
      
});



var swiper = new Swiper('.swiper-devices', {
  loop: true,
  slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    speed: 1000,
  navigation: {
          nextEl: '.sbnd',
          prevEl: '.sbpd',
      },
    breakpoints: {
      1275: {
          spaceBetween: 30,
      },

      965: {
          slidesPerView: 3,
          slidesPerGroup: 3,
      },

      780: {
          slidesPerView: 2,
          slidesPerGroup: 2,
      },

      490: {
          slidesPerView: 1,
          slidesPerGroup: 1,
      },
  },
      
});

var swiper = new Swiper('.swiper-phones-2', {
  loop: true,
  slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    speed: 1000,
    breakpoints: {
      1275: {
        slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
      },

      780: {
        slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
      },

      490: {
          slidesPerView: 1,
          slidesPerGroup: 1,
      },
  },
  navigation: {
        nextEl: '.sbn3',
        prevEl: '.sbp3',
    },
      
});

var swiper = new Swiper('.swiper-news', {
  slidesPerView: 3,
    spaceBetween: 40,
    simulateTouch: false,
    breakpoints: {

      965: {
          simulateTouch: true,
          freeMode: true,
          slidesPerView: 'auto',
          spaceBetween: 30,
      },
  },
});


var swiper = new Swiper('.swiper-shop', {
  loop: true,
  speed: 1000,
  autoplay: {
        delay: 5000,
    },
  pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  navigation: {
          nextEl: '.sbn1',
          prevEl: '.sbp1',
      },
      
});


var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  slideToClickedSlide: true,
  slidesPerView: 4,
  direction: 'vertical' ,
  breakpoints: {

      750: {
          direction: 'horizontal',
          slidesPerView: 1,
          loop: true,
          navigation: {
            nextEl: '.gn',
            prevEl: '.gp',
        },
      },
  },
});

var swiper = new Swiper('.swiper-news-page', {
      slidesPerView: 4,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next-text',
        prevEl: '.swiper-button-prev-text',
      },
      breakpoints: {
        750: {
            slidesPerView: 2,
        },
    },
    });


var swiper = new Swiper('.swiper-news-one-page', {
      slidesPerView: 2,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next-text',
        prevEl: '.swiper-button-prev-text',
      },
      breakpoints: {
        750: {
            slidesPerView: 1,
        },
    },
    });



  var galleryTopImage = new Swiper('.gallery-top-image', {
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next-image',
          prevEl: '.swiper-button-prev-image',
        },
        loop: true,
        loopedSlides: 10, 
        slidesPerView: 'auto',
        grabCursor: true, 
      });

  var galleryThumbsImage = new Swiper('.gallery-thumbs-image', {
    spaceBetween: 2,
    
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    // centeredSlides: true,
    loop: true,
    loopedSlides: 10, 
    grabCursor: true, 
    slideToClickedSlide: true
  });


$('.gallery-top-image .swiper-slide').hover(function () {
  galleryTopImage.controller.control = galleryThumbsImage;
  galleryThumbsImage.controller.control = galleryTopImage;
});

$('#myAffix').affix({
    offset: {
      top: 48,
    }
})



$('.gallery-thumbs .swiper-slide').click(function(){
  var img = $(this).css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');
  $('.gallery-top img').attr('src',img);
});

// $('.menu-item').hover(function() {
//   $(this).find('.drop').css('display','block');
// });

if ($(window).width() > 965) {

   $('.menu-item > span').click(function(){
      var target = $(this).parent().find('.drop');
      $('.desktop-menu .drop').each(function(){
        if ($(this)[0] != target[0]) {
          $(this).hide();
        }
        else {
          $(this).toggle();
        }
      });
  
  // $('.menu-item').click(function(){      
  //   $('.drop').css('display','none');       
  //     $(this).find('.drop').css('display','block');
  });

  $('.drop').mouseenter(function(){             
      $(this).css('display','block');
  });

  $('.menu-row').mouseleave(function(){             
      $(this).find('.drop').css('display','none');
  });

  $('.mobile-menu').click(function(){             
      $(this).css('display','block');
  });

}


if ($(window).width() < 965) {

   $('.menu-item > span').click(function(){
      $(this).parent().find('.drop').toggle();
      if ($(this).parent().children('span.icon').hasClass('fa-angle-down')) {
        $(this).parent().children('span.icon').removeClass('fa-angle-down').addClass('fa-angle-up');
      }
      else {
        $(this).parent().children('span.icon').removeClass('fa-angle-up').addClass('fa-angle-down');
      }
  
  // $('.menu-item').click(function(){      
  //   $('.drop').css('display','none');       
  //     $(this).find('.drop').css('display','block');

  });

   $('.menu-col').click(function(){
      $(this).find('ul').toggle();
      if ($(this).find('span.icon').hasClass('fa-angle-down')) {
        $(this).find('span.icon').removeClass('fa-angle-down').addClass('fa-angle-up');
      }
      else {
        $(this).find('span.icon').removeClass('fa-angle-up').addClass('fa-angle-down');
      }

  // $('.menu-col').click(function(){      
  //   $('.menu-col ul').css('display','none');       
  //     $(this).find('ul').css('display','block');
  });

   $('.mobile-menu').click(function(){
    $('.menu-row .desktop-menu').toggleClass('open');
    $(this).toggleClass('open');
    if (!$(this).hasClass('open')) {
      $('.menu-row .menu-item .drop').hide();
      $('.menu-col ul').hide();
      $('.desktop-menu .icon.fa-angle-up').each(function(){
        $(this).removeClass('fa-angle-up').addClass('fa-angle-down');
      });
    }


  // $('.mobile-menu').click(function(){      
  //   $('.menu-row .desktop-menu').toggleClass('open');    
  //   $('.mobile-menu').toggleClass('open');    
  });
}

if ($('.menu-row').hasClass('affix')) {
      $('.search-modal').addClass('not-top');
  }

$(window).scroll(function(){
  if ($('.menu-row').hasClass('affix')) {
      $('.search-modal').addClass('not-top');
  }


  if ($('.menu-row').hasClass('affix-top')) {
      $('.search-modal').removeClass('not-top');
  }
});

$('.video1').click(function(){      
    $('#video1').css('display','block');   
    $('body').css('overflow','hidden'); 
});

$(window).click(function() {
   if (event.target == $('#video1')[0]) {
        $('#video1').css('display','none');
        $('body').css('overflow','auto');  
    }
})

$('.video2').click(function(){      
    $('#video2').css('display','block');   
    $('body').css('overflow','hidden'); 
});

$(window).click(function() {
   if (event.target == $('#video2')[0]) {
        $('#video2').css('display','none');  
        $('body').css('overflow','auto');
    }
})

$('.menu-row .menu-item').click(function(){      
    $('#search').removeClass('open');
        $('body').removeClass('open'); 
});

$('.search').click(function(){      
    $('#search').toggleClass('open');   
    $('body').toggleClass('open'); 
});

$(window).click(function() {
   if (event.target == $('#search')[0]) {
        $('#search').removeClass('open');
        $('body').removeClass('open');  
    }
})

// $('.close').click(function(){      
//    $('.modal').css('display','none');   
//    $('body').css('overflow','auto'); 
// });


$('.color').click(function(){
  $(this).parent().find('.color').removeClass('active');
  $(this).addClass('active');
});


$('.lenguage').click(function(){
  $('.lenguage-drop').toggleClass('active');
});


$('.head-row-left a').click(function(){
  $('a').removeClass('active');
  $(this).addClass('active');
});

$('.sub .buttons-container .button').click(function(){
  $('.button').removeClass('active');
  $(this).addClass('active');
});

$('.vacancies .buttons-container .button').click(function(){
  $('.button').removeClass('active');
  $(this).addClass('active');
});

$('.language').click(function(){
  $('.language-drop').toggleClass('active');
});


$('.language-drop a').click(function(){
  $('.language-drop').removeClass('active');
  var value = $(this).find('span').text();
    var input = $('.language .text');
    input.text(value);
    return false;
});



$(function() {
  $('.main-block').on('keydown', '.lebels', function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||(/65|67|86|88/.test(e.keyCode)&&(e.ctrlKey===true||e.metaKey===true))&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
})

$('.dropdowns .head').click(function(){
  $(this).parents('.dropdowns').find('.content').slideToggle( "slow");
  $(this).find('span').toggleClass('rotate');
});


$('.category-table .fa-angle-double-down').click(function(){
  $('.setting .main-block').delay(1000).slideDown( "slow");
  $('.category-table .content').removeClass('full');

});

$('.category-table .fa-angle-double-up').click(function(){
  $('.setting .main-block').slideUp( "slow");
  $('.category-table .content').addClass('full');
});

$('.category-table .setting').click(function(){
  if ($(window).width() < 750) {
    $('.setting .main-block').slideToggle( "slow");
    $('.category-table .mobile').toggleClass('rotate');
  }
});

$('.sort').click(function(){
  $('.sort-menu').slideToggle( "fast");
})

$('.sort-menu a').click(function(){
  var value = $(this).text();
  $('.sort').text(value).append('<span class="fa fa-angle-down"></span>');
})

$('.head-block .button').click(function(){
  $('.phone-info').toggleClass('compare');
  $('.check-blocks').toggleClass('compare');
});

$('.memory-button').click(function(){
  $('.memory-button').removeClass('active');
  $(this).addClass('active');
});

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
}


$('.tabs .buttons-container .button').click(function(){
  $('.tabs .buttons-container .button').removeClass('active');
  $(this).addClass('active');
});

$('.tabs .buttons .button').click(function(){
  $('.tabs .buttons .button').removeClass('active');
  $(this).addClass('active');
});


$('.show-hint').mouseover(function(){
  $('.hint').css('display','block');
});

$('.hint-drop').mouseleave(function(){
  $('.hint').css('display','none');
});


$(window).ready(function(){
  $('.tabs .tab').css('display','none');
  $('.tabs .tab.first').css('display','block');
});

$('.product-info-price .block-price').click(function(){
  $('.product-info-price .block-price').removeClass('active');
  $(this).addClass('active');
  $('.hint-drop').removeClass('active');
  $(this).parent().find('.hint-drop').addClass('active');
});

$('.mobile-tab').click(function(){
  $(this).toggleClass('active');
  $(this).next().slideToggle();
});

$('.button.mobile').click(function(){
  $(this).parent().css('height','auto');
  $(this).css('display','none');
});




$('.shop-category .category-table .categories .phone-info .check .checkbox').click(function(){
  var img = $(this).parents('.phone-info').find('.phone-info-content').find("img").attr("src");
  // if (!$('.shop-category .category-table .categories .phone-info .check .checkbox.pc1').is(':checked') ){ 
 //        $('.head-block .check-blocks .checked.c1').addClass('free');
  //  $('.head-block .check-blocks .checked.c1').find('img').attr("src", '');
  //  $(this).removeClass('pc1');
 //    }

  // if (!$('.shop-category .category-table .categories .phone-info .check .checkbox.pc2').is(':checked') ){ 
 //        $('.head-block .check-blocks .checked.c2').addClass('free');
  //  $('.head-block .check-blocks .checked.c2').find('img').attr("src", '');
  //  $(this).removeClass('pc2');
 //    }

 //    if (!$('.shop-category .category-table .categories .phone-info .check .checkbox.pc3').is(':checked') ){ 
 //        $('.head-block .check-blocks .checked.c3').addClass('free');
  //  $('.head-block .check-blocks .checked.c3').find('img').attr("src", '');
  //  $(this).removeClass('pc3');
 //    }  

 //    if (!$('.shop-category .category-table .categories .phone-info .check .checkbox.pc4').is(':checked') ){ 
 //        $('.head-block .check-blocks .checked.c4').addClass('free');
  //  $('.head-block .check-blocks .checked.c4').find('img').attr("src", '');
  //  $(this).removeClass('pc4');
 //    }
  
  if ($('.shop-category .category-table .categories .phone-info .check .checkbox').is(':checked') ) {

    
    if (!$('.phone-info .check .checkbox').hasClass('pc1')) {
      $(this).addClass('pc1');
      $(this).parent().css('pointer-events','none');
      $('.check-blocks .checked.free img').first().attr("src", img);
      $('.check-blocks .checked.free').first().removeClass('free');
      return
    }

    if ($('.phone-info .check .checkbox').hasClass('pc3')) {
      $(this).addClass('pc4');
      $(this).parent().css('pointer-events','none');
      $('.check-blocks .checked.free img').first().attr("src", img);
      $('.check-blocks .checked.free').first().removeClass('free'); 
      return
    }

    if ($('.phone-info .check .checkbox').hasClass('pc2')) {
      $(this).addClass('pc3');
      $(this).parent().css('pointer-events','none');
      $('.check-blocks .checked.free img').first().attr("src", img);
      $('.check-blocks .checked.free').first().removeClass('free');
      return
    }

    if ($('.phone-info .check .checkbox').hasClass('pc1')) {
      $(this).addClass('pc2');
      $(this).parent().css('pointer-events','none');
      $('.check-blocks .checked.free img').first().attr("src", img);
      $('.check-blocks .checked.free').first().removeClass('free');
      return
    } 

    
    
  }  
});

$('body').click(function(){
  if ($('.phone-info .check .checkbox').hasClass('pc1') && $('.phone-info .check .checkbox').hasClass('pc2') && $('.phone-info .check .checkbox').hasClass('pc3') && $('.phone-info .check .checkbox').hasClass('pc4') ) {
    $('.shop-category .category-table .categories .phone-info').removeClass('compare'); 
    return
  }
})


  

$('.check-blocks .checked.c1 .close-checked').click(function(){
  
  $('.shop-category .category-table .categories .phone-info .check .checkbox.pc1').prop('checked', false);
  $('.shop-category .category-table .categories .phone-info').addClass('compare');  
  $('.shop-category .category-table .categories .phone-info .check .checkbox.pc1').parent().css('pointer-events','visible');
  $('.shop-category .category-table .categories .phone-info .check .checkbox').removeClass('pc1');
  $(this).parent().addClass('free');
  $(this).parent().find('img').attr("src", '');
  return

  
})

$('.check-blocks .checked.c2 .close-checked').click(function(){
  $('.shop-category .category-table .categories .phone-info .check .checkbox.pc2').prop('checked', false);
  $('.shop-category .category-table .categories .phone-info').addClass('compare');
  $('.shop-category .category-table .categories .phone-info .check .checkbox.pc2').parent().css('pointer-events','visible');
  $('.shop-category .category-table .categories .phone-info .check .checkbox').removeClass('pc2');
  $(this).parent().addClass('free');
  $(this).parent().find('img').attr("src", '');
  return
})

$('.check-blocks .checked.c3 .close-checked').click(function(){
  $('.shop-category .category-table .categories .phone-info .check .checkbox.pc3').prop('checked', false);
  $('.shop-category .category-table .categories .phone-info').addClass('compare');
  $('.shop-category .category-table .categories .phone-info .check .checkbox.pc3').parent().css('pointer-events','visible');
  $('.shop-category .category-table .categories .phone-info .check .checkbox').removeClass('pc3');
  $(this).parent().addClass('free');
  $(this).parent().find('img').attr("src", '');
  return
})

$('.check-blocks .checked.c4 .close-checked').click(function(){
  $('.shop-category .category-table .categories .phone-info .check .checkbox.pc4').prop('checked', false);
  $('.shop-category .category-table .categories .phone-info').addClass('compare');
  $('.shop-category .category-table .categories .phone-info .check .checkbox.pc4').parent().css('pointer-events','visible');
  $('.shop-category .category-table .categories .phone-info .check .checkbox').removeClass('pc4');
  $(this).parent().addClass('free');
  $(this).parent().find('img').attr("src", '');
  return
})

$('.card .card-head').click(function(){

  if ($(this).parent().hasClass('open')) {
    $(this).parent().find('.content').slideUp();
    $(this).parent().removeClass('open');
    return
  }

  if (!$(this).parent().hasClass('open')) {
    $('.content').slideUp();
    $('.card').removeClass('open');
    $(this).parent().find('.content').slideDown();
    $(this).parent().addClass('open');
    return
  }

  


});




if ($(window).width() > 750) {

  $('#phone-image').click(function(){    
      var img = $(this).attr("src"); 
      $('#open-photo').css('display','block');   
      $('body').css('overflow','hidden');
      $('#img01').attr('src', img); 
  });

}

if ($(window).width() <= 750) {

  $('.gallery-thumbs .swiper-slide').click(function(){    
      var img = $(this).css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');
      $('#open-photo').css('display','block');   
      $('body').css('overflow','hidden');
      $('#img01').attr('src', img); 
  });

}

  $('.gallery-top-image .swiper-slide').click(function(){    
      var img = $(this).css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');
      $('#open-photo').css('display','block');   
      $('body').css('overflow','hidden');
      $('#img01').attr('src', img); 
  });

  $('#open-photo').click(function() {
     // if (event.target == $('#open-photo')[0]) {
          $('#open-photo').css('display','none');
          $('body').css('overflow','auto');  
      // }
  })


// $( window ).resize(function() {
//   if ($(window).width() <= 800) {
//     location.reload();
//   }
// });

$(document).ready(function()
{
  $(".select").click(function(e)
    {
    $(this).children(".options").children(".option").toggleClass("shown");
    $(this).children(".options").toggleClass("shown");
      $(this).toggleClass("open");
    });
  
  $(".option").click(function()
    {
      $(this).parents(".select").find('.selected').html($(this).html());
    });

  // $('.swiper-news-page').css('width','calc(100% - 3px)');

});


$('.head-row-left.collapsible a.active').click(function(){
  $(this).parent().click();
  return false;
});
$('.head-row-left.collapsible').click(function(){
  var links = $(this).find('a:not(.active)');
  links.each(function(){
    if ($(this).css('display') == 'none') {
      $(this).css('display', 'block');
    }
    else {
      $(this).css('display', 'none');
    }
  })
});

$('#news-2018').click(function(){
  $('.news-block').removeClass('active');
  $('.news-2018').addClass('active');
});

$('#news-2017').click(function(){
  $('.news-block').removeClass('active');
  $('.news-2017').addClass('active');
});

$('#news-2016').click(function(){
  $('.news-block').removeClass('active');
  $('.news-2016').addClass('active');
});

$('#news-2015').click(function(){
  $('.news-block').removeClass('active');
  $('.news-2015').addClass('active');
});

$('#news-2014').click(function(){
  $('.news-block').removeClass('active');
  $('.news-2014').addClass('active');
});

$('#news-2013').click(function(){
  $('.news-block').removeClass('active');
  $('.news-2013').addClass('active');
});

$('#news-2012').click(function(){
  $('.news-block').removeClass('active');
  $('.news-2012').addClass('active');
});

$('#news-2011').click(function(){
  $('.news-block').removeClass('active');
  $('.news-2011').addClass('active');
});

$('#news-2010').click(function(){
  $('.news-block').removeClass('active');
  $('.news-2010').addClass('active');
});

$('#news-2009').click(function(){
  $('.news-block').removeClass('active');
  $('.news-2009').addClass('active');
})

$('.shop-cart .row .fa-times').click(function(){
    $(this).parents('.row').remove();
});

$('.contul-meu .tab .row .fa-times').click(function(){
    $(this).parents('.row').remove();
});

$('.shop-cart .row .col-5 .fa-plus').click(function(){
  var price = $(this).parents('.row').find('.col-4').text();
  var howMany = $(this).parent().find('.number').text();
  howMany = parseFloat(howMany) + 1;
  $(this).parent().find('.number').text(howMany);

  $(this).parents('.row').find('.col-6').text(howMany * parseFloat(price) + ' lei');

});

$('.shop-cart .row .col-5 .fa-minus').click(function(){
  var price = $(this).parents('.row').find('.col-4').text();
  var howMany = $(this).parent().find('.number').text();
  howMany = parseFloat(howMany) - 1;
 
  if (howMany < 0) {
    howMany = 0;
  } 

  $(this).parent().find('.number').text(howMany);
  $(this).parents('.row').find('.col-6').text(howMany * parseFloat(price) + ' lei');
});

$('.one-of input[type="checkbox"]').on('change', function() {
   $('.one-of input[type="checkbox"]').not(this).prop('checked', false);
   $('.one-of input[type="checkbox"]').parent().parent().removeClass('active');
   $(this).parent().parent().addClass('active');
});

$('.one-of-2 input[type="checkbox"]').on('change', function() {
   $('.one-of-2 input[type="checkbox"]').not(this).prop('checked', false);
   $('.one-of-2 input[type="checkbox"]').parent().parent().removeClass('active');
   $(this).parent().parent().addClass('active');
});

$('.refresh-online .left-part .form  input[type="checkbox"]').on('change', function() {
   $('.refresh-online .left-part .form input[type="checkbox"]').parent().parent().find('.button').toggleClass('clicable');
   $(this).parent().parent().addClass('active');
});

$('.websms-block  input[type="checkbox"]').on('change', function() {
   $('.websms-block  input[type="checkbox"]').parent().parent().find('.button').toggleClass('clicable');
   $(this).parent().parent().addClass('active');
});

$(document).ready(function(){
    $('.shop-checkout #c3').change(function(){
        if(this.checked)
            $('.shop-checkout .second-form').css('display','none');
        else
            $('.shop-checkout .second-form').css('display','block');

    });
});

// $(document).ready(function(){
//     $('.refresh-online').each(function(){  

//       var highestBox = 0;
//       $('.part', this).each(function(){
//         if($(this).height() > highestBox) {
//           highestBox = $(this).height(); 
//         }
      
//       });  
//       $('.part',this).height(highestBox);
                    
//     }); 

// });

$(document).ready(function(){
    $('.shop-compare .right-part .bottom').each(function(){  

      var highestBox = 0;
      $('.big', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
      $('.big', '.shop-compare .bottom').height(highestBox);
                    
    }); 

});


$( window ).resize(function() {
    $('.shop-compare .right-part .bottom').each(function(){  

      var highestBox = 0;
      $('.big', this).each(function(){
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
      $('.big', '.shop-compare .bottom').height(highestBox);
                    
    }); 

});

$(document).ready(function(){
    $('.refresh-online .text').each(function(){  

      var text = 0;
      text = $(this).width();  
      $(this).parent().find(".hint").css('margin-left',text);
                    
    }); 

});

// $( window ).resize(function() {
//   $('.refresh-online .text').each(function(){  

//       var text = 0;
//       text = $(this).width();  
//       $(this).parent().find(".hint").css('margin-left',text);
                    
//     }); 
// });

$('.refresh-online .fa-info-circle').hover(
  function(){
    $(this).parent().find(".hint").css('display','block')
  },  function(){
    $(this).parent().find(".hint").css('display','none')
  }
);

$(document).ready(function(){
    $('.payment-processing .text').each(function(){  

      var text = 0;
      text = $(this).width();  
      $(this).parent().find(".hint").css('margin-left',text);
                    
    }); 

    

});

// String.prototype.toDateFormat = function () {
//     return this.replace(/[^0-9]/g, "").substr(0, 7).split("").reduce(cardFormat, "");
//     function cardFormat(str, l, i) {
//         return str + ((!i || (i % 2)) ? "" : " / ") + l;
//     }
// };
    
$(document).ready(function(){
    $(".input.cart-date").keyup(function (e) {
      var value = $(this).val();
      if (/^[0-9]{2}$/.test(value)) {
        $(this).val(value.concat(' / '));
        return false
      }

    });

    $(".input.cart-date").keydown(function (e) {

      if ((e.which == 8)  && ($('.input.cart-date').val().slice(1,2) == false )){
        $(this).val('');
        return false
      }

      if ((e.which == 8)  && ($('.input.cart-date').val().slice(5,6) == false )){
        $(this).val($('.input.cart-date').val().slice(0,1));
        return false
      }

      
    });
});

String.prototype.toCardFormat = function () {
    return this.replace(/[^0-9]/g, "").substr(0, 16).split("").reduce(cardFormat, "");
    function cardFormat(str, l, i) {
        return str + ((!i || (i % 4)) ? "" : " ") + l;
    }
};
    
$(document).ready(function(){
    $(".input.card").keyup(function () {
        $(this).val($(this).val().toCardFormat());
    });
});

$('.input.card').keyup(function(){
  var cart = $('.input.card').val();

  six = cart.slice(0,7);
  four = cart.slice(0,4);
  two = cart.slice(0,2);
  one = cart.slice(0,1);

  var maestro = [ "5018", "5020", "5038", "5612", "5893", "6304", "6759", "6761", "6762", "6363", "0604", "6390" ];
  var visae = [ "4026", "4405", "4508", "4844", "4913", "4917" ];



  if (one == 4) {
    $(this).parent().find('.card-logo').addClass('visa');
  }

  else{
    $(this).parent().find('.card-logo').removeClass('visa');
  }

  if ( (50 <= two) && (two <= 55) ) {
    $(this).parent().find('.card-logo').addClass('master-card');
  }
 
  else{
    $(this).parent().find('.card-logo').removeClass('master-card');
  }

  if ( (34 == two) || (two == 37) ) {
    $(this).parent().find('.card-logo').addClass('amex');
  }
 
  else{
    $(this).parent().find('.card-logo').removeClass('amex');
  }


  for(var i= 0, l = maestro.length; i< l; i++){

    if ( four == maestro[i] ) {
      $(this).parent().find('.card-logo').addClass('maestro');
      $(this).parent().find('.card-logo').removeClass('master-card');
      return
    }
   
    else{
      $(this).parent().find('.card-logo').removeClass('maestro');
    }


  }

  for(var i= 0, l = visae.length; i< l; i++){

    if ( (four == visae[i]) || (six == "4175 00")  ) {
      $(this).parent().find('.card-logo').addClass('visae');
      $(this).parent().find('.card-logo').removeClass('visa');
      return
    }
   
    else{
      $(this).parent().find('.card-logo').removeClass('visae');
    }


  }

  if ( (cart.length > 0) && (cart.length < 19)) { 
    $(this).addClass('error');
    $(this).removeClass('good');
    return false
  }

  if ( cart.length == 19) { 
    $(this).addClass('good');
    $(this).removeClass('error');
    return false
  }

  else{
    $(this).removeClass('good');
    $(this).removeClass('error');
    return false
  }

});

$(".payment-processing .input.name").keyup(function (e) {
  var name = $('.payment-processing .input.name').val().trim().split(" ").length; 
  var empty = $('.payment-processing .input.name').val().length; 

 

 

  if ( (name >= 2)) { 
    $('.payment-processing .input.name').removeClass('error');
    $('.payment-processing .input.name').addClass('good');
    return false
  }

  if ( empty == 0) { 
      $('.payment-processing .input.name').removeClass('good');
      $('.payment-processing .input.name').removeClass('error');
      return false
  }

  if ( (name = 1)) { 
    $('.payment-processing .input.name').addClass('error');
    $('.payment-processing .input.name').removeClass('good');
    return false
  }

});

$(".payment-processing .input.cart-date").keyup(function (e) {
  var cart = $('.input.cart-date').val();
  first = cart.slice(0,2);
  last = cart.slice(5,7);


  if (cart.length === 0 ) {
      $('.payment-processing .input.cart-date').removeClass('good');
      $('.payment-processing .input.cart-date').removeClass('error');
      return false
    }

  if (( first < 13) && ( last > 17) ) { 
    $('.payment-processing .input.cart-date').addClass('good');
    $('.payment-processing .input.cart-date').removeClass('error');
    return false
  }

  if (( first >= 13) || ( last <= 17) ) { 
    $('.payment-processing .input.cart-date').removeClass('good');
    $('.payment-processing .input.cart-date').addClass('error');
    return false
  }



});

$(".payment-processing .cvc .input").keyup(function (e) {
  var cvc = $('.payment-processing .cvc .input').val().length; 

  if ( (cvc > 0) && (cvc < 3)) { 
    $('.payment-processing .cvc .input').addClass('error');
    $('.payment-processing .cvc .input').removeClass('good');
    return false
  }

  if ( cvc == 3) { 
    $('.payment-processing .cvc .input').addClass('good');
    $('.payment-processing .cvc .input').removeClass('error');
    return false
  }

  else{
    $('.payment-processing .cvc .input').removeClass('good');
    $('.payment-processing .cvc .input').removeClass('error');
    return false
  }

});



$('.payment-processing .fa-info-circle').hover(
  function(){
    $(this).parent().find(".hint").css('display','block')
  },  function(){
    $(this).parent().find(".hint").css('display','none')
  }
);



$(document).ready(function () {
  $(".numbers").keypress(function (e) {
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
    }

  });

  $(".refresh-online .phone").keyup(function (e) {
    if ( ( $(this).val().slice(0,1) <= 5) || ( $(this).val().slice(0,1) >= 8) ){
        $(this).val(''); 
      }


    var phone = $('.refresh-online .phone').val().length; 

    

    if ( (phone > 0) && (phone < 8)) { 
      $('.refresh-online .phone').addClass('error');
      $('.refresh-online .phone').removeClass('good');
      return false
    }

    if ( phone == 8) { 
      $('.refresh-online .phone').addClass('good');
      $('.refresh-online .phone').removeClass('error');
      return false
    }

    else{
      $('.refresh-online .phone').removeClass('good');
      $('.refresh-online .phone').removeClass('error');
      return false
    }

  });  

  $(".refresh-online .sum").keyup(function (e) {
  var sum = $('.refresh-online .sum').val()

    if ((sum >= 30 ) && (sum <= 5000)) {
      $('.refresh-online .sum').addClass('good');
      $('.refresh-online .sum').removeClass('error');
      return false
    }

    if (sum.length === 0 ) {
      $('.refresh-online .sum').removeClass('good');
      $('.refresh-online .sum').removeClass('error');
      return false
    }

    if (sum < 30 ) {
      $('.refresh-online .sum').removeClass('good');
      $('.refresh-online .sum').addClass('error');
      return false
    }

    if (sum > 5000 ) {
      $('.refresh-online .sum').removeClass('good');
      $('.refresh-online .sum').addClass('error');
      return false
    }


  });
   
});

$('.refresh-online .select .option').click(function(){
  $(this).parent().parent().addClass('good')

}) 

$('.menu-row .shopping-cart span').click(function(){
  $(this).parents('.container').find('.shopping-cart-dropdown').addClass('open');
  $(this).addClass('active');
}) 


 $('html').click(function() {
    $('.shopping-cart-dropdown').removeClass('open');
    $('.menu-row .shopping-cart span').removeClass('active');
 });

 $('.shopping-cart-dropdown').click(function(event){
     event.stopPropagation();
 });

  $('.menu-row .shopping-cart span').click(function(event){
     event.stopPropagation();
 });

$('.magazine .magazine-block .left-part .place .text').click(function() {
    $('.magazine .magazine-block .left-part .place .text').removeClass('open');
    $('.magazine .magazine-block .right-part .details').addClass('open');
    $(this).addClass('open');
    return false;
});

$('.magazine .magazine-block .left-part .regions .text-regions').click(function() {
  if (!$(this).hasClass( "open" )) {
    $('.magazine .magazine-block .left-part .regions .text-regions').removeClass('open');
    $(this).addClass('open');
    $('.magazine .magazine-block .left-part .regions .text-regions').parent().find('.place').slideUp().removeClass('open');
    $(this).parent().find('.place').slideDown().addClass('open');
    $('.magazine .magazine-block .right-part .details').removeClass('open');
    return false;
  }

  if ($(this).hasClass( "open" )) {
    $(this).parent().find('.place').slideUp().removeClass('open');
    $('.magazine .magazine-block .left-part .regions .text-regions').removeClass('open');
    $('.magazine .magazine-block .right-part .details').removeClass('open');
    return false;
  }

});


$('.magazine .magazine-block .left-part .town.big .text-town').click(function() {
  if (!$(this).hasClass( "open" )) {
    $('.magazine .magazine-block .left-part .town .text-town').removeClass('open');
    $(this).addClass('open');
    $('.magazine .magazine-block .left-part .town .text-town').parent().find('.regions').slideUp().removeClass('open');
    $(this).parent().find('.regions').slideDown().addClass('open');
    $('.magazine .magazine-block .left-part .regions .text-regions').parent().find('.place').slideUp().removeClass('open');
    $('.magazine .magazine-block .left-part .regions .text-regions').removeClass('open');
    $('.magazine .magazine-block .right-part .details').removeClass('open');

    $('.magazine .magazine-block .left-part .town .text-town').parent().find('.places').slideUp().removeClass('open');
    return false
  }

  if ($(this).hasClass( "open" )) {
    $(this).parent().find('.regions').slideUp().removeClass('open');
    $('.magazine .magazine-block .left-part .town .text-town').removeClass('open');
    $('.magazine .magazine-block .right-part .details').removeClass('open');
    return false;
  }  
});

$('.magazine .magazine-block .left-part .town.small .text-town').click(function() {
  if (!$(this).hasClass( "open" )) {
    $('.magazine .magazine-block .left-part .town .text-town').removeClass('open');
    $(this).addClass('open');
    $('.magazine .magazine-block .left-part .town .text-town').parent().find('.places').slideUp().removeClass('open');
    $(this).parent().find('.places').slideDown().addClass('open');
    $('.magazine .magazine-block .left-part .regions .text-regions').parent().find('.places').slideUp().removeClass('open');
    $('.magazine .magazine-block .left-part .regions .text-regions').removeClass('open');
    $('.magazine .magazine-block .right-part .details').removeClass('open');

    $('.magazine .magazine-block .left-part .town .text-town').parent().find('.regions').slideUp().removeClass('open');
    return false
  }

  if ($(this).hasClass( "open" )) {
    $(this).parent().find('.places').slideUp().removeClass('open');
    $('.magazine .magazine-block .left-part .town .text-town').removeClass('open');
    $('.magazine .magazine-block .right-part .details').removeClass('open');
    return false;
  }  
});

$('.magazine .magazine-block .right-part .details .info .fa-times').click(function() {
  $(this).parents('.details').removeClass('open');
  $('.magazine .magazine-block .left-part .place .text.open').removeClass('open');
});

$('.magazine .buttons .button').click(function() {
  $('.magazine .buttons .button').removeClass('active');
  $(this).addClass('active');
});

$('.magazine .buttons .button.left').click(function() {
  $('.magazine .magazine-block.centers').css('display','block');
  $('.magazine .magazine-block.partners').css('display','none');
});

$('.magazine .buttons .button.right').click(function() {
  $('.magazine .magazine-block.partners').css('display','block');
  $('.magazine .magazine-block.centers').css('display','none');
});

// $('.magazine .magazine-block .left-part .place ').on('click', '.text', function() {

$(".magazine .magazine-block.partners .left-part .place .text").click(function() {
  if ($(window).width() < 750) {
    $('html, body').animate({
        scrollTop: $(".partners .right-part ").offset().top
    },500);
  }
});

$(".magazine .magazine-block.centers .left-part .place .text").click(function() {
  if ($(window).width() < 750) {
    $('html, body').animate({
        scrollTop: $(".centers .right-part ").offset().top
    },500);
  }
});

$('.unavailable').hover(
  function(){
    $(this).parent().find(".unavailable-text").css('display','block')
  },  function(){
    $(this).parent().find(".unavailable-text").css('display','none')
  }
);

$('.credit').click(function(){
  $('#credit').addClass('open');
  $('body').toggleClass('open'); 
});


$('.credit-tab').click(function(){
  $(this).find('.checkbox').click();
  $(this).find('.checkbox').prop('checked', true);
});



$(window).click(function() {
   if (event.target == $('#credit')[0]) {
        $('#credit').removeClass('open');
        $('body').removeClass('open');  
    }
})

$('.buy').click(function(){

  $('.description-modal .products').append('<div class="product"><img src="img/product1.jpg"><p class="text">Apple iPhone 8 64GB Gold</p><div class="prices"><div class="price">16499 lei</div><div class="remove">șterge din coș</div></div><div class="clearfix"></div></div>');
  $('#description').addClass('open');
  $('body').toggleClass('open'); 
});

$(window).click(function() {
   if (event.target == $('#description')[0]) {
        $('#description').removeClass('open');
        $('body').removeClass('open');  
    }
})

$('.description-modal .buttons .button.blue').click(function() {
        $('#description').removeClass('open');
        $('body').removeClass('open');  
})

$('.shop-compare .right-part ').on('click', '.fa-times', function() {
  $(this).parents('.col').remove();
});

$('.shop-compare .left-part .top .button').click(function(){
  $(".shop-compare .right-part .content .col").remove()
  var iPhone7 = '<div class="col"><div class="top"><div class="phone-info"><span class="fa fa-times"></span><img src="img/mob1.jpg" alt=""><p class="phone-model">iPhone 7 32GB</p><article class="price1"><h5 class="type">PREȚ ONLINE</h5><h5 class="price">16999 lei</h5></article><article class="price2"><h5 class="type">RATA LUNARĂ</h5><h5 class="price">1024 lei</h5></article></div><div class="button">CUMPĂRĂ</div></div><div class="bottom"><div class="row">Smartphone</div><div class="row">Single sim</div><div class="row">IP67</div><div class="row">Da</div><div class="row big" style="height: 64px;">2G: 850 / 900 / 1800 / 1900<br>3G: 850 / 900 / 1700 / 1900 / 2100<br>4G: 700 / 800 / 850 / 900 / 1700 / 1800 / 1900 / 2100 / 2600</div><div class="row">A11 Bionic</div></div></div>';

  var SamsungGalaxyS7 = '<div class="col"><div class="top"><div class="phone-info"><span class="fa fa-times"></span><img src="img/mob1.jpg" alt=""><p class="phone-model">Samsung Galaxy S7</p><article class="price1"><h5 class="type">PREȚ ONLINE</h5><h5 class="price">16999 lei</h5></article><article class="price2"><h5 class="type">RATA LUNARĂ</h5><h5 class="price">1024 lei</h5></article></div><div class="button">CUMPĂRĂ</div></div><div class="bottom"><div class="row">Smartphone</div><div class="row">Single sim</div><div class="row">IP68</div><div class="row">Da</div><div class="row big" style="height: 64px;">2G: 850 / 900 / 1800 / 1900<br>3G: 850 / 900 / 1700 / 1900 / 2100<br>4G: 700 / 800 / 850 / 900 / 1700 / 1800 / 1900 / 2100 / 2600</div><div class="row">Octa Core</div></div></div>';

  var iPhone7edge = '<div class="col"><div class="top"><div class="phone-info"><span class="fa fa-times"></span><img src="img/mob1.jpg" alt=""><p class="phone-model">Galaxy S7 edge</p><article class="price1"><h5 class="type">PREȚ ONLINE</h5><h5 class="price">16999 lei</h5></article><article class="price2"><h5 class="type">RATA LUNARĂ</h5><h5 class="price">1024 lei</h5></article></div><div class="button">CUMPĂRĂ</div></div><div class="bottom"><div class="row">Smartphone</div><div class="row">Single sim</div><div class="row">IP68</div><div class="row">Da</div><div class="row big" style="height: 64px;">2G: 850 / 900 / 1800 / 1900<br>3G: 850 / 900 / 1700 / 1900 / 2100<br>4G: 700 / 800 / 850 / 900 / 1700 / 1800 / 1900 / 2100 / 2600</div><div class="row">Octa Core</div></div></div>';
  
  if ($('.shop-compare .left-part .top .input:nth-of-type(1) .selected').text() === 'iPhone 7 32GB' ) {
   $(".shop-compare .right-part .content").append(iPhone7);
  }

  if ($('.shop-compare .left-part .top .input:nth-of-type(1) .selected').text() === 'Samsung Galaxy S7' ) {
   $(".shop-compare .right-part .content").append(SamsungGalaxyS7);
  }

  if ($('.shop-compare .left-part .top .input:nth-of-type(1) .selected').text() === 'Galaxy S7 edge' ) {
   $(".shop-compare .right-part .content").append(iPhone7edge);
  }

  if ($('.shop-compare .left-part .top .input:nth-of-type(2) .selected').text() === 'iPhone 7 32GB' ) {
   $(".shop-compare .right-part .content").append(iPhone7);
  }

  if ($('.shop-compare .left-part .top .input:nth-of-type(2) .selected').text() === 'Samsung Galaxy S7' ) {
   $(".shop-compare .right-part .content").append(SamsungGalaxyS7);
  }

  if ($('.shop-compare .left-part .top .input:nth-of-type(2) .selected').text() === 'Galaxy S7 edge' ) {
   $(".shop-compare .right-part .content").append(iPhone7edge);
  }

  if ($('.shop-compare .left-part .top .input:nth-of-type(3) .selected').text() === 'iPhone 7 32GB' ) {
   $(".shop-compare .right-part .content").append(iPhone7);
  }

  if ($('.shop-compare .left-part .top .input:nth-of-type(3) .selected').text() === 'Samsung Galaxy S7' ) {
   $(".shop-compare .right-part .content").append(SamsungGalaxyS7);
  }

  if ($('.shop-compare .left-part .top .input:nth-of-type(3) .selected').text() === 'Galaxy S7 edge' ) {
   $(".shop-compare .right-part .content").append(iPhone7edge);
  }


 // $(".shop-compare .right-part .content").append(iPhone7edge);
 //    $(".shop-compare .right-part .content").append(iPhone7);
 //    $(".shop-compare .right-part .content").append(SamsungGalaxyS7);


});

$(".websms-block .phone").click(function (e) {
  $(this).val('+373 '); 
});

$(".websms-block .phone").keyup(function (e) {
    if ( ( $(this).val().slice(5,6) <= 5) || ( $(this).val().slice(5,6) >= 8) ){
        $(this).val('+373 '); 
      }
});

$(".shopping-cart-dropdown .row .fa-times").click(function () {
  $(this).parent().remove()
});


$(document).ready(function () {

  

$('body').click(function(){
  function time(){
    var text = $('.shop-cart .row .col-6');
    var deliveris = parseInt($('.delivery .block .price-row .price').text());
    var total = 0;
   
    $(text).each(function(){
        total = total + parseInt( $(this).text() ); 
    })

    // console.log( total + ' lei');
    // console.log( deliveris + ' lei');

    if ($('.delivery .block .bottom-part.active').hasClass('active')) {
      deliveris = 0;
    }

    $('.shop-cart .sum .price.total').text(total + ' lei');
    $('.shop-cart .sum .price.deliveris').text(deliveris + ' lei');

    $('.shop-cart .sum .price.summ').text(deliveris +  total + ' lei');

    return 

}
    setTimeout(time, 500);
})



});

$('.description-modal').on('click', '.remove', function() {

// $(".description-modal .product .prices .remove").click(function () {
  $(this).parents('.product').remove();
  if ( !$('.description-modal div').hasClass('product') ) {
    $('.description-modal').removeClass('open');
  }
});




$('.nstSlider').nstSlider({
    "rounding": {
        "100": "1000",
        "1000": "10000",
        "10000": "100000"
    },
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        var $container = $(this).parent();
        $container.find('.leftLabel').val(leftValue);
        $container.find('.rightLabel').val(rightValue);
    }
});