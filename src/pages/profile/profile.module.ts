import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { ProfilePage } from './profile';
import { ProfileUserLeftDataComponent } from './components/profile-user-left-data/profile-user-left-data';
import { ProfileUserDataModal } from './components/profile-user-data-modal/profile-user-data-modal';
import { ProfileUserDataModalPersonalInfo } from './components/profile-user-data-modal-personal-info/profile-user-data-modal-personal-info';
import { ProfileUserDataModalChangePasswordComponent } from './components/profile-user-data-modal-change-password/profile-user-data-modal-change-password';
import { ProfileDataProvider } from './providers/profile-data.provider';

@NgModule({
  declarations: [
    ProfilePage,
    ProfileUserDataModal,
    ProfileUserLeftDataComponent,
    ProfileUserDataModalPersonalInfo,
    ProfileUserDataModalChangePasswordComponent
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ProfilePage),
  ],
  providers: [
    ProfileDataProvider
  ],
  exports: [
    ProfilePage
  ],
  entryComponents: [
    ProfileUserDataModal
  ]
})
export class ProfileModule {}
