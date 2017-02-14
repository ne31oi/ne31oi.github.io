webpackJsonp([1,16],{

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsComponent = (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(1171),
            styles: [__webpack_require__(1126)]
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/buttons.component.js.map

/***/ }),

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsComponent = (function () {
    function CardsComponent() {
    }
    CardsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(1172),
            styles: [__webpack_require__(1127)]
        }), 
        __metadata('design:paramtypes', [])
    ], CardsComponent);
    return CardsComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/cards.component.js.map

/***/ }),

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdCheckboxDemoNestedChecklist; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxComponent = (function () {
    function CheckboxComponent() {
        this.isIndeterminate = false;
        this.isChecked = false;
        this.isDisabled = false;
        this.alignment = 'start';
        this.useAlternativeColor = false;
    }
    CheckboxComponent.prototype.printResult = function () {
        if (this.isIndeterminate) {
            return 'Maybe!';
        }
        return this.isChecked ? 'Yes!' : 'No!';
    };
    CheckboxComponent.prototype.checkboxColor = function () {
        return this.useAlternativeColor ? 'primary' : 'accent';
    };
    CheckboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(1173),
            styles: [__webpack_require__(1128)]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());
var MdCheckboxDemoNestedChecklist = (function () {
    function MdCheckboxDemoNestedChecklist() {
        this.tasks = [{
                name: 'Reminders',
                completed: false,
                subtasks: [{
                        name: 'Cook Dinner',
                        completed: false
                    }, {
                        name: 'Read the Material Design Spec',
                        completed: false
                    }, {
                        name: 'Upgrade Application to Angular2',
                        completed: false
                    }]
            }, {
                name: 'Groceries',
                completed: false,
                subtasks: [{
                        name: 'Organic Eggs',
                        completed: false
                    }, {
                        name: 'Protein Powder',
                        completed: false
                    }, {
                        name: 'Almond Meal Flour',
                        completed: false
                    }]
            }];
    }
    MdCheckboxDemoNestedChecklist.prototype.allComplete = function (task) {
        var subtasks = task.subtasks;
        return subtasks.every(function (t) { return t.completed; }) ? true : subtasks.every(function (t) { return !t.completed; }) ? false : task.completed;
    };
    MdCheckboxDemoNestedChecklist.prototype.someComplete = function (tasks) {
        var numComplete = tasks.filter(function (t) { return t.completed; }).length;
        return numComplete > 0 && numComplete < tasks.length;
    };
    MdCheckboxDemoNestedChecklist.prototype.setAllCompleted = function (tasks, completed) {
        tasks.forEach(function (t) { return t.completed = completed; });
    };
    MdCheckboxDemoNestedChecklist = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-checkbox-demo-nested-checklist',
            styles: ["\n    li {\n      margin-bottom: 4px;\n    }\n  "],
            template: __webpack_require__(1174),
        }), 
        __metadata('design:paramtypes', [])
    ], MdCheckboxDemoNestedChecklist);
    return MdCheckboxDemoNestedChecklist;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/checkbox.component.js.map

/***/ }),

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = (function () {
    function GridComponent() {
        this.tiles = [{
                text: 'One',
                cols: 3,
                rows: 1,
                color: 'lightblue'
            }, {
                text: 'Two',
                cols: 1,
                rows: 2,
                color: 'lightgreen'
            }, {
                text: 'Three',
                cols: 1,
                rows: 1,
                color: 'lightpink'
            }, {
                text: 'Four',
                cols: 2,
                rows: 1,
                color: '#DDBDF1'
            }];
        this.dogs = [{
                name: 'Porter',
                human: 'Kara'
            }, {
                name: 'Mal',
                human: 'Jeremy'
            }, {
                name: 'Koby',
                human: 'Igor'
            }, {
                name: 'Razzle',
                human: 'Ward'
            }, {
                name: 'Molly',
                human: 'Rob'
            }, {
                name: 'Husi',
                human: 'Matias'
            }];
        this.basicRowHeight = 80;
        this.fixedCols = 4;
        this.fixedRowHeight = 200;
        this.ratioGutter = 1;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
    }
    GridComponent.prototype.addTileCols = function () {
        this.tiles[2].cols++;
    };
    GridComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(1175),
            styles: [__webpack_require__(1129)]
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/grid.component.js.map

/***/ }),

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var max = 5;
var InputComponent = (function () {
    function InputComponent() {
        this.items = [{
                value: 10
            }, {
                value: 20
            }, {
                value: 30
            }, {
                value: 40
            }, {
                value: 50
            }];
        this.rows = 8;
    }
    InputComponent.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({
                value: ++max
            });
        }
    };
    InputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(1176),
            styles: [__webpack_require__(1130)]
        }), 
        __metadata('design:paramtypes', [])
    ], InputComponent);
    return InputComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/input.component.js.map

/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListsComponent = (function () {
    function ListsComponent() {
        this.todos = [{
                finished: true,
                name: 'Learn Angular 2.0',
            }, {
                finished: true,
                name: 'Learn Angular Material 2.0',
            }, {
                finished: false,
                name: 'Build examples',
            }, {
                finished: false,
                name: 'Documentation',
            }, {
                finished: false,
                name: 'Write about your findings',
            }, {
                finished: false,
                name: 'Contribute back to the community',
            }];
        this.items = ['Pepper', 'Salt', 'Paprika'];
        this.contacts = [{
                name: 'Nancy',
                headline: 'Software engineer'
            }, {
                name: 'Mary',
                headline: 'TPM'
            }, {
                name: 'Bobby',
                headline: 'UX designer'
            }];
        this.messages = [{
                from: 'Nancy',
                subject: 'Brunch?',
                message: 'Did you want to go on Sunday? I was thinking that might work.',
                image: 'https://angular.io/resources/images/bios/julie-ralph.jpg'
            }, {
                from: 'Mary',
                subject: 'Summer BBQ',
                message: 'Wish I could come, but I have some prior obligations.',
                image: 'https://angular.io/resources/images/bios/juleskremer.jpg'
            }, {
                from: 'Bobby',
                subject: 'Oui oui',
                message: 'Do you have Paris reservations for the 15th? I just booked!',
                image: 'https://angular.io/resources/images/bios/jelbourn.jpg'
            }];
        this.links = [{
                name: 'Inbox'
            }, {
                name: 'Outbox'
            }, {
                name: 'Spam'
            }, {
                name: 'Trash'
            }];
        this.thirdLine = false;
        this.infoClicked = false;
    }
    ListsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(1177),
            styles: [__webpack_require__(1131)]
        }), 
        __metadata('design:paramtypes', [])
    ], ListsComponent);
    return ListsComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/lists.component.js.map

/***/ }),

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
        this.selected = '';
        this.items = [{
                text: 'Refresh'
            }, {
                text: 'Settings'
            }, {
                text: 'Help',
                disabled: true
            }, {
                text: 'Sign Out'
            }];
        this.iconItems = [{
                text: 'Redial',
                icon: 'dialpad'
            }, {
                text: 'Check voicemail',
                icon: 'voicemail',
                disabled: true
            }, {
                text: 'Disable alerts',
                icon: 'notifications_off'
            }];
    }
    MenuComponent.prototype.select = function (text) {
        this.selected = text;
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(1178),
            styles: [__webpack_require__(1132)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/menu.component.js.map

/***/ }),

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressComponent = (function () {
    function ProgressComponent() {
        this.progressValue = 40;
        this.determinateProgressValue = 30;
        this.bufferProgressValue = 30;
        this.bufferBufferValue = 40;
    }
    ProgressComponent.prototype.step = function (val) {
        this.progressValue += val;
    };
    ProgressComponent.prototype.stepDeterminateProgressVal = function (val) {
        this.determinateProgressValue += val;
    };
    ProgressComponent.prototype.stepBufferProgressVal = function (val) {
        this.bufferProgressValue += val;
    };
    ProgressComponent.prototype.stepBufferBufferVal = function (val) {
        this.bufferBufferValue += val;
    };
    ProgressComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(1179),
            styles: [__webpack_require__(1133)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressComponent);
    return ProgressComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/progress.component.js.map

/***/ }),

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadioComponent = (function () {
    function RadioComponent() {
        this.isDisabled = false;
        this.isAlignEnd = false;
        this.favoriteSeason = 'Autumn';
        this.seasonOptions = ['Winter', 'Spring', 'Summer', 'Autumn',];
    }
    RadioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-radio',
            template: __webpack_require__(1180),
            styles: [__webpack_require__(1134)]
        }), 
        __metadata('design:paramtypes', [])
    ], RadioComponent);
    return RadioComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/radio.component.js.map

