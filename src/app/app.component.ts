import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { NavigationProvider } from '../shared/providers/navigation.provider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

  @ViewChild('nav') navController: NavController;

  rootPage: any = HomePage;

  constructor(
    private navigationProvider: NavigationProvider
  ) {
  }

  ngOnInit(): void {
    this.navigationProvider.setNavController(this.navController);
  }
}

