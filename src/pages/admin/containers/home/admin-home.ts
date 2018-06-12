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
import { BlogDetailPage } from '../../../blog/containers/blog-detail/blog-detail';
import { NavigationProvider } from '../../../../shared/providers/navigation.provider';
import CacheProvider from '../../../../shared/providers/cache.provider';

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
  public isModifyingPost: string = undefined;

  private subscription: Subscription = new Subscription();

  constructor(
    private authProvider: AuthProvider,
    private blogDataProvider: BlogDataProvider,
    private formBuilder: FormBuilder,
    private adminDataProvider: AdminDataProvider,
    private navigationProvider: NavigationProvider,
    private cacheProvier: CacheProvider
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
    this.isModifyingPost = undefined;
    this.currentComponent = newComponent;
  }

  addOrUpdatePost(formValue, isValid) {
    if (!isValid) {
      return;
    }
    if (this.isModifyingPost) {
      this.modifyPost(formValue, isValid);
    } else {
      this.addPost(formValue, isValid);
    }
  }

  addPost(addPotsFormValue, isValid) {
    this.subscription.add(this.adminDataProvider.addPost(addPotsFormValue).subscribe(response => {
      this.ionViewDidLoad();
    }));
  }

  deletePosts() {
    this.subscription.add(this.adminDataProvider.deletePosts(this.posts).subscribe(response => {
      this.ionViewDidLoad();
    }));
  }

  seePost(post) {
    this.navigationProvider.getNaviController().push(BlogDetailPage, {
      id: post._id
    }, { animate: false });
  }

  modifyPost(modifyPostFormValue, isValid) {
    this.subscription.add(this.adminDataProvider.modifyPost(this.isModifyingPost, modifyPostFormValue).subscribe(response => {
      this.ionViewDidLoad();
    }));
  }

  navToModify(post) {
    this.isModifyingPost = post._id;
    this.currentComponent = 'add';
    this.addPostFormGroup.setValue({
      title: post.title,
      subtitle: post.subtitle,
      text: post.text,
      category: post.category
    });
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
