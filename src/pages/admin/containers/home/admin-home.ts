import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import AuthProvider from '../../../../shared/providers/auth.provider';

@IonicPage()
@Component({
  selector: 'app-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  constructor(
    private authProvider: AuthProvider
  ) {
  }

  ionViewCanEnter() {
    return this.authProvider.getIsAuthenticated();
  }

}
