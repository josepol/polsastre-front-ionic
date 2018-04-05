import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { ProfilePage } from './profile';
import { ProfileUserLeftDataComponent } from './components/profile-user-left-data/profile-user-left-data';
import { ProfileUserDataModal } from './components/profile-user-data-modal/profile-user-data-modal';

@NgModule({
  declarations: [
    ProfilePage,
    ProfileUserDataModal,
    ProfileUserLeftDataComponent
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
