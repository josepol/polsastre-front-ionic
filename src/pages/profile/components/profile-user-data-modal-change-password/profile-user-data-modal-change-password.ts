import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ProfileUserModel } from '../../models/profile-user.models';
import { ProfileDataProvider } from '../../providers/profile-data.provider';
import { OK } from '../../../../shared/constants/app.contants';

@Component({
  selector: 'app-profile-user-data-modal-change-password',
  templateUrl: 'profile-user-data-modal-change-password.html',
})
export class ProfileUserDataModalChangePasswordComponent {

  @Input() public profileData: ProfileUserModel;
  @Input() public changePasswordStepStatus: number;

  @Output() public updateChangePasswordStatus: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private viewController: ViewController,
    private profileDataProvider: ProfileDataProvider
  ) {
  }

  ionViewDidLoad() {
  }

  public cancel() {
    this.viewController.dismiss({status: 'KO'});
  }

  public verifyCurrentPassword() {
    this.profileDataProvider.verifyCurrrentPassword('').subscribe(verifyPasswordResponse => {
      if (verifyPasswordResponse.status === OK) {
        this.changePasswordStepStatus++;
        this.updateChangePasswordStatus.emit(this.changePasswordStepStatus);
      } else {

      }
    });
  }

  public changePassword() {
    this.profileDataProvider.changePassword('').subscribe(changePasswordReponse => {
      if (changePasswordReponse.status === OK) {
        this.updateChangePasswordStatus.emit(-1);
      } else {

      }
    });
  }

}
