import { Component, OnInit } from '@angular/core';
import { HomePage } from '../../../../pages/home/home';
import { BlogPage } from '../../../../pages/blog/containers/blog/blog';
import { NavigationProvider } from '../../../providers/navigation.provider';
import { LoginPage } from '../../../../pages/login/login';
import { AdminHomePage } from '../../../../pages/admin/containers/home/admin-home';
import AuthProvider from '../../../providers/auth.provider';
import { ProfilePage } from '../../../../pages/profile/profile';
import { ModalController, ViewController } from 'ionic-angular';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal';
import MenuComponent from '../menu/menu';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.html'
})
export class NavComponent implements OnInit {

  public isAuthenticated: boolean = false;
  public isAdmin: boolean = false;

  constructor(
    private navigationProvider: NavigationProvider,
    private authProvider: AuthProvider,
    private modalController: ModalController
  ) {
  }

  ngOnInit(): void {
    this.authProvider.getIsAuthenticated().subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
    this.authProvider.refreshAdmin().then(() => this.isAdmin = true)
      .catch(() => this.isAdmin = false);
  }

  public navigateHome() {
    this.navigationProvider.getNaviController().push(HomePage, {}, { animate: false });
  }

  public navigateBlog() {
    this.navigationProvider.getNaviController().push(BlogPage, {}, { animate: false });
  }

  public navigateLogin() {
    this.navigationProvider.getNaviController().push(LoginPage, {}, { animate: false });
  }

  public navigateAdminHome() {
    this.navigationProvider.getNaviController().push(AdminHomePage, {}, { animate: false });
  }

  public navigateProfile() {
    this.navigationProvider.getNaviController().push(ProfilePage, {}, { animate: false });
  }

  public logout() {
    const confirmationModalComponent = this.modalController.create(ConfirmationModalComponent);
    confirmationModalComponent.onDidDismiss(data => {
      if (data.status === 'OK') {
        this.authProvider.logout();
      }
    });
    confirmationModalComponent.present();
  }

  public openMenu() {
    const menuModalComponent = this.modalController.create(MenuComponent);
    menuModalComponent.onDidDismiss(data => { });
    menuModalComponent.present();
  }

}
