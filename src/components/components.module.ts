import { NgModule } from '@angular/core';
import { IonProductsComponent } from './ion-products/ion-products';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [IonProductsComponent],
	imports: [
		IonicPageModule.forChild(IonProductsComponent),
	],
	exports: [IonProductsComponent]
})
export class ComponentsModule {}
