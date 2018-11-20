import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogPage } from './containers/blog/blog';
import { BlogDetailPage } from './containers/blog-detail/blog-detail';
import { CategoryComponent } from './components/category/category';
import { PostListComponent } from './components/post-list/post-list';
import { SharedModule } from '../../shared/shared.module';
import { BlogDataProvider } from './providers/blog-data.provider';
import { SearchComponent } from './components/search/search';
import { RecentPopularComponent } from './components/recent-popular/recent-popular';
import { TagsComponent } from './components/tags/tags';
import { CommentsComponent } from './components/comments/comments';
import { ConfirmationModalComponent } from '../../shared/components/confirmation-modal/confirmation-modal';

@NgModule({
  declarations: [
    BlogPage,
    BlogDetailPage,
    CategoryComponent,
    PostListComponent,
    SearchComponent,
    RecentPopularComponent,
    TagsComponent,
    CommentsComponent
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
  ],
  entryComponents: [
    BlogDetailPage,
    ConfirmationModalComponent
  ]
})
export class BlogModule {}
