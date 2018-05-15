import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostModel } from '../../model/post.model';
import { BlogDataProvider } from '../../providers/blog-data.provider';
import { Observable } from 'rxjs/Observable';
import { NavigationProvider } from '../../../../shared/providers/navigation.provider';
import { BlogPage } from '../blog/blog';

@IonicPage()
@Component({
  selector: 'page-blog-detail',
  templateUrl: 'blog-detail.html',
})
export class BlogDetailPage {

  public post: PostModel;

  constructor(
    private navParams: NavParams,
    private blogDataProvider: BlogDataProvider,
    private navigationProvider: NavigationProvider
  ) {
  }

  ionViewDidLoad() {
    const id = this.navParams.get('id');
    const postProvider = this.blogDataProvider.getBlogData(id);
    if (postProvider instanceof Observable) {
      postProvider.subscribe(post => {
        this.post = post;
        if (!this.post) {
          this.redirectToBlogPage();
        }
      });
    } else {
      this.post = postProvider;
      if (!this.post) {
        this.redirectToBlogPage();
      }
    }
  }

  redirectToBlogPage() {
    this.navigationProvider.getNaviController().push(BlogPage);
  }

  public setPicture() {
    return `assets/template/img/${this.post.category}.png`;
  }

}
