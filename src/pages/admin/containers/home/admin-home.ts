import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import AuthProvider from '../../../../shared/providers/auth.provider';

@IonicPage()
@Component({
  selector: 'app-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  public currentComponent: string;

  constructor(
    private authProvider: AuthProvider
  ) {
  }

  ionViewDidLoad() {
    this.currentComponent = 'posts';
  }

  ionViewCanEnter() {
    return this.authProvider.refresh().then(token => token);
  }

  changeComponent(newComponent) {
    this.currentComponent = newComponent;
  }

}
