import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavComponent } from './components/layout/nav/nav';
import { FooterComponent } from './components/layout/footer/footer';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb';
import { NavigationProvider } from './providers/navigation.provider';
import AuthProvider from './providers/auth.provider';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal';

@NgModule({
	declarations: [
		NavComponent,
		FooterComponent,
		BreadcrumbComponent,
		ConfirmationModalComponent
	],
	imports: [
		IonicModule,
	],
	providers: [
		NavigationProvider,
		AuthProvider
	],
	exports: [
		NavComponent,
		FooterComponent,
		BreadcrumbComponent
	],
	entryComponents: [
		ConfirmationModalComponent
	]
})
export class SharedModule {}