/***/ }),

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectComponent = (function () {
    function SelectComponent() {
        this.isRequired = false;
        this.isDisabled = false;
        this.drinks = [{
                value: 'coke-0',
                viewValue: 'Coke'
            }, {
                value: 'sprite-1',
                viewValue: 'Sprite'
            }, {
                value: 'water-2',
                viewValue: 'Water'
            }, {
                value: 'pepper-3',
                viewValue: 'Dr. Pepper'
            }, {
                value: 'coffee-4',
                viewValue: 'Coffee'
            }, {
                value: 'tea-5',
                viewValue: 'Tea'
            }, {
                value: 'juice-6',
                viewValue: 'Orange juice'
            }, {
                value: 'wine-7',
                viewValue: 'Wine'
            }, {
                value: 'milk-8',
                viewValue: 'Milk'
            },];
    }
    SelectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(1181),
            styles: [__webpack_require__(1135)]
        }), 
        __metadata('design:paramtypes', [])
    ], SelectComponent);
    return SelectComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/select.component.js.map

/***/ }),

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = (function () {
    function SliderComponent() {
        this.val = 50;
        this.min = 0;
        this.max = 100;
    }
    SliderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(1182),
            styles: [__webpack_require__(1136)]
        }), 
        __metadata('design:paramtypes', [])
    ], SliderComponent);
    return SliderComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/slider.component.js.map

/***/ }),

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackbarComponent = (function () {
    function SnackbarComponent(snackBar) {
        this.snackBar = snackBar;
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 0;
    }
    SnackbarComponent.prototype.open = function () {
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdSnackBarConfig"]();
        config.duration = this.autoHide;
        this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
    };
    SnackbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(1183),
            styles: [__webpack_require__(1137)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdSnackBar"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdSnackBar"]) === 'function' && _a) || Object])
    ], SnackbarComponent);
    return SnackbarComponent;
    var _a;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/snackbar.component.js.map

/***/ }),

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsComponent = (function () {
    function TabsComponent(router) {
        var _this = this;
        this.router = router;
        // Nav bar demo
        this.tabLinks = [{
                label: 'Sun',
                link: 'sunny-tab'
            }, {
                label: 'Rain',
                link: 'rainy-tab'
            }, {
                label: 'Fog',
                link: 'foggy-tab'
            }];
        this.activeLinkIndex = 0;
        // Standard tabs demo
        this.tabs = [{
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            }];
        // Dynamic tabs demo
        this.activeTabIndex = 0;
        this.addTabPosition = 0;
        this.gotoNewTabAfterAdding = false;
        this.createWithLongContent = false;
        this.dynamicTabs = [{
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            }];
        this.asyncTabs = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next(_this.tabs);
            }, 1000);
        });
        // Initialize the index by checking if a tab link is contained in the url.
        // This is not an ideal check and can be removed if routerLink exposes if it is active.
        // https://github.com/angular/angular/pull/12525
        this.activeLinkIndex = this.tabLinks.indexOf(this.tabLinks.find(function (tab) { return router.url.indexOf(tab.link) != -1; }));
    }
    TabsComponent.prototype.addTab = function (includeExtraContent) {
        this.dynamicTabs.splice(this.addTabPosition, 0, {
            label: 'New Tab ' + (this.dynamicTabs.length + 1),
            content: 'New tab contents ' + (this.dynamicTabs.length + 1),
            extraContent: includeExtraContent
        });
        if (this.gotoNewTabAfterAdding) {
            this.activeTabIndex = this.addTabPosition;
        }
    };
    TabsComponent.prototype.deleteTab = function (tab) {
        this.dynamicTabs.splice(this.dynamicTabs.indexOf(tab), 1);
    };
    TabsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(1184),
            styles: [__webpack_require__(1138)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], TabsComponent);
    return TabsComponent;
    var _a;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/tabs.component.js.map

/***/ }),

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleComponent = (function () {
    function ToggleComponent() {
    }
    ToggleComponent.prototype.onFormSubmit = function () {
        alert("You submitted the form.");
    };
    ToggleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toggle',
            template: __webpack_require__(1185),
            styles: [__webpack_require__(1139)]
        }), 
        __metadata('design:paramtypes', [])
    ], ToggleComponent);
    return ToggleComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/toggle.component.js.map

/***/ }),

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(1186),
            styles: [__webpack_require__(1140)]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/toolbar.component.js.map

/***/ }),

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipComponent = (function () {
    function TooltipComponent() {
        this.position = 'below';
        this.message = 'Here is the tooltip';
        this.showDelay = 0;
        this.hideDelay = 0;
    }
    TooltipComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__(1187),
            styles: [__webpack_require__(1141)]
        }), 
        __metadata('design:paramtypes', [])
    ], TooltipComponent);
    return TooltipComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/tooltip.component.js.map

/***/ }),

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttons_buttons_component__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cards_cards_component__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_input_component__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkbox_checkbox_component__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__radio_radio_component__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_component__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lists_lists_component__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grid_grid_component__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_progress_component__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs_component__ = __webpack_require__(1040);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toggle_toggle_component__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tooltip_tooltip_component__ = __webpack_require__(1043);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__ = __webpack_require__(1034);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__slider_slider_component__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__snackbar_snackbar_component__ = __webpack_require__(1039);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dialog_dialog_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__select_select_component__ = __webpack_require__(1037);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialRoutes; });

















var MaterialRoutes = [
    {
        path: '',
        children: [{
                path: 'button',
                component: __WEBPACK_IMPORTED_MODULE_0__buttons_buttons_component__["a" /* ButtonsComponent */]
            }, {
                path: 'cards',
                component: __WEBPACK_IMPORTED_MODULE_1__cards_cards_component__["a" /* CardsComponent */]
            }, {
                path: 'input',
                component: __WEBPACK_IMPORTED_MODULE_2__input_input_component__["a" /* InputComponent */]
            }, {
                path: 'checkbox',
                component: __WEBPACK_IMPORTED_MODULE_3__checkbox_checkbox_component__["a" /* CheckboxComponent */]
            }, {
                path: 'radio',
                component: __WEBPACK_IMPORTED_MODULE_4__radio_radio_component__["a" /* RadioComponent */]
            }, {
                path: 'toolbar',
                component: __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_component__["a" /* ToolbarComponent */]
            }, {
                path: 'lists',
                component: __WEBPACK_IMPORTED_MODULE_6__lists_lists_component__["a" /* ListsComponent */]
            }, {
                path: 'grid',
                component: __WEBPACK_IMPORTED_MODULE_7__grid_grid_component__["a" /* GridComponent */]
            }, {
                path: 'progress',
                component: __WEBPACK_IMPORTED_MODULE_8__progress_progress_component__["a" /* ProgressComponent */]
            }, {
                path: 'tabs',
                component: __WEBPACK_IMPORTED_MODULE_9__tabs_tabs_component__["a" /* TabsComponent */]
            }, {
                path: 'switch',
                component: __WEBPACK_IMPORTED_MODULE_10__toggle_toggle_component__["a" /* ToggleComponent */]
            }, {
                path: 'tooltip',
                component: __WEBPACK_IMPORTED_MODULE_11__tooltip_tooltip_component__["a" /* TooltipComponent */]
            }, {
                path: 'menu',
                component: __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__["a" /* MenuComponent */]
            }, {
                path: 'slider',
                component: __WEBPACK_IMPORTED_MODULE_13__slider_slider_component__["a" /* SliderComponent */]
            }, {
                path: 'snackbar',
                component: __WEBPACK_IMPORTED_MODULE_14__snackbar_snackbar_component__["a" /* SnackbarComponent */]
            }, {
                path: 'dialog',
                component: __WEBPACK_IMPORTED_MODULE_15__dialog_dialog_component__["b" /* DialogComponent */]
            }, {
                path: 'select',
                component: __WEBPACK_IMPORTED_MODULE_16__select_select_component__["a" /* SelectComponent */]
            }]
    }
];
//# sourceMappingURL=E:/n31/JS/angular2video/src/material.routing.js.map

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return Hammer;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),

/***/ 1126:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1127:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1128:
/***/ (function(module, exports) {

module.exports = ":host /deep/ ul {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n"

/***/ }),

