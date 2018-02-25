import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { SharedModule } from '../shared/components/shared.module';
import { PortfolioModule } from '../pages/portfolio/portfolio.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HomePage } from '../pages/home/home';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { routes } from './app.route';
import { ContactModule } from '../pages/contact/contact.module';
import { BlogModule } from '../pages/blog/blog.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: routes
    }),
    BrowserModule,
    SharedModule,
    HomeModule,
    PortfolioModule,
    ContactModule,
    BlogModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
