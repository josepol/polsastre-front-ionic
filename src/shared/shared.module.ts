import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavComponent } from './components/layout/nav/nav';
import { FooterComponent } from './components/layout/footer/footer';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb';
import { NavigationProvider } from './providers/navigation.provider';
import AuthProvider from './providers/auth.provider';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal';
import { CodepenComponent } from './components/codepen/codepen';
import CacheProvider from './providers/cache.provider';
import MenuComponent from './components/layout/menu/menu';

@NgModule({
	declarations: [
		NavComponent,
		FooterComponent,
		BreadcrumbComponent,
		ConfirmationModalComponent,
		CodepenComponent,
		MenuComponent
	],
	imports: [
		IonicModule,
	],
	providers: [
		NavigationProvider,
		AuthProvider,
		CacheProvider
	],
	exports: [
		NavComponent,
		FooterComponent,
		BreadcrumbComponent,
		CodepenComponent
	],
	entryComponents: [
		ConfirmationModalComponent,
		MenuComponent
	]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                NavComponent
            ]
        };
    }
}
