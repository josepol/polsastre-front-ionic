import { Component } from '@angular/core';
import { NavigationProvider } from '../../../../shared/providers/navigation.provider';
import { BlogPage } from '../../../blog/containers/blog/blog';

@Component({
  selector: 'app-carrousel',
  templateUrl: 'carrousel.html'
})
export class CarrouselComponent {

  constructor(
    private navigationProvider: NavigationProvider
  ) {
  }

  navigateBlog() {
    this.navigationProvider.getNaviController().push(BlogPage, {}, {animate: false});
  }

}
