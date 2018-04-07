import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { ProfileUserModel } from './models/profile-user.models';
import { ProfileDataProvider } from './providers/profile-data.provider';
import AuthProvider from '../../shared/providers/auth.provider';

@IonicPage()
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public profileData: ProfileUserModel;

  constructor(
    private modalController: ModalController,
    private profileDataProvider: ProfileDataProvider,
    private authProvider: AuthProvider
  ) {
  }

  ionViewCanEnter() {
    return this.authProvider.refresh().then(token => token);
  }

  ionViewDidLoad() {
    this.profileDataProvider.getProfileData().subscribe(profileData => {
      this.profileData = profileData;
    });
  }

}
