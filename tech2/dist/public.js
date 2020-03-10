$(document).ready(function() { $(document).on('click', '.pageArticlesContainer .article-items-loadmore .load-more', function(e) { e.preventDefault(); var $loadmoreButton = $(this); var pageId = $loadmoreButton.attr('data-page-id'); var pageIndex = $loadmoreButton.attr('data-page-index'); if (!$('html').hasClass('admin-mode')) { data = { pageId: pageId, pageIndex: pageIndex };
            api.publicCall('default', 'Article', 'loadMore', JSON.stringify(data), function(response) { if (response.type == 1) { $('.pageArticlesContainer .article-items').append(response.data.html);
                    $loadmoreButton.attr('data-article-index', response.data.nextPageIndex); if (response.data.loadmore) { $loadmoreButton.parent().removeClass('hide') } else { $loadmoreButton.parent().addClass('hide') } } }) } }) })
var ucecommerce = {
    cart: null,
    productCountInCart: 0,
    loadCart: function() {
        var document = $('body');
        Ecwid.OnCartChanged.add(function(cart) {
            ucecommerce.cart = cart;
            if (cart && cart.productsQuantity !== undefined) { ucecommerce.productCountInCart = cart.productsQuantity } else { ucecommerce.productCountInCart = 0 }
            document.trigger('ecommerceUpdateCartCount')
        });
        document.trigger('ecommerceUpdateCartCount')
    },
    formatAsMoney: function(price) {
        price = parseFloat(price);
        if (window.ecommercePriceFormat !== undefined) {
            let ecommercePriceFormat = window.ecommercePriceFormat;
            price = ucecommerce.formatMoney(price, ecommercePriceFormat.currencyPrecision, ecommercePriceFormat.currencyDecimalSeparator, ecommercePriceFormat.currencyGroupSeparator);
            if (ecommercePriceFormat.currencyTruncateZeroFractional && parseInt(ecommercePriceFormat.currencyPrecision) > 0) { if (price.indexOf(ecommercePriceFormat.currencyDecimalSeparator) !== -1) { price = price.toString().replace(/0+$/, '');
                    price = price.toString().replace(new RegExp('\\' + ecommercePriceFormat.currencyDecimalSeparator + '$'), '') } }
            if (ecommercePriceFormat.currencyPrefix.length > 0) { price = ecommercePriceFormat.currencyPrefix + ' ' + price }
            if (ecommercePriceFormat.currencySuffix.length > 0) { price = price + ' ' + ecommercePriceFormat.currencySuffix }
        }
        return price
    },
    formatMoney: function(price, decimals = 2, decimalSeparator = '.', thousandSeparator = ',') { var s = price < 0 ? '-' : '',
            i = String(parseInt(price = Math.abs(Number(price) || 0).toFixed(decimals))),
            j = (j = i.length) > 3 ? j % 3 : 0; return s + (j ? i.substr(0, j) + thousandSeparator : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandSeparator) + (decimals ? decimalSeparator + Math.abs(price - i).toFixed(decimals).slice(2) : '') },
    formatAsWeight: function(weight, decimals = 2, decimalSeparator = '.', thousandSeparator = ',') {
        weight = parseFloat(weight);
        if (window.ecommercePriceFormat !== undefined) {
            let ecommercePriceFormat = window.ecommercePriceFormat
            var countDecimals = function(value) { if (Math.floor(value) === value) return 0; return value.toString().split(".")[1].length || 0 };
            weight = ucecommerce.formatMoney(weight, countDecimals(weight), ecommercePriceFormat.weightDecimalSeparator, ecommercePriceFormat.weightGroupSeparator);
            if (ecommercePriceFormat.weightTruncateZeroFractional) { if (weight.indexOf(ecommercePriceFormat.weightDecimalSeparator) !== -1) { weight = weight.toString().replace(/0+$/, '');
                    weight = weight.toString().replace(new RegExp('\\' + ecommercePriceFormat.weightDecimalSeparator + '$'), '') } }
            var units = { KILOGRAM: 'kg', POUND: 'lbs', OUNCE: 'oz', GRAM: 'g', CARAT: 'ct' };
            if (units[ecommercePriceFormat.weightUnit] !== undefined) { return weight + ' ' + units[ecommercePriceFormat.weightUnit] }
        }
        return weight
    },
    addProductToCart: function(productId, quantity = 1, options = null, firstTime = !1, evt) {
        if (window.hasActiveStore) {
            let openedCart = !1;
            if (evt) { let button = evt.target.closest('.can-add-product'); if (!Ecwid.getStoreConfiguration().openBagOnAddition && button && !button.classList.contains('thatClass')) { evt.target.closest('.can-add-product').classList.add("added-product");
                    setTimeout(function() { evt.target.closest('.can-add-product').classList.remove('added-product') }, 5000) } }
            if (options === null) {
                if (!Ecwid.getStoreConfiguration().openBagOnAddition && !firstTime) { if (ucecommerce.cart && ucecommerce.cart.items && ucecommerce.cart.items.length) { ucecommerce.cart.items.forEach(item => { if (parseInt(productId) === parseInt(item.product.id)) { openedCart = !0 } }) } else { openedCart = !0 } }
                if (openedCart) { Ecwid.openPage('cart') } else { Ecwid.Cart.addProduct(parseFloat(productId)) }
            } else {
                var product = { id: parseFloat(productId), quantity: quantity, options: options, };
                if (undefined !== Ecwid.Cart.addProduct) {
                    if (!Ecwid.getStoreConfiguration().openBagOnAddition && !firstTime) { if (ucecommerce.cart && ucecommerce.cart.items && ucecommerce.cart.items.length) { ucecommerce.cart.items.forEach(item => { if (parseInt(productId) === parseInt(item.product.id)) { openedCart = !0 } }) } else { openedCart = !0 } }
                    if (openedCart) { Ecwid.openPage('cart') } else { Ecwid.Cart.addProduct(product) }
                }
            }
        }
    },
    doesNotHaveActiveEcommercer() { delete confirmData.buttons.discard;
        confirmData.message = window.activeStoreErrorMeesage;
        confirmData.buttons.confirm.label = window.activeStoreErrorMeesageOk;
        confirmData.buttons.confirm['function'] = function() { return !1 };
        confirmPopup(confirmData) },
    openCart: function(fromCartElement = !1) { if (window.hasActiveStore) { if (fromCartElement) { Ecwid.openPage('cart') } else { if (window.Ecwid !== undefined) { var checkoutConfig = Ecwid.getStoreConfiguration(); if (checkoutConfig.openBagOnAddition !== undefined && checkoutConfig.openBagOnAddition) { Ecwid.openPage('cart') } } } } else { ucecommerce.doesNotHaveActiveEcommercer() } },
    scrollPosition: null,
    OpenCloseCart: function() {
        if (window.location.hash === '#!/~/cart') {
            if (ucecommerce.scrollPosition === null) { ucecommerce.scrollPosition = $(document).scrollTop() }
            ucecommerce.stopBodyScrolling(!0)
        } else { ucecommerce.stopBodyScrolling(!1) }
    },
    stopBodyScrolling: function(bool) {
        if (window.location.hash.indexOf('#filters=') !== -1 || window.location.hash.indexOf('&filters=') !== -1) { return !1 }
        var bodyScrollTop = ucecommerce.scrollPosition;
        document.body.style.overflow = (bool) ? 'overflow' : '';
        document.body.style.position = (bool) ? 'fixed' : '';
        document.body.style.top = (bool) ? -bodyScrollTop + 'px' : '';
        if (!bool) { $(document).scrollTop(bodyScrollTop);
            ucecommerce.scrollPosition = null }
    },
};
$(document).ready(function() { ucecommerce.OpenCloseCart() });
$(window).on('hashchange', function() { ucecommerce.OpenCloseCart() })
$('.accordion-item .accordion-item-title-wrapper').click(function(e) { toggleModuleAccordion(e) });

function toggleModuleAccordion(e) { var minusIcon = 'uci-minus-2'; var plusIcon = 'uci-plus-2'; var accordionElement = $(e.target).parents('.accordion-item'); var accordionDescription = accordionElement.find('.accordion-item-description'); var accordionSwitcher = accordionElement.find('.icon-container i'); if (accordionDescription.hasClass('collapsed')) { accordionDescription.removeClass('collapsed');
        accordionDescription.find('.description-container').slideUp(200, 'linear'); if (!e.target.classList.contains('custom-icon')) { accordionSwitcher.toggleClass(minusIcon + ' ' + plusIcon) } } else if (!accordionDescription.hasClass('collapsed')) { accordionDescription.addClass('collapsed');
        accordionDescription.find('.description-container').slideDown(200, 'linear'); if (!e.target.classList.contains('custom-icon')) { accordionSwitcher.toggleClass(plusIcon + ' ' + minusIcon) } } }
(function() {
    var masonryInits = [];

    function initializeMasonry(moduleId) { if ($.fn.masonry) { masonryInits[moduleId] = $('[data-module-id="' + moduleId + '"] .article-items').masonry({ initLayout: !1, itemSelector: '.article2-item' });
            masonryInits[moduleId].one('layoutComplete', function() { masonryInits[moduleId].masonry() });
            masonryInits[moduleId].masonry() } }

    function getArticles(button, isFirst) {
        var $loadmoreButton = $(button);
        var moduleId = $loadmoreButton.attr('data-module-id');
        var pageIndex = isFirst ? '1' : $loadmoreButton.attr('data-page-index');
        var categoryId = $loadmoreButton.attr('data-category-id');
        var orderBy = $loadmoreButton.attr('data-orderBy');
        $loadmoreButton.parent().addClass('hide');
        $('[data-module-id="' + moduleId + '"] .article-loading').children().addClass('loading-spinner');
        if (isFirst) { var loadingStyle = $('[data-module-id="' + moduleId + '"] .article-items').css('margin');
            $('[data-module-id="' + moduleId + '"] .article-items').css('margin', 'unset') }
        if (!$('html').hasClass('admin-mode')) {
            var data = { moduleId: moduleId, pageIndex: pageIndex, currentLangId: window.currentLanguageObject.id, categoryId: categoryId, orderBy: orderBy, };
            $loadmoreButton.addClass('disabled');
            api.publicCall('default', 'ModuleArticle', 'loadMore', JSON.stringify(data), function(response) {
                if (response.type == 1) {
                    var elements = $(response.data.html);
                    if (elements.length && elements.hasClass('article2-item')) {
                        if (!masonryInits[moduleId]) { initializeMasonry(moduleId) }
                        masonryInits[moduleId].append(elements).masonry('appended', elements);
                        masonryInits[moduleId].masonry();
                        masonryInits[moduleId].imagesLoaded(function() { masonryInits[moduleId].masonry() })
                    } else { $('[data-module-id="' + moduleId + '"] .article-items').append(elements) }
                    $loadmoreButton.attr('data-page-index', response.data.nextPageIndex);
                    if (response.data.loadmore) { $loadmoreButton.parent().removeClass('hide') } else { $loadmoreButton.parent().addClass('hide') }
                }
                $('[data-module-id="' + moduleId + '"] .article-loading').children().removeClass('loading-spinner');
                if (isFirst) { var articlesContainer = document.querySelector('[data-module-id="' + moduleId + '"] .article-items');
                    articlesContainer.style.margin = loadingStyle; var loadedArticleImagesCount = 0; var articles = Array.prototype.filter.call(articlesContainer.children, article => article.querySelector('img')); for (let article of articles) { var articleImgSelector = article.querySelector('img');
                        src = articleImgSelector.src; var img = new Image();
                        img.src = src;
                        img.onload = () => { if (++loadedArticleImagesCount === articles.length) { window.UcAnchor.checkAndScrollAnchor(!0) } };
                        img.onerror = () => { if (++loadedArticleImagesCount === articles.length) { window.UcAnchor.checkAndScrollAnchor(!0) } } } }
                $loadmoreButton.removeClass('disabled')
            }, 'GET')
        }
    }
    $(window).on('load', function() {
        if ($('.mainRow').find('.article-items.masonry').length && $('.mainRow').find('.article-items.standard').length) { $('.article-items.standard').height('auto') }
        $(document).on('click', '.ModuleArticle .article-items-loadmore .load-more', function(e) { e.preventDefault();
            getArticles(this) })
    });
    $(document).ready(function() { $('.ModuleArticle .article-items-loadmore .load-more').each(function() { getArticles(this, 1) }) })
})()
$(document).on('ready', function() {
    if ($('html').hasClass('admin-mode')) { return !1 }
    $('.ModuleArticleCategories [data-stretch-labels]').each(function() { if ($(this).data('stretch-labels')) { $(this).parent().addClass('stretch-labels') } })
})
$(document).ready(function() {
    if ($('.mainRow').find('.article-items.masonry').length && $('.mainRow').find('.article-items.standard').length) { $('.article-items.standard').height('auto') }
    $('.ModuleArticleRelated .article-items-loadmore .load-more').each(function() { loadmoreRelatedArticles($(this)) });
    $('.ModuleArticleRelated .article-items-loadmore .load-more').click(function(e) { e.preventDefault();
        loadmoreRelatedArticles($(this)) });

    function loadmoreRelatedArticles($loadmoreButton) {
        var moduleId = $loadmoreButton.attr('data-module-id');
        var pageIndex = $loadmoreButton.attr('data-page-index');
        var articleId = $loadmoreButton.attr('data-article-id');
        $loadmoreButton.parent().addClass('hide');
        $('[data-module-id="' + moduleId + '"] .article-loading').children().addClass('loading-spinner');
        if (!$('html').hasClass('admin-mode')) {
            data = { moduleId: moduleId, pageIndex: pageIndex, currentLangId: window.currentLanguageObject.id, articleId: articleId };
            $loadmoreButton.addClass('disabled');
            api.publicCall('default', 'ModuleArticleRelated', 'loadMore', JSON.stringify(data), function(response) {
                if (response.type == 1) {
                    var elements = $(response.data.html);
                    if ($('[data-module-id="' + moduleId + '"] .article-items .article2-item').length) {
                        setTimeout(function() {
                            if ($.fn.masonry) {
                                if ($('.article-items .article2-item').length) { var masonryInit = $('.article-items').masonry({ initLayout: !1, itemSelector: '.article2-item' });
                                    masonryInit.one('layoutComplete', function() { masonryInit.masonry() });
                                    masonryInit.masonry() }
                                masonryInit.append(elements).masonry('appended', elements);
                                masonryInit.masonry()
                            }
                        }, 200)
                    } else { $('[data-module-id="' + moduleId + '"] .article-items').append(elements) }
                    $loadmoreButton.attr('data-page-index', response.data.nextPageIndex);
                    if (response.data.loadmore) { $loadmoreButton.parent().removeClass('hide') } else { $loadmoreButton.parent().addClass('hide') }
                }
                $('[data-module-id="' + moduleId + '"] .article-loading').children().removeClass('loading-spinner');
                $loadmoreButton.removeClass('disabled')
            })
        }
    }
})
$(document).ready(function() { var articleId = $('.current-article').data('id');
    $('.single-article-hits').addClass('loading-spinner'); if (articleId) { api.publicCall('default', 'ModuleArticleSingle', 'getSingleArticleHits', JSON.stringify({ articleId: articleId }), function(response) { if (response.type === 1) { $('.single-article-hits').text(response.data.hits);
                $('.single-article-hits').removeClass('loading-spinner') } }, 'GET') } })



