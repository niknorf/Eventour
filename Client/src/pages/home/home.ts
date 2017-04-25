import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeakersPage } from '../speakers/speakers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController) {

  }
  //Function to go next view.
  showSpeakersPage() {
    this.navCtrl.push(SpeakersPage);
  }

}
