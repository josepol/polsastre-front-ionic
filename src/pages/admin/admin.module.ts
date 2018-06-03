import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { AdminHomePage } from './containers/home/admin-home';
import { AdminDataProvider } from './providers/admin-data.provider';

@NgModule({
  declarations: [
    AdminHomePage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(AdminHomePage),
  ],
  providers: [
    AdminDataProvider
  ],
  exports: [
  ]
})
export class AdminModule {}