var countdown = {};
countdown.getTimeRemaining = function(endTime) {
    var t = endTime.split(/[- :]/);
    var d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
    t = d.getTime() - (new Date()).getTime();
    if (t <= 0 || isNaN(t)) { return { 'total': t, 'days': '00', 'hours': '00', 'minutes': '00', 'seconds': '00' } }
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return { 'total': t, 'days': days < 10 ? ('0' + days).slice(-2) : days, 'hours': ('0' + hours).slice(-2), 'minutes': ('0' + minutes).slice(-2), 'seconds': ('0' + seconds).slice(-2) }
};
countdown.initializeClock = function(id, endTime) {
    var clock = document.getElementById(id);
    var timeInterval = setInterval(function() {
        var t = countdown.getTimeRemaining(endTime);
        var className = 'hide';
        if (clock) {
            var end = clock.querySelector('.after-countdown-ends');
            var start = clock.querySelector('.after-countdown-starts');
            if (isNaN(t.total) || t.total <= 0) {
                if (end) { end.classList.remove(className) }
                if (start) { start.classList.add(className) }
                clearInterval(timeInterval)
            } else {
                clock.querySelector('.days').textContent = t.days;
                clock.querySelector('.hours').textContent = t.hours;
                clock.querySelector('.minutes').textContent = t.minutes;
                clock.querySelector('.seconds').textContent = t.seconds;
                if (end) { end.classList.add(className) }
                if (start) { start.classList.remove(className) }
            }
        }
    }, 1000)
};
document.addEventListener("DOMContentLoaded", function() {
    var countdowns = document.querySelectorAll('.countdown-module-container');
    countdowns.forEach((index) => {
        var id = index.getAttribute('id');
        var data = index.getAttribute('data-end-date');
        countdown.initializeClock(id, data);
        var paddingId = `${id}padding`;
        var padding = document.getElementById(paddingId)
        if (window.winWidth < 810 && padding.value < 15) { var colons = document.getElementsByClassName(id); for (var colon of colons) { colon.classList.add("padding") } }
    })
})