/***/ 1129:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1130:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1131:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1132:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1133:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1134:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1135:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1136:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1137:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1138:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1139:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1140:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1141:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1171:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Buttons</md-card-title>\r\n  <md-card-subtitle>md-button is an HTML button or a tag enhanced with styling and animation to match the Material Design button spec</md-card-subtitle>\r\n  <md-card-content>\r\n    <div class=\"pb-1\">\r\n      <p>Flat buttons</p>\r\n      <button md-icon-button><md-icon>favorite</md-icon></button>\r\n      <button md-button class=\"mr-1\">Default</button>\r\n      <button md-button color=\"primary\" class=\"mr-1\">Primary</button>\r\n      <button md-button color=\"accent\" class=\"mr-1\">Accent</button>\r\n      <button md-button color=\"warn\" class=\"mr-1\">Warn</button>\r\n      <button md-button disabled class=\"mr-1\">off</button>\r\n    </div>\r\n\r\n    <div class=\"pb-1\">\r\n      <p>Raised buttons</p>\r\n      <button md-raised-button md-icon-button class=\"mr-1\"><md-icon>favorite</md-icon></button>\r\n      <button md-raised-button class=\"mr-1\">Default</button>\r\n      <button md-raised-button color=\"primary\" class=\"mr-1\">Primary</button>\r\n      <button md-raised-button color=\"accent\" class=\"mr-1\">Accent</button>\r\n      <button md-raised-button color=\"warn\" class=\"mr-1\">Warn</button>\r\n      <button md-raised-button disabled class=\"mr-1\">off</button>\r\n    </div>\r\n\r\n    <div class=\"pb-1\">\r\n      <p>Small buttons</p>\r\n      <button md-raised-button md-icon-button md-button-sm class=\"mr-1\"><md-icon>favorite</md-icon></button>\r\n      <button md-raised-button md-button-sm class=\"mr-1\">Default</button>\r\n      <button md-raised-button md-button-sm color=\"primary\" class=\"mr-1\">Primary</button>\r\n      <button md-raised-button md-button-sm color=\"accent\" class=\"mr-1\">Accent</button>\r\n      <button md-raised-button md-button-sm color=\"warn\" class=\"mr-1\">Warn</button>\r\n      <button md-raised-button md-button-sm disabled class=\"mr-1\">off</button>\r\n    </div>\r\n\r\n    <div class=\"pb-1\">\r\n      <p>Ripple buttons</p>\r\n      <button md-raised-button md-icon-button class=\"mr-1\" md-ripple\r\n        [md-ripple-background-color]=\"'rgba(30, 136, 229, 0.2)'\"><md-icon>favorite</md-icon></button>\r\n      <button md-raised-button class=\"mr-1\" md-ripple\r\n        [md-ripple-background-color]=\"'rgba(30, 136, 229, 0.2)'\">Default</button>\r\n      <button md-raised-button color=\"primary\" class=\"mr-1\" md-ripple\r\n        [md-ripple-background-color]=\"'rgba(30, 136, 229, 0.2)'\">Primary</button>\r\n      <button md-raised-button color=\"accent\" class=\"mr-1\" md-ripple\r\n        [md-ripple-background-color]=\"'rgba(30, 136, 229, 0.2)'\">Accent</button>\r\n      <button md-raised-button color=\"warn\" class=\"mr-1\" md-ripple\r\n        [md-ripple-background-color]=\"'rgba(30, 136, 229, 0.2)'\">Warn</button>\r\n      <button md-raised-button disabled class=\"mr-1\" md-ripple\r\n        [md-ripple-background-color]=\"'rgba(30, 136, 229, 0.2)'\">off</button>\r\n    </div>\r\n\r\n    <div class=\"pb-1\">\r\n      <p>Fab buttons</p>\r\n      <button md-fab class=\"mr-1\"><md-icon>add</md-icon></button>\r\n      <button md-fab disabled=\"\" class=\"mr-1\"><md-icon>add</md-icon></button>\r\n      <button md-mini-fab class=\"mr-1\"><md-icon>add</md-icon></button>\r\n      <button md-mini-fab disabled class=\"mr-1\"><md-icon>add</md-icon></button>\r\n    </div>\r\n\r\n    <div class=\"pb-0\">\r\n      <p>Button toggles</p>\r\n      <md-button-toggle class=\"mr-1\">Single toggle</md-button-toggle>\r\n      <md-button-toggle-group name=\"alignment\" class=\"mr-1\">\r\n        <md-button-toggle value=\"left\"><md-icon>format_align_left</md-icon></md-button-toggle>\r\n        <md-button-toggle value=\"center\"><md-icon>format_align_center</md-icon></md-button-toggle>\r\n        <md-button-toggle value=\"right\"><md-icon>format_align_right</md-icon></md-button-toggle>\r\n        <md-button-toggle value=\"justify\"><md-icon>format_align_justify</md-icon></md-button-toggle>\r\n      </md-button-toggle-group>\r\n      <md-button-toggle-group multiple class=\"mr-1\">\r\n        <md-button-toggle>Flour</md-button-toggle>\r\n        <md-button-toggle>Eggs</md-button-toggle>\r\n        <md-button-toggle disabled>Sugar</md-button-toggle>\r\n        <md-button-toggle>Milk</md-button-toggle>\r\n      </md-button-toggle-group>\r\n    </div>\r\n  </md-card-content>\r\n</md-card>\r\n"

/***/ }),

/***/ 1172:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Cards</md-card-title>\r\n  <md-card-subtitle>md-card is a content container component that conforms to the spec of a Material Design card.</md-card-subtitle>\r\n  <md-card-content>\r\n    <md-card>\r\n      <md-card-content>Hello</md-card-content>\r\n    </md-card>\r\n    <md-card>\r\n      <md-card-subtitle>Subtitle</md-card-subtitle>\r\n      <md-card-title>Card with title and footer</md-card-title>\r\n      <md-card-content>\r\n        <p>This is supporting text.</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n      </md-card-content>\r\n      <md-card-actions>\r\n        <button md-button>LIKE</button>\r\n        <button md-button>SHARE</button>\r\n      </md-card-actions>\r\n      <md-card-footer>\r\n        <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n      </md-card-footer>\r\n    </md-card>\r\n    <md-card class=\"md-card-flat\">\r\n      <md-card-title>Easily customizable</md-card-title>\r\n      <md-card-actions>\r\n        <button md-button>First</button>\r\n        <button md-button>Second</button>\r\n      </md-card-actions>\r\n    </md-card>\r\n    <md-card>\r\n      <md-card-title>Standard Card</md-card-title>\r\n      <md-card-subtitle>Subtitle</md-card-subtitle>\r\n      <hr>\r\n      <md-card-content>\r\n        <p>Standard card with content</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \r\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>\r\n      </md-card-content>\r\n      <hr>\r\n      <md-card-actions>\r\n        <button md-button color=\"accent\">Action</button>\r\n        <button md-button>Cancel</button>\r\n      </md-card-actions>\r\n    </md-card>\r\n    <md-card>\r\n      <md-card-header>\r\n        <img md-card-avatar src=\"assets/images/avatar.jpg\">\r\n        <md-card-title>Header title</md-card-title>\r\n        <md-card-subtitle>Header subtitle</md-card-subtitle>\r\n      </md-card-header>\r\n      <img md-card-image src=\"https://source.unsplash.com/600x400\">\r\n      <md-card-content>\r\n        <p>Here is some more content</p>\r\n      </md-card-content>\r\n    </md-card>\r\n    <md-card>\r\n       <md-card-title-group>\r\n          <img md-card-sm-image src=\"https://source.unsplash.com/80x80\">\r\n          <md-card-title>Card with title</md-card-title>\r\n          <md-card-subtitle>Subtitle</md-card-subtitle>\r\n       </md-card-title-group>\r\n    </md-card>\r\n  </md-card-content>\r\n</md-card>"

/***/ }),

/***/ 1173:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Checkbox</md-card-title>\r\n  <md-card-subtitle>md-checkbox is a Material Design selection control that allows users to make a binary choice for a predetermined conditioned</md-card-subtitle>\r\n  <md-card-content>\r\n    <form class=\"mb-1\">\r\n      <md-checkbox [(ngModel)]=\"isChecked\"\r\n        name=\"cb\"\r\n        color=\"checkboxColor()\"\r\n        (change)=\"isIndeterminate = false\"\r\n        [indeterminate]=\"isIndeterminate\"\r\n        [disabled]=\"isDisabled\"\r\n        [align]=\"alignment\">\r\n        Do you want to <em>foobar</em> the <em>bazquux</em>?\r\n      </md-checkbox> - <strong>{{printResult()}}</strong>\r\n    </form>\r\n\r\n    <div  fxLayout=\"row\"  fxLayoutAlign=\"start center\" class=\"mb-1\">\r\n      <div>\r\n        <input id=\"indeterminate-toggle\"\r\n          type=\"checkbox\"\r\n         [(ngModel)]=\"isIndeterminate\"\r\n         [disabled]=\"isDisabled\">\r\n        <label for=\"indeterminate-toggle\" class=\"mr-xs\">Toggle Indeterminate</label>\r\n      </div>\r\n      <div>\r\n        <input id=\"disabled-toggle\" type=\"checkbox\" [(ngModel)]=\"isDisabled\">\r\n        <label for=\"disabled-toggle\" class=\"mr-xs\">Toggle Disabled</label>\r\n      </div>\r\n      <div>\r\n        <input id=\"color-toggle\" type=\"checkbox\" [(ngModel)]=\"useAlternativeColor\">\r\n        <label for=\"color-toggle\">Toggle Color</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div  fxLayout=\"row\"  fxLayoutAlign=\"start center\" class=\"mb-1\">\r\n      <p class=\"mr-xs\">Alignment:</p>\r\n      <div class=\"mr-xs\">\r\n        <input #start type=\"radio\"\r\n          value=\"start\"\r\n          id=\"align-start\"\r\n          name=\"alignment\"\r\n          (click)=\"alignment = start.value\"\r\n          checked>\r\n        <label for=\"align-start\">Start</label>\r\n      </div>\r\n      <div>\r\n        <input #end type=\"radio\"\r\n          value=\"end\"\r\n          id=\"align-end\"\r\n          name=\"alignment\"\r\n          (click)=\"alignment = end.value\">\r\n        <label for=\"align-end\">End</label>\r\n      </div>\r\n    </div>\r\n\r\n    <p>Nested Checklist</p>\r\n    <md-checkbox-demo-nested-checklist></md-checkbox-demo-nested-checklist>\r\n  </md-card-content>\r\n</md-card>\r\n"

