"use strict";

/* ------------------------------------------------------------------------------
 *
 *  # Template JS core
 *
 *  Includes minimum required JS code for proper template functioning
 *
 * ---------------------------------------------------------------------------- */
// Setup module
// ------------------------------
var App = function () {
  //
  // Setup module components
  //
  // Transitions
  // -------------------------
  // Disable all transitions
  var _transitionsDisabled = function _transitionsDisabled() {
    $('body').addClass('no-transitions');
  }; // Enable all transitions


  var _transitionsEnabled = function _transitionsEnabled() {
    $('body').removeClass('no-transitions');
  }; // Sidebars
  // -------------------------
  //
  // On desktop
  //
  // Resize main sidebar


  var _sidebarMainResize = function _sidebarMainResize() {
    // Flip 2nd level if menu overflows
    // bottom edge of browser window
    var revertBottomMenus = function revertBottomMenus() {
      $('.sidebar-main').find('.nav-sidebar').children('.nav-item-submenu').hover(function () {
        var totalHeight = 0,
            $this = $(this),
            navSubmenuClass = 'nav-group-sub',
            navSubmenuReversedClass = 'nav-item-submenu-reversed';
        totalHeight += $this.find('.' + navSubmenuClass).filter(':visible').outerHeight();

        if ($this.children('.' + navSubmenuClass).length) {
          if ($this.children('.' + navSubmenuClass).offset().top + $this.find('.' + navSubmenuClass).filter(':visible').outerHeight() > document.body.clientHeight) {
            $this.addClass(navSubmenuReversedClass);
          } else {
            $this.removeClass(navSubmenuReversedClass);
          }
        }
      });
    }; // If sidebar is resized by default


    if ($('body').hasClass('sidebar-xs')) {
      revertBottomMenus();
    } // Toggle min sidebar class


    $('.sidebar-main-toggle').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('sidebar-xs').removeClass('sidebar-mobile-main');
      revertBottomMenus();
    });
  }; // Toggle main sidebar


  var _sidebarMainToggle = function _sidebarMainToggle() {
    $(document).on('click', '.sidebar-main-hide', function (e) {
      e.preventDefault();
      $('body').toggleClass('sidebar-main-hidden');
    });
  }; // Toggle secondary sidebar


  var _sidebarSecondaryToggle = function _sidebarSecondaryToggle() {
    $(document).on('click', '.sidebar-secondary-toggle', function (e) {
      e.preventDefault();
      $('body').toggleClass('sidebar-secondary-hidden');
    });
  }; // Show right, resize main


  var _sidebarRightMainToggle = function _sidebarRightMainToggle() {
    $(document).on('click', '.sidebar-right-main-toggle', function (e) {
      e.preventDefault(); // Right sidebar visibility

      $('body').toggleClass('sidebar-right-visible'); // If visible

      if ($('body').hasClass('sidebar-right-visible')) {
        // Make main sidebar mini
        $('body').addClass('sidebar-xs'); // Hide children lists if they are opened, since sliding animation adds inline CSS

        $('.sidebar-main .nav-sidebar').children('.nav-item').children('.nav-group-sub').css('display', '');
      } else {
        $('body').removeClass('sidebar-xs');
      }
    });
  }; // Show right, hide main


  var _sidebarRightMainHide = function _sidebarRightMainHide() {
    $(document).on('click', '.sidebar-right-main-hide', function (e) {
      e.preventDefault(); // Opposite sidebar visibility

      $('body').toggleClass('sidebar-right-visible'); // If visible

      if ($('body').hasClass('sidebar-right-visible')) {
        $('body').addClass('sidebar-main-hidden');
      } else {
        $('body').removeClass('sidebar-main-hidden');
      }
    });
  }; // Toggle right sidebar


  var _sidebarRightToggle = function _sidebarRightToggle() {
    $(document).on('click', '.sidebar-right-toggle', function (e) {
      e.preventDefault();
      $('body').toggleClass('sidebar-right-visible');
    });
  }; // Show right, hide secondary


  var _sidebarRightSecondaryToggle = function _sidebarRightSecondaryToggle() {
    $(document).on('click', '.sidebar-right-secondary-toggle', function (e) {
      e.preventDefault(); // Opposite sidebar visibility

      $('body').toggleClass('sidebar-right-visible'); // If visible

      if ($('body').hasClass('sidebar-right-visible')) {
        $('body').addClass('sidebar-secondary-hidden');
      } else {
        $('body').removeClass('sidebar-secondary-hidden');
      }
    });
  }; // Toggle content sidebar


  var _sidebarComponentToggle = function _sidebarComponentToggle() {
    $(document).on('click', '.sidebar-component-toggle', function (e) {
      e.preventDefault();
      $('body').toggleClass('sidebar-component-hidden');
    });
  }; //
  // On mobile
  //
  // Expand sidebar to full screen on mobile


  var _sidebarMobileFullscreen = function _sidebarMobileFullscreen() {
    $('.sidebar-mobile-expand').on('click', function (e) {
      e.preventDefault();
      var $sidebar = $(this).parents('.sidebar'),
          sidebarFullscreenClass = 'sidebar-fullscreen';

      if (!$sidebar.hasClass(sidebarFullscreenClass)) {
        $sidebar.addClass(sidebarFullscreenClass);
      } else {
        $sidebar.removeClass(sidebarFullscreenClass);
      }
    });
  }; // Toggle main sidebar on mobile


  var _sidebarMobileMainToggle = function _sidebarMobileMainToggle() {
    $('.sidebar-mobile-main-toggle').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-right');

      if ($('.sidebar-main').hasClass('sidebar-fullscreen')) {
        $('.sidebar-main').removeClass('sidebar-fullscreen');
      }
    });
  }; // Toggle secondary sidebar on mobile


  var _sidebarMobileSecondaryToggle = function _sidebarMobileSecondaryToggle() {
    $('.sidebar-mobile-secondary-toggle').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('sidebar-mobile-secondary').removeClass('sidebar-mobile-main sidebar-mobile-right'); // Fullscreen mode

      if ($('.sidebar-secondary').hasClass('sidebar-fullscreen')) {
        $('.sidebar-secondary').removeClass('sidebar-fullscreen');
      }
    });
  }; // Toggle right sidebar on mobile


  var _sidebarMobileRightToggle = function _sidebarMobileRightToggle() {
    $('.sidebar-mobile-right-toggle').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('sidebar-mobile-right').removeClass('sidebar-mobile-main sidebar-mobile-secondary'); // Hide sidebar if in fullscreen mode on mobile

      if ($('.sidebar-right').hasClass('sidebar-fullscreen')) {
        $('.sidebar-right').removeClass('sidebar-fullscreen');
      }
    });
  }; // Toggle component sidebar on mobile


  var _sidebarMobileComponentToggle = function _sidebarMobileComponentToggle() {
    $('.sidebar-mobile-component-toggle').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('sidebar-mobile-component');
    });
  }; // Navigations
  // -------------------------
  // Sidebar navigation


  var _navigationSidebar = function _navigationSidebar() {
    // Define default class names and options
    var navClass = 'nav-sidebar',
        navItemClass = 'nav-item',
        navItemOpenClass = 'nav-item-open',
        navLinkClass = 'nav-link',
        navSubmenuClass = 'nav-group-sub',
        navSlidingSpeed = 250; // Configure collapsible functionality

    $('.' + navClass).each(function () {
      $(this).find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).not('.disabled').on('click', function (e) {
        e.preventDefault(); // Simplify stuff

        var $target = $(this),
            $navSidebarMini = $('.sidebar-xs').not('.sidebar-mobile-main').find('.sidebar-main .' + navClass).children('.' + navItemClass); // Collapsible

        if ($target.parent('.' + navItemClass).hasClass(navItemOpenClass)) {
          $target.parent('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
        } else {
          $target.parent('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed);
        } // Accordion


        if ($target.parents('.' + navClass).data('nav-type') == 'accordion') {
          $target.parent('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
        }
      });
    }); // Disable click in disabled navigation items

    $(document).on('click', '.' + navClass + ' .disabled', function (e) {
      e.preventDefault();
    }); // Scrollspy navigation

    $('.nav-scrollspy').find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).off('click');
  }; // Navbar navigation


  var _navigationNavbar = function _navigationNavbar() {
    // Prevent dropdown from closing on click
    $(document).on('click', '.dropdown-content', function (e) {
      e.stopPropagation();
    }); // Disabled links

    $('.navbar-nav .disabled a, .nav-item-levels .disabled').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    }); // Show tabs inside dropdowns

    $('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
      $(this).tab('show');
    });
  }; // Components
  // -------------------------
  // Tooltip


  var _componentTooltip = function _componentTooltip() {
    // Initialize
    $('[data-popup="tooltip"]').tooltip(); // Demo tooltips, remove in production

    var demoTooltipSelector = '[data-popup="tooltip-demo"]';

    if ($(demoTooltipSelector).is(':visible')) {
      $(demoTooltipSelector).tooltip('show');
      setTimeout(function () {
        $(demoTooltipSelector).tooltip('hide');
      }, 2000);
    }
  }; // Popover


  var _componentPopover = function _componentPopover() {
    $('[data-popup="popover"]').popover();
  }; // Card actions
  // -------------------------
  // Reload card (uses BlockUI extension)


  var _cardActionReload = function _cardActionReload() {
    $('.card [data-action=reload]:not(.disabled)').on('click', function (e) {
      e.preventDefault();
      var $target = $(this),
          block = $target.closest('.card'); // Block card

      $(block).block({
        message: '<i class="icon-spinner2 spinner"></i>',
        overlayCSS: {
          backgroundColor: '#fff',
          opacity: 0.8,
          cursor: 'wait',
          'box-shadow': '0 0 0 1px #ddd'
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: 'none'
        }
      }); // For demo purposes

      window.setTimeout(function () {
        $(block).unblock();
      }, 2000);
    });
  }; // Collapse card


  var _cardActionCollapse = function _cardActionCollapse() {
    var $cardCollapsedClass = $('.card-collapsed'); // Hide if collapsed by default

    $cardCollapsedClass.children('.card-header').nextAll().hide(); // Rotate icon if collapsed by default

    $cardCollapsedClass.find('[data-action=collapse]').addClass('rotate-180'); // Collapse on click

    $('.card [data-action=collapse]:not(.disabled)').on('click', function (e) {
      var $target = $(this),
          slidingSpeed = 150;
      e.preventDefault();
      $target.parents('.card').toggleClass('card-collapsed');
      $target.toggleClass('rotate-180');
      $target.closest('.card').children('.card-header').nextAll().slideToggle(slidingSpeed);
    });
  }; // Remove card


  var _cardActionRemove = function _cardActionRemove() {
    $('.card [data-action=remove]').on('click', function (e) {
      e.preventDefault();
      var $target = $(this),
          slidingSpeed = 150; // If not disabled

      if (!$target.hasClass('disabled')) {
        $target.closest('.card').slideUp({
          duration: slidingSpeed,
          start: function start() {
            $target.addClass('d-block');
          },
          complete: function complete() {
            $target.remove();
          }
        });
      }
    });
  }; // Card fullscreen mode


  var _cardActionFullscreen = function _cardActionFullscreen() {
    $('.card [data-action=fullscreen]').on('click', function (e) {
      e.preventDefault(); // Define vars

      var $target = $(this),
          cardFullscreen = $target.closest('.card'),
          overflowHiddenClass = 'overflow-hidden',
          collapsedClass = 'collapsed-in-fullscreen',
          fullscreenAttr = 'data-fullscreen'; // Toggle classes on card

      cardFullscreen.toggleClass('fixed-top h-100 rounded-0'); // Configure

      if (!cardFullscreen.hasClass('fixed-top')) {
        $target.removeAttr(fullscreenAttr);
        cardFullscreen.children('.' + collapsedClass).removeClass('show');
        $('body').removeClass(overflowHiddenClass);
        $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').removeClass('d-none');
      } else {
        $target.attr(fullscreenAttr, 'active');
        cardFullscreen.removeAttr('style').children('.collapse:not(.show)').addClass('show ' + collapsedClass);
        $('body').addClass(overflowHiddenClass);
        $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').addClass('d-none');
      }
    });
  }; // Misc
  // -------------------------
  // Dropdown submenus. Trigger on click


  var _dropdownSubmenu = function _dropdownSubmenu() {
    // All parent levels require .dropdown-toggle class
    $('.dropdown-menu').find('.dropdown-submenu').not('.disabled').find('.dropdown-toggle').on('click', function (e) {
      e.stopPropagation();
      e.preventDefault(); // Remove "show" class in all siblings

      $(this).parent().siblings().removeClass('show').find('.show').removeClass('show'); // Toggle submenu

      $(this).parent().toggleClass('show').children('.dropdown-menu').toggleClass('show'); // Hide all levels when parent dropdown is closed

      $(this).parents('.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show, .dropdown-submenu.show').removeClass('show');
      });
    });
  }; // Header elements toggler


  var _headerElements = function _headerElements() {
    // Toggle visible state of header elements
    $('.header-elements-toggle').on('click', function (e) {
      e.preventDefault();
      $(this).parents('[class*=header-elements-]').find('.header-elements').toggleClass('d-none');
    }); // Toggle visible state of footer elements

    $('.footer-elements-toggle').on('click', function (e) {
      e.preventDefault();
      $(this).parents('.card-footer').find('.footer-elements').toggleClass('d-none');
    });
  }; //
  // Return objects assigned to module
  //


  return {
    // Disable transitions before page is fully loaded
    initBeforeLoad: function initBeforeLoad() {
      _transitionsDisabled();
    },
    // Enable transitions when page is fully loaded
    initAfterLoad: function initAfterLoad() {
      _transitionsEnabled();
    },
    // Initialize all sidebars
    initSidebars: function initSidebars() {
      // On desktop
      _sidebarMainResize();

      _sidebarMainToggle();

      _sidebarSecondaryToggle();

      _sidebarRightMainToggle();

      _sidebarRightMainHide();

      _sidebarRightToggle();

      _sidebarRightSecondaryToggle();

      _sidebarComponentToggle(); // On mobile


      _sidebarMobileFullscreen();

      _sidebarMobileMainToggle();

      _sidebarMobileSecondaryToggle();

      _sidebarMobileRightToggle();

      _sidebarMobileComponentToggle();
    },
    // Initialize all navigations
    initNavigations: function initNavigations() {
      _navigationSidebar();

      _navigationNavbar();
    },
    // Initialize all components
    initComponents: function initComponents() {
      _componentTooltip();

      _componentPopover();
    },
    // Initialize all card actions
    initCardActions: function initCardActions() {
      _cardActionReload();

      _cardActionCollapse();

      _cardActionRemove();

      _cardActionFullscreen();
    },
    // Dropdown submenu
    initDropdownSubmenu: function initDropdownSubmenu() {
      _dropdownSubmenu();
    },
    initHeaderElementsToggle: function initHeaderElementsToggle() {
      _headerElements();
    },
    // Initialize core
    initCore: function initCore() {
      App.initSidebars();
      App.initNavigations();
      App.initComponents();
      App.initCardActions();
      App.initDropdownSubmenu();
      App.initHeaderElementsToggle();
    }
  };
}(); // Initialize module
// ------------------------------
// When content is loaded


