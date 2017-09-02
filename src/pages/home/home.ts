import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	slides: Array<any> = [];
	categories: Array<any> = [];
	products: Array<any> = [];
	spinner1: boolean = true;
	params = {
		favoritesId: 2054400,
		pageNo: 1,
		pageSize: 20
	};
	constructor(public navCtrl: NavController, public appService: AppService) {
		this.getSlides();
		this.getCategories();
		this.getProducts();
	}
	// 获取轮播
	getSlides() {
		var params = {
			favoritesId: 2056439,
			pageNo: 1,
			pageSize: 5
		}
		this.appService.httpGet(AppGlobal.API.getProducts, params, rs => {
			console.debug(rs);
			this.slides = rs.data;
			this.spinner1 = false;
		});
	}
	// 获取分类
	getCategories() {
		this.appService.httpGet(AppGlobal.API.getCategories, { appTag: 'dress' }, rs => {
			console.debug(rs);
			this.categories = rs.data;
		});
	}
	// 获取首页推荐列表
	getProducts() {
		this.appService.httpGet(AppGlobal.API.getProducts, this.params, rs => {
			console.debug(rs);
			this.products = rs.data;
		})
	}
	// 跳转商品详情
	goDetails(item) {
		console.debug('go details...')
	}
}
