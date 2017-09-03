webpackJsonp([4],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactPageModule = (function () {
    function ContactPageModule() {
    }
    return ContactPageModule;
}());
ContactPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ]
    })
], ContactPageModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ion_products_ion_products__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
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

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
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
    }
    IonProductsComponent.prototype.goDetails = function (item) {
        this.navCtrl.push('ProductDetailsPage', { item: item });
    };
    return IonProductsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], IonProductsComponent.prototype, "products", void 0);
IonProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ion-products',template:/*ion-inline-start:"/Volumes/sunny/sunny/ionic3learn/src/components/ion-products/ion-products.html"*/'<div class="product">\n  <ion-row wrap>\n    <ion-col tappable col-6 *ngFor="let p of products" (click)="goDetails(p)">\n      <img src="{{p.PictUrl}}">\n      <p>{{p.Title}}</p>\n      <div class="list-price buy">\n        <span class="price-new"><i>￥</i>{{p.ZkFinalPrice}}</span>\n        <i class="del">￥<span>{{p.ReservePrice}}</span></i>\n      </div>\n    </ion-col>\n  </ion-row>\n</div>\n'/*ion-inline-end:"/Volumes/sunny/sunny/ionic3learn/src/components/ion-products/ion-products.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], IonProductsComponent);

//# sourceMappingURL=ion-products.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl, appService) {
        this.navCtrl = navCtrl;
        this.appService = appService;
        this.categories = [];
        this.products = [];
        this.hasmore = true;
        this.islock = false;
        this.params = {
            favoritesId: 0,
            pageNo: 1
        };
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        this.getCategories();
        this.addScrollEventListener();
    };
    ContactPage.prototype.addScrollEventListener = function () {
        var _this = this;
        this.scrollElement._scrollContent.nativeElement.onscroll = function (event) {
            if (_this.spinnerElement) {
                //元素顶端到可见区域顶端的距离
                var top = _this.spinnerElement.nativeElement.getBoundingClientRect().top;
                //可见区域高度
                var clientHeight = document.documentElement.clientHeight;
                if (top <= clientHeight) {
                    console.log("ready loadmore...");
                    _this.doInfinite();
                }
            }
        };
    };
    // 获取左侧菜单
    ContactPage.prototype.getCategories = function () {
        var _this = this;
        this.appService.httpGet(__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppGlobal */].API.getCategories, { appTag: 'dress' }, function (rs) {
            console.debug(rs);
            _this.categories = rs.data;
            //默认获取第一个分类的商品列表
            _this.params.favoritesId = _this.categories[0].FavoritesId;
            _this.getProducts();
        });
    };
    // 选中左侧菜单
    ContactPage.prototype.itemClick = function (c, event) {
        var initSelected = document.getElementsByClassName('menuItem');
        if (initSelected[0].classList.contains("active")) {
            initSelected[0].classList.remove("active");
        }
        //移除上次选中菜单的样式
        if (this.selectedMenuTarget) {
            this.selectedMenuTarget.classList.remove("active");
        }
        //修改本次选中菜单的样式
        event.currentTarget.classList.add("active");
        //将本次选中的菜单记录
        this.selectedMenuTarget = event.currentTarget;
        this.hasmore = true;
        this.params.favoritesId = c.FavoritesId;
        this.params.pageNo = 1;
        this.getProducts();
    };
    ContactPage.prototype.getProducts = function () {
        var _this = this;
        this.appService.httpGet(__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppGlobal */].API.getProducts, this.params, function (rs) {
            _this.products = rs.data;
            _this.params.pageNo += 1;
        });
    };
    ContactPage.prototype.doInfinite = function () {
        var _this = this;
        if (this.islock) {
            return;
        }
        if (this.hasmore == false) {
            return;
        }
        this.islock = true;
        this.appService.httpGet(__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppGlobal */].API.getProducts, this.params, function (d) {
            _this.islock = false;
            if (d.data.length > 0) {
                _this.products = _this.products.concat(d.data);
                _this.params.pageNo += 1;
            }
            else {
                _this.hasmore = false;
                console.log("没有数据啦！");
            }
        });
    };
    ContactPage.prototype.goDetails = function (item) {
        this.navCtrl.push('ProductDetailsPage', { item: item });
    };
    return ContactPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('scroll'),
    __metadata("design:type", Object)
], ContactPage.prototype, "scrollElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('spinner'),
    __metadata("design:type", Object)
], ContactPage.prototype, "spinnerElement", void 0);
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Volumes/sunny/sunny/ionic3learn/src/pages/contact/contact.html"*/'<ion-header>\n    <ion-navbar style="opacity: 0.8" no-border-bottom color="primary">\n        <ion-title>优惠精选</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-grid no-padding>\n        <ion-row>\n            <ion-col col-3 class="menus">\n                <ion-scroll scrollY="true" style="height:100%">\n                    <ion-list no-lines>\n                        <ion-item button class="menuItem" *ngFor="let c of categories;let i=index" [ngClass]="{\'active\': i==0}" text-center (click)="itemClick(c,$event)">\n                            {{c.FavoritesTitle}} </ion-item>\n                    </ion-list>\n                </ion-scroll>\n            </ion-col>\n            <ion-col class="items">\n                <ion-scroll scrollY="true" #scroll style="height:100%">\n                    <ion-products [products]="products"></ion-products>\n                    <ion-row>\n                        <ion-col class="nodata" text-center *ngIf="!hasmore">\n                            没有商品啦 ♪(^∇^*)\n                        </ion-col>\n                    </ion-row>\n                    <ion-row #spinner *ngIf="hasmore">\n                        <ion-col text-center>\n                            <ion-spinner></ion-spinner>\n                        </ion-col>\n                    </ion-row>\n                </ion-scroll>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Volumes/sunny/sunny/ionic3learn/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_app_service__["b" /* AppService */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=4.js.map