document.addEventListener('DOMContentLoaded', function () {
  App.initBeforeLoad();
  App.initCore();
}); // When page is fully loaded

window.addEventListener('load', function () {
  App.initAfterLoad();
}); //////////
// DETECTORS
//////////

(function ($, APP) {
  APP.Browser = function () {
    var methods = {};

    methods.isRetinaDisplay = function () {
      if (window.matchMedia) {
        var mq = window.matchMedia('only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)');
        return mq && mq.matches || window.devicePixelRatio > 1;
      }
    };

    methods.isMobile = function () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    };

    methods.isIosDevice = function () {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        return true;
      } else {
        return false;
      }
    };

    methods.msieversion = function () {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE ');

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
        return true;
      } else {
        return false;
      }
    };

    methods.setBodyTags = function () {
      $('body').addClass('is-ready');

      if (methods.msieversion()) {
        $('body').addClass('is-ie');
      }

      if (methods.isMobile()) {
        $('body').addClass('is-mobile');
      }

      if (methods.isIosDevice()) {
        $('html').addClass('is-ios');
      }
    };

    var data = {
      isIe: methods.msieversion(),
      isMobile: methods.isMobile(),
      isIosDevice: methods.isIosDevice(),
      isRetinaDisplay: methods.isRetinaDisplay()
    };
    return {
      data: data,
      methods: methods
    };
  };
})(jQuery, window.APP); //////////
// CICKS
//////////


