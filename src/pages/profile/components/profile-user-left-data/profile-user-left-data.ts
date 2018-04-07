import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ProfileUserDataModal } from '../profile-user-data-modal/profile-user-data-modal';
import { ProfileUserModel } from '../../models/profile-user.models';
import { PERSONAL_INFO, CHANGE_PASSWORD, CANCEL_ACCOUNT, OK, KO } from '../../../../shared/constants/app.contants';

@Component({
  selector: 'app-profile-user-left-data',
  templateUrl: 'profile-user-left-data.html',
})
export class ProfileUserLeftDataComponent {

  @Input() profileData: ProfileUserModel;

  public PERSONAL_INFO: string = PERSONAL_INFO;
  public CHANGE_PASSWORD: string = CHANGE_PASSWORD;
  public CANCEL_ACCOUNT: string = CANCEL_ACCOUNT;

  constructor(
    private modalController: ModalController
  ) {
  }

  ionViewDidLoad() {
  }

  public openUserDataModal(profileModalType) {
    const profileUserDataModal = this.modalController.create(ProfileUserDataModal, {
      profileData: this.profileData,
      profileModalType: profileModalType
    });
    profileUserDataModal.onDidDismiss(data => {
      if (data.status === KO) {
        console.log(KO);
        return;
      } else {
        console.log(OK);
        return;
      }
    })
    profileUserDataModal.present();
  }

}
