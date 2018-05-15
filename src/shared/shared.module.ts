import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavComponent } from './components/layout/nav/nav';
import { FooterComponent } from './components/layout/footer/footer';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb';
import { NavigationProvider } from './providers/navigation.provider';
import AuthProvider from './providers/auth.provider';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal';
import { CodepenComponent } from './components/codepen/codepen';

@NgModule({
	declarations: [
		NavComponent,
		FooterComponent,
		BreadcrumbComponent,
		ConfirmationModalComponent,
		CodepenComponent
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
		BreadcrumbComponent,
		CodepenComponent
	],
	entryComponents: [
		ConfirmationModalComponent
	]
})
export class SharedModule {}
