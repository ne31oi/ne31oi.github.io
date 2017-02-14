webpackJsonp([9,16],{

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartlibComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartlibComponent = (function () {
    function ChartlibComponent() {
        this.globalChartOptions = {
            responsive: true,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        // Bar
        this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 0
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 0
            }];
        this.barChartOptions = Object.assign({
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        position: 'left',
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }]
            }
        }, this.globalChartOptions);
        // Horizontal Bar Chart
        this.barChartHorizontalType = 'horizontalBar';
        this.barChartHorizontalOptions = Object.assign({
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }]
            }
        }, this.globalChartOptions);
        // Bar Chart Stacked
        this.barChartStackedOptions = Object.assign({
            scaleShowVerticalLines: false,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true
                    }]
            }
        }, this.globalChartOptions);
        // Doughnut
        this.doughnutChartColors = [{
                backgroundColor: ["#f44336", "#3f51b5", "#ffeb3b", "#4caf50", "#2196f"]
            }];
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        this.doughnutOptions = Object.assign({
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }, this.globalChartOptions);
        // Line Chart
        this.lineChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1
            }];
        this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.lineChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.globalChartOptions);
        this.lineChartColors = [{
                backgroundColor: "#7986cb",
                borderColor: "#3f51b5",
                pointBackgroundColor: "#3f51b5",
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: "#eeeeee",
                borderColor: "#e0e0e0",
                pointBackgroundColor: "#e0e0e0",
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartSteppedData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                fill: false,
                steppedLine: true
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                fill: false,
                steppedLine: true
            }];
        this.lineChartPointsData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }];
        this.lineChartPointsOptions = Object.assign({
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            },
            elements: {
                point: {
                    pointStyle: 'rectRot',
                }
            }
        }, this.globalChartOptions);
        // Bubble Chart
        this.bubbleChartData = [{
                data: [{
                        x: 6,
                        y: 5,
                        r: 15,
                    }, {
                        x: 5,
                        y: 4,
                        r: 10,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 5,
                        y: 14,
                        r: 14,
                    }, {
                        x: 5,
                        y: 6,
                        r: 8,
                    }, {
                        x: 4,
                        y: 2,
                        r: 10,
                    }],
                label: 'Series A',
                borderWidth: 1
            }];
        this.bubbleChartType = 'bubble';
        // Combo Chart
        this.ComboChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                type: 'line',
                fill: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                type: 'bar',
            }];
        this.ComboChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.ComboChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.globalChartOptions);
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [{
                data: [65, 59, 90, 81, 56, 55, 40],
                label: 'Series A'
            }, {
                data: [28, 48, 40, 19, 96, 27, 100],
                label: 'Series B'
            }];
        this.radarChartType = 'radar';
    }
    ChartlibComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chartlib',
            template: __webpack_require__(1160),
            styles: [__webpack_require__(1115)]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartlibComponent);
    return ChartlibComponent;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/chartlib.component.js.map

/***/ }),

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chartlib_component__ = __webpack_require__(1017);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartlibRoutes; });

var ChartlibRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__chartlib_component__["a" /* ChartlibComponent */]
    }];
//# sourceMappingURL=E:/n31/JS/angular2video/src/chartlib.routing.js.map

/***/ }),

