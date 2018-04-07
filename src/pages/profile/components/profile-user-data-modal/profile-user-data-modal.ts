import { Component, ViewChild } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ProfileUserModel } from '../../models/profile-user.models';
import { PERSONAL_INFO, CHANGE_PASSWORD, KO, OK, CANCEL_ACCOUNT } from '../../../../shared/constants/app.contants';
import { ProfileDataProvider } from '../../providers/profile-data.provider';
import { ProfileUserDataModalChangePasswordComponent } from '../profile-user-data-modal-change-password/profile-user-data-modal-change-password';
import { NavigationProvider } from '../../../../shared/providers/navigation.provider';
import { LoginPage } from '../../../login/login';

@Component({
  selector: 'app-profile-user-data-modal',
  templateUrl: 'profile-user-data-modal.html',
})
export class ProfileUserDataModal {

  public PERSONAL_INFO: string = PERSONAL_INFO;
  public CHANGE_PASSWORD: string = CHANGE_PASSWORD;
  public CANCEL_ACCOUNT: string = CANCEL_ACCOUNT;

  @ViewChild('profileUserDataModalChangePassword') public profileUserDataModalChangePassword: ProfileUserDataModalChangePasswordComponent;

  public profileData: ProfileUserModel;
  public profileModalType: string;
  public changePasswordStepStatus: number = 0;
  public changePasswordCurrentButtonValue: string = 'Verificar contraseña';

  constructor(
    private viewController: ViewController,
    private params: NavParams,
    private profileDataProvider: ProfileDataProvider,
    private navigationProvider: NavigationProvider
  ) {
  }

  ionViewDidLoad() {
    this.profileData = this.params.get('profileData');
    this.profileModalType = this.params.get('profileModalType');
  }

  public cancel() {
    this.viewController.dismiss({status: KO});
  }

  public success() {
    this.viewController.dismiss({status: OK});
  }

  public onUpdateChangePasswordStatus(newStepStatus) {
    if (newStepStatus === -1) {
      this.success();
      return;
    }
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

  public cancelAccount() {
    this.profileDataProvider.cancelAccount().subscribe(response => {
      this.navigationProvider.getNaviController().setRoot(LoginPage);
      this.success();
    });
  }

}
