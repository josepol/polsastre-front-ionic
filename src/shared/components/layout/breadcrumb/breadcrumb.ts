import { Component, Input } from '@angular/core';
import { App } from 'ionic-angular';
import { HomePage } from '../../../../pages/home/home';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: 'breadcrumb.html'
})
export class BreadcrumbComponent {

  @Input() title: string;

  constructor(
    private app: App
  ) {
  }

  public navigateHome() {
    this.app.getRootNav().push(HomePage, {}, {animate: false});
  }

}