(function ($, APP) {
  APP.Plugins.Clicks = {
    init: function init() {
      $(document).on('click', '[href="#"]', function (e) {
        e.preventDefault();
      }).on('click', '[js-link]', function (e) {
        var dataHref = $(this).data('href');

        if (dataHref && dataHref !== '#') {
          e.preventDefault();
          e.stopPropagation();
          Barba.Pjax.goTo(dataHref);
        }
      }) // prevent going the same link (if barba is connected)
      .on('click', 'a, [js-link]', function (e) {
        var href = $(this).data('href') || $(this).attr('href');
        var path = window.location.pathname;

        if (href === path.slice(1, path.length)) {
          e.preventDefault();
          e.stopPropagation();
        }
      }) // scroll to section
      .on('click', 'a[href^="#section"]', function () {
        // section scroll
        var el = $(this).attr('href');
        var topTarget = $(el).offset().top; // $('body, html').animate({scrollTop: topTarget}, 1000);

        TweenLite.to(window, 1, {
          scrollTo: {
            y: topTarget,
            autoKill: false
          },
          ease: easingSwing
        });
        return false;
      }) // grid toggler
      .on('click', '[js-show-grid]', function () {
        $(this).toggleClass('is-active');
        $('.demo-grid').fadeToggle();
      });
    },
    destroy: function destroy() {// ... code ...
    }
  };
})(jQuery, window.APP); //////////////////////////////////
// HELPERS and PROTOTYPE FUNCTIONS
//////////////////////////////////
// LINEAR NORMALIZATION


function normalize(value, fromMin, fromMax, toMin, toMax) {
  var pct = (value - fromMin) / (fromMax - fromMin);
  var normalized = pct * (toMax - toMin) + toMin; //Cap output to min/max

  if (normalized > toMax) return toMax;
  if (normalized < toMin) return toMin;
  return normalized;
} // get window width (not to forget about ie, win, scrollbars, etc)


function getWindowWidth() {
  return window.innerWidth;
} // manually trigger events to start certain plugins


function triggerBody() {
  $(window).scroll();
  $(window).resize();
} // Format with spaces


function formatNumberWithSpaces(num) {
  return num.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
} // Add padding to numbers (a.k.a format by mask 00)
// use (9).pad(2) // output - 09


Number.prototype.pad = function (size) {
  var s = String(this);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }

  return s;
}; // check if certain breakpoint was went through


function hasCrossedBreakpoint(prevResize, curWidth, targetBp) {
  if (curWidth >= targetBp && prevResize <= targetBp || curWidth <= targetBp && prevResize >= targetBp) {
    return true;
  }

  return false;
} // Plurize (russian)
// использование Plurize(number, 'пешеход', 'пешехода', 'пешеходов')
// автоматическая генерация как в английском не работает из-за склонений
// например "1 пешеход", "2 пешехода", "5 пешеходов"
// или "1 человек", "2 человека", "5 человек"  {1 и 5} - одиникавые


function Plurize(number, one, two, five) {
  var n = Math.abs(number);
  n %= 100;

  if (n >= 5 && n <= 20) {
    return five;
  }

  n %= 10;

  if (n === 1) {
    return one;
  }

  if (n >= 2 && n <= 4) {
    return two;
  }

  return five;
} // convert hex to rgba


function rgba(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
} // MEDIA Condition helper function


function mediaCondition(cond) {
  var disabledBp;
  var conditionMedia = cond.substring(1);
  var conditionPosition = cond.substring(0, 1);

  if (conditionPosition === '<') {
    disabledBp = getWindowWidth() < conditionMedia;
  } else if (conditionPosition === '>') {
    disabledBp = getWindowWidth() > conditionMedia;
  }

  return disabledBp;
} //////////
// LEGACY
//////////


(function ($, APP) {
  APP.Plugins.LegacySupport = {
    init: function init() {
      // svg support for laggy browsers
      svg4everybody();

      if (!APP.Browser().data.isIe) {
        // Viewport units buggyfill
        window.viewportUnitsBuggyfill.init({
          force: false,
          refreshDebounceWait: 150,
          appendToBody: true
        });
      }
    },
    fixImages: function fixImages() {
      if (APP.Browser().data.isIe) {
        // if LAZY LOAD is used, move initialization to afterFinishAll
        picturefill();
        objectFitImages();
      }
    }
  };
})(jQuery, window.APP); //////////
// BARBA PJAX
//////////


