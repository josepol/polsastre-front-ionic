import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PostModel } from '../../../blog/model/post.model';
import { Subscription } from 'rxjs/Subscription';
import AuthProvider from '../../../../shared/providers/auth.provider';
import { BlogDataProvider } from '../../../blog/providers/blog-data.provider';
import { CategoryModel } from '../../../blog/model/category.model';
import { AdminDataProvider } from '../../providers/admin-data.provider';

@IonicPage()
@Component({
  selector: 'app-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage implements OnInit, OnDestroy {

  public currentComponent: string;
  public posts: PostModel[];
  public deleteButtonDisabled: boolean = true;
  public categories: Array<CategoryModel>;

  private subscription: Subscription = new Subscription();

  constructor(
    private authProvider: AuthProvider,
    private blogDataProvider: BlogDataProvider,
    private adminDataProvider: AdminDataProvider
  ) {
  }

  ngOnInit(): void {
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

  onDeletePosts(posts) {
    this.posts = posts;
  }

  onDeletePostEnabled(deleteButtonDisabled) {
    this.deleteButtonDisabled = !deleteButtonDisabled;
  }

  deletePosts() {
    this.subscription.add(this.adminDataProvider.deletePosts(this.posts).subscribe(response => {
      this.ionViewDidLoad();
    }));
  }

  onUpdatePosts($event) {
    this.adminDataProvider.setCurrentModifiedPost(undefined);
    this.ionViewDidLoad();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
