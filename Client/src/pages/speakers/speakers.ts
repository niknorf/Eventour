import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersPage {

  constructor(
    public navCtrl: NavController, 
    public platform: Platform) {
  		

  }


}