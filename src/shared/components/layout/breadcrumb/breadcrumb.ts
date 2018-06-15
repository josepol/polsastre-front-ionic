import { Component, Input } from '@angular/core';
import { App } from 'ionic-angular';
import { HomePage } from '../../../../pages/home/home';
import { BlogPage } from '../../../../pages/blog/containers/blog/blog';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: 'breadcrumb.html'
})
export class BreadcrumbComponent {

  @Input() title: string;
  @Input() post: string;

  constructor(
    private app: App
  ) {
  }

  public navigateHome() {
    this.app.getRootNav().push(HomePage, {}, {animate: false});
  }

  public navigateBlog() {
    this.app.getRootNav().push(BlogPage, {}, {animate: false});
  }

}
