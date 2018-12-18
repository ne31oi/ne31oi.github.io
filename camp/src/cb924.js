'use strict';
var $ = jQuery.noConflict();
var Project = {
    init: function() {
        $('html').removeClass('no-js');
        Project.pageLoadAnimation();
        Project.hideAndSeek();
        Project.drawerToggle();
        Project.drawerBack();
        Project.megaMenu();
        Project.readingProgressBar();
        Project.mobileMenu();
        Project.mobileMenuAccordion();
        Project.customNavHovers();
        Project.customNavAttributes();
        Project.customNavToggle();
        Project.footerNav();
        Project.disabledButtons();
        Project.formsDisabledFields();
        Project.formsRemoveEmptyLabels();
        Project.formsButtonWrapper();
        Project.searchFormToggle();
        Project.mobileFiltersToggle();
        Project.cardsSliders();
        Project.cardScroll();
        Project.codyNine();
        Project.introsSmoothScroll();
        Project.lightboxArrows();
        Project.embedBackgroundVideo();
        Project.testimonialsCarousel();
        Project.mobileTabsControls();
        Project.tabs();
        Project.articlesSlider();
        Project.imageTilesMobileContent();
        Project.contentImagesWrappers();
        Project.accordion();
        Project.responsiveVideo();
        Project.galleryCarousel();
        Project.smoothScroll();
        Project.loadMore();
        Project.masonry();
        Project.extendedLoadMore();
        Project.addToAnyInsertLine();
        Project.videoInColumns();
        nextSlide2();

    },
    hasCustomNav: $('header.main').hasClass('has-custom-nav'),
    tabChange: false,
    pageLoadAnimation: function() {
        var $page = $('#page'),
            $this, newLocation;
        setTimeout(function() { $page.removeClass('loading'); }, 500);
        if (!$('a').hasClass('olark')) {
            $('a').on('click', function(e) {
                $this = $(this);
                if (!$this.attr('target') && !$this.parent().hasClass('prevent-redirect') && !e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    newLocation = $this.attr('href');
                    if (newLocation.indexOf('#') !== 0) {
                        $page.addClass('loading');
                        setTimeout(function() { window.location = newLocation; }, 1000);
                    }
                }
            });
        }
    },
    hideAndSeek: function() {
        var $window = $(window),
            $header = $('header.main'),
            headerHeight = $header.outerHeight(),
            isTop, scrollTop = 0,
            startPoint = 0;
        $window.on('load resize orientationchange', function() {
            headerHeight = $header.outerHeight();
            $window.trigger('scroll');
        });
        $window.on('scroll', function() {
            if (!Project.tabChange) {
                scrollTop = $window.scrollTop();
                isTop = scrollTop < headerHeight;
                if (!isTop && (scrollTop > startPoint)) { $header.addClass('h-hidden'); } else { $header.removeClass('h-hidden'); }
                startPoint = scrollTop;
            }
        });
    },
    readingProgressBar: function() {
        if (Project.hasCustomNav) {
            var $window = $(window),
                $progressBar = $('header.main .progress-bar'),
                $pageWrapper = $('#page'),
                railsLength = $pageWrapper.height() - $window.height(),
                progress, pseudoDelta = { time: 50, paused: false };
            $window.on('load resize orientationchange', function() {
                railsLength = $pageWrapper.height() - $window.height();
                $window.trigger('scroll');
            });
            $window.on('scroll', function() {
                if (!pseudoDelta.paused && !Project.tabChange) {
                    pseudoDelta.paused = true;
                    progress = $window.scrollTop() / railsLength * 100;
                    $progressBar.css('width', progress + '%');
                    setTimeout(function() { pseudoDelta.paused = false; }, pseudoDelta.time);
                }
            });
        }
    },
    customNavAttributes: function() {
        if (Project.hasCustomNav) {
            var $titleEl = $('header.main .menu-page-title'),
                $currentMenuEl = $('.custom-nav-menu .current-menu-item > a'),
                $nextMenuEl, $prevMenuEl, currentTitle, nextTitle, prevTitle, $nextButton = $('header.main .cn-next'),
                $prevButton = $('header.main .cn-prev');
            if ($currentMenuEl.length) {
                currentTitle = $currentMenuEl.text();
                $titleEl.text(currentTitle);
                $titleEl.attr('data-title', currentTitle);
                if ($currentMenuEl.closest('li').is(':last-child') && $currentMenuEl.closest(".sub-menu").length > 0) { $nextMenuEl = $currentMenuEl.closest('.sub-menu').closest('li').next('li').children('a'); } else if ($currentMenuEl.closest('li').hasClass('menu-item-has-children')) { $nextMenuEl = $currentMenuEl.closest('li').find('.sub-menu li').first().children('a'); } else { $nextMenuEl = $currentMenuEl.closest('li').next('li').children('a'); }
                if ($nextMenuEl.length) {
                    nextTitle = $nextMenuEl.text();
                    $nextButton.attr('data-title', nextTitle);
                    $nextButton.attr('href', $nextMenuEl.attr('href'));
                } else {
                    $nextMenuEl = $currentMenuEl.closest('li').parent().children(':first').children('a');
                    nextTitle = $nextMenuEl.text();
                    $nextButton.attr('data-title', nextTitle);
                    $nextButton.attr('href', $nextMenuEl.attr('href'));
                }
                if ($currentMenuEl.closest('li').is(':first-child')) { if ($currentMenuEl.closest(".sub-menu").length > 0) { $prevMenuEl = $currentMenuEl.closest('.sub-menu').closest('li').children('a'); } else { $prevMenuEl = $currentMenuEl.closest('ul.menu').children(':last-child').children('a'); } } else if ($currentMenuEl.closest('li').prev('li').hasClass('menu-item-has-children')) { $prevMenuEl = $currentMenuEl.closest('li').prev('li').find('.sub-menu li').last().children('a'); } else { $prevMenuEl = $currentMenuEl.closest('li').prev('li').children('a'); }
                if ($prevMenuEl.length) {
                    prevTitle = $prevMenuEl.text();
                    $prevButton.attr('data-title', prevTitle);
                    $prevButton.attr('href', $prevMenuEl.attr('href'));
                } else {
                    $prevMenuEl = $currentMenuEl.closest('li').parent().children(':first');
                    prevTitle = $prevMenuEl.text();
                    $prevButton.attr('data-title', prevTitle);
                    $prevButton.attr('href', $prevMenuEl.attr('href'));
                }
                $(document).trigger('customNavAttributesReady');
            } else {
                $prevButton.hide();
                $nextButton.hide();
            }
        }
    },
    customNavHovers: function() {
        if (Project.hasCustomNav) {
            $(document).on('customNavAttributesReady', function() {
                var $buttons = $('.cn-next, .cn-prev'),
                    $titleEl = $('header.main .menu-page-title'),
                    $wrapper = $('.custom-nav-wrapper'),
                    currentTitle = $titleEl.attr('data-title'),
                    thisTitle;
                $buttons.on('mouseenter', function() {
                    var $this = $(this),
                        thisTitle = $this.attr('data-title');
                    if (thisTitle !== undefined && thisTitle.length) {
                        $titleEl.text(thisTitle);
                        $this.hasClass('cn-next') ? $wrapper.addClass('hover-next') : $wrapper.addClass('hover-prev');
                    }
                });
                if (currentTitle !== undefined && currentTitle.length) {
                    $buttons.on('mouseleave', function() {
                        $titleEl.text(currentTitle);
                        $wrapper.removeClass('hover-next hover-prev');
                    });
                }
            });
        }
    },
    disabledButtons: function() { $('header.main .cn-btn.cn-disabled, .footer-custom-wrapper .cn-disabled, .std-btn.disabled, .std-btn-2.disabled').on('click', function(e) { e.preventDefault(); }); },
    customNavToggle: function() {
        if (Project.hasCustomNav) {
            var $button = $('header.main .cn-toggle'),
                $menu = $('.custom-nav-menu'),
                stateText = { closed: $button.text(), open: $button.attr('data-alt-text') };
            $button.on('click', function(e) {
                e.preventDefault();
                if ($button.hasClass('menu-open')) { $button.text(stateText.closed); } else { $button.text(stateText.open); }
                $button.toggleClass('menu-open');
                $menu.toggleClass('cn-menu-open');
            });
        }
    },
    drawerToggle: function() {
        $('header.main .extended-buttons a.has-drawer').on('click', function(e) {
            e.preventDefault();
            var $this = $(this),
                targetData = $this.attr('data-drawer'),
                $target = $('.tiles-drawer[data-drawer="' + targetData + '"]');
            if ($target.length) {
                $this.toggleClass('drawer-open');
                $target.toggleClass('open');
                $('body').toggleClass('dim-overlay').removeClass('mobile-nav-active');
                $('.toggle-mobile-nav').removeClass('close');
            }
        });
        $('div.dim-overlay').on('click', function(e) {
            e.preventDefault();
            if ($('.tiles-drawer').hasClass('open')) {
                $('header.main .extended-buttons a.has-drawer').toggleClass('drawer-open');
                $('.tiles-drawer').toggleClass('open');
                $('body').toggleClass('dim-overlay').removeClass('mobile-nav-active');
                $('.toggle-mobile-nav').removeClass('close');
            }
        });
    },
    drawerBack: function() {
        $('.tiles-drawer .back-btn').on('click', function(e) {
            e.preventDefault();
            $('.toggle-mobile-nav').trigger('click');
        });
    },
    megaMenu: function() {
        var $menuParent = $('.megamenu-wrapper .has-children'),
            $header = $('header.main');
        if ($menuParent.length) {
            $menuParent.on('click', function(e) {
                if ($header.hasClass('mm-open')) {
                    if ($(this).find('.mm-content').hasClass('open')) {
                        $header.removeClass('mm-open');
                        $(this).find('.mm-content').removeClass('open').fadeOut(300);
                    } else {
                        $('.mm-content').removeClass('open').fadeOut(300);
                        $(this).find('.mm-content').addClass('open').stop().fadeIn(300);
                    }
                } else {
                    $header.addClass('mm-open');
                    $(this).find('.mm-content').addClass('open').stop().fadeIn(300);
                }
            });
            $menuParent.each(function() { var $this = $(this); if ($this.find('.current-menu-item').length) { $this.addClass('current-item'); } });
        }
    },
    footerNav: function() {
        var $footerNav = $('.footer-custom-wrapper.nav'),
            $currentEl = $footerNav.find('.hidden-menu-wrapper .current-menu-item'),
            buttons;
        if ($footerNav.length && $currentEl.length) {
            buttons = [{ '$buttonEl': $footerNav.find('.prev a'), '$menuEl': $currentEl.prev('li').children('a') }, { '$buttonEl': $footerNav.find('.next a'), '$menuEl': $currentEl.next('li').children('a') }];
            buttons.forEach(function(button) {
                if (button.$menuEl.length) {
                    button.$buttonEl.find('span').text(button.$menuEl.text());
                    button.$buttonEl.attr('href', button.$menuEl.attr('href'));
                } else {
                    if ($currentEl.next('li').length) {
                        button.$buttonEl.find('span').text($currentEl.parent().children(':last').text());
                        button.$buttonEl.attr('href', $currentEl.parent().children(':last').children('a').attr('href'));
                    } else {
                        button.$buttonEl.find('span').text($currentEl.parent().children(':first').text());
                        button.$buttonEl.attr('href', $currentEl.parent().children(':first').children('a').attr('href'));
                    }
                }
            });
        } else if ($footerNav.length) {
            $footerNav.find('.prev, .next').remove();
            $footerNav.removeClass('nav');
        }
    },
    formatNumber: function(number) {
        if (number) { number = number.toString(); if (number.length <= 1) { return '0' + number; } else { return number; } }
    },
    countSlides: function(sliderObj, noFormat) {
        var $countEl = sliderObj.$slider.find('.count'),
            $currentSlideEl = $countEl.find('.current');
        if (noFormat === true) {
            sliderObj.$slider.find('.count .total').text(sliderObj.slideCount);
            sliderObj.$slider.on('afterChange', function() { $currentSlideEl.text(sliderObj.currentSlide + 1); });
        } else {
            sliderObj.$slider.find('.count .total').text(Project.formatNumber(sliderObj.slideCount));
            sliderObj.$slider.on('afterChange', function() { $currentSlideEl.text(Project.formatNumber(sliderObj.currentSlide + 1)); });
        }
    },
    cardsSliders: function() {
        /*
                var args = { autoplay: false, dots: false, arrows: true, infinite: false, slide: 'article' }
                $('.lightbox-slider').each(function() {
                    var $this = $(this),
                        firstInit = true;
                    $this.on('init', function(event, sliderObj) {
                        Project.countSlides(sliderObj);
                        if (firstInit) {
                            Project.cardsSlidersToggle(sliderObj);
                            firstInit = false;
                        }
                    });
                    $this.on('ajaxDone', function(event, replace, innerHtml) {
                        $this.slick('unslick');
                        if (replace) { $this.html(innerHtml); } else { $this.append(innerHtml.replace('<span class="lb-close-btn"></span>', '')); }
                        $this.slick(args);
                    });
                    $this.slick(args);
                });*/
    },
    cardsSlidersToggle: function(sliderObj) {
        sliderObj.$slider.closest('.cards, .custom-cards').find('.cards-list').on('click', 'a', function(e) {
            e.preventDefault();
            sliderObj.$slider.slick('slickGoTo', parseInt($(this).attr('data-slide-target')), false);
            sliderObj.$slider.fadeIn(300);
            sliderObj.$slider.find('.pos-wrapper').addClass('active');
        });
        sliderObj.$slider.on('click', '.lb-close-btn', function() {
            var $thisSlider = $(this).closest('.lightbox-slider');
            $thisSlider.fadeOut(300);
            $thisSlider.find('.pos-wrapper').removeClass('active');
        });
        sliderObj.$slider.on('click', '.slick-current', function(e) {
            if (e.target === this) {
                var $thisSlider = $(this).closest('.lightbox-slider');
                $thisSlider.fadeOut(300);
                $thisSlider.find('.pos-wrapper').removeClass('active');
            }
        });
    },
    mobileMenu: function() {
        var $menu = $('.mobile-menu-wrapper'),
            $button, $additionalContent = $('header.main .extended-buttons'),
            $body = $('body'),
            $drawers = $('.tiles-drawer');
        if ($additionalContent.length) { $additionalContent.clone(true).appendTo($menu); }
        $menu.prepend('<a href="#" class="burger-btn toggle-mobile-nav">Toggle Navigation</a>');
        $button = $('.toggle-mobile-nav');
        $button.on('click', function(e) {
            e.preventDefault();
            $body.toggleClass('mobile-nav-active');
            $button.toggleClass('close');
            $drawers.removeClass('open');
            $body.removeClass('dim-overlay');
        });
    },
    mobileMenuAccordion: function() {
        var $menu = $('.mobile-menu-wrapper .menu'),
            $buttons = $menu.find('.menu-item-has-children'),
            $submenus = $menu.find('.sub-menu');
        $submenus.on('click', function(e) { e.stopPropagation(); });
        $buttons.on('click', function(e) {
            e.stopPropagation();
            var $this = $(this);
            console.log($this);
            $this.toggleClass('active');
            console.log($this.find('> .sub-menu'));
            $this.find('> .sub-menu').slideToggle(300);
        });
    },
    cardScroll: function() { /*$('.cards article .pos-wrapper').mCustomScrollbar({ axis: 'y' }); */},
    introsSmoothScroll: function() {
        var $target;
        $('.hero .hero-smooth-scroll, .cn-intro .intro-smooth-scroll, .intro a[href*="#"]:not([href="#"])').on('click', function(e) {
            e.preventDefault();
            $target = $($(this).attr('href'));
            if ($target.length) { $('html, body').animate({ scrollTop: $target.offset().top }, 1000); }
        });
    },
    codyNine: function() {
        var $controls = $('.cn-intro .controls'),
            $posts = $('.cn-posts article'),
            idPrefix = 'cn_post-',
            number, id, $target;
        if ($controls.length && $posts.length) {
            for (var i = 0; i < $posts.length; i++) {
                number = Project.formatNumber($posts.length - i);
                id = idPrefix + number;
                $($posts[i]).attr('id', id);
                $($posts[i]).find('.count').text(number);
                $controls.append('<li><a href="#' + id + '">' + number + '</a></li>');
            }
            $('.cn-intro .controls a').on('click', function(e) {
                e.preventDefault();
                $target = $($(this).attr('href'));
                if ($target.length) { $('html, body').animate({ scrollTop: $target.offset().top - ($target.outerHeight() * 0.3) }, 1000); }
            });
        }
    },
    nineWayPoints: function() { var $boxes = $('.cn-posts article'); if ($boxes.length) { $boxes.waypoint({ handler: function() { $(this.element).addClass('reached'); }, offset: function() { return $(window).height() * 0.9; } }); } },
    pageWayPoints: function() {
        var $boxes = $('.entry.scroll-animation > *');
        if ($boxes.length) {
            $boxes.addClass('unreached');
            $boxes.waypoint({ handler: function() { $(this.element).removeClass('unreached'); }, offset: function() { return $(window).height() * 0.8; } });
            setInterval(function() { Waypoint.refreshAll(); }, 500);
        }
    },
    lightboxArrows: function() {
        var arrowRight = $('.lightbox-slider .slick-next'),
            arrowLeft = $('.lightbox-slider .slick-prev'),
            arrowPosition = ($(window).width() - $('.lightbox-slider .container').width()) / 2;
        if ($(window).width() > 1199) {
            arrowRight.css('right', arrowPosition + 5);
            arrowLeft.css('left', arrowPosition + 17);
        } else {
            arrowRight.removeAttr('style');
            arrowLeft.removeAttr('style');
        }
    },
    blogWayPoints: function() {
        var $boxes = $('main.has-animated-listing .listing-wrapper article');
        if ($boxes.length) {
            $boxes.waypoint({ handler: function() { $(this.element).removeClass('unreached'); }, offset: function() { return $(window).height() * 0.7; } });
            setInterval(function() { Waypoint.refreshAll(); }, 500);
        }
    },
    addToAnyInsertLine: function() { $('body.single .entry .addtoany_share_save_container').before('<div class="content-bottom-line"></div>'); },
    embedBackgroundVideo: function() {
        var $embedEl = $('.hero .backgroundVideo'),
            videoID, videoOptions = { controlsVisibleOnLoad: true, playbar: true, playButton: true, silentAutoPlay: true, muted: true, endVideoBehavior: 'loop' },
            wistiaEmbed;
        if ($embedEl.length && typeof Wistia !== 'undefined') {
            $(window).on('load', function() {
                Wistia.obj.merge(videoOptions, { plugin: { cropFill: { src: "//fast.wistia.com/labs/crop-fill/plugin.js" } } });
                videoID = $embedEl.attr('id').replace('wistia_', '');
                wistiaEmbed = Wistia.embed(videoID, videoOptions);
                wistiaEmbed.bind('play', function() { setTimeout(function() { $embedEl.addClass('bv-ready'); }, 1000); });
            });
        }
    },
    setCarouselHeight: function($carousel) {
        var $column = $carousel.closest('.carousel-col'),
            $target = $carousel.find('.c-slide'),
            height;
        $(window).on('load resize', function() {
            height = $column.siblings('.carousel-row-col').find('a').innerHeight();
            $target.css('height', height + 'px');
        });
        $target.waypoint({ handler: function() { $(window).trigger('resize'); }, offset: function() { return $(window).height() * 0.9; } });
    },
    testimonialsCarousel: function() {
        var $carousel = $('.image-tiles .carousel');
        if ($carousel.length) {
            $carousel.slick({ autoplay: true, autoplaySpeed: 5000, arrows: false, dots: true, fade: true });
            Project.setCarouselHeight($carousel);
        }
    },
    tabs: function() {
        var $tabsSets = $('.tabs');
        $tabsSets.each(function() {
            var $thisSet = $(this),
                hasFade = $thisSet.hasClass('tabs-extended'),
                $buttons = $thisSet.find('> ul a'),
                $tabs = $thisSet.find('> div:not(.controls)');
            $buttons.on('click', function(e) {
                e.preventDefault();
                var $thisButton = $(this),
                    $target;
                if (!$thisButton.hasClass('active')) {
                    $target = $thisSet.find($thisButton.attr('href'));
                    if (hasFade) {
                        Project.tabChange = true;
                        $tabs.stop().fadeOut(500);
                        $target.delay(500).fadeIn(1500, function() { setTimeout(function() { Project.tabChange = false; }, 300); });
                    } else {
                        $tabs.hide();
                        $target.show();
                    }
                    $buttons.removeClass('active');
                    $thisButton.addClass('active');
                    $thisSet.trigger('tabChange');
                }
            });
            $buttons.first().trigger('click');
        });
    },
    mobileTabsControls: function() {
        var $tabsSets = $('.tabs');
        $tabsSets.each(function() {
            var $thisSet = $(this),
                $arrowBtns;
            if ($thisSet.find('> ul a').length > 1) {
                $thisSet.prepend('<div class="controls"><a href="#" class="btn prev">Prev</a><a href="#" class="btn next">Next</a></div>');
                $arrowBtns = $thisSet.find('.controls .btn');
                $arrowBtns.on('click', function(e) { e.preventDefault(); var $this = $(this); if ($this.hasClass('next')) { $thisSet.find('> ul a.active').closest('li').next('li').find('a').trigger('click'); } else { $thisSet.find('> ul a.active').closest('li').prev('li').find('a').trigger('click'); } });
                $thisSet.on('tabChange', function() {
                    var isFirst = $thisSet.find('> ul li').first().find('a').hasClass('active'),
                        isLast = $thisSet.find('> ul li').last().find('a').hasClass('active');
                    if (isFirst) {
                        $thisSet.addClass('first-tab');
                        $thisSet.removeClass('last-tab');
                    } else if (isLast) {
                        $thisSet.addClass('last-tab');
                        $thisSet.removeClass('first-tab');
                    } else {
                        $thisSet.removeClass('first-tab');
                        $thisSet.removeClass('last-tab');
                    }
                });
            }
        });
    },
    articlesSlider: function() {
        var $slider = $('.a-slider');
        $slider.each(function() {
            var $this = $(this);
            $this.on('init', function(event, sliderObj) { Project.countSlides(sliderObj, true); });
           /* $this.slick({ autoplay: true, autoplaySpeed: 5000, fade: true, arrows: false, dots: true, appendDots: $this.find('.controls'), slide: 'article' });*/
        });
    },
    imageTilesMobileContent: function() {
        var $source = $('.image-tiles .carousel-col + .carousel-row-col'),
            $clone;
        if ($source.length) {
            $clone = $source.clone();
            $clone[0].className = $clone[0].className.replace('carousel-row-col', 'tablet-col');
            $('.image-tiles .carousel-col').before($clone);
        }
    },
    contentImagesWrappers: function() {
        $('.entry p').each(function() {
            var $this = $(this),
                $images = $this.find('img');
            if ($this.find('img + img, img + noscript + img').length && ($images.hasClass('alignright') && $images.hasClass('alignleft'))) {
                $this.addClass('ciw ciw-row');
                $this.find('img.alignright').wrap('<div class="ciw-col-right"></div>');
                $this.find('img.alignleft').wrap('<div class="ciw-col-left"></div>');
            } else if ($images.hasClass('size-full-width') || $images.hasClass('size-extra-full-width')) {
                $this.addClass('ciw ciw-full-width');
                $images.wrap('<div class="ciw-col"></div>');
            } else if ($images.hasClass('size-large')) {
                $this.addClass('ciw ciw-content-width');
                $images.wrap('<div class="ciw-col"></div>');
            } else if ($images.length) {
                $this.addClass('ciw ciw-std');
                $this.find('img.alignright').wrap('<div class="ciw-col-right"></div>');
                $this.find('img.alignleft').wrap('<div class="ciw-col-left"></div>');
            }
        });
    },
    accordion: function() {
        $('.accordion:not(.active) .content').hide();
        $('.accordion .title').on('click', function() {
            var $this = $(this);
            $this.closest('.accordion').toggleClass('active');
            $this.siblings('.content').slideToggle(300);
        });
    },
    responsiveVideo: function() { $('iframe[src*="youtube"], iframe[src*="vimeo"]').wrap('<div class="video-wrapper"></div>'); },
    galleryCarousel: function() {
        $('.gallery .slider').each(function() {
            var $this = $(this);
            /*$this.slick({ autoplay: true, infinite: true, dots: false, arrows: true, appendArrows: $this.siblings('.controls') });*/
        });
    },
    smoothScroll: function() {
        var $header = $('header.main'),
            headerHeight = $header.position().top + $header.outerHeight();
        $(window).on('load resize orientationchange', function() { headerHeight = $header.position().top + $header.outerHeight(); });
        $('.entry a').each(function() {
            var $this = $(this),
                splitArr, $target;
            try {
                splitArr = $this.attr('href').split('#');
                if (!splitArr[0].length) {
                    $this.addClass('smooth-scroll-link');
                    $target = $('a[name="' + splitArr[1] + '"]');
                    $target.addClass('smooth-scroll-target');
                    $this.data('smooth-scroll', $target);
                }
            } catch (e) {}
        });
        $('.smooth-scroll-link').on('click', function(e) {
            e.preventDefault();
            var $target = $(this).data('smooth-scroll'),
                offset;
            if ($target.length) {
                offset = $target.offset().top - headerHeight;
                $('html, body').animate({ scrollTop: offset }, 700);
            }
        });
    },
    formsDisabledFields: function() { $('.gfield').each(function() { var $this = $(this); if ($this.hasClass('disabled')) { $this.find('input, textarea').attr('disabled', 'disabled'); } }); },
    formsRemoveEmptyLabels: function() { $('.gfield_label').each(function() { var $this = $(this); if ($this.text().length === 0) { $this.remove(); } }); },
    formsButtonWrapper: function() { $('.gform_button.button').wrap('<div class="gform_custom_button_wrapper"></div>'); },
    loadMore: function() {
        var $buttonWrapper = $('.load-more-wrapper:not(.extended-load-more-wrapper)'),
            $postsWrapper = $('.listing-wrapper'),
            stateText = { normal: 'Load more', loading: 'Loading...', error: 'Error' };
        $buttonWrapper.on('click', 'a', function(e) {
            e.preventDefault();
            $buttonWrapper.find('a').text(stateText.loading);
            $.get($buttonWrapper.find('a').attr('href'), function(data) {
                var posts = $('.listing-wrapper', data).html(),
                    $newButton = $('.load-more-wrapper a', data);
                $buttonWrapper.addClass('adding');
                setTimeout(function() { $buttonWrapper.removeClass('adding'); }, 1000);
                $postsWrapper.trigger('postsLoaded', posts);
                if ($newButton.length) { $buttonWrapper.find('a').replaceWith($newButton); } else { $buttonWrapper.find('a').remove(); }
            }).fail(function() { $buttonWrapper.find('a').text(stateText.error); });
        });
    },
    extendedLoadMore: function() {
        var $buttonWrapper = $('.extended-load-more-wrapper'),
            $postsWrapper = $('.cards-list'),
            $lightbox = $postsWrapper.closest('.container').siblings('.lightbox-slider'),
            stateText = { normal: 'Load more', loading: 'Loading...', error: 'Error' },
            paged = 1,
            cat = null;
        $('.extended-load-more-wrapper, body.page .filters').on('click', 'a', function(e) {
            e.preventDefault();
            var $this = $(this),
                isLoadMore = $this.closest('.extended-load-more-wrapper').length,
                requestData = { action: 'cards_loadmore' },
                cat_id;
            if (isLoadMore) {
                $buttonWrapper.find('a').text(stateText.loading);
                paged++;
            } else {
                $postsWrapper.addClass('loading');
                $this.closest('.filters').find('li').removeClass('active');
                paged = 1;
                requestData.paged = paged;
                cat_id = parseInt($this.attr('data-option-id'));
                if (cat_id > 0) { cat = cat_id; } else { cat = null; }
            }
            requestData.paged = paged;
            if (cat !== null) { requestData.a_cat = cat; }
            $.get({
                url: SiteVars.ajaxUrl,
                data: requestData,
                dataType: 'html',
                success: function(response) {
                    var $response = $('<div>' + response + '</div>'),
                        posts = $('.cards-list', $response).html(),
                        lightbox = $('.lightbox-slider', $response).html(),
                        hasNextPage = $('.extended-load-more-wrapper', $response).length;
                    if (isLoadMore) {
                        $buttonWrapper.find('a').text(stateText.normal);
                        $postsWrapper.append(posts);
                        $lightbox.trigger('ajaxDone', [false, lightbox]);
                    } else {
                        $this.closest('li').addClass('active');
                        setTimeout(function() {
                            $postsWrapper.html(posts);
                            $postsWrapper.removeClass('loading');
                        }, 300);
                        $lightbox.trigger('ajaxDone', [true, lightbox]);
                    }
                    if (!hasNextPage) { $buttonWrapper.find('a').remove(); } else if (!$buttonWrapper.find('a').length) { $buttonWrapper.html('<a href="#">' + stateText.normal + '</a>'); } else { $buttonWrapper.find('a').text(stateText.normal); }
                },
                error: function() { isLoadMore && $buttonWrapper.find('a').text(stateText.error); }
            });
        });
    },
    masonry: function() {
        var $grid = $('.listing-wrapper').masonry({ itemSelector: 'article' });
        $grid.imagesLoaded().progress(function() { $grid.masonry('layout'); });
        setInterval(function() { $grid.masonry('layout'); }, 500);
        $grid.on('postsLoaded', function(e, posts) {
            var $posts = $(posts);
            $grid.append($posts).masonry('appended', $posts);
            setTimeout(function() { $grid.masonry('layout'); }, 750);
        });
    },
    searchFormToggle: function() {
        var $form = $('.search-form-wrapper'),
            $openButton = $('.sf-open'),
            $closeButton = $('.sf-close'),
            $body = $('body');
        if ($form.length && $openButton.length) {
            $openButton.on('click', function(e) {
                e.preventDefault();
                $form.css('top', $openButton.offset().top + 'px');
                $form.fadeIn(500);
                $body.addClass('dim-overlay');
            });
            $closeButton.on('click', function(e) {
                e.preventDefault();
                $form.hide();
                $body.removeClass('dim-overlay');
            });
            $(window).on('resize orientationchange', function() { $form.css('top', $openButton.offset().top + 'px'); });
        }
    },
    mobileFiltersToggle: function() {
        var $source = $('.filters-wrapper:not(.mobile-filters-wrapper)'),
            $target = $('.mobile-filters-wrapper'),
            $body = $('body');
        if ($source.length && $target.length) {
            $target.find('.filters').html($source.find('.filters').html());
            $source.find('.f-mobile-button').on('click', function(e) {
                e.preventDefault();
                $target.css('top', $source.offset().top + 'px');
                $target.slideDown(500);
                $body.addClass('filters-open');
            });
            $target.find('.f-mobile-button, .self-close a').on('click', function(e) {
                e.preventDefault();
                $target.slideUp(500);
                $body.removeClass('filters-open');
            });
            $(window).on('resize orientationchange', function() { $target.css('top', $source.offset().top + 'px'); });
            $target.find('.filters > li:not(.latest) > a').on('click', function(e) { e.preventDefault(); });
        }
    },
    videoInColumns: function() {
        var $vid = $('.ezcol-one-half.ezcol-last .wistia_responsive_padding'),
            $el = $vid.parent().children(':not(.wistia_responsive_padding)');
        if ($(window).width() > 991) {
            $el.css('padding-left', '95px');
            $el.parent().css('white-space', 'nowrap');
        } else {
            $el.removeAttr('style');
            $el.parent().removeAttr('style');
        }
    }
};

