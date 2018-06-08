import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import * as jwtDecode from 'jwt-decode';
import AuthProvider from '../../../../shared/providers/auth.provider';
import { BlogDataProvider } from '../../../blog/providers/blog-data.provider';
import { PostModel } from '../../../blog/model/post.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminDataProvider } from '../../providers/admin-data.provider';
import { CategoryModel } from '../../../blog/model/category.model';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'app-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage implements OnInit, OnDestroy {

  public addPostFormGroup: FormGroup;
  public currentComponent: string;
  public posts: PostModel[];
  public categories: Array<CategoryModel>;
  public deleteButtonDisabled: boolean = true;

  private subscription: Subscription = new Subscription();

  constructor(
    private authProvider: AuthProvider,
    private blogDataProvider: BlogDataProvider,
    private formBuilder: FormBuilder,
    private adminDataProvider: AdminDataProvider
  ) {
  }

  ngOnInit(): void {
    this.addPostFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      text: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    this.currentComponent = 'posts';
    this.subscription.add(this.blogDataProvider.getPosts().subscribe((posts: PostModel[]) => {
      this.posts = posts;
    }));
    this.subscription.add(this.blogDataProvider.getCategories().subscribe(categories => {
      this.categories = categories;
    }));
  }

  ionViewCanEnter() {
    return this.authProvider.refreshAdmin().then();
  }

  changeComponent(newComponent) {
    this.currentComponent = newComponent;
  }

  addPost(addPotsFormValue, isValid) {
    if (!isValid) {
      return;
    }
    this.subscription.add(this.adminDataProvider.addPost(addPotsFormValue).subscribe(response => {
      this.ionViewDidLoad();
    }));
  }

  deletePosts() {
    this.subscription.add(this.adminDataProvider.deletePosts(this.posts).subscribe(response => {
      this.ionViewDidLoad();
    }));
  }

  updatePosts() {

  }

  public someCheckboxChanged(e, postIndex) {
    let hasAnyChecked = false;
    this.posts[postIndex].checked = e.target.checked;
    this.posts.forEach(post => {
      if (post.checked) {
        return hasAnyChecked = true;
      }
    });
    this.deleteButtonDisabled = !hasAnyChecked;
    return hasAnyChecked;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