/***/ 1115:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1160:
/***/ (function(module, exports) {

module.exports = "<div  fxLayout=\"row\"  fxLayoutWrap=\"wrap\">\r\n  <!-- bar -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Bar</md-card-title>\r\n      <md-card-subtitle>Basic</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [datasets]=\"barChartData\"\r\n          [labels]=\"barChartLabels\"\r\n          [options]=\"barChartOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <!-- bar -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Bar</md-card-title>\r\n      <md-card-subtitle>Horizontal</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [datasets]=\"barChartData\"\r\n          [labels]=\"barChartLabels\"\r\n          [options]=\"barChartHorizontalOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartHorizontalType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <!-- bar -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Bar</md-card-title>\r\n      <md-card-subtitle>Stacked</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [datasets]=\"barChartData\"\r\n          [labels]=\"barChartLabels\"\r\n          [options]=\"barChartStackedOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <!-- line -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Line</md-card-title>\r\n      <md-card-subtitle>Basic</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [datasets]=\"lineChartData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"lineChartOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"lineChartType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <!-- line -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Line</md-card-title>\r\n      <md-card-subtitle>Stepped</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [datasets]=\"lineChartSteppedData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"lineChartOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"lineChartType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <!-- line -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Line</md-card-title>\r\n      <md-card-subtitle>Points</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"250\" baseChart class=\"chart\"\r\n          [datasets]=\"lineChartPointsData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"lineChartPointsOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"lineChartType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <!-- mixed -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Mixed</md-card-title>\r\n      <md-card-subtitle>Mix different charts</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [datasets]=\"ComboChartData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"ComboChartOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"barChartType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <!-- bubble -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Bubble</md-card-title>\r\n      <md-card-subtitle>Display three dimensions of data</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [datasets]=\"bubbleChartData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"lineChartOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"bubbleChartType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <!-- doughnut -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Doughnut</md-card-title>\r\n      <md-card-subtitle>Pie chart with a cutout</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [data]=\"doughnutChartData\"\r\n          [labels]=\"doughnutChartLabels\"\r\n          [options]=\"doughnutOptions\"\r\n          [colors]=\"doughnutChartColors\"\r\n          [legend]=\"doughnutChartLegend\"\r\n          [chartType]=\"doughnutChartType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <!-- pie -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Pie</md-card-title>\r\n      <md-card-subtitle>Without the cutout</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"260\" baseChart class=\"chart\"\r\n          [data]=\"pieChartData\"\r\n          [options]=\"doughnutOptions\"\r\n          [colors]=\"doughnutChartColors\"\r\n          [labels]=\"pieChartLabels\"\r\n          [chartType]=\"pieChartType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <!-- polar -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Polar area</md-card-title>\r\n      <md-card-subtitle>Each segment has the same angle</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [data]=\"polarAreaChartData\"\r\n          [options]=\"doughnutOptions\"\r\n          [colors]=\"doughnutChartColors\"\r\n          [labels]=\"polarAreaChartLabels\"\r\n          [legend]=\"polarAreaLegend\"\r\n          [chartType]=\"polarAreaChartType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <!-- radar -->\r\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <md-card>\r\n      <md-card-title>Radar</md-card-title>\r\n      <md-card-subtitle>Multiple data points and the variation between them</md-card-subtitle>\r\n      <md-card-content>\r\n        <canvas height=\"230\" baseChart class=\"chart\"\r\n          [datasets]=\"radarChartData\"\r\n          [options]=\"globalChartOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [labels]=\"radarChartLabels\"\r\n          [chartType]=\"radarChartType\"></canvas>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chartlib_component__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chartlib_routing__ = __webpack_require__(1071);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartlibModule", function() { return ChartlibModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChartlibModule = (function () {
    function ChartlibModule() {
    }
    ChartlibModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__chartlib_routing__["a" /* ChartlibRoutes */]), __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdCardModule"], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__chartlib_component__["a" /* ChartlibComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartlibModule);
    return ChartlibModule;
}());
//# sourceMappingURL=E:/n31/JS/angular2video/src/chartlib.module.js.map

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
/* tslint:disable-next-line */
var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new core_1.EventEmitter();
        this.chartHover = new core_1.EventEmitter();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        if (typeof Chart === 'undefined') {
            throw new Error('ng2-charts configuration issue: Embedding Chart.js lib is mandatory');
        }
        return new Chart(ctx, opts);
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    BaseChartDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'canvas[baseChart]', exportAs: 'base-chart' },] },
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    BaseChartDirective.propDecorators = {
        'data': [{ type: core_1.Input },],
        'datasets': [{ type: core_1.Input },],
        'labels': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'chartType': [{ type: core_1.Input },],
        'colors': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'chartClick': [{ type: core_1.Output },],
        'chartHover': [{ type: core_1.Output },],
    };
    return BaseChartDirective;
}());
exports.BaseChartDirective = BaseChartDirective;
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        BaseChartDirective
                    ],
                    exports: [
                        BaseChartDirective
                    ],
                    imports: []
                },] },
    ];
    /** @nocollapse */
    ChartsModule.ctorParameters = function () { return []; };
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(978));


/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(979));


/***/ })

});
//# sourceMappingURL=9.bundle.map