(function ($, APP) {
  APP.Plugins.Barba = {
    getData: function getData() {
      return this.data;
    },
    init: function init() {
      // config
      Barba.Pjax.Dom.containerClass = 'page';
      this.data = this.data || {};
      this.data.transitionInitElement = ''; // initilization path

      this.getTransition();
      Barba.Prefetch.init();
      Barba.Pjax.start();
      this.listenEvents();
    },
    getTransition: function getTransition() {
      // set barba transition
      var _this = this;

      Barba.Pjax.getTransition = function () {
        return _this.transitions.FadeTransition; // return _this.transitions.HideShowTransition;
        // when there are multiple transitions on project
        // if ( transitionInitElement ){
        //   if ( transitionInitElement.attr('data-transition') ){
        //     var transition = transitionInitElement.data('transition');
        //     // console.log(transition)
        //     // if ( transition === "project" ){
        //     //   return ProjectTransition
        //     // }
        //   }
        //   return FadeTransition;
        // } else {
        //   // first visit + back button (history is blank)
        //   window.location.href = Barba.HistoryManager.history[1].url
        // }
      };
    },
    transitions: {
      HideShowTransition: Barba.BaseTransition.extend({
        start: function start() {
          this.newContainerLoading.then(this.finish.bind(this));
        },
        finish: function finish() {
          document.body.scrollTop = 0;
          this.done();
        }
      }),
      FadeTransition: Barba.BaseTransition.extend({
        start: function start() {
          Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
        },
        fadeOut: function fadeOut() {
          var _this = this;

          var $oldPage = $(this.oldContainer);
          var $newPage = $(this.newContainer);
          var deferred = Barba.Utils.deferred();
          TweenLite.to($oldPage, 0.5, {
            opacity: 0,
            ease: Power1.easeIn,
            onComplete: function onComplete() {
              deferred.resolve();
            }
          });
          return deferred.promise;
        },
        fadeIn: function fadeIn() {
          var _this = this;

          var $oldPage = $(this.oldContainer);
          var $newPage = $(this.newContainer);
          $(this.oldContainer).hide();
          $newPage.css({
            visibility: 'visible',
            opacity: 0
          });
          TweenLite.to(window, 0.15, {
            scrollTo: {
              y: 0,
              autoKill: false
            },
            ease: easingSwing
          });
          TweenLite.to($newPage, 0.5, {
            opacity: 1,
            ease: Power1.easeOut,
            onComplete: function onComplete() {
              _this.done();
            }
          });
        }
      })
    },
    listenEvents: function listenEvents() {
      // initialized transition
      var _this = this;

      Barba.Dispatcher.on('linkClicked', function (el) {
        _this.data.transitionInitElement = el instanceof jQuery ? el : $(el);
      }); // The new container has been loaded and injected in the wrapper.

      Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container, newPageRawHTML) {
        APP.Initilizer().newPageReady();
      }); // The transition has just finished and the old Container has been removed from the DOM.

      Barba.Dispatcher.on('transitionCompleted', function (currentStatus, oldStatus) {
        APP.Initilizer().transitionCompleted();
      });
    }
  };
})(jQuery, window.APP); //////////
// ScrollBlock
//////////
// disable / enable scroll by setting negative margin to page-content eq. to prev. scroll
// this methods helps to prevent page-jumping on setting body height to 100%


(function ($, APP) {
  APP.Plugins.ScrollBlock = {
    data: {
      y: _window.scrollTop(),
      blocked: false,
      direction: undefined,
      lastForScrollDir: 0,
      lastForBodyLock: 0,
      fillGapMethod: 'padding',
      scrolllDisabled: false
    },
    getData: function getData() {
      return this.data;
    },
    fillScrollbarGap: function fillScrollbarGap() {
      this.fillGapTarget($('.header').get(0));
      this.fillGapTarget(document.body);
    },
    unfillScrollbarGap: function unfillScrollbarGap() {
      this.unfillGapTarget($('.header').get(0));
      this.unfillGapTarget(document.body);
    },
    disableScroll: function disableScroll() {
      // prevent double lock
      if ($('body').is('.body-lock') || $('body').is('.body-m-lock')) return;
      if (this.data.scrolllDisabled) return;

      if (APP.Browser().data.isMobile) {
        // which elements are scrollable when scroll is locked?
        var $blockers = $('.blocker, .mobile-menu__scroller');

        if ($blockers.length > 0) {
          $blockers.each(function (i, el) {
            // disableBodyScroll(el);
            // lock(el);
            disablePageScroll(el);
          });
          this.data.scrolllDisabled = true;
          this.data.blocked = true; // APP.Dev.LogOnScreen.showLog('disablePageScroll (scoped)');

          $('body').addClass('body-m-lock');
        }
      } else {
        this.data.lastForBodyLock = _window.scrollTop();
        this.data.blocked = true;
        $('.page__content').css({
          'margin-top': '-' + this.data.lastForBodyLock + 'px'
        });
        this.fillScrollbarGap();
        $('body').addClass('body-lock');
      }
    },
    enableScroll: function enableScroll(target) {
      // console.log('enable', this.data.lastForBodyLock);
      if ($('.blocker').length) return;

      var _this = this;

      if (APP.Browser().data.isMobile) {
        // APP.Dev.LogOnScreen.showLog('enablePageScroll');
        clearQueueScrollLocks();
        enablePageScroll();
        this.data.scrolllDisabled = false;
        this.data.blocked = false;
        this.data.direction = 'up';
        $('body').removeClass('body-m-lock');
      } else {
        this.data.blocked = false;
        this.data.direction = 'up'; // keeps header

        $('.page__content').css({
          'margin-top': '-' + 0 + 'px'
        });
        this.unfillScrollbarGap();
        $('body').removeClass('body-lock');

        _window.scrollTop(this.data.lastForBodyLock);
      }
    },
    getWindowScroll: function getWindowScroll() {
      if (this.data.blocked) return;

      var wScroll = _window.scrollTop();

      this.data.y = wScroll;
      this.data.direction = wScroll > this.data.lastForScrollDir ? 'down' : 'up';
      this.data.lastForScrollDir = wScroll <= 0 ? 0 : wScroll;
      this.data.lastForBodyLock = wScroll;
    },
    listenScroll: function listenScroll() {
      _window.on('scroll', this.getWindowScroll.bind(this));
    },
    fillGapTarget: function fillGapTarget($target) {
      if ($target instanceof Node) {
        var scrollBarWidth;
        scrollBarWidth = this.getScrollBarWidth($target, true);
        var computedStyle = window.getComputedStyle($target);
        var fillGapMethod = this.data.fillGapMethod;

        if (fillGapMethod === 'margin') {
          var currentMargin = parseFloat(computedStyle.marginRight);
          $target.style.marginRight = "".concat(currentMargin + scrollBarWidth, "px");
        } else if (fillGapMethod === 'width') {
          $target.style.width = "calc(100% - ".concat(scrollBarWidth, "px)");
        } else if (fillGapMethod === 'max-width') {
          $target.style.maxWidth = "calc(100% - ".concat(scrollBarWidth, "px)");
        } else if (fillGapMethod === 'padding') {
          var currentPadding = parseFloat(computedStyle.paddingRight);
          $target.style.paddingRight = "".concat(currentPadding + scrollBarWidth, "px");
        }
      }
    },
    unfillGapTarget: function unfillGapTarget($target) {
      if ($target instanceof Node) {
        var fillGapMethod = this.data.fillGapMethod;

        if (fillGapMethod === 'margin') {
          $target.style.marginRight = '';
        } else if (fillGapMethod === 'width') {
          $target.style.width = '';
        } else if (fillGapMethod === 'max-width') {
          $target.style.maxWidth = '';
        } else if (fillGapMethod === 'padding') {
          $target.style.paddingRight = '';
        }
      }
    },
    getScrollBarWidth: function getScrollBarWidth($target) {
      if ($target instanceof Node) {
        var documentWidth = document.documentElement.clientWidth;
        var windowWidth = window.innerWidth;
        var currentWidth = windowWidth - documentWidth;
        return currentWidth;
      } else {
        return 0;
      }
    }
  };
})(jQuery, window.APP); //////////
// TELEPORT
//////////


