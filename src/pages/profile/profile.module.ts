import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { ProfilePage } from './profile';
import { ProfileUserLeftDataComponent } from './components/profile-user-left-data/profile-user-left-data';
import { ProfileUserDataModal } from './components/profile-user-data-modal/profile-user-data-modal';
import { ProfileUserDataModalPersonalInfoComponent } from './components/profile-user-data-modal-personal-info/profile-user-data-modal-personal-info';
import { ProfileUserDataModalChangePasswordComponent } from './components/profile-user-data-modal-change-password/profile-user-data-modal-change-password';
import { ProfileDataProvider } from './providers/profile-data.provider';
import { ProfileUserDataModalCancelAccountComponent } from './components/profile-user-data-modal-cancel-account/profile-user-data-modal-cancel-account';

@NgModule({
  declarations: [
    ProfilePage,
    ProfileUserDataModal,
    ProfileUserLeftDataComponent,
    ProfileUserDataModalPersonalInfoComponent,
    ProfileUserDataModalChangePasswordComponent,
    ProfileUserDataModalCancelAccountComponent
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
