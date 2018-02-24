import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

  @ViewChild('nav') navController: NavController;

  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
    });
  }

  ngOnInit(): void {
  }
}

