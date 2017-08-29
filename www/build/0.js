webpackJsonp([0],{

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

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductListPageModule = (function () {
    function ProductListPageModule() {
    }
    return ProductListPageModule;
}());
ProductListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], ProductListPageModule);

//# sourceMappingURL=product-list.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(192);
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
 * Generated class for the ProductListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProductListPage = (function () {
    function ProductListPage(navCtrl, navParams, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.hasmore = true;
        this.spinner1 = true;
        this.params = {
            pageNo: 1,
            favoritesId: 0,
        };
        this.selectedItem = this.navParams.get("item");
        this.params.favoritesId = this.selectedItem.FavoritesId;
    }
    ProductListPage.prototype.ionViewDidLoad = function () {
        this.getFavoritesItems();
        console.log('ionViewDidLoad ProductListPage');
    };
    ProductListPage.prototype.getFavoritesItems = function () {
        var _this = this;
        this.appService.httpGet(__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppGlobal */].API.getProducts, this.params, function (d) {
            _this.products = d.data;
            _this.params.pageNo += 1;
            _this.spinner1 = false;
        });
    };
    ProductListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.hasmore == false) {
            infiniteScroll.complete();
            return;
        }
        this.appService.httpGet(__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppGlobal */].API.getProducts, this.params, function (d) {
            if (d.data.length > 0) {
                _this.products = _this.products.concat(d.data);
                _this.params.pageNo += 1;
            }
            else {
                _this.hasmore = false;
                console.log("没有数据啦！");
            }
            infiniteScroll.complete();
        });
    };
    return ProductListPage;
}());
ProductListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-list',template:/*ion-inline-start:"/Volumes/sunny/sunny/ionic3learn/src/pages/product-list/product-list.html"*/'<ion-header>\n    <ion-navbar style="opacity: 0.8" no-border-bottom color="primary">\n        <ion-title>{{selectedItem.FavoritesTitle}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-products [products]="products"></ion-products>\n    <ion-row>\n        <ion-col class="nodata" text-center *ngIf="!hasmore">\n            没有商品啦 ♪(^∇^*)\n        </ion-col>\n    </ion-row>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Volumes/sunny/sunny/ionic3learn/src/pages/product-list/product-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_service__["b" /* AppService */]])
], ProductListPage);

//# sourceMappingURL=product-list.js.map

/***/ })

});
//# sourceMappingURL=0.js.map