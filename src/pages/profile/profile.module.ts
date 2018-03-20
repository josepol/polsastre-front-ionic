import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { ProfilePage } from './profile';
import { ProfileUserDataModal } from './components/profile-user-data-modal.ts/profile-user-data-modal';

@NgModule({
  declarations: [
    ProfilePage,
    ProfileUserDataModal
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ProfilePage),
  ],
  exports: [
    ProfilePage
  ],
  entryComponents: [
    ProfileUserDataModal
  ]
})
export class ProfileModule {}
