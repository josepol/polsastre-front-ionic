import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/components/shared.module';
import { BlogPage } from './containers/blog/blog';
import { BlogDetailPage } from './containers/blog-detail/blog-detail';
import { CategoryComponent } from './components/category/category';
import { PostListComponent } from './components/post-list/post-list';

@NgModule({
  declarations: [
    BlogPage,
    BlogDetailPage,
    CategoryComponent,
    PostListComponent
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(BlogPage),
  ],
  exports: [
    PostListComponent
  ]
})
export class BlogModule {}
