import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { ProfileUserModel } from './models/profile-user.models';
import { ProfileDataProvider } from './providers/profile-data.provider';

@IonicPage()
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public profileData: ProfileUserModel;

  constructor(
    private modalController: ModalController,
    private profileDataProvider: ProfileDataProvider
  ) {
  }

  ionViewDidLoad() {
    this.profileDataProvider.getProfileData().subscribe(profileData => {
      this.profileData = profileData;
    });
  }

}
