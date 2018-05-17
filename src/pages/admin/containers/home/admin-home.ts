import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import * as jwtDecode from 'jwt-decode';
import AuthProvider from '../../../../shared/providers/auth.provider';
import { BlogDataProvider } from '../../../blog/providers/blog-data.provider';
import { PostModel } from '../../../blog/model/post.model';

@IonicPage()
@Component({
  selector: 'app-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  public currentComponent: string;
  public posts: PostModel[];

  constructor(
    private authProvider: AuthProvider,
    private blogDataProvider: BlogDataProvider
  ) {
  }

  ionViewDidLoad() {
    this.currentComponent = 'posts';
    this.blogDataProvider.getPosts().subscribe((posts: PostModel[]) => {
      this.posts = posts;
    });
  }

  ionViewCanEnter() {
    return this.authProvider.refreshAdmin().then();
  }

  changeComponent(newComponent) {
    this.currentComponent = newComponent;
  }

}
