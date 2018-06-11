import { Component } from "@angular/core";
import { ViewController, ModalController } from "ionic-angular";
import { NavigationProvider } from "../../../providers/navigation.provider";
import AuthProvider from "../../../providers/auth.provider";
import { HomePage } from "../../../../pages/home/home";
import { BlogPage } from "../../../../pages/blog/containers/blog/blog";
import { LoginPage } from "../../../../pages/login/login";
import { AdminHomePage } from "../../../../pages/admin/containers/home/admin-home";
import { ProfilePage } from "../../../../pages/profile/profile";
import { ConfirmationModalComponent } from "../../confirmation-modal/confirmation-modal";


@Component({
    selector: 'app-menu',
    templateUrl: './menu.html'
})
export default class MenuComponent {

    public isAuthenticated: boolean = false;
    public isAdmin: boolean = false;

    constructor(
        private viewController: ViewController,
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
    this.navigationProvider.getNaviController().push(HomePage);
    this.viewController.dismiss();
  }

  public navigateBlog() {
    this.navigationProvider.getNaviController().push(BlogPage);
    this.viewController.dismiss();
  }

  public navigateLogin() {
    this.navigationProvider.getNaviController().push(LoginPage);
    this.viewController.dismiss();
  }

  public navigateAdminHome() {
    this.navigationProvider.getNaviController().push(AdminHomePage);
    this.viewController.dismiss();
  }

  public navigateProfile() {
    this.navigationProvider.getNaviController().push(ProfilePage);
    this.viewController.dismiss();
  }

  public logout() {
    this.viewController.dismiss();
    const confirmationModalComponent = this.modalController.create(ConfirmationModalComponent);
    confirmationModalComponent.onDidDismiss(data => {
      if(data.status === 'OK') {
        this.authProvider.logout();
      }
    });
    confirmationModalComponent.present();
  }

  public cancel() {
    this.viewController.dismiss({status: 'KO'});
  }

}