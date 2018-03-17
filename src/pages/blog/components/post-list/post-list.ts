import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BlogDataProvider } from '../../providers/blog-data.provider';
import { PostModel } from '../../model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.html',
})
export class PostListComponent implements OnInit {

  @Input() fromHome: boolean;

  public posts: PostModel[];

  constructor(
    private blogDataProvider: BlogDataProvider
  ) {
  }

  ngOnInit(): void {
    this.blogDataProvider.getPosts().subscribe((posts: PostModel[]) => {
      this.posts = posts;
    });
  }

}
