import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ProfileUserModel } from '../../models/profile-user.models';

@Component({
  selector: 'app-profile-user-data-modal',
  templateUrl: 'profile-user-data-modal.html',
})
export class ProfileUserDataModal {

  public profileData: ProfileUserModel;

  constructor(
    private viewController: ViewController,
    private params: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.profileData = this.params.get('profileData');
  }

  public cancel() {
    this.viewController.dismiss({status: 'KO'});
  }

}
