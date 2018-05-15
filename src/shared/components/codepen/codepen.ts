import { Component, Input } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'app-codepen',
  templateUrl: 'codepen.html'
})
export class CodepenComponent {

  @Input() codepenId: string;

  constructor() {
  }

}