/***/ }),

/***/ 1174:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-toolbar color=\"primary\">\r\n    <span>Tasks</span>\r\n  </md-toolbar>\r\n  <md-card-content>\r\n    <ul>\r\n      <li *ngFor=\"let task of tasks\">\r\n        <md-checkbox [(ngModel)]=\"task.completed\"\r\n                     [checked]=\"allComplete(task)\"\r\n                     [indeterminate]=\"someComplete(task.subtasks)\"\r\n                     (change)=\"setAllCompleted(task.subtasks, $event.checked)\">\r\n          <h6 class=\"ma-0\">{{task.name}}</h6>\r\n        </md-checkbox>\r\n        <ul class=\"ml-3\">\r\n          <li *ngFor=\"let subtask of task.subtasks\">\r\n            <md-checkbox [(ngModel)]=\"subtask.completed\">\r\n              {{subtask.name}}\r\n            </md-checkbox>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </md-card-content>\r\n</md-card>"

/***/ }),

/***/ 1175:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Grid List</md-card-title>\r\n  <md-card-subtitle>md-grid-list is an alternative list view that arranges cells into grid-based layout.</md-card-subtitle>\r\n  <md-tab-group>\r\n    <md-tab>\r\n      <template md-tab-label>Fixed height</template>\r\n      <md-card-content>\r\n        <md-grid-list [cols]=\"fixedCols\" [rowHeight]=\"fixedRowHeight\">\r\n          <md-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\r\n                        [style.background]=\"tile.color\">\r\n            {{tile.text}}\r\n          </md-grid-tile>\r\n        </md-grid-list>\r\n        <div  fxLayout=\"row\"  fxLayoutAlign=\"start center\" class=\"mt-2\">\r\n          <md-input placeholder=\"Change list cols\" type=\"number\" [(ngModel)]=\"fixedCols\"></md-input>\r\n          <md-input placeholder=\"Change row height\" type=\"number\" [(ngModel)]=\"fixedRowHeight\"></md-input>\r\n        </div>\r\n      </md-card-content>\r\n      <hr>\r\n      <md-card-actions>\r\n        <button md-button (click)=\"addTileCols()\" color=\"primary\">ADD COLSPAN (THREE)</button>\r\n      </md-card-actions>\r\n    </md-tab>\r\n    <md-tab>\r\n      <template md-tab-label>Ratio height</template>\r\n      <md-card-content>\r\n        <md-grid-list cols=\"2\" [rowHeight]=\"ratio\" gutterSize=\"4px\">\r\n          <md-grid-tile *ngFor=\"let tile of tiles\" [style.background]=\"'lightblue'\">\r\n            {{tile.text}}\r\n          </md-grid-tile>\r\n        </md-grid-list>\r\n        <div  fxLayout=\"row\"  fxLayoutAlign=\"start center\" class=\"mt-2\">\r\n          <md-input placeholder=\"Change ratio\" [(ngModel)]=\"ratio\"></md-input>\r\n        </div>\r\n      </md-card-content>\r\n    </md-tab>\r\n    <md-tab>\r\n      <template md-tab-label>Fit height</template>\r\n      <md-card-content>\r\n        <md-grid-list cols=\"2\" rowHeight=\"fit\" [gutterSize]=\"ratioGutter\"\r\n                      [style.height]=\"fitListHeight\">\r\n          <md-grid-tile *ngFor=\"let tile of tiles\" [style.background]=\"'#F1EBBA'\">\r\n            {{tile.text}}\r\n          </md-grid-tile>\r\n        </md-grid-list>\r\n        <div   fxLayout=\"row\"  fxLayoutAlign=\"start center\" class=\"mt-2\">\r\n          <md-input placeholder=\"Change list height\" [(ngModel)]=\"fitListHeight\"></md-input>\r\n          <md-input placeholder=\"Change gutter\" type=\"number\" [(ngModel)]=\"ratioGutter\"></md-input>\r\n        </div>\r\n      </md-card-content>\r\n    </md-tab>\r\n    <md-tab>\r\n      <template md-tab-label>Headers</template>\r\n      <md-card-content class=\"pa-0\">\r\n        <md-grid-list cols=\"3\" rowHeight=\"200px\">\r\n          <md-grid-tile *ngFor=\"let dog of dogs\" style=\"background:gray\">\r\n            <md-grid-tile-header>\r\n              <md-icon md-grid-avatar>info_outline</md-icon>\r\n              {{dog.name}}\r\n            </md-grid-tile-header>\r\n          </md-grid-tile>\r\n        </md-grid-list>\r\n      </md-card-content>\r\n    </md-tab>\r\n    <md-tab>\r\n      <template md-tab-label>Footers</template>\r\n      <md-card-content class=\"pa-0\">\r\n        <md-grid-list cols=\"3\" rowHeight=\"200px\">\r\n          <md-grid-tile *ngFor=\"let dog of dogs\">\r\n            <img [alt]=\"dog.name\" src=\"https://material.angularjs.org/material2_assets/ngconf/{{dog.name}}.png\">\r\n            <md-grid-tile-footer>\r\n              <h3 md-line>{{dog.name}}</h3>\r\n              <span md-line>Human: {{dog.human}}</span>\r\n              <md-icon>star_border</md-icon>\r\n            </md-grid-tile-footer>\r\n          </md-grid-tile>\r\n        </md-grid-list>\r\n      </md-card-content>\r\n    </md-tab>\r\n  </md-tab-group>\r\n</md-card>\r\n"

/***/ }),

/***/ 1176:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Input</md-card-title>\r\n  <md-card-subtitle>Inputs are the basic input component of Material 2</md-card-subtitle>\r\n  <md-card-content>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\r\n      <md-input placeholder=\"Password\" class=\"ml-xs mr-xs\" type=\"password\" style=\"width: 100%;\"></md-input>\r\n      <md-input placeholder=\"Email\" class=\"ml-xs mr-xs\" type=\"email\" style=\"width: 100%\"></md-input>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\r\n      <md-input placeholder=\"amount\" align=\"end\" class=\"ml-xs mr-xs\" style=\"width: 100%;\">\r\n        <span md-prefix>$&nbsp;</span>\r\n        <span md-suffix>.00</span>\r\n      </md-input>\r\n\r\n      <md-input placeholder=\"Character count (100 max)\" maxLength=\"100\" class=\"ml-xs mr-xs\"\r\n                  value=\"Hello world. How are you?\"\r\n                  #characterCountHintExample style=\"width: 100%;\">\r\n        <md-hint align=\"end\">{{characterCountHintExample.characterCount}} / 100</md-hint>\r\n      </md-input>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\r\n      <md-input dividerColor=\"primary\" placeholder=\"Default Color\" value=\"example\" class=\"ml-xs mr-xs\" style=\"width: 100%;\"></md-input>\r\n      <md-input dividerColor=\"accent\" placeholder=\"Accent Color\" value=\"example\" class=\"ml-xs mr-xs\" style=\"width: 100%;\"></md-input>\r\n      <md-input dividerColor=\"warn\" placeholder=\"Warn Color\" value=\"example\" class=\"ml-xs mr-xs\" style=\"width: 100%;\"></md-input>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\r\n      <md-textarea dividerColor=\"primary\" placeholder=\"Default Color\" value=\"example\" class=\"ml-xs mr-xs\" style=\"width: 100%;\"></md-textarea>\r\n      <md-textarea dividerColor=\"accent\" placeholder=\"Accent Color\" value=\"example\" class=\"ml-xs mr-xs\" style=\"width: 100%;\"></md-textarea>\r\n      <md-textarea dividerColor=\"warn\" placeholder=\"Warn Color\" value=\"example\" class=\"ml-xs mr-xs\" style=\"width: 100%;\"></md-textarea>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\r\n      <md-textarea placeholder=\"Character count (100 max)\" maxLength=\"100\" class=\"demo-full-width\"\r\n                  value=\"Hello world. How are you?\"\r\n                  #characterCountHintExample class=\"ml-xs mr-xs\" style=\"width: 100%;\">\r\n        <md-hint align=\"end\">{{characterCountHintExample.characterCount}} / 100</md-hint>\r\n      </md-textarea>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\r\n      <md-input disabled placeholder=\"Disabled field\" value=\"Value\" class=\"ml-xs mr-xs\" style=\"width: 100%;\"></md-input>\r\n\r\n      <md-input required placeholder=\"Required field\" class=\"ml-xs mr-xs\" style=\"width: 100%;\"></md-input>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\r\n      <md-input placeholder=\"Show Hint Label\" class=\"ml-xs mr-xs\" style=\"width: 100%;\"\r\n                hintLabel=\"Hint label\"></md-input>\r\n\r\n      <md-input placeholder=\"Show Hint Label With Character Count\" class=\"ml-xs mr-xs\" style=\"width: 100%;\"\r\n                hintLabel=\"Hint label\" characterCounter></md-input>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\r\n      <div class=\"ml-xs mr-xs\" style=\"width: 100%;\">Hello <md-input [(ngModel)]=\"name\" type=\"text\" placeholder=\"First name\"></md-input>,\r\n    how are you?</div>\r\n\r\n      <md-input style=\"width:100%\">\r\n        <md-placeholder>\r\n          I <md-icon>favorite</md-icon> <b>bold</b> placeholder\r\n        </md-placeholder>\r\n        <md-hint>\r\n          I also <md-icon>home</md-icon> <i>italic</i> hint labels\r\n        </md-hint>\r\n      </md-input>\r\n    </div>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n"

