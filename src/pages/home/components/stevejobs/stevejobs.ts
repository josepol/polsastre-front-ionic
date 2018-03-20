import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../../../login/login';
import { NavigationProvider } from '../../../../shared/providers/navigation.provider';
import AuthProvider from '../../../../shared/providers/auth.provider';
import { AdminHomePage } from '../../../admin/containers/home/admin-home';

@Component({
  selector: 'app-stevejobs',
  templateUrl: 'stevejobs.html'
})
export class SteveJobsComponent implements OnInit {

  public isAuthenticated: boolean;

  constructor(
    private navigationProvider: NavigationProvider,
    private authProvider: AuthProvider
  ) {
  }

  ngOnInit(): void {
    this.authProvider.getIsAuthenticated().subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  public navigateLogin() {
    this.navigationProvider.getNaviController().push(LoginPage);
  }

  public navigateAdminHome() {
    this.navigationProvider.getNaviController().push(AdminHomePage);
  }

}
