webpackJsonp([13,16],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate_ng2_translate__ = __webpack_require__(297);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(translate) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate_ng2_translate__["d" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_translate_ng2_translate__["d" /* TranslateService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/app.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_menu_items_menu_items__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(menuItems, router, translate) {
        this.menuItems = menuItems;
        this.router = router;
        this.translate = translate;
        this.today = Date.now();
        this.showSettings = false;
        var browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemSidebar = document.querySelector('.sidebar-panel .md-sidenav-focus-trap .cdk-focus-trap-content');
        var elemContent = document.querySelector('.md-sidenav-content');
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["initialize"](elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
            __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["initialize"](elemContent, { wheelSpeed: 2, suppressScrollX: true });
        }
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.url = event.url;
            if (_this.isOver())
                _this.sidemenu.close();
            if (window.matchMedia("(min-width: 960px)").matches && !_this.isMac())
                __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["update"](elemContent);
        });
    };
    AdminLayoutComponent.prototype.onClick = function (e) {
        var _this = this;
        var elemSidebar = document.querySelector('.sidebar-panel .md-sidenav-focus-trap .cdk-focus-trap-content');
        setTimeout(function () {
            if (window.matchMedia("(min-width: 960px)").matches && !_this.isMac())
                __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["update"](elemSidebar);
        }, 350);
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.isOver = function () {
        if (this.url === '/apps/messages' || this.url === '/apps/calendar' || this.url === '/apps/media' || this.url === '/maps/leaflet') {
            return true;
        }
        else {
            return window.matchMedia("(max-width: 960px)").matches;
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    };
    AdminLayoutComponent.prototype.addMenuItem = function () {
        this.menuItems.add({
            state: 'menu',
            name: 'MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                { state: 'menu', name: 'MENU' },
                { state: 'timelmenuine', name: 'MENU' }
            ]
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidemenu'), 
        __metadata('design:type', Object)
    ], AdminLayoutComponent.prototype, "sidemenu", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AdminLayoutComponent.prototype, "onClick", null);
    AdminLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(897)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_menu_items_menu_items__["a" /* MenuItems */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_menu_items_menu_items__["a" /* MenuItems */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__["d" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__["d" /* TranslateService */]) === 'function' && _c) || Object])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/admin-layout.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            styles: [':host /deep/ .md-sidenav-content {padding: 0;} md-sidenav-layout {z-index: 4000}'],
            template: __webpack_require__(898)
        }), 
        __metadata('design:paramtypes', [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/auth-layout.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionDirective = (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink)
                link.open = false;
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AccordionDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.accordion',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AccordionDirective);
    return AccordionDirective;
    var _a;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/accordion.directive.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_directive__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionLinkDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
        if (this.group) {
            var routeUrl = this.nav.getUrl();
            var currentUrl = routeUrl.split('/');
            if (currentUrl.indexOf(this.group) > 0)
                this.toggle();
        }
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.accordion-link'
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */]) === 'function' && _a) || Object])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
    var _a;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/accordionlink.directive.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MENUITEMS = [
    {
        state: 'home',
        name: 'HOME',
        type: 'link',
        icon: 'explore'
    },
    {
        state: 'courses',
        name: 'COURSE',
        type: 'link',
        icon: 'photo'
    } /*,
    {
      state: 'apps',
      name: 'APPS',
      type: 'sub',
      icon: 'apps',
      badge: [
        {type: 'red', value: '5'}
      ],
      children: [
        {state: 'calendar', name: 'CALENDAR'},
        {state: 'media', name: 'MEDIA'},
        {state: 'messages', name: 'MESSAGES'},
        {state: 'social', name: 'SOCIAL'},
        {state: 'chat', name: 'CHAT'}
      ]
    },
    {
      state: 'widgets',
      name: 'WIDGETS',
      type: 'link',
      icon: 'photo'
    },
    {
      state: 'material',
      name: 'MATERIAL',
      type: 'sub',
      icon: 'equalizer',
      badge: [
        {type: 'purple', value: '10'}
      ],
      children: [
        {state: 'button', name: 'BUTTON'},
        {state: 'cards', name: 'CARDS'},
        {state: 'select', name: 'SELECT'},
        {state: 'input', name: 'INPUT'},
        {state: 'checkbox', name: 'CHECKBOX'},
        {state: 'radio', name: 'RADIO'},
        {state: 'toolbar', name: 'TOOLBAR'},
        {state: 'lists', name: 'LISTS'},
        {state: 'grid', name: 'GRID'},
        {state: 'progress', name: 'PROGRESS'},
        {state: 'tabs', name: 'TABS'},
        {state: 'switch', name: 'SWITCH'},
        {state: 'tooltip', name: 'TOOLTIP'},
        {state: 'menu', name: 'MENU'},
        {state: 'slider', name: 'SLIDER'},
        {state: 'snackbar', name: 'SNACKBAR'},
        {state: 'dialog', name: 'DIALOG'}
      ]
    },
    {
      state: 'forms',
      name: 'FORMS',
      type: 'sub',
      icon: 'looks_3',
      children: [
        {state: 'editor', name: 'EDITOR'},
        {state: 'validation', name: 'VALIDATION'},
        {state: 'upload', name: 'UPLOAD'},
        {state: 'tree', name: 'TREE'},
      ]
    },
    {
      state: 'tables',
      name: 'TABLES',
      type: 'sub',
      icon: 'format_line_spacing',
      badge: [
        {type: 'blue-grey', value: '8'
        }
      ],
      children: [
        {state: 'fullscreen', name: 'FULLSCREEN'},
        {state: 'editing', name: 'EDITING'},
        {state: 'filter', name: 'FILTER'},
        {state: 'paging', name: 'PAGING'},
        {state: 'sorting', name: 'SORTING'},
        {state: 'pinning', name: 'PINNING'},
        {state: 'selection', name: 'SELECTION'},
      ]
    },
    {
      state: 'charts',
      name: 'CHARTS',
      type: 'link',
      icon: 'show_chart',
    },
    {
      state: 'maps',
      name: 'MAPS',
      type: 'sub',
      icon: 'navigation',
      badge: [
        {type: 'green', value: 'new'
        }
      ],
      children: [
        {state: 'google', name: 'GOOGLE'},
        {state: 'leaflet', name: 'LEAFLET'}
      ]
    },
    {
      state: 'dragndrop',
      name: 'DND',
      type: 'link',
      icon: 'show_chart',
    },
    {
      state: 'pages',
      name: 'PAGES',
      type: 'sub',
      icon: 'pages',
      children: [
        {state: 'invoice', name: 'INVOICE'},
        {state: 'timeline', name: 'TIMELINE'},
        {state: 'user', name: 'USER'},
        {state: 'blank', name: 'BLANK'},
      ]
    },
    {
      state: 'session',
      name: 'SESSION',
      type: 'sub',
      icon: 'face',
      children: [
        {state: '404', name: '404'},
        {state: 'error', name: 'ERROR'},
        {state: 'signin', name: 'SIGNIN'},
        {state: 'signup', name: 'SIGNUP'},
        {state: 'forgot', name: 'FORGOT'},
        {state: 'lockscreen', name: 'LOCKSCREEN'},
        {state: 'login', name: 'LOGIN'},
      ]
    },
    {
      state: 'http://primer.nyasha.me/docs',
      name: 'DOCS',
      type: 'extTabLink',
      icon: 'local_library'
    }*/
];
var MenuItems = (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems.prototype.add = function (menu) {
        MENUITEMS.push(menu);
    };
    MenuItems = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], MenuItems);
    return MenuItems;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/menu-items.js.map

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chartlib/chartlib.module": [
		946,
		9
	],
	"./course/course.module": [
		947,
		10
	],
	"./dashboard/dashboard.module": [
		948,
		8
	],
	"./dragndrop/dragndrop.module": [
		949,
		6
	],
	"./forms/forms.module": [
		950,
		0
	],
	"./maps/maps.module": [
		951,
		3
	],
	"./material/material.module": [
		952,
		1
	],
	"./pages/pages.module": [
		953,
		7
	],
	"./session/session.module": [
		954,
		2
	],
	"./tables/tables.module": [
		955,
		5
	],
	"./widgets/widgets.module": [
		956,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 518;


/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app___ = __webpack_require__(707);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app___["a" /* AppModule */]);
//# sourceMappingURL=E:/n31/JS/angular2video/src/main.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JazzDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
        this.config = {
            disableClose: false,
            width: '',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            }
        };
    }
    DialogComponent.prototype.open = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(JazzDialog, this.config);
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.lastCloseResult = result;
            _this.dialogRef = null;
        });
    };
    DialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(899),
            styles: [__webpack_require__(895)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"]) === 'function' && _a) || Object])
    ], DialogComponent);
    return DialogComponent;
    var _a;
}());
var JazzDialog = (function () {
    function JazzDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.jazzMessage = 'Jazzy jazz jazz';
    }
    JazzDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'demo-jazz-dialog',
            template: "\n  <h5 class=\"mt-0\">Maecenas faucibus mollis interdum.</h5>\n  <md-input placeholder=\"How much?\" #howMuch type=\"number\" style=\"width: 100%;\"></md-input>\n  <p> {{ jazzMessage }} </p>\n  <button md-button type=\"button\" (click)=\"dialogRef.close(howMuch.value)\">Close dialog</button>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"]) === 'function' && _a) || Object])
    ], JazzDialog);
    return JazzDialog;
    var _a;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/dialog.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_items_menu_items__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__ = __webpack_require__(710);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionAnchorDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["b" /* AccordionLinkDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["c" /* AccordionDirective */], __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionAnchorDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["b" /* AccordionLinkDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["c" /* AccordionDirective */], __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__menu_items_menu_items__["a" /* MenuItems */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/shared.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_dialog_dialog_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_admin_admin_layout_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layouts_auth_auth_layout_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__(535);
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__["a" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__material_dialog_dialog_component__["a" /* JazzDialog */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__["b" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__["c" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]]
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */].forRoot(),
            ],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__material_dialog_dialog_component__["a" /* JazzDialog */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/app.module.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });


