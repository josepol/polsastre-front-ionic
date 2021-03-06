import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavigationProvider } from '../../shared/providers/navigation.provider';
import { AdminHomePage } from '../admin/containers/home/admin-home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import AuthProvider from '../../shared/providers/auth.provider';
import { RegisterPage } from '../register/register';
import { BlogPage } from '../blog/containers/blog/blog';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;
  public loginFailed: boolean = false;

  constructor(
    private navigationProvider: NavigationProvider,
    private formBuilder: FormBuilder,
    private authProvider: AuthProvider
  ) {
  }

  ionViewCanEnter() {
    return this.authProvider.refresh().then(token => {
      if (token) {
        this.navigateBlogPage();
        return false;
      }
      return true;
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login(userLogin, isValid) {
    this.loginFailed = false;
    this.submitted = true;
    if (!isValid) {
      return;
    }

    this.authProvider.login(userLogin).subscribe(token => {
      this.navigateBlogPage();
    }, error => {
      this.loginFailed = true;
    });

  }

  public goToRegister($event) {
    $event.preventDefault();
    this.navigationProvider.getNaviController().push(RegisterPage, {}, {animate: false});
  }

  private navigateBlogPage() {
    this.navigationProvider.getNaviController().push(BlogPage, {}, {animate: false});
  }

  public navigateToHome() {
    this.navigationProvider.getNaviController().push(HomePage, {}, {animate: false});
  }

}
