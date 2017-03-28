import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';

declare var cordova: any;

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersPage {

	static get parameters() {
        return [[Platform]];
    }

  constructor(public navCtrl: NavController, public platform: Platform) {
  		this.platform = platform;
  }

  launch(url) {
        this.platform.ready().then(() => {
    if (cordova && cordova.InAppBrowser) {
      window.open = cordova.InAppBrowser.open;
    }
  });
    }

}
