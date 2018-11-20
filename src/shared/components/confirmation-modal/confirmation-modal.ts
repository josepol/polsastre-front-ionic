import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: 'confirmation-modal.html'
})
export class ConfirmationModalComponent implements OnInit {

  public text: string;

  constructor(
    private viewController: ViewController,
    private navParams: NavParams
  ) {
  }

  ngOnInit(): void {
    this.text = this.navParams.get('text') ? this.navParams.get('text') : '¿Are you sure you want to leave?';
  }

  public cancel() {
    this.viewController.dismiss({status: 'KO'});
  }

  public accept() {
    this.viewController.dismiss({status: 'OK'});
  }

}
