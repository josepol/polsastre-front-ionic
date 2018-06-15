import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { BlogDataProvider } from '../../../blog/providers/blog-data.provider';
import { PostModel } from '../../../blog/model/post.model';
import AuthProvider from '../../../../shared/providers/auth.provider';
import { NavigationProvider } from '../../../../shared/providers/navigation.provider';
import { BlogDetailPage } from '../../../blog/containers/blog-detail/blog-detail';
import { AdminDataProvider } from '../../providers/admin-data.provider';

@IonicPage()
@Component({
  selector: 'app-posts',
  templateUrl: 'posts.html',
})
export class PostsPage implements OnInit, OnDestroy {

  @Output() deletePost: EventEmitter<Array<PostModel>> = new EventEmitter();
  @Output() deletePostEnabled: EventEmitter<boolean> = new EventEmitter();
  @Output() navModifyPost: EventEmitter<string> = new EventEmitter();

  @Input() posts: Array<PostModel>;
  
  public isModifyingPost: string = undefined;

  private subscription: Subscription = new Subscription();

  constructor(
    private blogDataProvider: BlogDataProvider,
    private authProvider: AuthProvider,
    private navigationProvider: NavigationProvider,
    private adminDataProvider: AdminDataProvider
  ) {
  }

  ngOnInit(): void {
  }

  seePost(post) {
    this.navigationProvider.getNaviController().push(BlogDetailPage, {
      id: post._id
    }, { animate: false });
  }

  navToModify(post) {
    this.isModifyingPost = post._id;
    this.adminDataProvider.setCurrentModifiedPost({
      _id: post._id,
      title: post.title,
      subtitle: post.subtitle,
      text: post.text,
      category: post.category
    });
    this.navModifyPost.emit('add');
  }

  public someCheckboxChanged(e, postIndex) {
    let hasAnyChecked = false;
    this.posts[postIndex].checked = e.target.checked;
    this.posts.forEach(post => {
      if (post.checked) {
        return hasAnyChecked = true;
      }
    });
    this.deletePost.emit(this.posts);
    this.deletePostEnabled.emit(hasAnyChecked);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