$(document).ready(function() {
    if ($('html.admin-mode').length === 0) { $('.ModuleEcommerceCart .icon').click(function(e) { ucecommerce.openCart(!0);
            e.stopPropagation(); return !1 }) }
    $('body').off('ecommerceUpdateCartCount').on('ecommerceUpdateCartCount', function() { $('.ModuleEcommerceCart .cart-badge-count').text((ucecommerce.productCountInCart) ? ucecommerce.productCountInCart : 0) })
})
var ecommerceCategoriesBodyClickEventAdded = !1;
var ecommerceCategoriesBodyClickEvent = function(e) {
    if (!$(e.target).hasClass('category-item-title')) { $('.sub-categories-container.active').removeClass('active');
        $('.sub-categories-container').parents('.uc-row').css({ "z-index": "" });
        $('.sub-categories-container').parents('.main-rows').css({ "overflow-x": "" }) }
    $('.ecommerce-burger-categories-items').find('.category-items-container.active').removeClass('active');
    $('.ecommerce-burger-categories-items').parents('.uc-row').css({ "z-index": "" });
    $("body").unbind("click", ecommerceCategoriesBodyClickEvent);
    ecommerceCategoriesBodyClickEventAdded = !1
};
$(document).ready(function() {
    var ModuleEcommerceCategories = $('.module.ModuleEcommerceCategories');
    var ModuleCategorieParentColumn = $('.module-container.ModuleEcommerceCategories').closest('.uc-row').find('.column')[0];
    if (ModuleEcommerceCategories.children().hasClass('enabledStretch')) { ModuleEcommerceCategories.addClass('enabledStretch') } else { ModuleEcommerceCategories.removeClass('enabledStretch') }
    $('.ModuleEcommerceCategories [data-stretch-labels]').each(function() { if ($(this).data('stretch-labels')) { $(this).parent().addClass('stretch-labels') } });
    $('.ecommerce-burger-categories-items').on('click', function(event) {
        event.stopPropagation();
        var container = $(this).find('.category-items-container');
        if (container.hasClass('active')) { container.removeClass('active');
            document.querySelector('.ecommerce-burger-categories-items').closest('.uc-row').classList.remove('row-forward');
            $('.ecommerce-burger-categories-items').parents('.uc-row').css({ "z-index": "" });
            $('.sub-categories-container').parents('.main-rows').css({ "overflow-x": "" }) } else { $('.ecommerce-burger-categories-items').find('.category-items-container.active').removeClass('active');
            container.addClass('active');
            event.target.closest('.column').style.zIndex = "4";
            $('.ecommerce-burger-categories-items').parents('.uc-row').css({ "z-index": "3" }) }
        if (ecommerceCategoriesBodyClickEventAdded === !1) { ecommerceCategoriesBodyClickEventAdded = !0;
            $("body").bind("click", ecommerceCategoriesBodyClickEvent) }
    });
    if (ModuleCategorieParentColumn) { $(ModuleCategorieParentColumn).css('z-index', '4') }
    if (window.isMobile || window.isTablet) { $('.ecommerce-horizontal-categories-items').closest('.header-and-main-rows').css({ "cursor": "pointer" }) }
});
initEcommerceSubcategories = function(moduleId, layout, on) {
    var clickDevice = "click"
    var hoverDevice = "mouseenter"
    if (window.navigator.userAgent.includes('iPhone') || window.navigator.userAgent.includes('iPad')) { clickDevice = "mouseenter" } else if (window.navigator.userAgent.includes('Android')) { hoverDevice = "click" }
    if (on === 'onClick') {
        $('#' + moduleId + ' .category-item-body').on(clickDevice, function(e) {
            var container = $(this).find('.sub-categories-container');
            if (container.length && !container.hasClass('active')) {
                $('.sub-categories-container.active').removeClass('active');
                container.addClass('active');
                container.parents('.uc-row').css({ "z-index": "3" });
                e.target.closest('.column').style.zIndex = "4";
                document.querySelector('.sub-categories-container').closest('.uc-row').classList.add('row-forward');
                if (window.isMobile || window.isTablet) { container.parents('.main-rows').css({ "overflow-x": "visible" }) }
                if (ecommerceCategoriesBodyClickEventAdded === !1) { ecommerceCategoriesBodyClickEventAdded = !0;
                    $("body").bind("click", ecommerceCategoriesBodyClickEvent) }
                return !1
            }
            return !0
        })
    } else if (on === 'onHover') {
        $('#' + moduleId + ' .category-item').on(hoverDevice, function(e) {
            var container = $(this).find('.sub-categories-container');
            if (container.length && !container.hasClass('active')) { $('.sub-categories-container.active').removeClass('active');
                container.addClass('active');
                e.target.closest('.column').style.zIndex = "4";
                container.parents('.main-rows').css({ "overflow-x": "visible" });
                document.querySelector('.sub-categories-container').closest('.uc-row').classList.add('row-forward'); return !1 }
            return !0
        }).mouseleave(function() {
            var container = $(this).find('.sub-categories-container');
            if (container.length && container.hasClass('active')) { setTimeout(function() { container.removeClass('active');
                    container.parents('.main-rows').css({ "overflow-x": "" });
                    document.querySelector('.sub-categories-container').closest('.uc-row').classList.remove('row-forward'); return !1 }, 300) }
            return !0
        })
    }
};
$('div.category-item').on('mouseenter', (e) => {
    var currentItem = $(e.currentTarget);
    var categoryModule = currentItem.closest('.module.ModuleEcommerceCategories');
    var currentNavChild = $(currentItem.find('.sub-categories-container'));
    var moduleWidth = categoryModule.width();
    var moduleOffsetLeft = categoryModule.offset().left;
    if (currentNavChild.length) {
        var currentChildWidth = currentNavChild.width();
        var currentChildLeft = currentNavChild.offset().left;
        var currentChildRight = window.outerWidth - moduleWidth - moduleOffsetLeft;
        if (currentChildRight < currentChildWidth) {
            if (currentNavChild.hasClass('right')) { currentNavChild.removeClass('right') }
            currentNavChild.addClass('left')
        } else { currentNavChild.removeClass('left') }
    }
})
var ecommerceProductModule = {};
ecommerceProductModule.product = [];
ecommerceProductModule.getUpdatedPrice = function(options, price) {
    var productPrice = price;
    if (options !== undefined && options.length > 0) { options.forEach((option) => { if (option.selectedChoice !== "" && option.selectedChoice !== undefined && option.selectedChoice !== null && option.choices !== undefined) { if (typeof(option.selectedChoice) === 'object') { option.selectedChoice.forEach((optionIndex) => { if (option.choices[optionIndex].priceModifierType === 'PERCENT') { price += (option.choices[optionIndex].priceModifier * productPrice) / 100 } else { price += option.choices[optionIndex].priceModifier } }) } else { if (option.choices[option.selectedChoice].priceModifierType === 'PERCENT') { price += (option.choices[option.selectedChoice].priceModifier * productPrice) / 100 } else { price += option.choices[option.selectedChoice].priceModifier } } } }) }
    return price
};
ecommerceProductModule.updateVariantData = function(product, combination, moduleId) {
    var price = 0;
    if (product) {
        var price = (combination !== !1 && combination.price !== undefined) ? combination.price : product.price;
        price = ecommerceProductModule.getUpdatedPrice(product.options, price);
        var moduleSelector = '#module-ecommerce-product-' + moduleId;
        var bulkDiscountContainer = '#module-ecommerce-product-' + moduleId + ' .ecommerce-product-bulkdiscounts-container';
        if ($(bulkDiscountContainer)) {
            var label = $(bulkDiscountContainer).data('label');
            var wholesalePrices = (combination !== !1 && combination.wholesalePrices !== undefined) ? combination.wholesalePrices : product.wholesalePrices;
            var html = '';
            if (wholesalePrices && wholesalePrices.length > 0) { html = '<div class="ecommerce-product-bulkdiscounts">';
                wholesalePrices.forEach((wholesalePrice, index) => { var className = (index != (wholesalePrices.length - 1)) ? 'ecommerce-product-bulkdiscount-margin' : '';
                    html += '<div class="ecommerce-product-bulkdiscount ' + className + '">' + '<span class="ecommerce-product-bulkdiscount-quantity">' + wholesalePrice.quantity + ' ' + label + ' : ' + '</span>' + '<span class="ecommerce-product-bulkdiscount-price">' + ucecommerce.formatAsMoney(ecommerceProductModule.getUpdatedPrice(product.options, wholesalePrice.price)) + '</span>' + '</div>' });
                html += '</div>';
                $('#module-ecommerce-product-' + moduleId + ' .ecommerce-bulkdiscounts-margin-controller').removeClass('hide') } else { $('#module-ecommerce-product-' + moduleId + ' .ecommerce-bulkdiscounts-margin-controller').addClass('hide') }
            $(bulkDiscountContainer).html(html);
            var sku = (combination !== !1 && combination.sku !== undefined) ? combination.sku : product.sku;
            if (sku.length > 0) { $(moduleSelector + ' .ecomperce-product-sku-container').removeClass('hide') } else { $(moduleSelector + ' .ecomperce-product-sku-container').addClass('hide') }
            $(moduleSelector + ' .ecommerce-product-sku-value').text(sku);
            var weight = (combination !== !1 && combination.sku !== weight) ? combination.weight : product.weight;
            if (weight > 0) { $(moduleSelector + ' .ecomperce-product-weight-container').removeClass('hide');
                $(moduleSelector + ' .ecommerce-product-weight-value').text(ucecommerce.formatAsWeight(weight)) } else { $(moduleSelector + ' .ecomperce-product-weight-container').addClass('hide') }
        }
        if (product.wholesalePrices && product.wholesalePrices.length > 0) { product.wholesalePrices.forEach((wholesalePrice, index) => { $('#module-ecommerce-product-' + moduleId + ' .ecommerce-product-bulkdiscounts .ecommerce-product-bulkdiscount:nth-child(' + (index + 1) + ') .ecommerce-product-bulkdiscount-price').text(ucecommerce.formatAsMoney(ecommerceProductModule.getUpdatedPrice(product.options, wholesalePrice.price))) }) }
    }
    $('#module-ecommerce-product-' + moduleId + ' .product-item-prices span.current-price').text(ucecommerce.formatAsMoney(price));
    let button = document.querySelector('#module-ecommerce-product-' + moduleId + ' .buy-button');
    button.setAttribute('data-first-time', !0);
    button.closest('.can-add-product').classList.remove('added-product')
};
ecommerceProductModule.findBy = function(key, value, myArray) {
    for (var i = 0; i < myArray.length; i++) { if (myArray[i][key] === value) { return myArray[i] } }
    return !1
};
ecommerceProductModule.getCombination = function(product) {
    var selectedCombination = !1;
    if (product.combinations === undefined || product.combinations === null || product.combinations.length <= 0) { return !1 }
    var combinations = product.combinations;
    combinations.forEach((combination) => { if (selectedCombination === !1) { if (combination.options !== undefined && combination.options.length > 0) { var found = !0;
                combination.options.forEach((option) => { let combinationOption = ecommerceProductModule.findBy('name', option.name, product.options); if (combinationOption === !1 || combinationOption.choices[combinationOption.selectedChoice].text !== option.value) { found = !1 } }); if (found) { selectedCombination = combination } } } });
    return selectedCombination
};
ecommerceProductModule.updateButtonStatus = function(product, combination, moduleId) {
    if (product && product.combinations.length > 0) {
        var inStock = -1;
        if (combination) {
            if (combination.unlimited === !1 && combination.quantity <= 0) { inStock = 0 }
            if (combination.unlimited) { inStock = -1 } else { inStock = parseInt(combination.quantity) }
        } else { if (product.unlimited) { inStock = -1 } else { inStock = parseInt(product.quantity) } }
        var id = "#module-ecommerce-product-" + moduleId;
        if (inStock !== 0) { document.querySelector(id + ' .add-to-cart').classList.remove('hide');
            document.querySelector(id + ' .out-of-stock').classList.add('hide');
            document.querySelector(id + ' [name="item-count"]').setAttribute('max', inStock);
            ecommerceProductModule.checkInStockQuantity(document.querySelector(id + ' [name="item-count"]')) } else { document.querySelector(id + ' .add-to-cart').classList.add('hide');
            document.querySelector(id + ' .out-of-stock').classList.remove('hide');
            document.querySelector(id + ' .out-of-stock').setAttribute('max', "0") }
    }
};
ecommerceProductModule.updateProductImages = function(product, combination, moduleId) {
    if (product && product.combinations.length > 0) {
        var images = product.galleryImages;
        var productImages = [];
        var html = '';
        var smallSliderHtml = '';
        let productImageUrl = product.imageUrl;
        if (combination && combination.imageUrl) { productImageUrl = combination.imageUrl }
        if (!productImageUrl || !productImageUrl.length) { productImageUrl = '/assets/images/sample1.jpg' }
        html += '<div class="product-gallery-image" data-src="' + productImageUrl + '">' + '<img src="' + productImageUrl + '" data-id="0" data-index="0"/>' + '</div>';
        if (images.length || (combination && combination.imageUrl)) { smallSliderHtml += '<div class="product-item-image-small">' + '<div class="small-image-container">' + '<img src="' + productImageUrl + '"/>' + '</div>' + '</div>' }
        let indexCount = 0;
        images.forEach((image, index) => {
            html += '<div class="product-gallery-image" data-src="' + image.url + '">' + '<img src="' + image.url + '" data-id="' + image.id + '" data-index="' + index + '"/>' + '</div>';
            if (images.length) { smallSliderHtml += '<div class="product-item-image-small">' + '<div class="small-image-container">' + '<img src="' + image.url + '"/>' + '</div>' + '</div>' }
            indexCount = index
        });
        var id = "#module-ecommerce-product-" + moduleId;
        $(id + ' .slider-big').slick('unslick');
        $(id + ' .slider-big').html(html);
        $(id + ' .slider-small').slick('unslick');
        $(id + ' .slider-small').html(smallSliderHtml);
        ecommerceProductModule.initSlider(moduleId)
    }
    return !1
};
ecommerceProductModule.attachOnVariantSelectListeners = function(moduleId) { if (window.hasActiveStore) { $('#module-ecommerce-product-' + moduleId + ' .variant-selectors').on('change', 'select, input[type="radio"],input[type="text"], textarea', function(event) { var product = ecommerceProductModule.product[moduleId]; var $element = $(event.target); var name = $element.attr('name'); var value = $element.val(); var options = product.options;
            options.filter(function(option) { return option.name === name })[0].selectedChoice = value;
            product.options = options; var combination = ecommerceProductModule.getCombination(product);
            ecommerceProductModule.updateVariantData(product, combination, moduleId);
            ecommerceProductModule.updateProductImages(product, combination, moduleId);
            ecommerceProductModule.updateButtonStatus(product, combination, moduleId);
            ecommerceProductModule.product[moduleId] = product });
        $('#module-ecommerce-product-' + moduleId + ' .variant-selectors').on('change', 'input[type="checkbox"]', function(event) { var product = ecommerceProductModule.product[moduleId]; var $element = $(event.target); var name = $element.attr('name'); var value = [];
            $('[name="' + name + '"]:checked').each(function() { value.push($(this).val()) }); var options = product.options;
            options.filter(function(option) { return option.name === name })[0].selectedChoice = value;
            product.options = options; var combination = ecommerceProductModule.getCombination(product);
            ecommerceProductModule.updateVariantData(product, combination, moduleId);
            ecommerceProductModule.updateProductImages(product, combination, moduleId);
            ecommerceProductModule.updateButtonStatus(product, combination, moduleId);
            ecommerceProductModule.product[moduleId] = product }) } };
ecommerceProductModule.addProductToCart = function(evt, button, productId, moduleId, quantity) {
    if (!$('html').hasClass('admin-mode')) {
        button = $(button);
        var curForm = button.closest('form'),
            curModule = curForm.closest('.module'),
            data = {};
        if (!curForm.validate()) { return !1 }
        evt.stopPropagation();
        var product = ecommerceProductModule.product[moduleId];
        var options = product.options;
        var selectedOptions = {};
        var errors = [];
        options.forEach((option) => { if (option.required !== undefined && option.required && (option.selectedChoice === null || option.selectedChoice.length === 0)) { errors.push(option.name) } else { if (option.selectedChoice !== null && option.selectedChoice !== undefined && option.selectedChoice != null) { if (option.choices !== undefined) { if (typeof(option.selectedChoice) === 'object') { var optionTexts = [];
                            option.selectedChoice.forEach((optionIndex) => { optionTexts.push(option.choices[optionIndex].text) });
                            selectedOptions[option.name] = optionTexts.join() } else { selectedOptions[option.name] = option.choices[option.selectedChoice].text } } else { if (option.type === 'DATE') { var newDate = option.selectedChoice; var t = newDate.split(/[/ :]/);
                            newDate = new Date(t[2], t[0] - 1, t[1], 0, 0, 0);
                            selectedOptions[option.name] = newDate.getTime().toString() } else { selectedOptions[option.name] = option.selectedChoice } } } } });
        if (errors.length === 0) { ucecommerce.addProductToCart(productId, quantity, selectedOptions, button[0].getAttribute('data-first-time'), evt);
            button[0].removeAttribute('data-first-time');
            setTimeout(function() { button[0].setAttribute('data-first-time', !0) }, 5000);
            ucecommerce.openCart() }
    }
};
ecommerceProductModule.buyButtonClick = function(evt, button) {
    var productId = evt.target.closest('[data-product-id]').getAttribute('data-product-id');
    var moduleId = $(evt.target).parents('.product-item').data('module-id');
    var quantity = $('#module-ecommerce-product-' + moduleId + ' [name="item-count"]').val();
    if (!parseInt(quantity)) { quantity = 1 }
    ecommerceProductModule.addProductToCart(evt, button, productId, moduleId, quantity)
};
ecommerceProductModule.initSlider = function(moduleId) { var id = "#module-ecommerce-product-" + moduleId; var initialSlide = parseInt($(id + ' .slider-big').attr('data-slick-initial-slide'));
    $(id + ' .slider-big').slick({ initialSlide: initialSlide, slidesToShow: 1, slidesToScroll: 1, arrows: !1, fade: !0, speed: 150, asNavFor: id + ' .slider-small', rtl: $("html").attr("dir") === 'rtl' });
    $(id + ' .slider-small').slick({ slidesToShow: 3, slidesToScroll: 1, asNavFor: id + ' .slider-big', dots: !1, centerMode: !1, focusOnSelect: !0, speed: 150, prevArrow: id + ' .slider-small-wrapper .uci-slider-arrow-1-left', nextArrow: id + ' .slider-small-wrapper .uci-slider-arrow-1-right', rtl: $("html").attr("dir") === 'rtl' }) };
