webpackJsonp([1],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(appService, navCtrl) {
        this.appService = appService;
        this.navCtrl = navCtrl;
        this.slides = [];
        this.categories = [];
        this.products = [];
        this.spinner1 = true;
        this.params = {
            favoritesId: 2054400,
            pageNo: 1,
            pageSize: 20
        };
        this.getSlides();
        this.getCategories();
        this.getProducts();
    }
    // 获取幻灯片
    HomePage.prototype.getSlides = function () {
        var _this = this;
        var params = {
            favoritesId: 2056439,
            pageNo: 1,
            pageSize: 5
        };
        this.appService.httpGet(__WEBPACK_IMPORTED_MODULE_0__app_app_service__["a" /* AppGlobal */].API.getProducts, params, function (rs) {
            console.debug(rs);
            _this.slides = rs.data;
            _this.spinner1 = false;
        });
    };
    // 获取分类
    HomePage.prototype.getCategories = function () {
        var _this = this;
        this.appService.httpGet(__WEBPACK_IMPORTED_MODULE_0__app_app_service__["a" /* AppGlobal */].API.getCategories, { appTag: 'dress' }, function (rs) {
            console.debug(rs);
            _this.categories = rs.data;
        });
    };
    // 获取首页推荐列表
    HomePage.prototype.getProducts = function () {
        var _this = this;
        this.appService.httpGet(__WEBPACK_IMPORTED_MODULE_0__app_app_service__["a" /* AppGlobal */].API.getProducts, this.params, function (rs) {
            console.debug(rs);
            _this.products = rs.data;
        });
    };
    // 商品详情
    HomePage.prototype.goDetails = function (item) {
        console.debug('go details...');
    };
    // 跳转分类详情
    HomePage.prototype.goProductList = function (item) {
        this.navCtrl.push('ProductListPage', { item: item });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Volumes/sunny/sunny/ionic3learn/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar style="opacity: 0.8" color="primary">\n        <ion-title>首页</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-row *ngIf="spinner1">\n        <ion-col text-center>\n            <ion-spinner></ion-spinner>\n        </ion-col>\n    </ion-row>\n    <ion-slides>\n        <ion-slide *ngFor="let item of slides" (click)="goDetails(item)">\n            <img src="{{item.PictUrl}}" alt="">\n            <div class="cover"></div>\n            <span class="title">{{item.Title}}</span>\n        </ion-slide>\n    </ion-slides>\n    <div class="categories">\n        <ion-grid>\n            <ion-row wrap>\n                <ion-col text-center tappable col-3 *ngFor="let c of categories" (click)="goProductList(c)">\n                    <i class="iconfont {{c.Icon}} icon"></i>\n                    <span class="title">{{c.FavoritesTitle}}</span>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <ion-item-divider class="t-header" color="light"> 年会礼服2017年新款 </ion-item-divider>\n    <ion-products [products]="products"></ion-products>\n</ion-content>'/*ion-inline-end:"/Volumes/sunny/sunny/ionic3learn/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__app_app_service__["b" /* AppService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ion_products_ion_products__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__ion_products_ion_products__["a" /* IonProductsComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__ion_products_ion_products__["a" /* IonProductsComponent */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__ion_products_ion_products__["a" /* IonProductsComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var IonProductsComponent = (function () {
    function IonProductsComponent(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello IonProductsComponent Component');
    }
    IonProductsComponent.prototype.goDetails = function (item) {
        this.navCtrl.push('ProductDetailsPage', { item: item });
        console.debug('go details...');
    };
    return IonProductsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], IonProductsComponent.prototype, "products", void 0);
IonProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ion-products',template:/*ion-inline-start:"/Volumes/sunny/sunny/ionic3learn/src/components/ion-products/ion-products.html"*/'<div class="product">\n    <ion-row wrap>\n        <ion-col tappable col-6 *ngFor="let p of products" (click)="goDetails(p)">\n            <img src="{{p.PictUrl}}" alt="">\n            <p>{{p.Title}}</p>\n            <div class="list-price buy">\n                <span class="price-new"><i>￥</i>{{p.ZkFinalPrice}}</span>\n                <i class="del">￥<span>{{p.ReservePrice}}</span></i>\n            </div>\n        </ion-col>\n    </ion-row>\n</div>'/*ion-inline-end:"/Volumes/sunny/sunny/ionic3learn/src/components/ion-products/ion-products.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object])
], IonProductsComponent);

var _a;
//# sourceMappingURL=ion-products.js.map

/***/ })

});
//# sourceMappingURL=1.js.map