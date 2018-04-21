import { Component, Input } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ProfileUserModel } from '../../models/profile-user.models';

@Component({
  selector: 'app-profile-user-data-modal-personal-info',
  templateUrl: 'profile-user-data-modal-personal-info.html',
})
export class ProfileUserDataModalPersonalInfoComponent {

  @Input() public profileData: ProfileUserModel;

  constructor(
    private viewController: ViewController
  ) {
  }

  ionViewDidLoad() {
  }

  public cancel() {
    this.viewController.dismiss({status: 'KO'});
  }

}