/***/ }),

/***/ 1177:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Lists</md-card-title>\r\n  <md-card-subtitle>md-list is a container component that wraps and formats a series of line items</md-card-subtitle>\r\n  <md-card-content>\r\n    <p>Normal lists</p>\r\n    <md-card>\r\n      <md-list>\r\n        <h3 md-subheader>Items</h3>\r\n        <md-list-item *ngFor=\"let item of items\">\r\n          {{item}}\r\n        </md-list-item>\r\n      </md-list>\r\n    </md-card>\r\n\r\n    <p>Multiline lists <button (click)=\"thirdLine=!thirdLine\">Show third line</button></p>\r\n    <md-card>\r\n      <md-list>\r\n        <md-list-item *ngFor=\"let contact of contacts\">\r\n          <h3 md-line>{{contact.name}}</h3>\r\n          <p md-line *ngIf=\"thirdLine\">extra line</p>\r\n          <p md-line>{{contact.headline}}</p>\r\n        </md-list-item>\r\n      </md-list>\r\n    </md-card>\r\n\r\n    <p>3 Line List Item with Avatars and Icons</p>\r\n    <md-card>\r\n      <md-list>\r\n        <h3 md-subheader>Today</h3>\r\n        <md-list-item *ngFor=\"let message of messages\">\r\n          <img md-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">\r\n          <h4 md-line>{{message.from}}</h4>\r\n          <p md-line>\r\n            <span>{{message.subject}} -- </span>\r\n            <span class=\"text-md md-text-muted\">{{message.message}}</span>\r\n          </p>\r\n        </md-list-item>\r\n        <md-divider></md-divider>\r\n        <md-list-item *ngFor=\"let message of messages\">\r\n          <h4 md-line>{{message.from}}</h4>\r\n          <p md-line> {{message.subject}} </p>\r\n          <p md-line class=\"text-md md-text-muted\">{{message.message}} </p>\r\n        </md-list-item>\r\n        <md-divider></md-divider>\r\n        <md-list-item *ngFor=\"let message of messages\">\r\n          <md-icon md-list-avatar>person</md-icon>\r\n          <h4 md-line>{{message.from}}</h4>\r\n          <p md-line>\r\n            <span>{{message.subject}} -- </span>\r\n            <span class=\"text-md md-text-muted\">{{message.message}}</span>\r\n          </p>\r\n        </md-list-item>\r\n      </md-list>\r\n    </md-card>\r\n\r\n    <p>Dense lists</p>\r\n    <md-card>\r\n      <md-list dense>\r\n        <h3 md-subheader>Items</h3>\r\n        <md-list-item *ngFor=\"let item of items\">\r\n          {{item}}\r\n        </md-list-item>\r\n      </md-list>\r\n    </md-card>\r\n\r\n    <p>Multiline dense list</p>\r\n    <md-card>\r\n      <md-list dense>\r\n        <md-list-item *ngFor=\"let contact of contacts\">\r\n          <h3 md-line>{{contact.name}}</h3>\r\n          <p md-line>{{contact.headline}}</p>\r\n        </md-list-item>\r\n      </md-list>\r\n    </md-card>\r\n\r\n    <p>3 Line List Item with Avatars and Icons</p>\r\n    <md-card>\r\n      <md-list dense>\r\n        <h3 md-subheader>Today</h3>\r\n        <md-list-item *ngFor=\"let message of messages\">\r\n          <img md-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">\r\n          <h4 md-line>{{message.from}}</h4>\r\n          <p md-line> {{message.subject}} </p>\r\n          <p md-line>{{message.message}} </p>\r\n        </md-list-item>\r\n      </md-list>\r\n    </md-card>\r\n\r\n    <p>Checkbox list</p>\r\n    <md-card>  \r\n      <md-list>\r\n        <template ngFor let-todo [ngForOf]=\"todos\">\r\n          <md-list-item>\r\n            <div   fxLayout=\"row\"  fxLayoutAlign=\"start center\" style=\"width: 100%;\">\r\n              <div fxFlex>\r\n                <md-checkbox [checked]=\"todo.finished\">\r\n                  {{todo.name}}\r\n                </md-checkbox>\r\n              </div>\r\n              <div><md-icon>more_horiz</md-icon></div>\r\n            </div>\r\n          </md-list-item>\r\n        </template>\r\n      </md-list>\r\n    </md-card>\r\n\r\n    <p>Nav lists</p>\r\n    <md-card>\r\n      <md-nav-list>\r\n        <a md-list-item *ngFor=\"let link of links\" href=\"http://www.google.com\">\r\n          {{ link.name }}\r\n        </a>\r\n      </md-nav-list>\r\n      <hr>\r\n      <md-nav-list>\r\n        <h3 md-subheader *ngIf=\"infoClicked\">More info!</h3>\r\n        <md-list-item *ngFor=\"let link of links\">\r\n          <a md-line href=\"http://www.google.com\">{{ link.name }}</a>\r\n          <button md-icon-button (click)=\"infoClicked=!infoClicked\">\r\n            <md-icon>info</md-icon>\r\n          </button>\r\n        </md-list-item>\r\n      </md-nav-list>\r\n      <hr>\r\n      <md-nav-list>\r\n        <a md-list-item *ngFor=\"let link of links\" href=\"http://www.google.com\">\r\n          <md-icon md-list-icon>folder</md-icon>\r\n          <span md-line>{{ link.name }}</span>\r\n          <span md-line> Description </span>\r\n        </a>\r\n      </md-nav-list>\r\n      <hr>\r\n      <md-nav-list dense>\r\n        <md-list-item *ngFor=\"let link of links\">\r\n          <a md-line href=\"http://www.google.com\">{{ link.name }}</a>\r\n          <button md-icon-button (click)=\"infoClicked=!infoClicked\">\r\n            <md-icon class=\"material-icons\">info</md-icon>\r\n          </button>\r\n        </md-list-item>\r\n      </md-nav-list>\r\n    </md-card>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n"

/***/ }),

/***/ 1178:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Menus (dropdowns)</md-card-title>\r\n  <md-card-subtitle>md-menu is a list of options that displays when triggered.</md-card-subtitle>\r\n\r\n  <md-card-content>\r\n    <p>You clicked on: {{ selected }}</p>\r\n  </md-card-content>\r\n  <md-toolbar>\r\n    <button md-icon-button [md-menu-trigger-for]=\"menu\" aria-label=\"Open basic menu\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </md-toolbar>\r\n  <md-menu #menu=\"mdMenu\">\r\n    <button md-menu-item *ngFor=\"let item of items\" (click)=\"select(item.text)\" [disabled]=\"item.disabled\">\r\n      {{ item.text }}\r\n    </button>\r\n  </md-menu>\r\n\r\n  <md-card-content>\r\n    <p> Clicking these will navigate:</p>\r\n  </md-card-content>\r\n  <md-toolbar>\r\n    <button md-icon-button [md-menu-trigger-for]=\"anchorMenu\" aria-label=\"Open anchor menu\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </md-toolbar>\r\n  <md-menu #anchorMenu=\"mdMenu\">\r\n    <a md-menu-item *ngFor=\"let item of items\" href=\"http://www.google.com\" [disabled]=\"item.disabled\">\r\n      {{ item.text }}\r\n    </a>\r\n  </md-menu>\r\n\r\n  <md-card-content>\r\n    <p>Position x: before</p>\r\n  </md-card-content>\r\n  <md-toolbar class=\"end-icon\">\r\n    <button md-icon-button [md-menu-trigger-for]=\"posXMenu\" aria-label=\"Open x-positioned menu\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </md-toolbar>\r\n\r\n  <md-menu x-position=\"before\" #posXMenu=\"mdMenu\" class=\"before\">\r\n    <button md-menu-item *ngFor=\"let item of iconItems\" [disabled]=\"item.disabled\">\r\n      <md-icon>{{ item.icon }}</md-icon>\r\n      {{ item.text }}\r\n    </button>\r\n  </md-menu>\r\n\r\n  <md-card-content>\r\n    <p>Position y: above</p>\r\n  </md-card-content>\r\n  <md-toolbar>\r\n    <button md-icon-button [md-menu-trigger-for]=\"posYMenu\" aria-label=\"Open y-positioned menu\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </md-toolbar>\r\n\r\n  <md-menu y-position=\"above\" #posYMenu=\"mdMenu\">\r\n    <button md-menu-item *ngFor=\"let item of items\" [disabled]=\"item.disabled\">\r\n      {{ item.text }}\r\n    </button>\r\n  </md-menu>\r\n</md-card>"

