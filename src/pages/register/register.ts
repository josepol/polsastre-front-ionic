import { Component, OnInit } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { NavigationProvider } from '../../shared/providers/navigation.provider';
import { AdminHomePage } from '../admin/containers/home/admin-home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import AuthProvider from '../../shared/providers/auth.provider';
import { LoginPage } from '../login/login';
import { BlogPage } from '../blog/containers/blog/blog';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit {

  public registerForm: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;
  public registerFailed: string = '';
  public differentPasswordFailed: boolean = false;

  constructor(
    private navigationProvider: NavigationProvider,
    private formBuilder: FormBuilder,
    private authProvider: AuthProvider,
    private toastController: ToastController
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
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
      name: ['', Validators.required]
    });
    this.setPasswordListener();
  }

  public register(userRegister, isValid) {
    this.registerFailed = '';
    this.submitted = true;
    if (!isValid) {
      return;
    }

    if (userRegister.password !== userRegister.passwordRepeat) {
      this.differentPasswordFailed = true;
      return;
    }

    this.authProvider.register(userRegister).subscribe(token => {
      const toast = this.toastController.create({
        message: 'You have been successfully registered',
        duration: 3000
      });
      toast.present();
    }, error => {
      if (error.error && error.error.code === 11000) {
        this.registerFailed = '11000';
      } else {
        this.registerFailed = '00000';
      }
    });

  }

  public goToLogin($event) {
    $event.preventDefault();
    this.navigationProvider.getNaviController().push(LoginPage, {}, {animate: false});
  }

  private setPasswordListener() {
    this.registerForm.controls.password.valueChanges.subscribe(newPasswordValue => {
      if (this.differentPasswordFailed) {
        this.differentPasswordFailed = false;
      }
    });
    this.registerForm.controls.passwordRepeat.valueChanges.subscribe(newPasswordRepeatValue => {
      if (this.differentPasswordFailed) {
        this.differentPasswordFailed = false;
      }
    });
  }

  private navigateAdminHome() {
    this.navigationProvider.getNaviController().push(AdminHomePage, {}, {animate: false});
  }

  private navigateBlogPage() {
    this.navigationProvider.getNaviController().push(BlogPage, {}, {animate: false});
  }

  public navigateToHome() {
    this.navigationProvider.getNaviController().push(HomePage, {}, {animate: false});
  }

  public navigateToLogin() {
    this.navigationProvider.getNaviController().push(LoginPage, {}, {animate: false});
  }

}
