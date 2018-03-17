import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogPage } from './containers/blog/blog';
import { BlogDetailPage } from './containers/blog-detail/blog-detail';
import { CategoryComponent } from './components/category/category';
import { PostListComponent } from './components/post-list/post-list';
import { SharedModule } from '../../shared/shared.module';
import { BlogDataProvider } from './providers/blog-data.provider';

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
  providers: [
    BlogDataProvider
  ],
  exports: [
    PostListComponent
  ]
})
export class BlogModule {}
