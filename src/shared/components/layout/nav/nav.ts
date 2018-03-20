import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { PortfolioPage } from '../../../../pages/portfolio/portfolio';
import { HomePage } from '../../../../pages/home/home';
import { ContactPage } from '../../../../pages/contact/contact';
import { BlogPage } from '../../../../pages/blog/containers/blog/blog';
import { NavigationProvider } from '../../../providers/navigation.provider';
import { LoginPage } from '../../../../pages/login/login';
import { AdminHomePage } from '../../../../pages/admin/containers/home/admin-home';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.html'
})
export class NavComponent {

  constructor(
    private app: App,
    private navigationProvider: NavigationProvider
  ) {
  }

  public navigateHome() {
    this.navigationProvider.getNaviController().push(HomePage);
  }

  public navigateBlog() {
    this.navigationProvider.getNaviController().push(BlogPage);
  }

  public navigateLogin() {
    this.navigationProvider.getNaviController().push(LoginPage);
  }

  public navigateAdminHome() {
    this.navigationProvider.getNaviController().push(AdminHomePage);
  }

  public translate(language) {
    
  }
  
}
