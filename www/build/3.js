webpackJsonp([3],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDetailsPageModule = (function () {
    function ProductDetailsPageModule() {
    }
    return ProductDetailsPageModule;
}());
ProductDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]),
        ],
    })
], ProductDetailsPageModule);

//# sourceMappingURL=product-details.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
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
 * Generated class for the ProductDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProductDetailsPage = (function () {
    function ProductDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = this.navParams.get("item");
        if (this.selectedItem.SmallImages) {
            this.imgs = this.selectedItem.SmallImages;
        }
    }
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailsPage');
    };
    return ProductDetailsPage;
}());
ProductDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-details',template:/*ion-inline-start:"/Volumes/sunny/sunny/ionic3learn/src/pages/product-details/product-details.html"*/'<ion-header>\n    <ion-navbar style="opacity: 0.8" no-border-bottom color="primary">\n        <ion-title>商品详情</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-row>\n        <ion-col>\n            <img src="{{selectedItem.PictUrl}}" alt="">\n        </ion-col>\n    </ion-row>\n    <div class="item-good">\n        <div class="list-price buy">\n            <span class="price-new ml"><i>￥</i>{{selectedItem.ZkFinalPrice}}</span>\n            <i class="del f14 ml2">￥{{selectedItem.ReservePrice}}</i>\n        </div>\n        <h1>{{selectedItem.Title}}</h1>\n    </div>\n    <button ion-button full primary Ï>去抢购</button>\n    <div *ngFor="let img of imgs">\n        <img src="{{img}}" alt="">\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/sunny/sunny/ionic3learn/src/pages/product-details/product-details.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
], ProductDetailsPage);

var _a, _b;
//# sourceMappingURL=product-details.js.map

/***/ })

});
//# sourceMappingURL=3.js.map