var AppRoutes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [{
                path: 'home',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'courses',
                loadChildren: './course/course.module#CourseModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'material',
                loadChildren: './material/material.module#MaterialComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#FormModule'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'charts',
                loadChildren: './chartlib/chartlib.module#ChartlibModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapModule'
            }, {
                path: 'dragndrop',
                loadChildren: './dragndrop/dragndrop.module#DragndropModule'
            }, {
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
        children: [{
                path: 'session',
                loadChildren: './session/session.module#SessionModule'
            }]
    },
    {
        path: 'login',
        redirectTo: 'session/login'
    },
    {
        path: '**',
        redirectTo: 'session/404'
    }];
//# sourceMappingURL=E:/n31/JS/angular2video/src/app.routing.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(455);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(705);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=E:/n31/JS/angular2video/src/index.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__(459);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAnchorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.accordion-toggle'
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */]) === 'function' && _a) || Object])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
    var _a;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/accordionanchor.directive.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__ = __webpack_require__(708);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__(459);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_directive__ = __webpack_require__(458);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_directive__["a"]; });



//# sourceMappingURL=E:/n31/JS/angular2video/src/index.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleFullscreenDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var screenfull = __webpack_require__(932);
var ToggleFullscreenDirective = (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appToggleFullscreen]'
        }), 
        __metadata('design:paramtypes', [])
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/toggle-fullscreen.directive.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/n31/JS/angular2video/src/environment.js.map

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "<div class=\"app\" #root=\"$implicit\" dir=\"ltr\" [ngClass]=\"{'app-dark': dark, 'boxed': boxed}\">\r\n  <md-toolbar class=\"main-header\" color=\"primary\">\r\n    <button (click)=\"sidemenu.toggle()\" md-icon-button>\r\n      <md-icon>menu</md-icon>\r\n    </button>\r\n    <div class=\"branding\">\r\n      <div class=\"logo\"></div>\r\n    </div>\r\n    <div class=\"right\">\r\n    <button appToggleFullscreen md-icon-button>\r\n      <md-icon>fullscreen</md-icon>\r\n    </button>\r\n    <button (click)=\"end.toggle()\" md-icon-button class=\"ml-xs overflow-visible\">\r\n      <md-icon>notifications</md-icon>\r\n     <!-- <span class=\"notification-label\">5</span>-->\r\n    </button>\r\n    <button [md-menu-trigger-for]=\"user\" md-icon-button class=\"ml-xs\">\r\n      <md-icon>person</md-icon>\r\n    </button>\r\n    </div>\r\n    <md-menu #user=\"mdMenu\" x-position=\"before\">\r\n      <button md-menu-item>\r\n        <md-icon>settings</md-icon>\r\n        Settings\r\n      </button>\r\n      <button md-menu-item>\r\n        <md-icon>account_box</md-icon>\r\n        Profile\r\n      </button>\r\n      <button md-menu-item>\r\n        <md-icon>notifications_off</md-icon>\r\n        Disable notifications\r\n      </button>\r\n      <button md-menu-item>\r\n        <md-icon>exit_to_app</md-icon>\r\n        Sign Out\r\n      </button>\r\n    </md-menu>\r\n  </md-toolbar>\r\n\r\n    <md-sidenav-layout class=\"app-inner\">\r\n      <md-sidenav #sidemenu class=\"sidebar-panel\" id=\"sidebar-panel\" [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"!isOver()\">\r\n        <md-nav-list class=\"navigation accordion\">\r\n          <md-list-item class=\"accordion-link\" *ngFor=\"let menuitem of menuItems.getAll()\" group=\"{{menuitem.state}}\">\r\n         <a class=\"accordion-toggle relative\" md-ripple [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\r\n            <md-icon>{{ menuitem.icon }}</md-icon>\r\n            <span>{{ menuitem.name | translate }}</span>\r\n            <span fxFlex></span>\r\n            <span class=\"menu-badge md-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n          </a>\r\n            <!-- <a class=\"accordion-toggle relative\" md-ripple href=\"{{menuitem.state}}\" *ngIf=\"menuitem.type === 'extLink'\">\r\n              <md-icon>{{ menuitem.icon }}</md-icon>\r\n              <span>{{ menuitem.name | translate }}</span>\r\n              <span fxFlex></span>\r\n              <span class=\"menu-badge md-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n            </a>\r\n            <a class=\"accordion-toggle relative\" md-ripple href=\"{{menuitem.state}}\" target=\"_blank\" *ngIf=\"menuitem.type === 'extTabLink'\">\r\n              <md-icon>{{ menuitem.icon }}</md-icon>\r\n              <span>{{ menuitem.name | translate }}</span>\r\n              <span fxFlex></span>\r\n              <span class=\"menu-badge md-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n            </a>\r\n          <a class=\"accordion-toggle relative\" md-ripple href=\"javascript:;\" *ngIf=\"menuitem.type === 'sub'\">\r\n            <md-icon>{{ menuitem.icon }}</md-icon>\r\n            <span>{{ menuitem.name | translate }}</span>\r\n            <span fxFlex></span>\r\n            <span class=\"menu-badge md-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n            <md-icon class=\"menu-caret\">arrow_drop_down</md-icon>\r\n          </a>\r\n          <md-nav-list class=\"sub-menu\" *ngIf=\"menuitem.type === 'sub'\">\r\n            <md-list-item *ngFor=\"let childitem of menuitem.children\" routerLinkActive=\"open\">\r\n              <a [routerLink]=\"['/', menuitem.state, childitem.state ]\" class=\"relative\" md-ripple>{{ childitem.name | translate }}</a>\r\n            </md-list-item>\r\n          </md-nav-list>-->\r\n        </md-list-item>\r\n        <md-divider></md-divider>\r\n        <!--<md-list-item>\r\n          <a (click)=\"addMenuItem()\">\r\n            <md-icon>add</md-icon>\r\n            <span>Add</span>\r\n          </a>\r\n        </md-list-item>-->\r\n      </md-nav-list>\r\n    </md-sidenav>\r\n<!--    <md-sidenav #end align=\"end\" class=\"chat-panel\" mode=\"over\" opened=\"false\">\r\n      <md-tab-group [selectedIndex]=\"1\" md-stretch-tabs>\r\n        <md-tab>\r\n          <template md-tab-label>Today</template>\r\n          <div class=\"scroll\">\r\n            <md-list class=\"pt-1 pb-1\">\r\n              <md-list-item>\r\n                <div fxLayout=\"column\">\r\n                  <h2 class=\"ma-0\">{{ today | date:'EEEE' }}</h2>\r\n                  <h6 class=\"md-text-muted ma-0\"><span>{{ today | date:'dd' }}</span>&nbsp;<span>{{ today | date:'MMMM' }}</span></h6>\r\n                </div>\r\n              </md-list-item>\r\n            </md-list>\r\n            <md-nav-list>\r\n              <md-divider></md-divider>\r\n              <h3 md-subheader class=\"text-uppercase font-weight-bold\">Stocks</h3>\r\n              <md-list-item>\r\n                 <a md-line href=\"javascript:;\">NASDAQ</a>\r\n                 <span class=\"md-text-muted text-md mr-xs ml-xs\">4,492.87</span>\r\n                 <span>-0.29%</span>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                 <a md-line href=\"javascript:;\">NYSE</a>\r\n                 <span class=\"md-text-muted text-md mr-xs ml-xs\">10,692.07</span>\r\n                 <span>-0.53%</span>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                 <a md-line href=javascript:;>DOW J</a>\r\n                 <span class=\"md-text-muted text-md mr-xs ml-xs\">17,046.81</span>\r\n                 <span>-0.14%</span>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                 <a md-line href=\"javascript:;\">APPL</a>\r\n                 <span class=\"md-text-muted text-md mr-xs ml-xs\">100,89</span>\r\n                 <span>+0.75%</span>\r\n              </md-list-item>\r\n              <md-divider></md-divider>\r\n              <h3 md-subheader class=\"text-uppercase font-weight-bold\">Weather</h3>\r\n              <md-list-item>\r\n                 <a md-line href=\"javascript:;\">{{ today | date:'shortTime' }}</a>\r\n                 <p md-line class=\"md-text-muted\">London</p>\r\n                 <span class=\"h4 pe-is-w-blizzard mr-1\"></span>\r\n                 <span class=\"h4\">26°</span>\r\n              </md-list-item>\r\n              <md-divider></md-divider>\r\n              <h3 md-subheader class=\"text-uppercase font-weight-bold\">Todo</h3>\r\n              <md-list-item>\r\n                <a md-line href=\"javascript:;\">Learn Angular 2.0</a>\r\n                <p md-line class=\"md-text-muted text-md\">2:45PM</p>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                 <a md-line href=\"javascript:;\">Learn Angular Material</a>\r\n                 <p md-line class=\"md-text-muted text-md\">3:20PM</p>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                 <a md-line href=\"javascript:;\">Write documentation</a>\r\n                 <p md-line class=\"md-text-muted text-md\">6:00PM</p>\r\n              </md-list-item>\r\n              <md-divider class=\"mt-xs mb-xs\"></md-divider>\r\n              <h3 md-subheader class=\"text-uppercase font-weight-bold\">Stats</h3>\r\n              <md-list-item>\r\n                <p class=\"text-md\" md-line>Local Storage (4023 / 10690)</p>\r\n                <md-progress-bar  md-line mode=\"determinate\" color=\"warn\" value=\"40\"></md-progress-bar>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                <p class=\"text-md\" md-line>Cloud Storage (700 / 1030)</p>\r\n                <md-progress-bar  md-line mode=\"determinate\" color=\"accent\" value=\"70\"></md-progress-bar>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                <p class=\"text-md\" md-line>Local Storage (20 / 100)</p>\r\n                <md-progress-bar  md-line mode=\"determinate\" value=\"20\"></md-progress-bar>\r\n              </md-list-item>\r\n            </md-nav-list>\r\n          </div>\r\n        </md-tab>\r\n        <md-tab>\r\n          <template md-tab-label>Notifications</template>\r\n          <div class=\"scroll\">\r\n            <md-nav-list>\r\n              <md-list-item>\r\n                <md-icon md-list-avatar class=\"md-text-primary\">people</md-icon>\r\n                <h4 md-line>Social</h4>\r\n                <p md-line>Ligula Purus Adipiscing</p>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                <md-icon md-list-avatar class=\"md-text-warn\">local_offer</md-icon>\r\n                <h4 md-line>Promotions</h4>\r\n                <p md-line>Etiam Ligula Dapibus</p>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                <md-icon md-list-avatar class=\"md-text-accent\">info</md-icon>\r\n                <h4 md-line>Updates</h4>\r\n                <p md-line>Sollicitudin Euismod Fringilla</p>\r\n              </md-list-item>\r\n\r\n              <md-list-item>\r\n                <md-icon md-list-avatar class=\"md-indigo\">delete_sweep</md-icon>\r\n                <h4 md-line>Removed 6 items from task list</h4>\r\n                <span class=\"text-md md-text-muted\" md-line>{{ 1427207139000 | date: 'fullDate' }}</span>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                <md-icon md-list-avatar>check_circle</md-icon>\r\n                <h4 md-line>Completed 2 projects</h4>\r\n                <span class=\"text-md md-text-muted\" md-line>{{ 1427412725000 | date: 'fullDate' }}</span>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                <md-icon md-list-avatar>notifications_paused</md-icon>\r\n                <h4 md-line>Muted notifications</h4>\r\n                <span class=\"text-md md-text-muted\" md-line>{{ 1427546580000 | date: 'fullDate' }}</span>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                <md-icon md-list-avatar>person_add</md-icon>\r\n                <h4 md-line>Added Joel to contact list</h4>\r\n                <span class=\"text-md md-text-muted\" md-line>{{ 1428275520000 | date: 'fullDate' }}</span>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                <md-icon md-list-avatar>phone_missed</md-icon>\r\n                <h4 md-line>Missed live call from Ellie</h4>\r\n                <span class=\"text-md md-text-muted\" md-line>{{ 1428830580000 | date: 'fullDate' }}</span>\r\n              </md-list-item>\r\n              <md-list-item>\r\n                <md-icon md-list-avatar>group_add</md-icon>\r\n                <h4 md-line>You've been added to HR group</h4>\r\n                <span class=\"text-md md-text-muted\" md-line>{{ 1429363920000 | date: 'fullDate' }}</span>\r\n              </md-list-item>\r\n            </md-nav-list>\r\n          </div>\r\n        </md-tab>\r\n      </md-tab-group>\r\n    </md-sidenav>-->\r\n      <router-outlet></router-outlet>\r\n  </md-sidenav-layout>\r\n\r\n  <!-- Demo Purposes Only\r\n  <button md-fab color=\"warn\" class=\"md-fab-bottom-right\" (click)=\"showSettings = true\">\r\n    <md-icon class=\"md-24\">settings</md-icon>\r\n  </button>\r\n  <md-card class=\"settings-panel\" *ngIf=\"showSettings\">\r\n    <md-toolbar color=\"warn\">\r\n      <span fxFlex>Options</span>\r\n      <button md-icon-button (click)=\"showSettings = false\">\r\n        <md-icon>close</md-icon>\r\n      </button>\r\n    </md-toolbar>\r\n    <md-card-content>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <span fxFlex>Boxed</span>\r\n        <md-slide-toggle (change)=\"boxed = (boxed == true ? false : true)\"></md-slide-toggle>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <span fxFlex>Dark Mode</span>\r\n        <md-slide-toggle (change)=\"dark = (dark == true ? false : true)\"></md-slide-toggle>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <span fxFlex>RTL</span>\r\n        <md-slide-toggle (change)=\"root.dir = (root.dir == 'rtl' ? 'ltr' : 'rtl')\"></md-slide-toggle>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <md-select placeholder=\"Language\" class=\"mt-1\" [(ngModel)]=\"currentLang\" #langSelect=\"ngModel\" (ngModelChange)=\"translate.use(currentLang)\">\r\n          <md-option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{ lang }}</md-option>\r\n        </md-select>\r\n     </div>\r\n    </md-card-content>\r\n  </md-card>\r\n  /Demo Purposes Only -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-layout>\r\n  <router-outlet></router-outlet>\r\n</md-sidenav-layout>"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"demo-dialog-card\">\r\n  <md-card-title>Dialog</md-card-title>\r\n  <md-card-subtitle>MdDialog is a service, which opens dialogs components in the view.</md-card-subtitle>\r\n  <md-card-content>\r\n    <button md-raised-button color=\"primary\" (click)=\"open()\" [disabled]=\"dialogRef\">Open dialog</button>\r\n\r\n    <p>Dialog dimensions</p>\r\n    <md-input [(ngModel)]=\"config.width\" placeholder=\"Width\"></md-input>\r\n    <md-input [(ngModel)]=\"config.height\" placeholder=\"Height\"></md-input>\r\n    \r\n    <p>Dialog position</p>\r\n\r\n    <md-input [(ngModel)]=\"config.position.top\" (change)=\"config.position.bottom = ''\" placeholder=\"Top\"></md-input>\r\n    <md-input [(ngModel)]=\"config.position.bottom\" (change)=\"config.position.top = ''\" placeholder=\"Bottom\"></md-input>\r\n\r\n    <md-input [(ngModel)]=\"config.position.left\" (change)=\"config.position.right = ''\" placeholder=\"Left\"></md-input>\r\n    <md-input [(ngModel)]=\"config.position.right\" (change)=\"config.position.left = ''\" placeholder=\"Right\"></md-input>\r\n\r\n    <p>Other options</p>\r\n    <md-checkbox [(ngModel)]=\"config.disableClose\">Disable close</md-checkbox>\r\n\r\n    <p>Last close result: {{lastCloseResult}}</p>\r\n  </md-card-content>\r\n</md-card>\r\n"

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(519);


/***/ })

},[943]);
//# sourceMappingURL=main.bundle.map