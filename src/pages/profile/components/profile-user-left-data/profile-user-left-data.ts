import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ProfileUserDataModal } from '../profile-user-data-modal/profile-user-data-modal';
import { ProfileUserModel } from '../../models/profile-user.models';

@Component({
  selector: 'app-profile-user-left-data',
  templateUrl: 'profile-user-left-data.html',
})
export class ProfileUserLeftDataComponent {

  @Input() profileData: ProfileUserModel;

  constructor(
    private modalController: ModalController
  ) {
  }

  ionViewDidLoad() {
  }

  public openUserDataModal() {
    const profileUserDataModal = this.modalController.create(ProfileUserDataModal, {profileData: this.profileData});
    profileUserDataModal.onDidDismiss(data => {
      if (data.status === 'KO') {
        return;
      } 
    })
    profileUserDataModal.present();
  }

}