/***/ }),

/***/ 1179:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Progress circle</md-card-title>\r\n  <md-card-subtitle>md-progress-circle is a component for indicating progress and activity, matching the spec of Material Design Progress & Activity.</md-card-subtitle>\r\n  <md-card-content>\r\n    <p>Determinate</p>\r\n    <div fxFlex=\"100\" class=\"mb-1\">\r\n      <div  fxLayout=\"row\">\r\n        <md-progress-circle mode=\"determinate\"\r\n                      [value]=\"progressValue\"\r\n                      class=\"md-primary\"></md-progress-circle>\r\n        <md-progress-circle mode=\"determinate\" [value]=\"progressValue\"\r\n                      color=\"accent\"></md-progress-circle>\r\n        <md-progress-circle mode=\"determinate\" [value]=\"progressValue\"\r\n                      color=\"warn\"></md-progress-circle>\r\n      </div>\r\n    </div>\r\n\r\n    <button md-raised-button class=\"mr-1\" (click)=\"step(10)\">Increase</button>\r\n    <button md-raised-button (click)=\"step(-10)\">Decrease</button>\r\n\r\n    <p class=\"mt-1\">Indeterminate</p>\r\n    <div fxFlex=\"100\">\r\n      <div  fxLayout=\"row\">\r\n        <md-progress-circle mode=\"indeterminate\"\r\n                      class=\"md-primary\"></md-progress-circle>\r\n        <md-progress-circle mode=\"indeterminate\"\r\n                      color=\"accent\"></md-progress-circle>\r\n        <md-progress-circle mode=\"indeterminate\"\r\n                      color=\"warn\"></md-progress-circle>\r\n      </div>\r\n    </div>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n<md-card>\r\n  <md-card-title>Progress bar</md-card-title>\r\n  <md-card-subtitle>md-progress-bar is a component for indicating progress and activity, matching the spec of Material Design Progress & Activity</md-card-subtitle>\r\n  <md-card-content>\r\n    <p>Determinate</p>\r\n    <md-progress-bar mode=\"determinate\"\r\n                       [value]=\"determinateProgressValue\"\r\n                       color=\"primary\"\r\n                       class=\"mb-1\"></md-progress-bar>\r\n    <button md-raised-button class=\"mr-1\" (click)=\"stepDeterminateProgressVal(10)\">Increase</button>\r\n    <button md-raised-button (click)=\"stepDeterminateProgressVal(-10)\">Decrease</button>\r\n\r\n    <p>Buffer</p>\r\n    <md-progress-bar [value]=\"bufferProgressValue\"\r\n                       [bufferValue]=\"bufferBufferValue\"\r\n                       mode=\"buffer\"\r\n                       color=\"warn\"\r\n                       class=\"mb-1\"></md-progress-bar>\r\n\r\n    <div  fxLayout=\"row\"  fxLayoutWrap=\"wrap\">\r\n      <button md-raised-button class=\"mr-1 mb-xs\" (click)=\"stepBufferProgressVal(10)\">Increase</button>\r\n      <button md-raised-button class=\"mb-xs\" (click)=\"stepBufferProgressVal(-10)\">Decrease</button>\r\n      <span fxFlex></span>\r\n      <button md-raised-button class=\"mr-1 mb-xs\" (click)=\"stepBufferBufferVal(10)\">Increase</button>\r\n      <button md-raised-button class=\"mb-xs\" (click)=\"stepBufferBufferVal(-10)\">Decrease</button>\r\n    </div>\r\n\r\n    <p>Indeterminate</p>\r\n    <md-progress-bar mode=\"indeterminate\"\r\n                       class=\"mb-1\"></md-progress-bar>\r\n\r\n    <p>Query</p>\r\n    <md-progress-bar mode=\"query\"\r\n                       class=\"mb-1\"></md-progress-bar>\r\n\r\n    <p>Colors</p>\r\n    <md-progress-bar mode=\"indeterminate\" color=\"primary\" class=\"mb-1\"></md-progress-bar>\r\n    <md-progress-bar mode=\"indeterminate\" color=\"accent\" class=\"mb-1\"></md-progress-bar>\r\n    <md-progress-bar mode=\"indeterminate\" color=\"warn\" class=\"mb-1\"></md-progress-bar>\r\n\r\n  </md-card-content>\r\n</md-card>"

/***/ }),

/***/ 1180:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Radios</md-card-title>\r\n  <md-card-subtitle>Radio buttons allow the user to select one option from a set</md-card-subtitle>\r\n  <md-card-content  fxLayout=\"row\"  fxLayoutWrap=\"wrap\">\r\n    <div fxFlex.gt-sm=\"33\" fxFlex=\"100\">\r\n      <p>Basic Example</p>\r\n      <div  fxLayout=\"column\">\r\n        <md-radio-button name=\"group1\">Option 1</md-radio-button>\r\n        <md-radio-button name=\"group1\">Option 2</md-radio-button>\r\n        <md-radio-button name=\"group1\" disabled=\"true\">Option 3 (disabled)</md-radio-button>\r\n      </div>\r\n    </div>\r\n    <div fxFlex.gt-sm=\"33\" fxFlex=\"100\">\r\n      <p>Dynamic Example</p>\r\n      <div>\r\n        <md-radio-group name=\"my_options\" [disabled]=\"isDisabled\" [align]=\"isAlignEnd ? 'end' : 'start'\"   fxLayout=\"column\">\r\n          <md-radio-button value=\"option_1\">Option 1</md-radio-button>\r\n          <md-radio-button value=\"option_2\">Option 2</md-radio-button>\r\n          <md-radio-button value=\"option_3\">Option 3</md-radio-button>\r\n        </md-radio-group>\r\n        <p>\r\n          <span>isDisabled: {{isDisabled}}</span>\r\n          <button (click)=\"isDisabled=!isDisabled\" class=\"demo-button\">\r\n            Disable buttons\r\n          </button>\r\n        </p>\r\n        <p>\r\n          <span><md-checkbox [(ngModel)]=\"isAlignEnd\">Align end</md-checkbox></span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div fxFlex.gt-sm=\"33\" fxFlex=\"100\">\r\n      <p>Dynamic Example with two-way data-binding</p>\r\n      <div>\r\n        <md-radio-group name=\"more_options\" [(ngModel)]=\"favoriteSeason\"  fxLayout=\"column\">\r\n          <md-radio-button *ngFor=\"let season of seasonOptions\" name=\"more_options\" [value]=\"season\">\r\n            {{season}}\r\n          </md-radio-button>\r\n        </md-radio-group>\r\n        <p>Your favorite season is: {{favoriteSeason}}</p>\r\n      </div>\r\n    </div>\r\n  </md-card-content>\r\n</md-card>\r\n"

/***/ }),

/***/ 1181:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Radios</md-card-title>\r\n  <md-card-subtitle>Radio buttons allow the user to select one option from a set</md-card-subtitle>\r\n  <md-card-content>\r\n    <md-select placeholder=\"Drink\" [(ngModel)]=\"currentDrink\" [required]=\"isRequired\" [disabled]=\"isDisabled\"\r\n      #drinkControl=\"ngModel\">\r\n      <md-option *ngFor=\"let drink of drinks\" [value]=\"drink.value\" [disabled]=\"drink.disabled\">\r\n        {{ drink.viewValue }}\r\n      </md-option>\r\n    </md-select>\r\n    <p> Value: {{ currentDrink }} </p>\r\n    <p> Touched: {{ drinkControl.touched }} </p>\r\n    <p> Dirty: {{ drinkControl.dirty }} </p>\r\n    <p> Status: {{ drinkControl.control?.status }} </p>\r\n    <button md-button (click)=\"currentDrink='sprite-1'\">SET VALUE</button>\r\n    <button md-button (click)=\"isRequired=!isRequired\">TOGGLE REQUIRED</button>\r\n    <button md-button (click)=\"isDisabled=!isDisabled\">TOGGLE DISABLED</button>\r\n  </md-card-content>\r\n</md-card>\r\n"

