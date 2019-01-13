(function($) {
  $('#nav-icon1').click(function() {
    $(this).toggleClass('open');
  });
  // End of icon-menu transfomation

  // Begin of dropdown menu
  var touch = $('#touch-menu');
  var menu = $('#header__right');
  var touchIcon = $('#touch-icon');
  var menuResident = $('#header__right--resident');


  $(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
    menuResident.slideToggle();
  });
  $(window).resize(function() {
    var wid = $(window).width();
    if (wid > 992 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
    if (wid > 992 && menuResident.is(':hidden')) {
      menuResident.removeAttr('style');
    }
  });

  $(touchIcon).on('click', function(e) {
    e.preventDefault();
    menuResident.slideToggle();

  });
  $('#nav-icon-arrow').click(function() {
    $(this).toggleClass('open');
  });
})(jQuery);