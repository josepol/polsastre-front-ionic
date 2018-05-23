import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import * as jwtDecode from 'jwt-decode';
import AuthProvider from '../../../../shared/providers/auth.provider';
import { BlogDataProvider } from '../../../blog/providers/blog-data.provider';
import { PostModel } from '../../../blog/model/post.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'app-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage implements OnInit {

  public addPostFormGroup: FormGroup;
  public currentComponent: string;
  public posts: PostModel[];

  constructor(
    private authProvider: AuthProvider,
    private blogDataProvider: BlogDataProvider,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.addPostFormGroup = this.formBuilder.group({
      title: [''],
      subtitle: [''],
      text: [''],
      category: ['']
    });
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

  deletePosts() {

  }

  updatePosts() {

  }

}
