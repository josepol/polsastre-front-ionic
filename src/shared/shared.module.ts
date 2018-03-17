import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavComponent } from './components/layout/nav/nav';
import { FooterComponent } from './components/layout/footer/footer';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb';
import { NavigationProvider } from './providers/navigation.provider';

@NgModule({
	declarations: [
		NavComponent,
		FooterComponent,
		BreadcrumbComponent
	],
	imports: [
		IonicModule,
	],
	providers: [
		NavigationProvider
	],
	exports: [
		NavComponent,
		FooterComponent,
		BreadcrumbComponent
	]
})
export class SharedModule {}