/***/ }),

/***/ 1182:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Slider</md-card-title>\r\n  <md-card-subtitle>md-slider is a component that allows users to select from a range of values by moving the slider thumb</md-card-subtitle>\r\n  <md-card-content>\r\n    <p>Default Slider</p>\r\n    Label <md-slider #slidey></md-slider>\r\n    {{slidey.value}}\r\n\r\n    <p>Slider with Min and Max</p>\r\n    <input [(ngModel)]=\"min\">\r\n    <md-slider [min]=\"min\" [max]=\"max\" tick-interval=\"5\" #slider2></md-slider>\r\n    {{slider2.value}}\r\n    <input [(ngModel)]=\"max\">\r\n\r\n    <p>Disabled Slider</p>\r\n    <md-slider disabled #slider3></md-slider>\r\n    {{slider3.value}}\r\n\r\n    <p>Slider with set value</p>\r\n    <md-slider value=\"43\"></md-slider>\r\n\r\n    <p>Slider with step defined</p>\r\n    <md-slider min=\"1\" max=\"100\" step=\"20\" #slider5></md-slider>\r\n    {{slider5.value}}\r\n\r\n    <p>Slider with set tick interval</p>\r\n    <md-slider tick-interval=\"auto\"></md-slider>\r\n    <md-slider tick-interval=\"9\"></md-slider>\r\n\r\n    <p>Slider with Thumb Label</p>\r\n    <md-slider thumb-label></md-slider>\r\n\r\n    <p>Slider with one-way binding</p>\r\n    <md-slider [value]=\"val\" step=\"40\"></md-slider>\r\n    <input [(ngModel)]=\"val\">\r\n\r\n    <p>Slider with two-way binding</p>\r\n    <md-slider [(ngModel)]=\"demo\" step=\"40\"></md-slider>\r\n    <input [(ngModel)]=\"demo\">\r\n\r\n    <p>Inverted slider</p>\r\n    <md-slider invert value=\"50\" tick-interval=\"5\"></md-slider>\r\n\r\n    <p>Vertical slider</p>\r\n    <md-slider vertical thumb-label tick-interval=\"auto\" value=\"50\"></md-slider>\r\n\r\n    <p>Inverted vertical slider</p>\r\n    <md-slider vertical invert thumb-label tick-interval=\"auto\" value=\"50\"></md-slider>\r\n  </md-card-content>\r\n</md-card>"

/***/ }),

/***/ 1183:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Snack Bar</md-card-title>\r\n  <md-card-subtitle>MdSnackBar is a service, which opens snack bar notifications in the view.</md-card-subtitle>\r\n  <md-card-content>\r\n    <p>Message: <md-input type=\"text\" [(ngModel)]=\"message\"></md-input></p>\r\n    <md-checkbox [(ngModel)]=\"action\">\r\n      <p *ngIf=\"!action\">Show button on snack bar</p>\r\n      <md-input type=\"text\" class=\"demo-button-label-input\"\r\n        *ngIf=\"action\"\r\n        placeholder=\"Snack bar action label\"\r\n        [(ngModel)]=\"actionButtonLabel\"></md-input>\r\n    </md-checkbox>\r\n\r\n    <md-checkbox [(ngModel)]=\"setAutoHide\">\r\n      <p *ngIf=\"!setAutoHide\">Auto hide after duration</p>\r\n      <md-input type=\"number\" class=\"demo-button-label-input\"\r\n        *ngIf=\"setAutoHide\"\r\n        placeholder=\"Auto Hide Duration in ms\"\r\n        [(ngModel)]=\"autoHide\"></md-input>\r\n    </md-checkbox>\r\n    <button md-raised-button (click)=\"open()\">Show Snack bar</button>\r\n  </md-card-content>\r\n</md-card>"

/***/ }),

/***/ 1184:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Tab Group Demo - Dynamic Tabs</md-card-title>\r\n  <div class=\"md-blue-grey\">\r\n    <md-card-title>Add New Tab</md-card-title>\r\n    <md-card-content>\r\n      <md-checkbox [(ngModel)]=\"createWithLongContent\">\r\n        Include extra content\r\n      </md-checkbox>\r\n      <md-checkbox [(ngModel)]=\"gotoNewTabAfterAdding\">\r\n        Select after adding\r\n      </md-checkbox>\r\n      <div>\r\n        Position:\r\n        <md-input type=\"number\" [(ngModel)]=\"addTabPosition\"></md-input>\r\n      </div>\r\n      <button md-raised-button color=\"primary\"\r\n              (click)=\"addTab(createWithLongContent)\">\r\n        Add Tab\r\n      </button>\r\n    </md-card-content>\r\n  </div>\r\n  <md-card-content>\r\n    <md-input type=\"number\" placeholder=\"Selected tab index\" [(ngModel)]=\"activeTabIndex\"></md-input>\r\n  \r\n    <md-card>\r\n      <md-tab-group md-dynamic-height [(selectedIndex)]=\"activeTabIndex\">\r\n        <md-tab *ngFor=\"let tab of dynamicTabs\" [disabled]=\"tab.disabled\">\r\n          <template md-tab-label>{{tab.label}}</template>\r\n          <md-card-content>\r\n            <p class=\"mb-1\">{{tab.content}}</p>\r\n            <div *ngIf=\"tab.extraContent\" class=\"mb-1\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\r\n            </div>\r\n            <p><md-input placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\"></md-input></p>\r\n            <button md-raised-button color=\"primary\" [disabled]=\"dynamicTabs.length == 1\" (click)=\"deleteTab(tab)\">Delete Tab</button>\r\n          </md-card-content>\r\n        </md-tab>\r\n      </md-tab-group>\r\n    </md-card>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n<md-card>\r\n  <md-card-title>Tab Group Demo - Dynamic Tabs</md-card-title>\r\n  <md-card-content>\r\n    <md-card>\r\n      <md-tab-group md-dynamic-height>\r\n        <md-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\r\n          <template md-tab-label>{{tab.label}}</template>\r\n          <md-card-content>\r\n            <p class=\"mb-1\">{{tab.content}}</p>\r\n            <div *ngIf=\"tab.extraContent\" class=\"mb-1\">\r\n              Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\r\n            </div>\r\n            <md-input placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\"></md-input>\r\n          </md-card-content>\r\n        </md-tab>\r\n      </md-tab-group>\r\n    </md-card>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n<md-card>\r\n  <md-card-title>Tab Group Demo - Dynamic Tabs</md-card-title>\r\n  <md-card-content>\r\n    <md-card>\r\n      <md-tab-group style=\"height: 200px\">\r\n        <md-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\r\n          <template md-tab-label>{{tab.label}}</template>\r\n          <md-card-content>\r\n            <p class=\"mb-1\">{{tab.content}}</p>\r\n            <div *ngIf=\"tab.extraContent\" class=\"mb-1\">\r\n              Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\r\n            </div>\r\n            <md-input placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\"></md-input>\r\n          </md-card-content>\r\n        </md-tab>\r\n      </md-tab-group>\r\n    </md-card>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n<md-card>\r\n  <md-card-title>Stretched Tabs</md-card-title>\r\n  <md-card-content>\r\n    <md-card>\r\n      <md-tab-group style=\"height: 200px\" md-stretch-tabs>\r\n        <md-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\r\n          <template md-tab-label>{{tab.label}}</template>\r\n          <md-card-content>{{tab.content}}</md-card-content>\r\n        </md-tab>\r\n      </md-tab-group>\r\n    </md-card>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n<md-card>\r\n  <md-card-title>Async Tabs</md-card-title>\r\n  <md-card-content>\r\n    <md-card>\r\n      <md-tab-group>\r\n        <md-tab *ngFor=\"let tab of asyncTabs | async; let i = index\" [disabled]=\"i == 1\">\r\n          <template md-tab-label>{{tab.label}}</template>\r\n          <md-card-content>\r\n            <p class=\"mb-2\">{{tab.content}}</p>\r\n            <md-input placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\"></md-input>\r\n          </md-card-content>\r\n        </md-tab>\r\n      </md-tab-group>\r\n    </md-card>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n<md-card>\r\n  <md-card-title>Tabs with simplified api</md-card-title>\r\n  <md-card-content>\r\n    <md-card>\r\n      <md-tab-group>\r\n        <md-tab>\r\n          <template md-tab-label>Earth</template>\r\n          <md-card-content>This tab is about the Earth!</md-card-content>\r\n        </md-tab>\r\n        <md-tab>\r\n          <template md-tab-label>Fire</template>\r\n          <md-card-content>This tab is about combustion!</md-card-content>\r\n        </md-tab>\r\n      </md-tab-group>\r\n    </md-card>\r\n  </md-card-content>\r\n</md-card>\r\n"

/***/ }),

