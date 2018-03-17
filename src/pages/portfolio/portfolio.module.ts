import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortfolioPage } from './portfolio';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PortfolioPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(PortfolioPage),
  ],
  exports: [
    PortfolioPage
  ]
})
export class PortfolioModule {}
