import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { AdminHomePage } from './containers/home/admin-home';

@NgModule({
  declarations: [
    AdminHomePage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(AdminHomePage),
  ],
  providers: [
  ],
  exports: [
  ]
})
export class AdminModule {}
