import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.html',
})
export class PostListComponent {

  @Input() fromHome: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