(function ($, APP) {
  APP.Plugins.Teleport = {
    data: {
      teleports: []
    },
    init: function init() {
      this.getElements();
      this.teleport();
      this.listenResize();
    },
    getElements: function getElements() {
      var _this = this;

      var $teleports = $('.page').last().find('.js-teleport');
      _this.data.teleports = [];

      if ($teleports.length === 0) {
        return;
      }

      $teleports.each(function (i, tp) {
        var $el = $(tp);
        var $target = $('[data-teleport-target=' + $el.data('teleport-to') + ']');
        var conditionMedia = $el.data('teleport-condition').substring(1);
        var conditionPosition = $el.data('teleport-condition').substring(0, 1);

        _this.data.teleports.push({
          el: $el,
          html: $el.html(),
          target: $target,
          conditionMedia: conditionMedia,
          conditionPosition: conditionPosition
        });
      });
    },
    listenResize: function listenResize() {
      _window.on('resize', debounce(this.teleport.bind(this), 100));
    },
    teleport: function teleport() {
      if (this.data.teleports.length === 0) {
        return;
      }

      $.each(this.data.teleports, function (i, obj) {
        if (obj.target && obj.html && obj.conditionPosition) {
          var condition;

          if (obj.conditionPosition === '<') {
            condition = window.innerWidth <= obj.conditionMedia;
          } else if (obj.conditionPosition === '>') {
            condition = window.innerWidth >= obj.conditionMedia;
          }

          if (condition) {
            obj.target.html(obj.html);
            obj.el.html('');
          } else {
            obj.el.html(obj.html);
            obj.target.html('');
          }
        }
      }); // re-init sliders and other components
      // APP.Plugins.Sliders.reinit();
    }
  };
})(jQuery, window.APP);

(function ($, APP) {
  APP.Dev.Breakpoint = {
    setBreakpoint: function setBreakpoint() {
      var wHost = window.location.host.toLowerCase();
      var displayCondition = wHost.indexOf('localhost') >= 0 || wHost.indexOf('surge') >= 0 || wHost.indexOf('netlify') >= 0;

      if (displayCondition) {
        var wWidth = window.innerWidth;

        var wHeight = _window.height();

        var content = "<div class='dev-bp-debug'>" + wWidth + ' x ' + wHeight + '</div>';
        $('.page').append(content);
        setTimeout(function () {
          $('.dev-bp-debug').fadeOut();
        }, 1000);
        setTimeout(function () {
          $('.dev-bp-debug').remove();
        }, 1500);
      }
    },
    listenResize: function listenResize() {
      $(window).on('resize', debounce(this.setBreakpoint, 200));
    }
  };
})(jQuery, window.APP);

(function ($, APP) {
  APP.Dev.Credentials = {
    logCredentials: function logCredentials() {
      // eslint-disable-next-line
      console.log('👨‍💻 MADE WITH LOVE BY <> KHMELEVSKOY & ASSOCIATES </> https://khmelevskoy.co');
    }
  };
})(jQuery, window.APP);

(function ($, APP) {
  APP.Dev.LogOnScreen = {
    showLog: function showLog(message) {
      var wHost = window.location.host.toLowerCase();
      var displayCondition = wHost.indexOf('localhost') >= 0 || wHost.indexOf('surge') >= 0 || wHost.indexOf('netlify') >= 0;

      if (displayCondition) {
        var content = "<div class='dev-bp-debug'>" + message + '</div>';
        $('.page').append(content);
        setTimeout(function () {
          $('.dev-bp-debug').fadeOut();
        }, 1000);
        setTimeout(function () {
          $('.dev-bp-debug').remove();
        }, 1500);
      }
    }
  };
})(jQuery, window.APP); //////////
// AOS
//////////


(function ($, APP) {
  APP.Plugins.AOS = {
    init: function init() {
      AOS.init({
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120,
        // offset (in px) from the original trigger point
        delay: 0,
        // values from 0 to 3000, with step 50ms
        duration: 400,
        // values from 0 to 3000, with step 50ms
        easing: 'ease-in',
        // default easing for AOS animations
        once: true,
        // whether animation should happen only once - while scrolling down
        mirror: false,
        // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

      });
    },
    refresh: function refresh() {
      AOS.refreshHard();
    }
  };
})(jQuery, window.APP); ////////////////////
// LAZY LOAD
////////////////////


(function ($, APP) {
  APP.Plugins.LazyLoadImages = {
    init: function init() {
      var $lazy = _document.find('[js-lazy]:not(.is-loaded)');

      if ($lazy.length === 0) {
        APP.Plugins.LegacySupport.fixImages();
        return;
      }

      this.initLazy($lazy);
    },
    load: function load(DOMelement) {
      var $lazy = $(DOMelement);
      this.initLazy($lazy);
    },
    initLazy: function initLazy($lazy) {
      var _this = this;

      $lazy.Lazy({
        threshold: APP.Browser().data.isMobile ? 500 : 800,
        enableThrottle: true,
        throttle: 100,
        scrollDirection: 'vertical',
        // effect: 'fadeIn',
        // effectTime: 350,
        // visibleOnly: true,
        // placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7...",
        onError: function onError(element) {
          // eslint-disable-next-line no-console
          console.log('error loading ' + element.data('src'));

          try {
            element.attr('src', element.data('src'));
          } catch (e) {
            // eslint-disable-next-line no-console
            console.log('eroor appending src', e);
          }
        },
        beforeLoad: function beforeLoad(element) {// element.attr('style', '')
        },
        afterLoad: function afterLoad(element) {
          APP.Plugins.LegacySupport.fixImages();

          _this.animateLazy(element);
        }
      });
      triggerBody();
    },
    animateLazy: function animateLazy(element) {
      var fadeTimeout = 250;
      var $scaler = element.closest('.scaler');
      $scaler.addClass('is-loaded');

      if ($scaler.length === 0) {
        $(element).addClass('is-loaded');
      }

      if ($scaler.is('.no-bg-onload')) {
        setTimeout(function () {
          $scaler.addClass('is-bg-hidden');
        }, fadeTimeout);
      }
    }
  };
})(jQuery, window.APP); //////////
// MODALS
//////////


(function ($, APP) {
  APP.Plugins.Modals = {
    init: function init() {
      var startWindowScroll = 0;
      $('[js-popup]').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'popup-buble',
        callbacks: {
          beforeOpen: function beforeOpen() {
            startWindowScroll = _window.scrollTop(); // $('html').addClass('mfp-helper');
          },
          close: function close() {
            // $('html').removeClass('mfp-helper');
            _window.scrollTop(startWindowScroll);
          }
        }
      });
      $('[js-popup-gallery]').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка #%curr%...',
        mainClass: 'popup-buble',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
      });
    },
    destroy: function destroy() {// ... code ...
    }
  };
})(jQuery, window.APP); //////////
// SLIDERS
//////////


