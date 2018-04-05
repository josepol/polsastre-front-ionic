import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@Component({
  selector: 'app-profile-user-data-modal',
  templateUrl: 'profile-user-data-modal.html',
})
export class ProfileUserDataModal {

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
