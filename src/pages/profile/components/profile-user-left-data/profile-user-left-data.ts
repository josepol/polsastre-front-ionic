import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ProfileUserDataModal } from '../profile-user-data-modal/profile-user-data-modal';

@Component({
  selector: 'app-profile-user-left-data',
  templateUrl: 'profile-user-left-data.html',
})
export class ProfileUserLeftDataComponent {

  @Input() username: string;
  @Input() name: string;

  constructor(
    private modalController: ModalController
  ) {
  }

  ionViewDidLoad() {
  }

  public openUserDataModal() {
    const profileUserDataModal = this.modalController.create(ProfileUserDataModal);
    profileUserDataModal.onDidDismiss(data => {
      if (data.status === 'KO') {
        return;
      } 
    })
    profileUserDataModal.present();
  }

}
