import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: 'confirmation-modal.html'
})
export class ConfirmationModalComponent {

  constructor(
    private viewController: ViewController
  ) {
  }

  public cancel() {
    this.viewController.dismiss({status: 'KO'});
  }

  public accept() {
    this.viewController.dismiss({status: 'OK'});
  }

}
