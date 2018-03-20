import { Component, OnInit } from '@angular/core';
import { App } from 'ionic-angular';
import { HomePage } from '../../../../pages/home/home';
import { BlogPage } from '../../../../pages/blog/containers/blog/blog';
import { NavigationProvider } from '../../../providers/navigation.provider';
import { LoginPage } from '../../../../pages/login/login';
import { AdminHomePage } from '../../../../pages/admin/containers/home/admin-home';
import AuthProvider from '../../../providers/auth.provider';
import { ProfilePage } from '../../../../pages/profile/profile';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.html'
})
export class NavComponent implements OnInit {

  public isAuthenticated: boolean = false;

  constructor(
    private app: App,
    private navigationProvider: NavigationProvider,
    private authProvider: AuthProvider
  ) {
  }

  ngOnInit(): void {
    this.authProvider.getIsAuthenticated().subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
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

  public navigateProfile() {
    this.navigationProvider.getNaviController().push(ProfilePage);
  }

  public logout() {
    this.authProvider.logout();
  }

  public translate(language) {
    
  }
  
}
