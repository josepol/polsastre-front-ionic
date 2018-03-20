import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { PortfolioModule } from '../pages/portfolio/portfolio.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HomePage } from '../pages/home/home';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { routes } from './app.route';
import { ContactModule } from '../pages/contact/contact.module';
import { BlogModule } from '../pages/blog/blog.module';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../pages/login/login.module';
import { AdminModule } from '../pages/admin/admin.module';
import HttpInterceptorProvider from '../shared/providers/http.interceptor.provider';
import { ProfileModule } from '../pages/profile/profile.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: routes
    }),
    BrowserModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    PortfolioModule,
    ContactModule,
    BlogModule,
    LoginModule,
    AdminModule,
    ProfileModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }/*,
    { provide: LocationStrategy, useClass: PathLocationStrategy }*/,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorProvider,
      multi: true,
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
