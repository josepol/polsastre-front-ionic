import { NgModule } from '@angular/core';
import { NavComponent } from './layout/nav/nav';
import { IonicModule } from 'ionic-angular';
import { FooterComponent } from './layout/footer/footer';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb';

@NgModule({
	declarations: [
		NavComponent,
		FooterComponent,
		BreadcrumbComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		NavComponent,
		FooterComponent,
		BreadcrumbComponent
	]
})
export class SharedModule {}
