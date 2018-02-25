import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { PortfolioPage } from '../../../../pages/portfolio/portfolio';
import { HomePage } from '../../../../pages/home/home';
import { ContactPage } from '../../../../pages/contact/contact';
import { BlogPage } from '../../../../pages/blog/containers/blog/blog';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.html'
})
export class NavComponent {

  constructor(
    private app: App
  ) {
  }

  public navigateHome() {
    this.app.getRootNav().push(HomePage);
  }

  public navigatePortfolio() {
    this.app.getRootNav().push(PortfolioPage);
  }

  public navigateContact() {
    this.app.getRootNav().push(ContactPage);
  }

  public navigateBlog() {
    this.app.getRootNav().push(BlogPage);
  }
  
}