function showSlide(i) {
    var slider = document.getElementsByClassName('slick-initialized')[0];
    var slide = document.getElementById('1-box-slide-' + i);
    var slides = document.querySelectorAll('.slick-slide1');
    slides.forEach(function(sl) {
        sl.style.position = 'absolute';
        sl.style.left = '100vw';
    })
    slider.style.display = 'block';
    slide.style.left = 0
    indexSlide = i;
    setTimeout(function() { slider.style.opacity = 1; }, 1)

}
function nextSlide2() {
	var slide = document.querySelector('#slick-slide2' + indexSlide2);
    var slides = document.querySelectorAll('.slick-slide2');
    var next = (indexSlide2+1>slides.length)?1:(indexSlide2+1);
    var nextSlide = document.querySelector('#slick-slide2' + next);
    slides.forEach(function(s){
        s.style.left = '100%'
    });
    slide.style.left = 0;
    slide.style.transition = 'left .5s';
    slide.style.zIndex = 2;
    nextSlide.style.zIndex = 3;
    nextSlide.style.transition = 'left .5s';
    setTimeout(function() {
        slide.style.left = '-100%';
        nextSlide.style.left = '0';
    }, 1);
    setTimeout(function() {
        slide.style.transition = '';
        nextSlide.style.transition = '';
    }, 500);
    indexSlide2 = next;
    console.log(slide)

}
function prevSlide2() {
    var slide = document.querySelector('#slick-slide2' + indexSlide2);
    var slides = document.querySelectorAll('.slick-slide2');
    var next = (indexSlide2-1<1)?slides.length:(indexSlide2-1);
    var nextSlide = document.querySelector('#slick-slide2' + next);
    slides.forEach(function(s){
        s.style.left = '-100%'
    });
    slide.style.left = 0;
    slide.style.transition = 'left .5s';
    slide.style.zIndex = 2;
    nextSlide.style.zIndex = 3;
    nextSlide.style.transition = 'left .5s';
    setTimeout(function() {
        slide.style.left = '100%';
        nextSlide.style.left = '0';
    }, 1);
    setTimeout(function() {
        slide.style.transition = '';
        nextSlide.style.transition = '';
    }, 500);
    indexSlide2 = next;
    console.log(slide)
}
function nextSlide() {
    var slide = document.getElementById('1-box-slide-' + indexSlide);
    var slides = document.querySelectorAll('.slick-slide1');
    var next = (indexSlide + 1) > slides.length ? 1 : (indexSlide + 1);
    var slide2 = document.getElementById('1-box-slide-' + next);
    slide.style.transition = 'left .5s';
    slide.style.left = '-100vw';
    slide2.style.transition = 'left .5s';
    slide2.style.left = '0';
    setTimeout(function() {
        slide.style.transition = '';
        slide.style.left = '100vw';
    }, 500);
    indexSlide = next;
}

