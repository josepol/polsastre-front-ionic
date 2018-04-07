import { Component, ViewChild } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ProfileUserModel } from '../../models/profile-user.models';
import { PERSONAL_INFO, CHANGE_PASSWORD, KO } from '../../../../shared/constants/app.contants';
import { ProfileDataProvider } from '../../providers/profile-data.provider';
import { ProfileUserDataModalChangePasswordComponent } from '../profile-user-data-modal-change-password/profile-user-data-modal-change-password';

@Component({
  selector: 'app-profile-user-data-modal',
  templateUrl: 'profile-user-data-modal.html',
})
export class ProfileUserDataModal {

  @ViewChild('profileUserDataModalChangePassword') public profileUserDataModalChangePassword: ProfileUserDataModalChangePasswordComponent;

  public profileData: ProfileUserModel;
  public profileModalType: string;
  public PERSONAL_INFO: string = PERSONAL_INFO;
  public CHANGE_PASSWORD: string = CHANGE_PASSWORD;
  public changePasswordStepStatus: number = 0;
  public changePasswordCurrentButtonValue: string = 'Verificar contraseña';

  constructor(
    private viewController: ViewController,
    private params: NavParams,
    private profileDataProvider: ProfileDataProvider
  ) {
  }

  ionViewDidLoad() {
    this.profileData = this.params.get('profileData');
    this.profileModalType = this.params.get('profileModalType');
  }

  public cancel() {
    this.viewController.dismiss({status: KO});
  }

  public onUpdateChangePasswordStatus(newStepStatus) {
    this.changePasswordStepStatus = newStepStatus;
    this.changePasswordCurrentButtonValue = 'Actualizar nueva contraseña';
  }

  public addChangePasswordStep() {
    if (this.changePasswordStepStatus === 0) {
      this.profileUserDataModalChangePassword.verifyCurrentPassword();
    } else {
      this.profileUserDataModalChangePassword.changePassword();
    }
  }

}
