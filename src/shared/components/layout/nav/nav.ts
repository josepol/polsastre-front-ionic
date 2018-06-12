import { Component, OnInit } from '@angular/core';
import { HomePage } from '../../../../pages/home/home';
import { BlogPage } from '../../../../pages/blog/containers/blog/blog';
import { NavigationProvider } from '../../../providers/navigation.provider';
import { LoginPage } from '../../../../pages/login/login';
import { AdminHomePage } from '../../../../pages/admin/containers/home/admin-home';
import AuthProvider from '../../../providers/auth.provider';
import { ProfilePage } from '../../../../pages/profile/profile';
import { ModalController } from 'ionic-angular';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal';
import MenuComponent from '../menu/menu';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.html'
})
export class NavComponent implements OnInit {

  constructor(
    private navigationProvider: NavigationProvider,
    private authProvider: AuthProvider,
    private modalController: ModalController
  ) {
  }

  ngOnInit(): void {
  }

  public navigateHome() {
    this.navigationProvider.getNaviController().push(HomePage, {}, {animate: false});
  }

  public openMenu() {
    const menuModalComponent = this.modalController.create(MenuComponent);
    menuModalComponent.onDidDismiss(data => {

    });
    menuModalComponent.present();
  }
  
}
