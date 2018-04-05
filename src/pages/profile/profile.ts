import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { ProfileUserModel } from './models/profile-user.models';

@IonicPage()
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public profileData: ProfileUserModel;

  constructor(
    private modalController: ModalController
  ) {
  }

  ionViewDidLoad() {
    this.profileData = {
      name: 'Jose Manuel Pol Sastre',
      username: 'josepol'
    }
  }

}
