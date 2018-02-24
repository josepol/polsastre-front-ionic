import { NgModule } from '@angular/core';
import { NavComponent } from './layout/nav/nav';
import { IonicModule } from 'ionic-angular';
import { FooterComponent } from './layout/footer/footer';

@NgModule({
	declarations: [
		NavComponent,
		FooterComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		NavComponent,
		FooterComponent
	]
})
export class SharedModule {}
