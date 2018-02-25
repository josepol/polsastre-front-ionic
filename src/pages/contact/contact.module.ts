import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/components/shared.module';
import { ContactPage } from './contact';
import { FormComponent } from './components/form/form';
import { LocalizationComponent } from './components/localization/localization';

@NgModule({
  declarations: [
    ContactPage,
    FormComponent,
    LocalizationComponent
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ContactPage),
  ],
  exports: [
  ]
})
export class ContactModule {}