(function ($, APP) {
  APP.Plugins.Sliders = {
    data: {
      swipers: [],
      responsiveSwipers: {
        productsSwiper: {
          instances: [],
          enableOn: 991
        }
      }
    },
    init: function init(fromPjax) {
      if (!fromPjax) {
        this.initSwipers();
        this.initSwiperDataTree();
        this.initResponsiveSwipers();
        this.listenResize();
      }
    },
    reinit: function reinit() {
      // without resize listeners double check
      this.initSwipers();
      this.initSwiperDataTree();
      this.initResponsiveSwipers();
    },
    update: function update(selector) {
      var $swiper; // if selector passed - update only with selector

      if (selector) {
        $swiper = $("".concat(selector, ".swiper-container-initialized"));
      } else {
        $swiper = $('.swiper-container-initialized');
      }

      if ($swiper.length > 0) {
        $swiper.each(function (i, swiper) {
          $(swiper)[0].swiper.update();
        });
      }
    },
    listenResize: function listenResize() {
      _window.on('resize', debounce(this.initResponsiveSwipers.bind(this), 200));
    },
    initSwipers: function initSwipers() {
      var $page = $('.page').last(); // PDP gallery (initialization as a group)
      // gallery main is dependand on thumbs

      var haveGalleryThumbs = $page.find('.js-pdpGallery-thumbs').length > 0;
      var haveGalleryMain = $page.find('.js-pdpGallery-main').length > 0;

      if (haveGalleryThumbs && haveGalleryMain) {
        var selector = '.js-pdpGallery-thumbs:not(.swiper-container-initialized)';
        var $thumbs = $page.find(selector); // if ($thumbs.length === 0) return;

        $thumbs.each(function (i, thumb) {
          var id = $(thumb).data('swiper-group-id');
          new Swiper(thumb, {
            slideToClickedSlide: false,
            preventClicks: false,
            preventClicksPropagation: false,
            watchOverflow: true,
            setWrapperSize: false,
            spaceBetween: 5,
            slidesPerView: 'auto',
            normalizeSlideIndex: true,
            direction: 'vertical',
            on: {
              init: function init() {
                initGallerySwiper(id, this);
              }
            }
          });
        });
      }

      function initGallerySwiper(id, thumbsInstance) {
        // PDP main
        var selector = ".js-pdpGallery-main[data-swiper-group-id=\"".concat(id, "\"]");

        if ($page.find(selector).length > 0) {
          new Swiper(selector, {
            loop: true,
            watchOverflow: true,
            setWrapperSize: false,
            initialSlide: 0,
            spaceBetween: 5,
            centeredSlides: true,
            slidesPerView: 'auto',
            normalizeSlideIndex: false,
            freeMode: false,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
            thumbs: {
              swiper: thumbsInstance
            }
          });
        }
      }
    },
    initSwiperDataTree: function initSwiperDataTree() {
      var productsSwiper = '.js-products-swiper';

      if ($(productsSwiper).length > 0) {
        this.initSwiperTree(productsSwiper, 'productsSwiper');
      }
    },
    initResponsiveSwipers: function initResponsiveSwipers() {
      var productsSwiper = '.js-products-swiper';

      if ($(productsSwiper).length > 0) {
        this.responsiveSwiperConstructor(productsSwiper, 'productsSwiper', {
          watchOverflow: true,
          setWrapperSize: false,
          spaceBetween: 0,
          slidesPerView: 'auto',
          freeMode: true,
          freeModeSticky: true
        });
      }
    },
    initSwiperTree: function initSwiperTree(selector, name) {
      var _this = this;

      _this.data.responsiveSwipers[name].instances = [];
      $(selector).each(function (i, sw) {
        _this.data.responsiveSwipers[name].instances.push(undefined);
      });
    },
    responsiveSwiperConstructor: function responsiveSwiperConstructor(selector, objName, options) {
      var dataObj = this.data.responsiveSwipers[objName];
      $(selector).each(function (idx, element) {
        if (window.innerWidth <= dataObj.enableOn) {
          if (dataObj.instances[idx] === undefined) {
            dataObj.instances[idx] = new Swiper(element, options);
          }
        } else {
          if (dataObj.instances[idx] !== undefined) {
            dataObj.instances[idx].destroy(true, true);
            dataObj.instances[idx] = undefined;
          }
        }
      });
      this.data.responsiveSwipers[objName] = dataObj;
    },
    destroy: function destroy() {// ... code ...
    }
  };
})(jQuery, window.APP); ////////////////
// FORM VALIDATIONS
// jQuery validate plugin https://jqueryvalidation.org
////////////////