/***/ 1185:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Slide Toggle</md-card-title>\r\n  <md-card-subtitle>MdSlideToggle is a two-state control, which can be also called switch.</md-card-subtitle>\r\n  <md-card-content>\r\n    <md-slide-toggle color=\"primary\" [(ngModel)]=\"firstToggle\">\r\n      Default Slide Toggle\r\n    </md-slide-toggle>\r\n\r\n    <md-slide-toggle [(ngModel)]=\"firstToggle\" disabled>\r\n      Disabled Slide Toggle\r\n    </md-slide-toggle>\r\n\r\n    <md-slide-toggle [disabled]=\"firstToggle\">\r\n      Disable Bound\r\n    </md-slide-toggle>\r\n\r\n    <p>Example where the slide toggle is required inside of a form.</p>\r\n\r\n    <form #form=\"ngForm\" (ngSubmit)=\"onFormSubmit()\">\r\n      <md-slide-toggle name=\"slideToggle\" required ngModel>\r\n        Slide Toggle\r\n      </md-slide-toggle>\r\n      <p>\r\n        <button md-raised-button type=\"submit\">Submit Form</button>\r\n      </p>\r\n    </form>\r\n  </md-card-content>\r\n</md-card>"

/***/ }),

/***/ 1186:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Toolbar</md-card-title>\r\n  <md-card-subtitle>MdToolbar is a vertical aligned bar, which can hold the application title or actions.</md-card-subtitle>\r\n  <md-card-content>\r\n    <p>The default color toolbar:</p>\r\n    <md-toolbar>\r\n      <button md-button href=\"#\" md-icon-button>\r\n        <md-icon>menu</md-icon>\r\n      </button>\r\n      <span>Default Toolbar</span>\r\n      <span fxFlex></span>\r\n      <button md-button href=\"#\" md-icon-button>\r\n        <md-icon>search</md-icon>\r\n      </button>\r\n      <button md-button href=\"#\" md-icon-button>\r\n        <md-icon>more_vert</md-icon>\r\n      </button>\r\n    </md-toolbar>\r\n    <p>The primary color toolbar:</p>\r\n    <md-toolbar color=\"primary\">\r\n      <button md-button href=\"#\" md-icon-button>\r\n        <md-icon>menu</md-icon>\r\n      </button>\r\n      <span>Primary Toolbar</span>\r\n      <span fxFlex></span>\r\n      <button md-button href=\"#\" md-icon-button>\r\n        <md-icon>search</md-icon>\r\n      </button>\r\n      <button md-button href=\"#\" md-icon-button>\r\n        <md-icon>more_vert</md-icon>\r\n      </button>\r\n    </md-toolbar>\r\n    <p>The accent color toolbar:</p>\r\n    <md-toolbar color=\"accent\">\r\n      <button md-button href=\"#\" md-icon-button>\r\n        <md-icon>menu</md-icon>\r\n      </button>\r\n      <span>Accent Toolbar</span>\r\n      <span fxFlex></span>\r\n      <button md-button href=\"#\" md-icon-button>\r\n        <md-icon>search</md-icon>\r\n      </button>\r\n      <button md-button href=\"#\" md-icon-button>\r\n        <md-icon>more_vert</md-icon>\r\n      </button>\r\n    </md-toolbar>\r\n    <p>An accent toolbar using the second toolbar row:</p>\r\n    <md-toolbar color=\"accent\">\r\n      <md-toolbar-row>\r\n        <span>Second Line Toolbar</span>\r\n      </md-toolbar-row>\r\n    </md-toolbar>\r\n    <p>A primary toolbar using the third toolbar row:</p>\r\n    <md-toolbar color=\"primary\">\r\n      <md-toolbar-row></md-toolbar-row>\r\n      <md-toolbar-row>\r\n        <span fxFlex>Third Line Toolbar</span>\r\n        <md-icon class=\"demo-toolbar-icon\">favorite</md-icon>\r\n        <md-icon class=\"demo-toolbar-icon\">delete</md-icon>\r\n      </md-toolbar-row>\r\n    </md-toolbar>\r\n  </md-card-content>\r\n</md-card>"

/***/ }),

/***/ 1187:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Tooltips</md-card-title>\r\n  <md-card-subtitle>Tooltip allows the user to specify text to be displayed when the mouse hovers over an element.</md-card-subtitle>\r\n  <md-card-content>\r\n    <button #tooltip=\"mdTooltip\"\r\n        md-raised-button\r\n        color=\"primary\"\r\n        [md-tooltip]=\"message\"\r\n        [tooltip-position]=\"position\">\r\n      Mouse over to see the tooltip\r\n    </button>\r\n\r\n    <md-radio-group [(ngModel)]=\"position\">\r\n      <md-radio-button value=\"below\">Below</md-radio-button>\r\n      <md-radio-button value=\"above\">Above</md-radio-button>\r\n      <md-radio-button value=\"left\">Left</md-radio-button>\r\n      <md-radio-button value=\"right\">Right</md-radio-button>\r\n      <md-radio-button value=\"before\">Before</md-radio-button>\r\n      <md-radio-button value=\"after\">After</md-radio-button>\r\n    </md-radio-group>\r\n\r\n    <p>\r\n      <strong>Message: </strong>\r\n      <md-input type=\"text\" [(ngModel)]=\"message\"></md-input>\r\n    </p>\r\n\r\n    <!--p>\r\n      <strong>Show Delay (ms): </strong>\r\n      <md-input type=\"number\" [(ngModel)]=\"showDelay\"></md-input>\r\n    </p>\r\n\r\n    <p>\r\n      <strong>Hide Delay (ms): </strong>\r\n      <md-input type=\"number\" [(ngModel)]=\"hideDelay\"></md-input>\r\n    </p-->\r\n\r\n    <strong>Mouse over to</strong>\r\n    <button md-raised-button color=\"primary\" (mouseenter)=\"tooltip.show()\">\r\n      Show tooltip\r\n    </button>\r\n    <button md-raised-button color=\"primary\" (mouseenter)=\"tooltip.hide(0)\">\r\n      Hide tooltip\r\n    </button>\r\n    <button md-raised-button color=\"primary\" (mouseenter)=\"tooltip.toggle()\">\r\n      Toggle tooltip\r\n    </button>\r\n  </md-card-content>\r\n</md-card>"

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_routing__ = __webpack_require__(1077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__buttons_buttons_component__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cards_cards_component__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__input_input_component__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__checkbox_checkbox_component__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__radio_radio_component__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__toolbar_toolbar_component__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lists_lists_component__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__grid_grid_component__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__progress_progress_component__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tabs_tabs_component__ = __webpack_require__(1040);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__toggle_toggle_component__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tooltip_tooltip_component__ = __webpack_require__(1043);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__menu_menu_component__ = __webpack_require__(1034);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__slider_slider_component__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__snackbar_snackbar_component__ = __webpack_require__(1039);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dialog_dialog_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__select_select_component__ = __webpack_require__(1037);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var MaterialComponentsModule = (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__material_routing__["a" /* MaterialRoutes */]), __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__buttons_buttons_component__["a" /* ButtonsComponent */], __WEBPACK_IMPORTED_MODULE_10__cards_cards_component__["a" /* CardsComponent */], __WEBPACK_IMPORTED_MODULE_11__input_input_component__["a" /* InputComponent */], __WEBPACK_IMPORTED_MODULE_12__checkbox_checkbox_component__["a" /* CheckboxComponent */], __WEBPACK_IMPORTED_MODULE_12__checkbox_checkbox_component__["b" /* MdCheckboxDemoNestedChecklist */], __WEBPACK_IMPORTED_MODULE_13__radio_radio_component__["a" /* RadioComponent */], __WEBPACK_IMPORTED_MODULE_14__toolbar_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_15__lists_lists_component__["a" /* ListsComponent */], __WEBPACK_IMPORTED_MODULE_16__grid_grid_component__["a" /* GridComponent */], __WEBPACK_IMPORTED_MODULE_17__progress_progress_component__["a" /* ProgressComponent */], __WEBPACK_IMPORTED_MODULE_18__tabs_tabs_component__["a" /* TabsComponent */], __WEBPACK_IMPORTED_MODULE_19__toggle_toggle_component__["a" /* ToggleComponent */], __WEBPACK_IMPORTED_MODULE_20__tooltip_tooltip_component__["a" /* TooltipComponent */], __WEBPACK_IMPORTED_MODULE_21__menu_menu_component__["a" /* MenuComponent */], __WEBPACK_IMPORTED_MODULE_22__slider_slider_component__["a" /* SliderComponent */], __WEBPACK_IMPORTED_MODULE_23__snackbar_snackbar_component__["a" /* SnackbarComponent */], __WEBPACK_IMPORTED_MODULE_24__dialog_dialog_component__["b" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_25__select_select_component__["a" /* SelectComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/material.module.js.map

/***/ })

});
//# sourceMappingURL=1.bundle.map