ecommerceProductModule.initRelatedProductSlider = function(moduleId) { var id = "#module-ecommerce-product-" + moduleId;
    $(id + ' .related-products-slider').slick({ slidesToShow: 4, slidesToScroll: $(id + ' .related-products-slider').data('slide-item-count'), dots: !1, speed: 150, prevArrow: id + ' .related-product-arrow.arrow-left', nextArrow: id + ' .related-product-arrow.arrow-right', rtl: $("html").attr("dir") === 'rtl', responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }, { breakpoint: 500, settings: { slidesToShow: 1 } }] }) };
ecommerceProductModule.checkInStockQuantity = function(input) { var max = parseInt(input.max); if (max && max !== -1 && parseInt(input.value) > max) { input.value = max } };
(function() { $(document).on('click', '.ModuleEcommerceProduct .product-item .buy-button', function(evt) { evt.stopPropagation(); if (!$(this).attr('disabled')) { ecommerceProductModule.buyButtonClick(evt, this) } });
    $(document).on('click', '.ModuleEcommerceProduct .product-item .uci-plus-2', function(evt) { evt.stopPropagation(); var input = $(this).parents('.product-item').find('[name="item-count"]'); var max = parseInt(input.attr('max')); var value = parseInt(input.val()); if (value) { if (!max || max === -1 || max > value) { input.val(value + 1) } } else { input.val(1) } });
    $(document).on('click', '.ModuleEcommerceProduct .product-item .uci-minus-2', function(evt) { evt.stopPropagation(); var input = $(this).parents('.product-item').find('[name="item-count"]'); if (parseInt(input.val()) > 1) { input.val(parseInt(input.val()) - 1) } else { input.val(1) } });
    $(document).on('blur', '.ModuleEcommerceProduct .product-item [name="item-count"]', function(evt) { evt.stopPropagation(); var input = $(this); if (parseInt(input.val()) > 1) {} else { input.val(1) } });
    $(document).ready(function() { $('.ModuleEcommerceProduct .product-item').each(function(element) { ecommerceProductModule.initSlider($(this).attr('data-module-id'));
            ecommerceProductModule.initRelatedProductSlider($(this).attr('data-module-id')) }) }) })();
(function() {
    var popupHtml = "<div class='image-popup-layer'>" + "<span class='uci-close'></span>" + "<span class='product-gallery-left uci-slider-arrow-1-left'></span>" + "<span class='product-gallery-right uci-slider-arrow-1-right'></span>" + "<div class='image-box'>" + "<img src='' alt=''>" + "</div>" + "<h5 class='name-product'></h5>" + "<p class='title-product'></p>" + "</div>";
    var imgPopup = $('<div/>', {
        id: 'productGalleryPopup',
        class: 'image-popup image-layer-container',
        html: popupHtml,
        click: function(event) {
            $('html, body').css({ "overflow": "auto" });
            var eventTarget = $(event.target);
            if (eventTarget.hasClass('product-gallery-right')) {
                activeImageIndex++;
                if (activeImageIndex >= galleryImagesArr.length) { activeImageIndex = 0 }
                if ($(galleryElement.children()[activeImageIndex]).hasClass('hidden')) { $(this).trigger(event); return !1 }
                var nextSrc = galleryImagesArr[activeImageIndex].src;
                imgPopupImg.attr('src', nextSrc);
                var nextAlt = galleryImagesArr[activeImageIndex].alt || '';
                imgPopupImg.attr('alt', nextAlt);
                $(imgText).html(nextAlt)
            } else if (eventTarget.hasClass('product-gallery-left')) {
                activeImageIndex--;
                if (activeImageIndex < 0) { activeImageIndex = galleryImagesArr.length - 1 }
                if ($(galleryElement.children()[activeImageIndex]).hasClass('hidden')) { $(this).trigger(event); return !1 }
                var prevSrc = galleryImagesArr[activeImageIndex].src;
                imgPopupImg.attr('src', prevSrc);
                var prevAlt = galleryImagesArr[activeImageIndex].alt || '';
                imgPopupImg.attr('alt', prevAlt);
                $(imgText).html(prevAlt)
            } else if (eventTarget.hasClass('image-popup-layer') || eventTarget.hasClass('uci-close')) { $(this).removeClass('active');
                galleryItem = null;
                galleryImagesArr = null;
                activeImageIndex = 0;
                galleryElement = null }
        }
    });
    var galleryItem = null;
    var galleryImagesArr = null;
    var imgPopupImg = imgPopup.find('img').first();
    let imgText = imgPopup.find('.title-product').first();
    var activeImageIndex = 0;
    var galleryElement = null;

    function galleryPopupRun() {
        if ($('html').hasClass('admin-mode')) { return !1 }
        $(document).on('keydown', function(e) { if ($('#productGalleryPopup.image-popup.image-layer-container.active').length) { if (e.which == 37) { $('.product-gallery-left').click() } else if (e.which == 39) { $('.product-gallery-right').click() } else if (e.which == 27) { document.querySelector('#productGalleryPopup.image-popup.image-layer-container .uci-close').click() } } });
        if ($('input[type="hidden"].product-images-data').length) { imgPopup.appendTo('body') }
        $(document).on('click', '.product-gallery-image', function() {
            galleryItem = $(this);
            $('html, body').css({ "overflow": "hidden" });
            let name = galleryItem.attr('data-name');
            let alt = galleryItem.attr('data-alt');
            let src = galleryItem.attr('data-src');
            $('.image-popup-layer .name-product').html(name);
            if (alt !== undefined) { $(imgText).html(alt);
                imgPopupImg.attr('alt', alt) }
            if (src !== undefined) { imgPopupImg.attr('src', src);
                imgPopup.addClass('active'); if (galleryImagesArr === null) { galleryImagesArr = []; let bigTrackImages = $('.product-item-image-big-container .product-gallery-image');
                    bigTrackImages.each(function(index, item) { var imgObj = { 'src': $(item).data('src'), 'alt': $(item).data('alt') ? $(item).data('alt') : '' };
                        galleryImagesArr.push(imgObj) });
                    galleryElement = galleryItem.closest('.gallery').first();
                    galleryImagesArr.forEach(function(item, index) { if (item.src === src) { activeImageIndex = index } }) } }
        })
    }
    if (window.animateEffects) { var isEffectsDone = setInterval(function() { if (window.animateEffects.effectsDone) { galleryPopupRun();
                clearInterval(isEffectsDone) } }, 500) }
})()
var resizeTimer;

function dots(elements) {
    elements.each(function(index, el) {
        var element = $(el);
        var initText = element.attr('data-dot-text').trim();
        if (initText == '') { return }
        var initTextArr = initText.split(" ");
        var contentWidth = element.width();
        var contentHeight = element.height();
        if (!initTextArr || !contentHeight || !contentWidth) { return }
        var tmpelement = element.find('.contains-dot');
        var wordArray = initTextArr;
        var tempArrtext = "";
        for (var i = 0; i < wordArray.length; i++) {
            tempArrtext += " " + wordArray[i];
            tmpelement.text(tempArrtext);
            if (tmpelement.height() > (contentHeight)) {
                let textLength = wordArray[i].length;
                tempArrtext = tempArrtext.substring(0, tempArrtext.length - textLength);
                tempArrtext += "...";
                tmpelement.text(tempArrtext);
                if (tmpelement.height() > (contentHeight)) { textLength = wordArray[i - 1].length + 4;
                    tempArrtext = tempArrtext.substring(0, tempArrtext.length - textLength);
                    tempArrtext += "...";
                    tmpelement.text(tempArrtext) }
                break
            }
        }
    })
}

function fectchProducts(loadmoreButton, firstRun) {
    var moduleId = loadmoreButton.attr('data-module-id');
    var pageIndex = firstRun ? '1' : loadmoreButton.attr('data-page-index');
    var categoryId = loadmoreButton.attr('data-category-id');
    var loadinSpinner = loadmoreButton.parent().children('.ecommerce-loading')
    loadmoreButton.addClass('hide');
    loadinSpinner.children('.ecommerce-spinner').addClass('loading-spinner');
    if (!$('html').hasClass('admin-mode')) {
        data = { moduleId: moduleId, pageIndex: pageIndex, categoryId: categoryId };
        api.publicCall('default', 'ModuleEcommerceProducts', 'loadMore', JSON.stringify(data), function(response) {
            if (parseInt(response.type) === 1) {
                loadmoreButton.parent().addClass('hide');
                var elements = $(response.data.html);
                $('[data-module-id="' + moduleId + '"] .product-items-container').append(elements);
                loadmoreButton.attr('data-page-index', response.data.nextPageIndex);
                if (response.data.loadmore) { loadmoreButton.parent().removeClass('hide');
                    loadmoreButton.removeClass('hide') } else { loadmoreButton.parent().addClass('hide');
                    loadmoreButton.addClass('hide') }
                loadinSpinner.children('.ecommerce-spinner').removeClass('loading-spinner');
                dots($('.three-dot'));
                if (window.UcAnchor && window.UcAnchor.checkAnchor()) { window.UcAnchor.checkAndScrollAnchor(!1) }
            }
        })
    }
}
$(window).on('load', function() { $(document).on('click', '.ModuleEcommerceProducts .product-items-loadmore .load-more', function(e) { e.preventDefault();
        fectchProducts($(this)) }); if (!$('html').hasClass('admin-mode')) { $(window).resize(function() { clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() { dots($('.three-dot')) }, 200) });
        dots($('.three-dot')) } });
(function() { $(document).on('click', '.ModuleEcommerceProducts .product-add-btn.can-add-product,.ModuleEcommerceProducts .product-add-btn-bottom.can-add-product', function(evt) { evt.stopPropagation();
        ucecommerce.addProductToCart($(this).data('product-id'), 1, null, this.getAttribute('data-first-time'), evt);
        this.removeAttribute('data-first-time'); let element = this;
        setTimeout(function() { element.setAttribute('data-first-time', !0) }, 5000);
        ucecommerce.openCart() }) })();
$(document).ready(function() { if ($('.product-items .product-items-container').length) { $('.ModuleEcommerceProducts .product-items-loadmore .load-more').each(function() { fectchProducts($(this), 1) }) } })




