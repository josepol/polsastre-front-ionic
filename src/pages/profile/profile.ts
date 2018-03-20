import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { ProfileUserDataModal } from './components/profile-user-data-modal.ts/profile-user-data-modal';

@IonicPage()
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public name: string = 'Jose Manuel Pol Sastre';
  public username: string = 'josepol';

  constructor(
    private modalController: ModalController
  ) {
  }

  ionViewDidLoad() {
  }

  openUserDataModal() {
    const profileUserDataModal = this.modalController.create(ProfileUserDataModal);
    profileUserDataModal.present();
  }

}