function prevSlide() {
    var slide = document.getElementById('1-box-slide-' + indexSlide);
    var slides = document.querySelectorAll('.slick-slide1');
    var next = (indexSlide - 1) > 1 ? (indexSlide - 1) : slides.length;
    var slide2 = document.getElementById('1-box-slide-' + next);
    slide2.style.left = '-100vw';
    slide2.style.transition = '';
    slide.style.transition = 'left .5s';
    slide.style.left = '100vw';
    setTimeout(function() {
        slide2.style.transition = 'left .5s';
        slide2.style.left = '0';
    }, 1);

    setTimeout(function() {
        slide.style.transition = '';
        slide.style.left = '100vw';
    }, 500);
    indexSlide = next;
}
var indexSlide = 1;
var indexSlide2 = 1;
$(document).ready(function() {
    Project.init();


    $('.lb-close-btn').on('click', function(e) {
        document.getElementsByClassName('slick-initialized')[0].style.display = 'none';
    })
});
$(window).resize(function() {
    Project.lightboxArrows();
    Project.videoInColumns();
});; /*! lazysizes - v3.0.0 */
! function(a, b) {
    var c = b(a, a.document);
    a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c)
}(window, function(a, b) {
    "use strict";
    if (b.getElementsByClassName) {
        var c, d = b.documentElement,
            e = a.Date,
            f = a.HTMLPictureElement,
            g = "addEventListener",
            h = "getAttribute",
            i = a[g],
            j = a.setTimeout,
            k = a.requestAnimationFrame || j,
            l = a.requestIdleCallback,
            m = /^picture$/i,
            n = ["load", "error", "lazyincluded", "_lazyloaded"],
            o = {},
            p = Array.prototype.forEach,
            q = function(a, b) { return o[b] || (o[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), o[b].test(a[h]("class") || "") && o[b] },
            r = function(a, b) { q(a, b) || a.setAttribute("class", (a[h]("class") || "").trim() + " " + b) },
            s = function(a, b) {
                var c;
                (c = q(a, b)) && a.setAttribute("class", (a[h]("class") || "").replace(c, " "))
            },
            t = function(a, b, c) {
                var d = c ? g : "removeEventListener";
                c && t(a, b), n.forEach(function(c) { a[d](c, b) })
            },
            u = function(a, c, d, e, f) { var g = b.createEvent("CustomEvent"); return g.initCustomEvent(c, !e, !f, d || {}), a.dispatchEvent(g), g },
            v = function(b, d) { var e;!f && (e = a.picturefill || c.pf) ? e({ reevaluate: !0, elements: [b] }) : d && d.src && (b.src = d.src) },
            w = function(a, b) { return (getComputedStyle(a, null) || {})[b] },
            x = function(a, b, d) { for (d = d || a.offsetWidth; d < c.minSize && b && !a._lazysizesWidth;) d = b.offsetWidth, b = b.parentNode; return d },
            y = function() {
                var a, c, d = [],
                    e = [],
                    f = d,
                    g = function() {
                        var b = f;
                        for (f = d.length ? e : d, a = !0, c = !1; b.length;) b.shift()();
                        a = !1
                    },
                    h = function(d, e) { a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? j : k)(g))) };
                return h._lsFlush = g, h
            }(),
            z = function(a, b) {
                return b ? function() { y(a) } : function() {
                    var b = this,
                        c = arguments;
                    y(function() { a.apply(b, c) })
                }
            },
            A = function(a) {
                var b, c = 0,
                    d = 125,
                    f = 666,
                    g = f,
                    h = function() { b = !1, c = e.now(), a() },
                    i = l ? function() { l(h, { timeout: g }), g !== f && (g = f) } : z(function() { j(h) }, !0);
                return function(a) {
                    var f;
                    (a = a === !0) && (g = 44), b || (b = !0, f = d - (e.now() - c), 0 > f && (f = 0), a || 9 > f && l ? i() : j(i, f))
                }
            },
            B = function(a) {
                var b, c, d = 99,
                    f = function() { b = null, a() },
                    g = function() {
                        var a = e.now() - c;
                        d > a ? j(g, d - a) : (l || f)(f)
                    };
                return function() { c = e.now(), b || (b = j(g, d)) }
            },
            C = function() {
                var f, k, l, n, o, x, C, E, F, G, H, I, J, K, L, M = /^img$/i,
                    N = /^iframe$/i,
                    O = "onscroll" in a && !/glebot/.test(navigator.userAgent),
                    P = 0,
                    Q = 0,
                    R = 0,
                    S = -1,
                    T = function(a) { R--, a && a.target && t(a.target, T), (!a || 0 > R || !a.target) && (R = 0) },
                    U = function(a, c) {
                        var e, f = a,
                            g = "hidden" == w(b.body, "visibility") || "hidden" != w(a, "visibility");
                        for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != d;) g = (w(f, "opacity") || 1) > 0, g && "visible" != w(f, "overflow") && (e = f.getBoundingClientRect(), g = H > e.left && G < e.right && I > e.top - 1 && F < e.bottom + 1);
                        return g
                    },
                    V = function() {
                        var a, e, g, i, j, m, n, p, q;
                        if ((o = c.loadMode) && 8 > R && (a = f.length)) {
                            e = 0, S++, null == K && ("expand" in c || (c.expand = d.clientHeight > 500 && d.clientWidth > 500 ? 500 : 370), J = c.expand, K = J * c.expFactor), K > Q && 1 > R && S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S > 1 && 6 > R ? J : P;
                            for (; a > e; e++)
                                if (f[e] && !f[e]._lazyRace)
                                    if (O)
                                        if ((p = f[e][h]("data-expand")) && (m = 1 * p) || (m = Q), q !== m && (C = innerWidth + m * L, E = innerHeight + m, n = -1 * m, q = m), g = f[e].getBoundingClientRect(), (I = g.bottom) >= n && (F = g.top) <= E && (H = g.right) >= n * L && (G = g.left) <= C && (I || H || G || F) && (l && 3 > R && !p && (3 > o || 4 > S) || U(f[e], m))) { if (ba(f[e]), j = !0, R > 9) break } else !j && l && !i && 4 > R && 4 > S && o > 2 && (k[0] || c.preloadAfterLoad) && (k[0] || !p && (I || H || G || F || "auto" != f[e][h](c.sizesAttr))) && (i = k[0] || f[e]);
                            else ba(f[e]);
                            i && !j && ba(i)
                        }
                    },
                    W = A(V),
                    X = function(a) { r(a.target, c.loadedClass), s(a.target, c.loadingClass), t(a.target, Z) },
                    Y = z(X),
                    Z = function(a) { Y({ target: a.target }) },
                    $ = function(a, b) { try { a.contentWindow.location.replace(b) } catch (c) { a.src = b } },
                    _ = function(a) {
                        var b, d, e = a[h](c.srcsetAttr);
                        (b = c.customMedia[a[h]("data-media") || a[h]("media")]) && a.setAttribute("media", b), e && a.setAttribute("srcset", e), b && (d = a.parentNode, d.insertBefore(a.cloneNode(), a), d.removeChild(a))
                    },
                    aa = z(function(a, b, d, e, f) {
                        var g, i, k, l, o, q;
                        (o = u(a, "lazybeforeunveil", b)).defaultPrevented || (e && (d ? r(a, c.autosizesClass) : a.setAttribute("sizes", e)), i = a[h](c.srcsetAttr), g = a[h](c.srcAttr), f && (k = a.parentNode, l = k && m.test(k.nodeName || "")), q = b.firesLoad || "src" in a && (i || g || l), o = { target: a }, q && (t(a, T, !0), clearTimeout(n), n = j(T, 2500), r(a, c.loadingClass), t(a, Z, !0)), l && p.call(k.getElementsByTagName("source"), _), i ? a.setAttribute("srcset", i) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), (i || l) && v(a, { src: g })), a._lazyRace && delete a._lazyRace, s(a, c.lazyClass), y(function() {
                            (!q || a.complete && a.naturalWidth > 1) && (q ? T(o) : R--, X(o))
                        }, !0)
                    }),
                    ba = function(a) {
                        var b, d = M.test(a.nodeName),
                            e = d && (a[h](c.sizesAttr) || a[h]("sizes")),
                            f = "auto" == e;
                        (!f && l || !d || !a.src && !a.srcset || a.complete || q(a, c.errorClass)) && (b = u(a, "lazyunveilread").detail, f && D.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, d))
                    },
                    ca = function() {
                        if (!l) {
                            if (e.now() - x < 999) return void j(ca, 999);
                            var a = B(function() { c.loadMode = 3, W() });
                            l = !0, c.loadMode = 3, W(), i("scroll", function() { 3 == c.loadMode && (c.loadMode = 2), a() }, !0)
                        }
                    };
                return { _: function() { x = e.now(), f = b.getElementsByClassName(c.lazyClass), k = b.getElementsByClassName(c.lazyClass + " " + c.preloadClass), L = c.hFac, i("scroll", W, !0), i("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(d, { childList: !0, subtree: !0, attributes: !0 }) : (d[g]("DOMNodeInserted", W, !0), d[g]("DOMAttrModified", W, !0), setInterval(W, 999)), i("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(a) { b[g](a, W, !0) }), /d$|^c/.test(b.readyState) ? ca() : (i("load", ca), b[g]("DOMContentLoaded", W), j(ca, 2e4)), f.length ? (V(), y._lsFlush()) : W() }, checkElems: W, unveil: ba }
            }(),
            D = function() {
                var a, d = z(function(a, b, c, d) {
                        var e, f, g;
                        if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), m.test(b.nodeName || ""))
                            for (e = b.getElementsByTagName("source"), f = 0, g = e.length; g > f; f++) e[f].setAttribute("sizes", d);
                        c.detail.dataAttr || v(a, c.detail)
                    }),
                    e = function(a, b, c) {
                        var e, f = a.parentNode;
                        f && (c = x(a, f, c), e = u(a, "lazybeforesizes", { width: c, dataAttr: !!b }), e.defaultPrevented || (c = e.detail.width, c && c !== a._lazysizesWidth && d(a, f, e, c)))
                    },
                    f = function() {
                        var b, c = a.length;
                        if (c)
                            for (b = 0; c > b; b++) e(a[b])
                    },
                    g = B(f);
                return { _: function() { a = b.getElementsByClassName(c.autosizesClass), i("resize", g) }, checkElems: g, updateElem: e }
            }(),
            E = function() { E.i || (E.i = !0, D._(), C._()) };
        return function() {
            var b, d = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2 };
            c = a.lazySizesConfig || a.lazysizesConfig || {};
            for (b in d) b in c || (c[b] = d[b]);
            a.lazySizesConfig = c, j(function() { c.init && E() })
        }(), { cfg: c, autoSizer: D, loader: C, init: E, uP: v, aC: r, rC: s, hC: q, fire: u, gW: x, rAF: y }
    }
});;
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) { if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f); if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d) }
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d.secret || d.message || d.value)
                    if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                        var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                            k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                        for (e = 0; e < k.length; e++) k[e].style.display = "none";
                        for (e = 0; e < j.length; e++)
                            if (f = j[e], c.source === f.contentWindow) {
                                if (f.removeAttribute("style"), "height" === d.message) {
                                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                    else if (~~g < 200) g = 200;
                                    f.height = g
                                }
                                if ("link" === d.message)
                                    if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                        if (b.activeElement === f) a.top.location.href = d.value
                            } else;
                    }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);