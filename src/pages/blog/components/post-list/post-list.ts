import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BlogDataProvider } from '../../providers/blog-data.provider';
import { PostModel } from '../../model/post.model';
import { NavigationProvider } from '../../../../shared/providers/navigation.provider';
import { BlogDetailPage } from '../../containers/blog-detail/blog-detail';
import * as _ from 'lodash';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.html',
})
export class PostListComponent implements OnInit, OnChanges {

  @Input() fromHome: boolean;
  @Input() categorySelectedFilter: string;

  public posts: PostModel[];
  public postsChunked: Array<any>;
  public postsDisplayed: PostModel[];
  public postsIndex: number = 0;
  public postsArrayLengh: number = 0;

  constructor(
    private blogDataProvider: BlogDataProvider,
    private navigationProvider: NavigationProvider
  ) {
  }

  ngOnInit(): void {
    this.blogDataProvider.getPosts().subscribe((posts: PostModel[]) => {
      this.loadPosts(posts);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.categorySelectedFilter && changes.categorySelectedFilter.currentValue === '') {
      this.ngOnInit();
      return;
    }
    if (changes.categorySelectedFilter && changes.categorySelectedFilter.previousValue !== changes.categorySelectedFilter.currentValue) {
      this.blogDataProvider.getPosts()
      .map(posts => posts.filter(post => post.category === this.categorySelectedFilter))
      .subscribe((posts: PostModel[]) => {
        this.loadPosts(posts);
      });
    }
  }

  openPost(post) {
    this.navigationProvider.getNaviController().push(BlogDetailPage, {
      id: post._id
    });
  }

  prevPage() {
    if (this.postsIndex >= 1) {
      this.postsIndex--;
      this.loadPage();
    }
  }

  nextPage() {
    if (this.postsIndex < this.postsArrayLengh - 1) {
      this.postsIndex++;
      this.loadPage();
    }
  }

  private loadPage() {
    this.postsDisplayed = this.postsChunked[this.postsIndex];
  }

  private loadPosts(posts) {
    this.posts = posts;
    this.postsChunked = _.chunk(posts, 5);
    this.postsArrayLengh = this.postsChunked.length;
    this.postsDisplayed = this.postsChunked[this.postsIndex];
  }

}
