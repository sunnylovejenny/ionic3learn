import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ion-products',
  templateUrl: 'ion-products.html'
})
export class IonProductsComponent {

	@Input() products: Array<any>;
	constructor(public navCtrl: NavController) {
	}
	goDetails(item) {
		this.navCtrl.push('ProductDetailsPage', { item: item });
	}

}
