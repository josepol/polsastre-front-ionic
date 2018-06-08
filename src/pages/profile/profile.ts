import { Component, OnDestroy } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { ProfileUserModel } from './models/profile-user.models';
import { ProfileDataProvider } from './providers/profile-data.provider';
import AuthProvider from '../../shared/providers/auth.provider';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnDestroy {

  public profileData: ProfileUserModel;

  private subscription: Subscription = new Subscription();

  constructor(
    private modalController: ModalController,
    private profileDataProvider: ProfileDataProvider,
    private authProvider: AuthProvider
  ) {
  }

  ionViewCanEnter() {
    return this.subscription.add(this.authProvider.refresh().then(token => token));
  }

  ionViewDidLoad() {
    this.subscription.add(this.profileDataProvider.getProfileData().subscribe(profileData => {
      this.profileData = profileData;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