(function ($, APP) {
  APP.Plugins.Validations = {
    init: function init() {
      this.localize();
      this.customMethods();
      this.validateFormsConstructor();
      this.validateFormsCustom();
    },
    data: {
      // GENERIC FUNCTIONS
      validateErrorPlacement: function validateErrorPlacement(error, element) {
        error.addClass('ui-input__validation');

        if (element.is('select')) {
          error.appendTo(element.closest('.selectric-wrapper'));
        } else if (element.is('input[type="radio"]') || element.is('input[type="checkbox"]')) {
          error.appendTo(element.closest('.ui-group'));
        } else {
          error.appendTo(element.parent('div'));
        }
      },
      validateHighlight: function validateHighlight(element) {
        var $element = $(element);

        if ($element.is('select')) {
          $element.closest('.selectric-wrapper').addClass('has-error');
        } else {
          $(element).addClass('has-error');
        }
      },
      validateUnhighlight: function validateUnhighlight(element) {
        var $element = $(element);

        if ($element.is('select')) {
          $element.closest('.selectric-wrapper').removeClass('has-error');
        } else {
          $(element).removeClass('has-error');
        }
      },
      validateSubmitHandler: function validateSubmitHandler(form) {
        $(form).addClass('loading');
        var formData = $(form).serialize();
        var sucessFunction = $(form).data('success-function');

        if (sucessFunction !== undefined) {
          var x = eval(sucessFunction);

          if (typeof x == 'function') {
            x(formData);
          }
        }
      },
      masks: {
        phone: {
          required: true,
          normalizer: function normalizer(value) {
            var PHONE_MASK = '+X (XXX) XXX-XXXX';

            if (!value || value === PHONE_MASK) {
              return value;
            } else {
              return value.replace(/[^\d]/g, '');
            }
          },
          minlength: 11,
          digits: true
        }
      }
    },
    customMethods: function customMethods() {
      $.validator.addMethod('laxEmail', function (value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
      }, 'Email format must be like name@site.com');
    },
    localize: function localize() {
      /*
       * Translated default messages for the jQuery validation plugin.
       * Locale: RU (Russian; русский язык)
       */
      $.extend($.validator.messages, {
        required: 'Это поле необходимо заполнить.',
        remote: 'Пожалуйста, введите правильное значение.',
        email: 'Пожалуйста, введите корректный адрес электронной почты.',
        url: 'Пожалуйста, введите корректный URL.',
        date: 'Пожалуйста, введите корректную дату.',
        dateISO: 'Пожалуйста, введите корректную дату в формате ISO.',
        number: 'Пожалуйста, введите число.',
        digits: 'Пожалуйста, вводите только цифры.',
        creditcard: 'Пожалуйста, введите правильный номер кредитной карты.',
        equalTo: 'Пожалуйста, введите такое же значение ещё раз.',
        extension: 'Пожалуйста, выберите файл с правильным расширением.',
        maxlength: $.validator.format('Пожалуйста, введите не больше {0} символов.'),
        minlength: $.validator.format('Пожалуйста, введите не меньше {0} символов.'),
        rangelength: $.validator.format('Пожалуйста, введите значение длиной от {0} до {1} символов.'),
        range: $.validator.format('Пожалуйста, введите число от {0} до {1}.'),
        max: $.validator.format('Пожалуйста, введите число, меньшее или равное {0}.'),
        min: $.validator.format('Пожалуйста, введите число, большее или равное {0}.')
      });
    },
    validateFormsConstructor: function validateFormsConstructor() {
      var _this = this;

      var $forms = $('.js-validate-form:not(.is-validation-attached)');
      if ($forms.length === 0) return; // CONSTRUCTOR LIKE FIRST

      $forms.each(function (i, form) {
        var $form = $(form);
        var validationOptions = {
          errorPlacement: _this.data.validateErrorPlacement,
          highlight: _this.data.validateHighlight,
          unhighlight: _this.data.validateUnhighlight,
          submitHandler: _this.data.validateSubmitHandler,
          // rules to be set in html as well (merged props)
          rules: {
            email: {
              required: true,
              email: true,
              laxEmail: true
            },
            phone: _this.data.masks.phone
          },
          messages: {
            email: {
              required: 'Please enter email',
              email: 'Email format must be like name@site.com'
            },
            phone: {
              minlength: 'Phome form is invalid'
            }
          }
        };
        $form.validate(validationOptions);
        $form.addClass('is-validation-attached');
      });
    },
    validateFormsCustom: function validateFormsCustom() {
      var _this = this;

      var requestValidationObject = {
        errorPlacement: _this.data.validateErrorPlacement,
        highlight: _this.data.validateHighlight,
        unhighlight: _this.data.validateUnhighlight,
        submitHandler: _this.data.validateSubmitHandler,
        rules: {
          phone: _this.data.masks.phone
        },
        messages: {
          phone: {
            required: 'Заполните это поле',
            minlength: 'Введите корректный телефон'
          }
        }
      }; // call/init

      $('[js-validate-request]').validate(requestValidationObject); // $("[js-subscription-validation-footer]").validate(subscriptionValidationObject);
      // $("[js-subscription-validation-menu]").validate(subscriptionValidationObject);
    }
  };
})(jQuery, window.APP); // - Допступные варианты валидации через html теги (`type`)
// required: 'Это поле необходимо заполнить.', // тег required
// remote: 'Пожалуйста, введите правильное значение.', // валидация через запрос к API
// email: 'Пожалуйста, введите корректный адрес электронной почты.', // type="email"
// url: 'Пожалуйста, введите корректный URL.', // type="url"
// date: 'Пожалуйста, введите корректную дату.', // type="date"
// dateISO: 'Пожалуйста, введите корректную дату в формате ISO.', // type="dateISO"
// number: 'Пожалуйста, введите число.', // type="number"
// digits: 'Пожалуйста, вводите только цифры.', // type="digits"
// // creditcard: 'Пожалуйста, введите правильный номер кредитной карты.', // тег creditcard - нужно подключение отдельного плагина
// equalTo: 'Пожалуйста, введите такое же значение ещё раз.', // equalTo="xxx"
// // extension: 'Пожалуйста, выберите файл с правильным расширением.', // extension="zip" - нужно подключение отдельного плагина
// maxlength: $.validator.format('Пожалуйста, введите не больше {0} символов.'), // maxlength="10"
// minlength: $.validator.format('Пожалуйста, введите не меньше {0} символов.'), // minlength="2"
// rangelength: $.validator.format(
// 	'Пожалуйста, введите значение длиной от {0} до {1} символов.',
// ), // rangelength="[2, 6]"
// range: $.validator.format('Пожалуйста, введите число от {0} до {1}.'), // range="[2,6]"
// max: $.validator.format('Пожалуйста, введите число, меньшее или равное {0}.'), // max="10"
// min: $.validator.format('Пожалуйста, введите число, большее или равное {0}.'), // min="2
//////////
// MASKS
//////////


(function ($, APP) {
  APP.Plugins.Masks = {
    init: function init() {
      $('[js-dateMask]').mask('99.99.99', {
        placeholder: 'ДД.ММ.ГГ'
      });
      $("input[type='tel']").mask('+7 (000) 000-0000', {
        placeholder: '+7 (___) ___-____'
      });
    }
  };
})(jQuery, window.APP); ////////////////////
// SELECTRIC PLUGIN
////////////////////


(function ($, APP) {
  APP.Plugins.Selectric = {
    init: function init() {
      var $select = $('[js-select]');
      if ($select.length === 0) return;
      $select.selectric({
        maxHeight: 300,
        disableOnMobile: false,
        nativeOnMobile: true,
        arrowButtonMarkup: '<b class="button"><svg class="ico ico-select-down"><use xlink:href="img/sprite.svg#ico-select-down"></use></svg></b>',
        onInit: function onInit(element, data) {
          var $elm = $(element),
              $wrapper = $elm.closest('.' + data.classes.wrapper);
          $wrapper.find('.label').html($elm.attr('placeholder'));
        },
        onBeforeOpen: function onBeforeOpen(element, data) {
          var $elm = $(element),
              $wrapper = $elm.closest('.' + data.classes.wrapper);
          $wrapper.find('.label').data('value', $wrapper.find('.label').html()).html($elm.attr('placeholder'));
        },
        onBeforeClose: function onBeforeClose(element, data) {
          var $elm = $(element),
              $wrapper = $elm.closest('.' + data.classes.wrapper);
          $wrapper.find('.label').html($wrapper.find('.label').data('value'));
        }
      });
    }
  };
})(jQuery, window.APP);

(function ($, APP) {
  APP.Plugins.TextareaAutoExpand = {
    init: function init() {
      // textarea autoExpand
      _document.one('focus.autoExpand', '.ui-group textarea', function () {
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
      }).on('input.autoExpand', '.ui-group textarea', function () {
        var minRows = this.getAttribute('data-min-rows') | 0,
            rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
        this.rows = minRows + rows;
      });
    }
  };
})(jQuery, window.APP);