function onUcraftFormSubmit(token) {
    var button = window.button,
        curForm = window.curForm,
        captchaOn = window.captchaOn,
        curModule = curForm.closest('.module'),
        data = {};
    let baseUrlProtocol = baseUrl.includes('https:') ? 'https:' : 'http:';
    if (location.protocol !== baseUrlProtocol) { let errorContainer = curModule.find('.error-message-container'),
            errorContainerText = curModule.find('.error-message');
        errorContainerText.text(window.translations['validation.enableSslMessage']);
        curForm.parent().find('form').each(function(it, form) { form.reset();
            $(form).find('.attached-file').val("");
            $(form).find('.public-file-uploader-button').trigger('change');
            $(form).find('.selected-file').trigger('change').addClass('hidden');
            $(form).find('.public-file-upload-attach').trigger('change').removeClass('hidden') });
        curForm.find('select').trigger('chosen:updated');
        curForm.one("change", ":input", function() { errorContainerText.text('error-message') });
        errorContainer.removeClass('hide');
        setTimeout(function() { errorContainer.addClass('hide') }, 5000); return }
    data.fields = curForm.serializeArray();
    curForm.find('.checkbox-group').each(function() { var name = ''; var arr = []; var c = 0;
        $(this).find('input[type=checkbox]').each(function() { name = $(this).attr('data-name'); if ($(this).prop('checked')) { arr[c++] = $(this).val() } }); for (var i = 0; i < data.fields.length; i++) { if (i === $(this).closest('.form-element').data('index') && data.fields[i].name === name) { data.fields[i].value = arr.join('') } } });
    var newFields = [];
    for (var i = 0; i < data.fields.length; i++) {
        var name = data.fields[i].name;
        if (name.includes('"')) { name = name.replace(/"/g, '\\"') }
        newFields[i] = data.fields[i]
    }
    data.fields = newFields;
    data.id = curForm.data('module-id');
    data.pageUrl = window.location.href;
    let buttonWidth = $(button).outerWidth();
    $(button).css({ width: buttonWidth });
    $(button).children('span').addClass('loading-spinner');
    var that = $(button);
    if (captchaOn) { data['g-recaptcha-response'] = token }
    api.sendForm(JSON.stringify(data), function(response) {
        $(button).css({ width: 'auto' });
        that.children('span').removeClass('loading-spinner');
        if (response.type === 1) {
            if (!!parseInt(response.msg.thankYouMessage)) {
                if (response.data.length) { console.error(response.data) }
                var thankYouContainer = curModule.find('.thank-you-message-container'),
                    thankYouContainerText = curModule.find('.thank-you-message');
                thankYouContainerText.text(response.msg.thankYouText);
                curForm.one("change", ":input", function() { thankYouContainerText.text('thank-you-message') });
                let customCodeForFormElement = window['customCodeForFormElement' + data.id];
                if (customCodeForFormElement) {
                    var customCode = customCodeForFormElement[0];
                    let fields = data.fields;
                    for (let i = 0; i < fields.length; i++) { customCode = customCode.replace('@@field' + (i + 1), fields[i].value) }
                    var inlineScript = document.createElement('script');
                    inlineScript.innerHTML = customCode;
                    document.body.insertAdjacentElement('beforeend', inlineScript)
                }
                thankYouContainer.removeClass('hide');
                setTimeout(function() { thankYouContainer.addClass('hide');
                    curForm.parent().find('form').each(function(it, form) { form.reset();
                        $(form).find('.attached-file').val("");
                        $(form).find('.public-file-uploader-button').trigger('change');
                        $(form).find('.selected-file').trigger('change').addClass('hidden');
                        $(form).find('.public-file-upload-attach').trigger('change').removeClass('hidden') });
                    curForm.find('select').trigger('chosen:updated') }, 5000)
            } else if (!!parseInt(response.msg.sendTo)) { window.location = response.msg.link;
                window.UcAnchor.checkAndScrollAnchor(!0) }
        }
    });
    if (window.isCaptchaLoaded && grecaptcha && captchaOn) { grecaptcha.reset() }
}
$(document).ready(function() {
    if (window.hasCaptcha && !window.isCaptchaLoaded) { var form = document.getElementsByTagName('body').item(0),
            script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', "https://www.google.com/recaptcha/api.js?hl=" + window.currentLanguagePrefix);
        script.setAttribute('async', 'async');
        script.setAttribute('defer', 'defer');
        form.appendChild(script);
        script.onload = function() { window.isCaptchaLoaded = !0 } }
    $('.module.ModuleForm ').each(function() { var form = $(this).find('form').first();
        form.find('input').on('keydown', function(e) { if (e.keyCode == 13) { e.preventDefault();
                form.find('.moduleForm-submit').click() } }) });
    $(document).on('change', '.ModuleForm input[data-type=datatime]', function() {
        var parent = $(this).closest('.form-three-one');
        var val = "";
        $(parent.find("input[data-type=datatime]").get()).each(function() {
            var newVal = $(this).val();
            if (newVal.length == 1) { newVal = '0' + newVal }
            val += newVal + "/"
        });
        parent.find('input.realValue').val(val.slice(0, -1))
    });
    $(document).on('click', '.ModuleForm .moduleForm-submit', function(e) { e.preventDefault(); if (!$('html').hasClass('admin-mode')) { window.button = $(this);
            window.curForm = window.button.closest('form');
            window.captchaOn = window.curForm.children('#recaptcha').length; if (window.curForm.validate()) { if (window.isCaptchaLoaded && grecaptcha && captchaOn) { grecaptcha.execute() } else { onUcraftFormSubmit() } } } });
    let phoneInput = document.querySelector('input[attr-form-type="phone"]');
    let reg = /[a-zA-Zа-яА-ЯЁё!@#$%^&*()_|}\[\]{\-”?.,'`~"№;/\\<>:=]/;
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            let newStr = '';
            let needReplaceValue = !1;
            if (this.value === '') { newStr = '+';
                needReplaceValue = !0 }
            if (this.value.match(reg)) { newStr += this.value.replace(reg, '');
                needReplaceValue = !0 }
            if (needReplaceValue) { this.value = newStr }
        });
        phoneInput.addEventListener('focus', function() { if (!this.value) { this.value = '+' } });
        $(phoneInput).on("paste", function(e) { let pasteData = e.originalEvent.clipboardData.getData('text/plain'); if (pasteData.match(reg)) { return !1 } });
        $(phoneInput).on("drop", function(e) { let dropedData = e.originalEvent.dataTransfer.getData('text/plain'); if (dropedData.match(reg)) { return !1 } })
    }
    let urlInput = document.querySelector('input[attr-form-type="url"]');
    if (urlInput) { urlInput.addEventListener('focus', function() { if (!this.value) { this.value = 'https://' } }) }
})


document.addEventListener("DOMContentLoaded", function() { const imgContainers = document.getElementsByClassName('fixed-ratio'); if (imgContainers.length) { for (let item of Array.from(imgContainers)) { item.querySelector('img.fixed-ratio-content').onload = function(e) { item.style.paddingBottom = null;
                item.classList.remove('fixed-ratio');
                e.target.classList.remove('fixed-ratio-content') } } } })


$(document).ready(function() {
    var hideLanguageSwitcher = null;
    if (window.parent && window.currentLanguageObject) {
        let obj = { currentLanguage: window.currentLanguageObject, page: window.page, isMobile: !!window.isMobile, isTablet: !!window.isTablet, currentRoute: window.location }
        window.parent.postMessage(JSON.stringify(obj), "*")
    }
    languageSwitcherPosition();
    if (window.isMobile && !window.location.search.includes('previewMode=true&device=mobile')) { $(document).on("touchstart", ":not(.ModuleLanguageSwitcher .languages.open-on-hover ul,.ModuleLanguageSwitcher .languages.open-on-hover ul *)", function(event) { if ($(".ModuleLanguageSwitcher .languages.open-on-hover").hasClass("open")) { $(".ModuleLanguageSwitcher .languages.open-on-hover").removeClass("open");
                $(".ModuleLanguageSwitcher .languages.open-on-hover").parents('.uc-row').removeClass('row-forward');
                event.stopPropagation() } });
        $(document).on("touchstart", ".ModuleLanguageSwitcher .languages.open-on-hover", function(event) { event.stopPropagation();
            languageSwitcherPosition();
            $(this).toggleClass("open");
            $(".ModuleLanguageSwitcher .languages.open-on-hover").parents('.uc-row').toggleClass('row-forward') }) } else { $(document).on({ mouseenter: function() { clearTimeout(hideLanguageSwitcher);
                languageSwitcherPosition();
                $(this).parents('.uc-row').addClass('row-forward');
                $(this).parents('.header-and-main-rows').addClass('higher-zindex-than-footer');
                $(this).parents('.ModuleLanguageSwitcher').siblings('.margin-container').addClass('low-zIndex');
                $(this).addClass('open') }, mouseleave: function() { clearTimeout(hideLanguageSwitcher);
                $(this).removeClass('open');
                $(this).parents('.header-and-main-rows').removeClass('higher-zindex-than-footer');
                $(this).parents('.ModuleLanguageSwitcher').siblings('.margin-container').removeClass('low-zIndex'); var that = $(this);
                hideLanguageSwitcher = setTimeout(function() { that.parents('.uc-row').removeClass('row-forward') }, 300) } }, '.ModuleLanguageSwitcher .languages.open-on-hover') }
});

function languageSwitcherPosition() { $('.ModuleLanguageSwitcher .languages').each(function(index, switcher) { if ($(switcher).offset().top + $(switcher).height() + $(switcher).find('ul').height() > $(window).height() + $(window).scrollTop()) { $(switcher).addClass('bottom').removeClass('top') } else { $(switcher).removeClass('bottom').addClass('top') } }) }

function changeLanguage(element, prefix) { var url = element.getAttribute('data-href'); var d = new Date(); var hour = 20;
    d.setTime(d.getTime() + (hour * 60 * 60 * 1000)); var cookieExpireDate = "expires=" + d.toString();
    document.cookie = "lastlanguage=" + prefix + ";path=/; " + cookieExpireDate;
    window.location.replace(url) }

function initializeMap(forceReload) {
    var selector = '.map:not(.loaded)';
    if (forceReload) { selector = '.map' }
    $(selector).each(function() {
        $(this).addClass('loaded');
        var mapParams = JSON.parse($(this).parents('.module.ModuleMap').attr('data-params')) || {};
        var centerLat = '';
        var centerLng = '';
        var zoom = 2;
        var hasMarker = !1;
        var fullscreenControl = !1;
        if (!isEmpty(mapParams)) {
            var addresses = mapParams.fields;
            if (mapParams.lat && mapParams.lng && mapParams.address) { var oldObj = { params: { vars: { address: { value: mapParams.address }, lat: { value: mapParams.lat }, lng: { value: mapParams.lng } } } };
                addresses.unshift(oldObj) }
            if (addresses.length) { var firstAddressParamsVars = addresses[0].params.vars; if (firstAddressParamsVars.lat.value != '' || firstAddressParamsVars.lng.value != '') { hasMarker = !0;
                    centerLat = firstAddressParamsVars.lat.value;
                    centerLng = firstAddressParamsVars.lng.value } }
            if (mapParams.hasOwnProperty('zoomLevel') && mapParams.zoomLevel != '') { zoom = parseInt(mapParams.zoomLevel) }
        }
        var center = new google.maps.LatLng(centerLat, centerLng);
        var mapCanvas = $(this).get(0);
        var shades_of_grey_style = [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }];
        var blue_water_style = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }];
        var midnight_commander_style = [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 13 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#144b53" }, { "lightness": 14 }, { "weight": 1.4 }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#08304b" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#0c4152" }, { "lightness": 5 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b434f" }, { "lightness": 25 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b3d51" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "color": "#146474" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#021019" }] }];
        var unsaturated_browns_style = [{ "elementType": "geometry", "stylers": [{ "hue": "#ff4400" }, { "saturation": -68 }, { "lightness": -4 }, { "gamma": 0.72 }] }, { "featureType": "road", "elementType": "labels.icon" }, { "featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{ "hue": "#0077ff" }, { "gamma": 3.1 }] }, { "featureType": "water", "stylers": [{ "hue": "#00ccff" }, { "gamma": 0.44 }, { "saturation": -33 }] }, { "featureType": "poi.park", "stylers": [{ "hue": "#44ff00" }, { "saturation": -23 }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "hue": "#007fff" }, { "gamma": 0.77 }, { "saturation": 65 }, { "lightness": 99 }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "gamma": 0.11 }, { "weight": 5.6 }, { "saturation": 99 }, { "hue": "#0091ff" }, { "lightness": -86 }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "lightness": -48 }, { "hue": "#ff5e00" }, { "gamma": 1.2 }, { "saturation": -23 }] }, { "featureType": "transit", "elementType": "labels.text.stroke", "stylers": [{ "saturation": -64 }, { "hue": "#ff9100" }, { "lightness": 16 }, { "gamma": 0.47 }, { "weight": 2.7 }] }];
        var neutral_blue_style = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#193341" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#2c5a71" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#29768a" }, { "lightness": -37 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#406d80" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#406d80" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#3e606f" }, { "weight": 2 }, { "gamma": 0.84 }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "weight": 0.6 }, { "color": "#1a3541" }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#2c5a71" }] }];
        var lunar_landscape_style = [{ "stylers": [{ "hue": "#ff1a00" }, { "invert_lightness": !0 }, { "saturation": -100 }, { "lightness": 33 }, { "gamma": 0.5 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#2D333C" }] }];
        var greyscale_style = [{ "featureType": "all", "elementType": "all", "stylers": [{ "saturation": -100 }, { "gamma": 0.5 }] }];
        var old_dry_mud_style = [{ "featureType": "landscape", "stylers": [{ "hue": "#FFAD00" }, { "saturation": 50.2 }, { "lightness": -34.8 }, { "gamma": 1 }] }, { "featureType": "road.highway", "stylers": [{ "hue": "#FFAD00" }, { "saturation": -19.8 }, { "lightness": -1.8 }, { "gamma": 1 }] }, { "featureType": "road.arterial", "stylers": [{ "hue": "#FFAD00" }, { "saturation": 72.4 }, { "lightness": -32.6 }, { "gamma": 1 }] }, { "featureType": "road.local", "stylers": [{ "hue": "#FFAD00" }, { "saturation": 74.4 }, { "lightness": -18 }, { "gamma": 1 }] }, { "featureType": "water", "stylers": [{ "hue": "#00FFA6" }, { "saturation": -63.2 }, { "lightness": 38 }, { "gamma": 1 }] }, { "featureType": "poi", "stylers": [{ "hue": "#FFC300" }, { "saturation": 54.2 }, { "lightness": -14.4 }, { "gamma": 1 }] }];
        var papuportal_dark_style = [{ "featureType": "all", "elementType": "labels", "stylers": [{ "visibility": "on" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{ "color": "#ed5929" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#c4c4c4" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "color": "#ed5929" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }, { "visibility": "on" }] }, { "featureType": "poi.business", "elementType": "geometry", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ed5929" }, { "lightness": "0" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ed5929" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#575757" }] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "labels.text.stroke", "stylers": [{ "color": "#2c2c2c" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#999999" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }];
        var light_green_style = [{ "stylers": [{ "hue": "#baf4c4" }, { "saturation": 10 }] }, { "featureType": "water", "stylers": [{ "color": "#effefd" }] }, { "featureType": "all", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "on" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }];
        var taste206_style = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#a0d6d1" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#dedede" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#dedede" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f1f1f1" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        var style = $(greyscale_style);
        if (mapParams.hasOwnProperty('styles') && mapParams.styles != '') { var getStyle = mapParams.styles; switch (getStyle) {
                case 'shades_of_grey_style':
                    style = $(shades_of_grey_style); break;
                case 'blue_water_style':
                    style = $(blue_water_style); break;
                case 'midnight_commander_style':
                    style = $(midnight_commander_style); break;
                case 'unsaturated_browns_style':
                    style = $(unsaturated_browns_style); break;
                case 'neutral_blue_style':
                    style = $(neutral_blue_style); break;
                case 'lunar_landscape_style':
                    style = $(lunar_landscape_style); break;
                case 'greyscale_style':
                    style = $(greyscale_style); break;
                case 'old_dry_mud_style':
                    style = $(old_dry_mud_style); break;
                case 'papuportal_dark_style':
                    style = $(papuportal_dark_style); break;
                case 'light_green_style':
                    style = $(light_green_style); break;
                case 'taste206_style':
                    style = $(taste206_style); break;
                default:
                    style = [] } }
        var mapOptions = { center: center, zoom: zoom, gestureHandling: 'cooperative', mapTypeId: google.maps.MapTypeId.ROADMAP, styles: style, fullscreenControl: fullscreenControl };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        if (hasMarker) {
            var image = '';
            var shape = {};
            if (mapParams.hasOwnProperty('image') && mapParams.image) { image = { url: window.croppedUrlPrefix + mapParams.image, };
                shape = { coords: [1, 1, 1, 20, 18, 20, 18, 1], type: 'poly' } }
            for (let i = 0; i < addresses.length; i++) { let item = addresses[i].params.vars; if (item.address.value !== '' || item.lat.value !== '' || item.lng.value !== '') { new google.maps.Marker({ position: { lat: Number(item.lat.value), lng: Number(item.lng.value) }, map: map, optimized: !1, icon: image, shape: shape, }) } }
        }
    })
}
$(document).ready(function() {
    if ($(document).find('.ModuleMap').length > 0) {
        var timer = 0;
        var timeInterval = 10;
        var waitTime = 500;
        var ifMapJSAlreadyExists = setInterval(() => {
            if (typeof google === 'undefined' && typeof googleMapKey !== 'undefined' && typeof ModuleMap === "undefined" && timer >= waitTime) { loadJS("https://maps.googleapis.com/maps/api/js?v=3.38&key=" + googleMapKey + "&callback=initializeMap");
                clearInterval(ifMapJSAlreadyExists) }
            if (typeof google !== 'undefined') { clearInterval(ifMapJSAlreadyExists) }
            timer += timeInterval
        }, timeInterval)
    }
    $(document).on('googleObjectIsLoaded', function() { initializeMap() })
});

function loadJS(file) {
    if (window.googleIsDefined === !0) { return }
    var jsElm = document.createElement("script");
    jsElm.type = "application/javascript";
    jsElm.src = file;
    jsElm.onload = function() { window.googleLoaded = document.createEvent('Event');
        window.googleLoaded.initEvent('googleObjectIsLoaded', !0, !0);
        document.dispatchEvent(window.googleLoaded) };
    document.body.appendChild(jsElm);
    window.googleIsDefined = !0
}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return !1
    }
    return !0
}

$(document).ready(function() {
    let scrollTop = 0;
    var pages = $('.ModuleNavigation li.page');
    var currentHash = location.href.split('#')[1];
    var html = document.querySelector('html');
    var body = document.querySelector('body');
    if ($('html').hasClass('admin-mode')) { return !1 }
    if (undefined !== currentHash && 0 !== $('[data-anchor = "' + currentHash + '"]').length) { addActiveClass(currentHash, pages) }

    function setNavSubItemPosition(navSubItem, NavLastSubItem = !1) {
        var navSubItemWidth = navSubItem.width();
        var navSubItemLeft = navSubItem.offset().left;
        var navSubItemRight = $(document).width() - navSubItemLeft - navSubItemWidth;
        if (navSubItem.closest('.off-canvas').length) { return !1 }
        if (NavLastSubItem) {
            if (navSubItemRight < 15) { navSubItem.addClass('right-to-left') }
            if (navSubItemLeft < 15) { navSubItem.addClass('left-to-right') }
        } else {
            if (navSubItemRight < 1) { navSubItem.addClass('right') }
            if (navSubItemLeft < 1) { navSubItem.addClass('left') }
        }
    }
    $('li.page.has-childes').on('mouseenter', function() {
        var navigationInner = $(this).closest('.navigation-inner');
        var navSubPagesCollapsible = navigationInner.data('nav-sub-page-scollapsible');
        if (parseInt(navSubPagesCollapsible)) { return !1 }
        var navSubItem = $(this).children('.page-children');
        setNavSubItemPosition(navSubItem, !1);
        navSubItem.children('li.page.has-childes').on('mouseenter', function() { var navLastSubItem = $(this).children('.page-children');
            setNavSubItemPosition(navLastSubItem, !0) })
    });
    $('li.page.has-childes').on('click', function() { var navSubItem = $(this).children('.page-children');
        setTimeout(() => { setNavSubItemPosition(navSubItem, !1) });
        navSubItem.children('li.page.has-childes').on('click', function() { var navLastSubItem = $(this).children('.page-children');
            setTimeout(() => { setNavSubItemPosition(navLastSubItem, !0) }) }) });
    $('li.page').on('click', function(e) { e.stopPropagation(); var parentPage = $(e.target).closest('.page'); var childPage = parentPage.children('.subPageCollapse'); var parentChild = childPage.parents('.subPageCollapse'); let allChildes = $(e.target).closest('.navigation').find('.subPageCollapse').not(childPage).not(parentChild); if (childPage.length) { allChildes.removeClass('collapsed'); if (childPage.hasClass('collapsed') && !parentPage.hasClass('heading-page')) { if (!childPage.hasClass('collapsed')) { e.preventDefault(); return !1 } } else { childPage.toggleClass('collapsed');
                e.preventDefault(); return !1 } } });
    $('input[type=hidden].burger-navigation').each(function(index, el) { var navModuleContainer = $(el).closest('.ModuleNavigation.module-container'); if (navModuleContainer.length) { navModuleContainer.addClass("burger-module") } });
    const moduleNavigations = document.querySelectorAll('.ModuleNavigation.module');
    for (const moduleNavigation of Array.from(moduleNavigations)) { const moduleStretchLabels = moduleNavigation.querySelector('.stretch-labels'); if (!moduleStretchLabels) { moduleNavigation.style.width = 'auto' } }
    $('.off-canvas-button').click(function(event) {
        let badgeElement = document.querySelector('.powered-by-container');
        var offCanvas = $('.layers-container .layer .off-canvas');
        offCanvas.toggleClass('open');
        if (offCanvas.hasClass('open')) {
            $('.off-canvas-button svg').hide();
            $('.off-canvas-button').css({ 'cursor': 'auto' });
            if (badgeElement) { badgeElement.classList.add('hide') }
            if (typeof $().lazyload !== "undefined") { offCanvas.find('.lazy').lazyload({ container: $(".navigation-inner .standard-view"), effect: "fadeIn", threshold: 300, failure_limit: 10 }) }
        } else {
            if (badgeElement) { badgeElement.classList.remove('hide') }
            $('.off-canvas-button svg').show();
            $('.off-canvas-button').css({ 'cursor': 'pointer' });
            $('body').removeClass('fixed no-scroll')
        }
        var offCanvasLayer = document.querySelector('.off-canvas');
        if ($('.off-canvas.open .uc-row').outerHeight() >= $(window).outerHeight() || (offCanvasLayer && window.innerWidth === offCanvasLayer.offsetWidth)) { scrollTop = $('html').scrollTop();
            body.classList.add('no-scroll');
            $(".off-canvas-inner-container").scrollTop(0);
            setTimeout(function() { $('body').addClass('fixed') }, 330) }
    });
    $('.off-canvas-close').click(function(e) {
        let badgeElement = document.querySelector('.powered-by-container');
        if (badgeElement) { badgeElement.classList.remove('hide') }
        $('.layers-container .layer .off-canvas').removeClass('open');
        $('.navigation .page-children').removeClass('collapsed');
        $('body').removeClass('no-scroll fixed');
        $('.off-canvas-button svg').show();
        $('.off-canvas-button').css({ 'cursor': 'pointer' });
        if (scrollTop) { html.scrollTop = scrollTop }
    });
    $('.ModuleNavigation .module').hover(function() { $(this).parents('.uc-row').addClass('row-forward') }, function() { $(this).parents('.uc-row').removeClass('row-forward') });
    var startX, dist, startTime, endTime;
    $(document).on('touchstart', '.off-canvas.open .off-canvas-inner-container', function(event) { var touchObj = event.originalEvent.changedTouches[0];
        startX = touchObj.clientX;
        startTime = new Date().getTime();
        $(document).one('touchend', function(e) { var touchObj = e.originalEvent.changedTouches[0];
            dist = touchObj.clientX - startX;
            endTime = new Date().getTime(); if (startTime - endTime < 500) { if (dist > 0 && dist >= 70) { $('.layers-container .layer .off-canvas.open').removeClass('open');
                    $('.navigation .page-children').removeClass('collapsed');
                    $('.off-canvas-button svg').show();
                    $('.off-canvas-button').css({ 'cursor': 'pointer' });
                    $('body').removeClass('no-scroll fixed') } } }) });
    $(document).on('mouseup', function(e) {
        let badgeElement = document.querySelector('.powered-by-container');
        if (e.which === 1 && $('.layers-container .layer .off-canvas').hasClass('open') && !$(e.target).closest('.off-canvas').length && !$(e.target).closest('.off-canvas-button').length) {
            $('.layers-container .layer .off-canvas.open').removeClass('open');
            $('.off-canvas-button svg').show();
            $('.off-canvas-button').css({ 'cursor': 'pointer' });
            $('body').removeClass('fixed no-scroll');
            var parent = $(e.target).closest('li.page');
            if (badgeElement) { badgeElement.classList.remove('hide') }
            if (!parent.length) { $('.navigation .page-children').removeClass('collapsed') }
        }
    });
    $('html:not(.admin-mode) .off-canvas.open .off-canvas-inner-container').on('touchmove', function(e) { e.preventDefault() });
    $(pages).on('mouseup', function() { var dataAnchor = $(this).data('anchor'); if ('' !== dataAnchor) { addActiveClass(dataAnchor, pages);
            $('.off-canvas-button svg').show();
            $('.off-canvas-button').css({ 'cursor': 'pointer' });
            $('body').removeClass('fixed no-scroll') } });

    function addActiveClass(anchor, pages) { pages.removeClass('active');
        $('[data-anchor = "' + anchor + '"]').addClass('active') }
})

submitPasswordProtectedForm = function(formElement, event) {
    event.preventDefault();
    var buttonTextElement = formElement.querySelector('span.password-protected-btn-text');
    buttonTextElement.classList.add('loading-spinner');
    var rawData = new FormData(formElement);
    var data = { pageId: window.pageId };
    for (var value of rawData.entries()) { data[value[0]] = value[1] }
    api.viewPage(JSON.stringify(data), (response) => { if (response.type === 1) { location.reload() } else { buttonTextElement.classList.remove('loading-spinner') } })
}
$(document).ready(function() { $('.paypal-content form').attr('target', '_blank') })
let startHeight;
$(document).on("click", ".period-switcher .monthly", function() {
    $(".period-switcher .switcher-option.yearly").removeClass("active");
    $(".period-switcher .switcher-option.monthly").addClass("active");
    $(".pricing-view .plan-group").removeClass("active");
    $(".pricing-view .other-monthly-plans").addClass("active");
    $(".pricing-info-container.yearly").removeClass("active");
    $(".pricing-info-container.monthly").addClass("active");
    if (document.querySelector('.new-pricing-container')) { document.querySelector('.new-pricing-container .plan-group.other-yearly-plans').classList.remove('active');
        document.querySelector('.new-pricing-container .plan-group.other-monthly-plans').classList.add('active');
        checkDesctopAccordionHeight() }
    activateSwipe(!0)
});
$(document).on("click", ".period-switcher .yearly", function() {
    $(".period-switcher .switcher-option.monthly").removeClass("active");
    $(".period-switcher .switcher-option.yearly").addClass("active");
    $(".pricing-view .plan-group").removeClass("active");
    $(".pricing-view .other-yearly-plans").addClass("active");
    $(".pricing-info-container.yearly").addClass("active");
    $(".pricing-info-container.monthly").removeClass("active");
    if (document.querySelector('.new-pricing-container')) { document.querySelector(".new-pricing-container .plan-group").classList.remove("active");
        document.querySelector(".new-pricing-container .plan-group.other-yearly-plans").classList.add("active") }
    activateSwipe(!0)
});
$(document).on("click", ".swiper-slide-active .round-button", function() { var parentContainer = $(this).closest('.swiper-slide-active').find('.mobile-features-container');
    parentContainer.toggleClass('show');
    togglePlanRoundButton() });
$(document).on("click", "#pricing-container .compare-plans.desktop-view", function() { if ($('.header-rows').length) { scrollToFeatures($(this).closest('.features-container').get(0), $('.header-rows').height() + 70) } else { scrollToFeatures($(this).closest('.features-container').get(0), 80) } });

function scrollToFeatures(domNode, difference) {
    var defaultZoom = $("body .full-width-page").css('zoom');
    if (!defaultZoom) { defaultZoom = 1 }
    var scrollToPos = $(document).scrollTop() + domNode.getBoundingClientRect().top;
    $('html, body').animate({ scrollTop: scrollToPos * defaultZoom + difference }, 400)
}
$(document).on("click", "#pricing-container .swiper-slide-active .compare-plans", function() { if ($('.header-rows').length) { scrollToFeatures($('.swiper-slide-active .pricing-info-container')[0], $('.header-rows').height() - 80) } else { scrollToFeatures($('.swiper-slide-active .pricing-info-container')[0], -90) } });

function toggelAccordion(e) { var featureBlock = e.target.closest('.list-features-accordion').querySelector('.features-block'); var arrow = e.target.closest('.accordion-list-header').querySelector('.uci-arrow-forward');
    featureBlock.classList.toggle('closed');
    arrow.classList.toggle('closed') }
if (document.querySelector('.new-pricing-container')) {
    document.querySelectorAll('.plan-group.other-monthly-plans .accordion-list-header').forEach(node => { node.addEventListener('click', (e) => toggelAccordion(e)) });
    document.querySelectorAll('.plan-group.other-yearly-plans .accordion-list-header').forEach(node => {
        var list = node.closest('.list-features-accordion');
        if (list) { var block = list.querySelector('.features-block'); var height = block.getBoundingClientRect().height; if (height !== 0) { block.style.maxHeight = `${height}px` } }
        node.addEventListener('click', (e) => toggelAccordion(e))
    })
}

function activateSwipe(force) {
    var pricingBox = document.getElementById('pricing-container');
    var newPricingBox = document.querySelector('.new-pricing-container');
    var popularElementIndex = $('.plan-group.active .swiper-container .swiper-slide.popular').index();
    var isFirstLoaded = 0;
    var ww;
    var startSize;
    if (force === !0) { destroySwipe() }
    if (newPricingBox) { ww = newPricingBox.getBoundingClientRect().width;
        startSize = 900;
        popularElementIndex-- } else { if (pricingBox) { ww = pricingBox.getBoundingClientRect().width;
            startSize = 991 } }
    if (ww <= startSize) {
        if (window.swiperBox) { return }
        window.swiperBox = new Swiper('.swiper-container ', {
            spaceBetween: 15,
            slidesPerView: 'auto',
            centeredSlides: !0,
            initialSlide: popularElementIndex,
            pagination: { el: '.swiper-pagination', type: 'bullets', clickable: !0, },
            on: {
                slideChange: function() {
                    if (isFirstLoaded >= popularElementIndex) { openMobileFeatures(!1);
                        togglePlanRoundButton(!0) }
                    isFirstLoaded++
                },
            }
        })
    } else { $("#pricing-container .swiper-wrapper ").removeAttr("style");
        destroySwipe() }
}

function destroySwipe() {
    if (window.swiperBox) {
        if (window.swiperBox.length) { window.swiperBox.map((item) => { item.destroy() }) }
        window.swiperBox = undefined
    }
}

function togglePlanRoundButton(force) { var buttonBox = $(".swiper-slide-active"); if (!buttonBox.find("i.plus-minus").hasClass('uci-plus-2') || force === !0) { openMobileFeatures(!1);
        buttonBox.find("i.plus-minus").removeClass('uci-minus-2');
        buttonBox.find("i.plus-minus").addClass('uci-plus-2') } else { buttonBox.find("i.plus-minus").removeClass('uci-plus-2');
        buttonBox.find("i.plus-minus").addClass('uci-minus-2') } }

function openMobileFeatures(status) { if (!document.querySelector('.new-pricing-container')) { if (status === !1) { $('html, body').animate({ scrollTop: $("#pricing-container").offset().top - 120 }, 300);
            $(".swiper-slide-active .mobile-features-container").removeClass("show") } else { $(".swiper-slide-active .mobile-features-container").addClass("show") } } }

function checkDesctopAccordionHeight() {
    if (document.querySelector('.new-pricing-container')) {
        document.querySelectorAll('.plan-group.other-monthly-plans .accordion-list-header').forEach(node => {
            var list = node.closest('.list-features-accordion');
            if (list) {
                var block = list.querySelector('.features-block');
                var height = block.getBoundingClientRect().height;
                if (!startHeight) { startHeight = height }
                if (startHeight !== 0) { block.style.maxHeight = startHeight ? `${startHeight}px` : `${height}px` }
            }
        })
    }
}

function checkMobileAccordionHeight() { if (document.querySelector('.new-pricing-container')) { document.querySelectorAll('.plan-group.other-monthly-plans .mobile-features-accordion .mobile-accordion-list-header').forEach(node => { var frature = node.closest('.mobile-features-accordion').querySelector('.mobile-features-block .mobile-feature-title'); if (frature) { node.addEventListener('click', (e) => { var featureBlock = e.target.closest('.mobile-features-accordion'); var arrow = e.target.closest('.mobile-accordion-list-header').querySelector('.uci-arrow-forward');
                    featureBlock.classList.toggle('closed');
                    arrow.classList.toggle('closed') }) } else { node.closest('.mobile-features-accordion').classList.add('empty') } });
        document.querySelectorAll('.plan-group.other-yearly-plans .mobile-features-accordion .mobile-accordion-list-header').forEach(node => { var frature = node.closest('.mobile-features-accordion').querySelector('.mobile-features-block .mobile-feature-title'); if (frature) { node.addEventListener('click', (e) => { var featureBlock = e.target.closest('.mobile-features-accordion'); var arrow = e.target.closest('.mobile-accordion-list-header').querySelector('.uci-arrow-forward');
                    featureBlock.classList.toggle('closed');
                    arrow.classList.toggle('closed') }) } else { node.closest('.mobile-features-accordion').classList.add('empty') } }) } }

function checkFixHeader() { if (document.querySelector('.new-pricing-container')) { var headerFixedRows = document.querySelectorAll('.header-rows .header-row-fix'); var posDifference = 0;
        headerFixedRows.forEach((fixRow) => { var fixRowWrapper = fixRow.closest('.header-row-wrapper');
            posDifference += fixRowWrapper.offsetHeight });
        document.querySelectorAll('.plan-group').forEach(node => { node.querySelector('.swiper-container').style.top = `${posDifference}px` }) } }
window.addEventListener("load", checkFixHeader);
$(window).resize(function() { checkFixHeader();
    activateSwipe();
    checkDesctopAccordionHeight() });
$(document).ready(function() { activateSwipe();
    checkMobileAccordionHeight() })
$(document).ready(function() { $('body').on('mouseup', '.icon-print', function() { if (!$('html').hasClass('admin-mode')) { let originalContents = document.body.innerHTML;
            $('.icon-print').hide();
            $('.header-rows').hide();
            $('.footer-rows').hide();
            window.print();
            document.body.innerHTML = originalContents } }) })
$(document).ready(function() { $(document).on('click', '.ModulePromoCode .modulePromoCode-submit', function(e) { e.preventDefault(); if (!$('html').hasClass('admin-mode')) { var button = $(this),
                curForm = button.closest('form'); if (curForm.validate()) { if (curForm.find("[name='linkType']").val() == '2' && curForm.find("[name='link']").val() != '') { window.location.href = curForm.find("[name='link']").val() } } } }) })
$(window).on('load', function() { $('.module.ModuleQuotes').each(function() { var slider = $(this).find('.slider-wrapper').first(); var id = slider.attr('id'); var options = window[id + 'options']; if (options) { options.currentSlideId = 0;
            options.sliderItems = $(slider).find("> .slider-container > .slider-item");
            options.paginationItems = $(slider).find("> .slide-pagination").find(".slide-pointer");
            slider.jqueryUcSlider(options, !0, !0) } }) })
$(window).on('load', function() { if (!$('html').hasClass('admin-mode')) { $('.ModuleSearch').closest('.uc-row').addClass('zIndex') } })

$(document).ready(function() { $('.module.ModuleSlider').each(function() { var slider = $(this).find('.slider-wrapper').first(); var id = slider.attr('id'); var options = window[id + 'options']; if (options) { slider.jqueryUcSlider(options, !0) } }) })



document.addEventListener('DOMContentLoaded', () => {
    var ssoWindow;
    var moduleSsoUser = document.querySelectorAll('.module.ModuleSsoUser');
    moduleSsoUser.forEach((ssoUser) => {
        var login = ssoUser.querySelector('.button.login');
        var logout = ssoUser.querySelector('.button.logout');
        var url = login.dataset.ssoUrl;
        if (url) {
            login.addEventListener('click', function() { ssoWindow = window.open(url, "", "width=560,height=800");
                window.addEventListener('message', loginMessageHandler) });
            logout.addEventListener('click', function() {
                api.publicCall('default', 'ModuleSsoUser', 'logout', null, function(response) {
                    if (response.type === 1) {
                        moduleSsoUser.forEach((ssoUser) => {
                            var login = ssoUser.querySelector('.button.login');
                            var logout = ssoUser.querySelector('.button.logout');
                            var userText = ssoUser.querySelector('.user-text');
                            if (login) { login.classList.remove('hidden') }
                            if (logout) { logout.classList.add('hidden') }
                            if (userText) { userText.classList.remove('active');
                                userText.innerHTML = '' }
                        })
                    }
                }, 'GET')
            })
        }

        function loginMessageHandler(e) {
            if (e.data && e.data.sender === 'rsv' && e.data.code) {
                api.publicCall('default', 'ModuleSsoUser', 'getUserInfo', JSON.stringify({ code: e.data.code }), function(response) {
                    if (response.type === 1 && response.data) {
                        moduleSsoUser.forEach((ssoUser) => {
                            var login = ssoUser.querySelector('.button.login');
                            var logout = ssoUser.querySelector('.button.logout');
                            var userText = ssoUser.querySelector('.user-text');
                            if (login) { login.classList.add('hidden') }
                            if (logout) { logout.classList.remove('hidden') }
                            if (userText) { userText.classList.add('active');
                                userText.innerHTML = `${response.data.firstName} ${response.data.lastName}` }
                        })
                    }
                    window.removeEventListener("message", loginMessageHandler);
                    ssoWindow.close()
                }, 'GET')
            }
        }
    })
})
$(document).ready(function() {
    $(document).on('click', '.ModuleSubscription .moduleSubscription-submit', function(e) {
        e.preventDefault();
        if (!$('html').hasClass('admin-mode')) {
            var button = $(this),
                curForm = button.closest('form'),
                curModule = curForm.closest('.module'),
                data = { fields: {} };
            if (curForm.validate()) {
                let baseUrlProtocol = baseUrl.includes('https:') ? 'https:' : 'http:';
                if (location.protocol !== baseUrlProtocol) {
                    let errorContainer = curModule.find('.error-message-container'),
                        errorContainerText = curModule.find('.error-message');
                    errorContainerText.text(window.translations['validation.enableSslMessage']);
                    curForm[0].reset();
                    curForm.find('select').trigger('chosen:updated');
                    curForm.one("change", ":input", function() { errorContainerText.text('error-message') });
                    if (typeof customCodeForSubscriptionElement !== 'undefined') { $('body').append(customCodeForSubscriptionElement) }
                    errorContainer.removeClass('hide');
                    setTimeout(function() { errorContainer.addClass('hide') }, 5000);
                    return
                }
                curForm.find('input').each(function(index, input) {
                    if (input.type === 'text') { data.fields.name = {
                            [input.name]: input.value } }
                    if (input.type === 'email') { data.fields.email = {
                            [input.name]: input.value } }
                });
                data.id = curForm.data('module-id');
                data.pageUrl = window.location.href;
                let buttonWidth = $(button).outerWidth();
                $(this).css({ width: buttonWidth });
                $(this).children('span').addClass('loading-spinner');
                var that = $(this);
                api.publicCall('default', 'ModuleSubscription', 'subscribe', JSON.stringify(data), function(response) {
                    that.css({ width: 'auto' });
                    that.children('span').removeClass('loading-spinner');
                    if (response.type == 1) {
                        if (response.msg.sendTo) { window.location = response.msg.link;
                            window.UcAnchor.checkAndScrollAnchor(!0) } else {
                            if (response.msg.subscribeMessage) {
                                var thankYouContainerText = curModule.find('.thank-you-message');
                                var thankYouContainer = curModule.find('.thank-you-message-container');
                                thankYouContainerText.text(response.msg.thankYouText);
                                curForm[0].reset();
                                curForm.find('select').trigger('chosen:updated');
                                curForm.one("change", ":input", function() { thankYouContainerText.text('thank-you-message') });
                                thankYouContainer.removeClass('hide');
                                let customCodeForSubscriptionElement = window['customCodeForSubscriptionElement' + data.id];
                                if (customCodeForSubscriptionElement) {
                                    var customCode = customCodeForSubscriptionElement[0];
                                    let fields = data.fields;
                                    if (fields.email) { customCode = customCode.replace('@@email', fields.email.Email) }
                                    if (fields.name) { customCode = customCode.replace('@@name', fields.name.Name) }
                                    var inlineScript = document.createElement('script');
                                    inlineScript.innerHTML = customCode;
                                    document.body.insertAdjacentElement('beforeend', inlineScript)
                                }
                                setTimeout(function() { thankYouContainer.addClass('hide') }, 5000)
                            }
                        }
                    }
                })
            }
        }
    })
})
let infoButton = document.querySelectorAll('.info-button');
if (infoButton) { infoButton.forEach(function(button) { button.addEventListener('click', (event) => { let parent = event.target.closest('.controls').parentNode; let item = parent.querySelector('.template-info-container'); if (!item.classList.contains('show')) { item.classList.add('show') } }) }) }
let closeInfo = document.querySelectorAll('.close-info');
if (closeInfo) { closeInfo.forEach(function(button) { button.addEventListener('click', (event) => { let parent = event.target.closest('.template-info-container').parentNode; let item = parent.querySelector('.template-info-container'); if (item.classList.contains('show')) { item.classList.remove('show') } }) }) }
let loadMore = document.querySelector('.templates-container .load-more');
if (loadMore) { loadMore.classList.add('hide');
    loadMore.addEventListener('click', (event) => { let parent = event.target.closest('.template-view'); let tagId = parent.querySelector('.templates-section').getAttribute('active-tag'); let showCount = parent.querySelectorAll('.template-item:not(.hide)').length; let limit = parent.querySelector('.templates-section').getAttribute('limit-templates');
        parent.querySelector('.templates-container .load-more').classList.add('hide'); let module = parent.querySelector('.templates-section');
        filterByTag(tagId, parseInt(limit) + parseInt(showCount), module) }) }

function filterByTag(tagId, limit, module) {
    let option = module.querySelector(`.tag-select option[value='${tagId}']`);
    let templateCount = Infinity;
    if (option) { templateCount = parseInt(option.getAttribute('templatecount')) }
    let allContainer = module.querySelector('.all-container');
    let popularContainer = module.querySelector('.popular-container');
    if (tagId === '0') {
        if (popularContainer) { allContainer.classList.add('show');
            popularContainer.classList.remove('show') }
        let allItems = module.querySelectorAll('.all-container .template-item');
        let i = 0;
        for (const item of allItems) {
            if (i >= limit) { break }
            let templateImg = item.querySelector('.template-image');
            if (templateImg) { templateImg = templateImg.querySelector('img'); let attrSrc = templateImg.getAttribute('attrSrc'); if (templateImg.getAttribute('src') === '') { templateImg.setAttribute('src', attrSrc) } }
            item.classList.add('show');
            item.classList.remove('hide');
            i++
        }
    } else if (tagId === 'popular') {
        if (popularContainer) { allContainer.classList.remove('show');
            popularContainer.classList.add('show') }
        let allItems = module.querySelectorAll('.popular-container .template-item');
        let i = 0;
        for (const item of allItems) {
            if (i >= limit) { break }
            let templateImg = item.querySelector('.template-image').querySelector('img');
            let attrSrc = templateImg.getAttribute('attrSrc');
            if (templateImg.getAttribute('src') === '') { templateImg.setAttribute('src', attrSrc) }
            item.classList.remove('hide');
            item.classList.add('show');
            i++
        }
    } else {
        if (popularContainer) { allContainer.classList.add('show');
            popularContainer.classList.remove('show') }
        let allItems = module.querySelectorAll('.all-container .template-item');
        let i = 0;
        for (const item of allItems) {
            if (i >= limit) { break }
            let tagIds = item.querySelector('.template-tags').value;
            tagIds = tagIds.split(",");
            tagIds = tagIds.map(Number);
            tagId = parseInt(tagId);
            if (tagIds.indexOf(tagId) !== -1) {
                item.classList.remove('hide');
                item.classList.add('show');
                let templateImg = item.querySelector('.template-image').querySelector('img');
                let attrSrc = templateImg.getAttribute('attrSrc');
                if (templateImg.getAttribute('src') === '') { templateImg.setAttribute('src', attrSrc) }
                i++
            } else { item.classList.add('hide');
                item.classList.remove('show') }
        }
    }
    setTimeout(() => {
        for (const item of module.querySelectorAll('.template-item:not(.show)')) { item.classList.add('hide');
            item.classList.add('hidden') }
        for (const item of module.querySelectorAll('.template-item:not(.hide)')) { item.classList.add('show');
            item.classList.remove('hidden') }
    }, 300);
    if (templateCount > limit) { let loadMore = module.querySelector('.templates-container .load-more'); if (loadMore) { loadMore.classList.remove('hide') } }
}
const tags = document.querySelectorAll('.tags .tag');
if (tags) {
    tags.forEach(function(tag) {
        tag.addEventListener('click', (event) => {
            const tagElement = event.target.closest('.tag');
            const tagId = tagElement.getAttribute('attr-id');
            const tagName = tagElement.getAttribute('attr-tagname');
            const parent = tagElement.closest('.row');
            const limit = parseInt(parent.querySelector('.templates-section').getAttribute('limit-templates'));
            const module = parent.querySelector('.templates-section');
            const loadMore = parent.querySelector('.templates-container .load-more');
            parent.querySelector('.template').parentNode.classList.add('hide');
            if (loadMore) { loadMore.classList.add('hide') }
            history.pushState(null, null, tagName);
            parent.querySelector('.templates-section').setAttribute('active-tag', tagId);
            const activeTag = parent.querySelector('.tags .tag.active');
            if (activeTag) { activeTag.classList.remove('active') }
            tagElement.classList.add('active');
            filterByTag(tagId, limit, module)
        })
    })
}
document.querySelectorAll('.templates-section').forEach(function(elem) { let tagId = elem.getAttribute('active-tag'); let limit = elem.getAttribute('limit-templates');
    filterByTag(tagId, limit, elem) });
let hashs = window.location.hash;
if (hashs) { let tag = document.querySelector(`.tag[attr-tagname="${hashs}"]`); if (tag) { tag.click() } }


$(document).ready(function() { $('.ModuleTypeform .typeform-start-quize').click(function() { $('body').append($(this).closest('.ModuleTypeform').find('.typeform-container').clone());
        $('body').addClass('no-scroll');
        $('body > .typeform-container').addClass('active');
        $('body > .typeform-container .close-popup').one('click', function() { $(this).fadeOut(function() { $(this).closest('.typeform-container').remove();
                $('body').removeClass('no-scroll') }) }) }) })
if ($(window).width() > 1024) { var timeout = '';
    $(document).on('mouseover', '.user-profile', function(e) { clearTimeout(timeout);
        $(this).find('.dropdown-menu-profile').addClass('show'); var ucRow = closestByClass(e.target, 'uc-row'); if (ucRow) { ucRow.classList.add('row-forward') } });
    $(document).on('mouseleave', '.user-profile', function(e) { e.currentTarget.querySelector('.dropdown-menu-profile').classList.remove('show');
        timeout = setTimeout(function() { var ucRow = closestByClass(e.target, 'uc-row'); if (ucRow) { ucRow.classList.remove('row-forward') } }, 300) }) } else { $(document).on('click', '.user-profile', function(e) { e.stopPropagation();
        $(this).find('.dropdown-menu-profile').toggleClass('show'); var ucRow = closestByClass(e.target, 'uc-row'); if (ucRow) { ucRow.classList.toggle('row-forward') } });
    $(document).on('click touchstart', '.dropdown-menu-profile, .user-profile', function(e) { e.stopPropagation() }); if (document.querySelector('.user-profile')) { $(document).on('click touchstart', function(e) { $('.user-profile .dropdown-menu-profile').removeClass('show'); var ucRow = closestByClass(document.querySelector('.user-profile'), 'uc-row'); if (ucRow) { ucRow.classList.remove('row-forward') } }) } }
var closestByClass = function(el, className) {
    if (!el) { return null }
    while (!el.classList.contains(className)) { el = el.parentNode; if (!el || el === document) { return null } }
    return el
}
$(document).ready(function() { $(document).on('click', '.video-module-container .iframe-thumbnail', function() { if (!$('html').hasClass('admin-mode')) { var parentModule = $(this).closest('.module');
            setTimeout(function() { parentModule.find('.iframe-thumbnail').fadeOut() }, 1000); let iframe = $(parentModule.find('iframe')[0]); if ($(this).siblings('iframe').attr('src').indexOf('?') == -1) { iframe.attr('src', $(this).siblings('iframe').attr('src') + '?autoplay=1') } else { iframe.attr('src', $(this).siblings('iframe').attr('src') + '&autoplay=1') } } }) })