console.log(2);
console.log(2);
console.log(2);
console.log(2) //////////
// HEADER
//////////
(function ($, APP) {
  APP.Components.Header = {
    data: {
      classes: {
        fixedClass: 'is-fixed',
        visibleClass: 'is-fixed-visible',
        bodyFixedVisible: 'is-header-fixed-visible'
      },
      header: {
        container: undefined,
        bottomPoint: undefined
      }
    },
    init: function init(fromPjax) {
      if (!fromPjax) {
        this.getHeaderParams();
        this.hamburgerClickListener();
        this.listenScroll();
        this.listenResize();
      }

      this.closeMobileMenu();
      this.setMenuClass();
      this.controlHeaderClass();
    },
    getHeaderParams: function getHeaderParams() {
      var $header = $('.header');
      var headerOffsetTop = 0;
      var headerHeight = $header.outerHeight() + headerOffsetTop;
      this.data.header = {
        container: $header,
        bottomPoint: headerHeight
      };
    },
    closeMobileMenu: function closeMobileMenu() {
      $('[js-hamburger]').removeClass('is-active');
      $('.mobile-navi').removeClass('is-active');
      APP.Plugins.ScrollBlock.enableScroll();
    },
    hamburgerClickListener: function hamburgerClickListener() {
      _document.on('click', '[js-hamburger]', function () {
        $(this).toggleClass('is-active');
        $('.mobile-navi').toggleClass('is-active');

        if ($(this).is('.is-active')) {
          APP.Plugins.ScrollBlock.disableScroll();
        } else {
          APP.Plugins.ScrollBlock.enableScroll();
        }
      });
    },
    listenScroll: function listenScroll() {
      _window.on('scroll', this.scrollHeader.bind(this));

      _window.on('scroll', debounce(this.scrollHeaderDebouce.bind(this), 1250, {
        trailing: true
      }));
    },
    listenResize: function listenResize() {
      _window.on('resize', debounce(this.getHeaderParams.bind(this), 100));
    },
    makeHeaderVisible: function makeHeaderVisible() {
      this.data.header.container.addClass(this.data.classes.visibleClass);
      $('body').addClass(this.data.classes.bodyFixedVisible);
      this.data.header.isFixedVisible = true;
    },
    makeHeaderHidden: function makeHeaderHidden() {
      this.data.header.container.removeClass(this.data.classes.visibleClass);
      $('body').removeClass(this.data.classes.bodyFixedVisible);
      this.data.header.isFixedVisible = false;
    },
    scrollHeaderDebouce: function scrollHeaderDebouce() {
      // always show header after user stop scrolling
      if (this.data.header.container !== undefined) {
        this.makeHeaderVisible();
      }
    },
    scrollHeader: function scrollHeader() {
      if (this.data.header.container !== undefined) {
        var fixedClass = 'is-fixed';
        var visibleClass = 'is-fixed-visible'; // get scroll params from blocker function

        var scroll = APP.Plugins.ScrollBlock.getData();
        if (scroll.blocked) return;

        if (scroll.y > this.data.header.bottomPoint) {
          this.data.header.container.addClass(fixedClass);

          if (scroll.y > this.data.header.bottomPoint * 2 && scroll.direction === 'up') {
            this.makeHeaderVisible();
          } else {
            this.makeHeaderHidden();
          }
        } else {
          // emulate position absolute by giving negative transform on initial scroll
          var normalized = Math.floor(normalize(scroll.y, this.data.header.bottomPoint, 0, 0, 100));
          var reverseNormalized = (100 - normalized) * -1;
          reverseNormalized = reverseNormalized * 1.2; // a bit faster transition

          this.data.header.container.css({
            transform: 'translate3d(0,' + reverseNormalized + '%,0)'
          });
          this.data.header.container.removeClass(fixedClass);
        }
      }
    },
    setMenuClass: function setMenuClass() {
      // SET ACTIVE CLASS IN HEADER
      var headerMenuList = $('.header__menu li');
      if (headerMenuList.length === 0) return;
      headerMenuList.each(function (i, val) {
        if ($(val).find('a').attr('href') === window.location.pathname.split('/').pop()) {
          $(val).addClass('is-active');
        } else {
          $(val).removeClass('is-active');
        }
      });
    },
    controlHeaderClass: function controlHeaderClass() {
      this.data.header.container.attr('data-modifier', false);
      var $modifierElement = $('.page').last().find('[js-header-class]');

      if ($modifierElement.length > 0) {
        this.data.header.container.attr('data-modifier', $modifierElement.data('class'));
      }
    }
  };
})(jQuery, window.APP); //////////
// HEADER
//////////

(function ($, APP) {
  APP.Components.Header = {
    data: {
      classes: {
        fixedClass: 'is-fixed',
        visibleClass: 'is-fixed-visible',
        bodyFixedVisible: 'is-header-fixed-visible'
      },
      header: {
        container: undefined,
        bottomPoint: undefined
      }
    },
    init: function init(fromPjax) {
      if (!fromPjax) {
        this.getHeaderParams();
        this.hamburgerClickListener();
        this.listenScroll();
        this.listenResize();
      }

      this.closeMobileMenu();
      this.setMenuClass();
      this.controlHeaderClass();
    },
    getHeaderParams: function getHeaderParams() {
      var $header = $('.header');
      var headerOffsetTop = 0;
      var headerHeight = $header.outerHeight() + headerOffsetTop;
      this.data.header = {
        container: $header,
        bottomPoint: headerHeight
      };
    },
    closeMobileMenu: function closeMobileMenu() {
      $('[js-hamburger]').removeClass('is-active');
      $('.mobile-navi').removeClass('is-active');
      APP.Plugins.ScrollBlock.enableScroll();
    },
    hamburgerClickListener: function hamburgerClickListener() {
      _document.on('click', '[js-hamburger]', function () {
        $(this).toggleClass('is-active');
        $('.mobile-navi').toggleClass('is-active');

        if ($(this).is('.is-active')) {
          APP.Plugins.ScrollBlock.disableScroll();
        } else {
          APP.Plugins.ScrollBlock.enableScroll();
        }
      });
    },
    listenScroll: function listenScroll() {
      _window.on('scroll', this.scrollHeader.bind(this));

      _window.on('scroll', debounce(this.scrollHeaderDebouce.bind(this), 1250, {
        trailing: true
      }));
    },
    listenResize: function listenResize() {
      _window.on('resize', debounce(this.getHeaderParams.bind(this), 100));
    },
    makeHeaderVisible: function makeHeaderVisible() {
      this.data.header.container.addClass(this.data.classes.visibleClass);
      $('body').addClass(this.data.classes.bodyFixedVisible);
      this.data.header.isFixedVisible = true;
    },
    makeHeaderHidden: function makeHeaderHidden() {
      this.data.header.container.removeClass(this.data.classes.visibleClass);
      $('body').removeClass(this.data.classes.bodyFixedVisible);
      this.data.header.isFixedVisible = false;
    },
    scrollHeaderDebouce: function scrollHeaderDebouce() {
      // always show header after user stop scrolling
      if (this.data.header.container !== undefined) {
        this.makeHeaderVisible();
      }
    },
    scrollHeader: function scrollHeader() {
      if (this.data.header.container !== undefined) {
        var fixedClass = 'is-fixed';
        var visibleClass = 'is-fixed-visible'; // get scroll params from blocker function

        var scroll = APP.Plugins.ScrollBlock.getData();
        if (scroll.blocked) return;

        if (scroll.y > this.data.header.bottomPoint) {
          this.data.header.container.addClass(fixedClass);

          if (scroll.y > this.data.header.bottomPoint * 2 && scroll.direction === 'up') {
            this.makeHeaderVisible();
          } else {
            this.makeHeaderHidden();
          }
        } else {
          // emulate position absolute by giving negative transform on initial scroll
          var normalized = Math.floor(normalize(scroll.y, this.data.header.bottomPoint, 0, 0, 100));
          var reverseNormalized = (100 - normalized) * -1;
          reverseNormalized = reverseNormalized * 1.2; // a bit faster transition

          this.data.header.container.css({
            transform: 'translate3d(0,' + reverseNormalized + '%,0)'
          });
          this.data.header.container.removeClass(fixedClass);
        }
      }
    },
    setMenuClass: function setMenuClass() {
      // SET ACTIVE CLASS IN HEADER
      var headerMenuList = $('.header__menu li');
      if (headerMenuList.length === 0) return;
      headerMenuList.each(function (i, val) {
        if ($(val).find('a').attr('href') === window.location.pathname.split('/').pop()) {
          $(val).addClass('is-active');
        } else {
          $(val).removeClass('is-active');
        }
      });
    },
    controlHeaderClass: function controlHeaderClass() {
      this.data.header.container.attr('data-modifier', false);
      var $modifierElement = $('.page').last().find('[js-header-class]');

      if ($modifierElement.length > 0) {
        this.data.header.container.attr('data-modifier', $modifierElement.data('class'));
      }
    }
  };
})(jQuery, window.APP);

console.log(2);
console.log(2);