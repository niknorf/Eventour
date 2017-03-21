import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from './modal-page';

@Component({
  selector: 'page-test',
  templateUrl: 'testpage.html',
  styles: [`
    .spacer { padding: 0.2em; }
    `]
})

export class TestPage {
  
  meetings: any;
  times: any;

  meetings2: any;
  times2: any;

  date: Date;
  newdate
  mydate

  constructor(public navCtrl: NavController) {

    this.date = new Date()

    this.meetings = [
    { 
    meeting: 'Sprint Meeting', 
    starttime: 9.15,
    endtime: 10.45
    },
    { 
    meeting: 'Product Presentation', 
    starttime: 12.15,
    endtime: 16.35
    }
    ];


    this.meetings2 = [
    { 
    meeting: 'Business Meeting', 
    starttime: 14.15,
    endtime: 15.35
    },
    { 
    meeting: 'Product Presentation', 
    starttime: 15.45,
    endtime: 16.45
    },
    { 
    meeting: 'Team Meeting', 
    starttime: 18.15,
    endtime: 18.45
    },
    { 
    meeting: 'Job Conference', 
    starttime: 19.45,
    endtime: 20.45
    }
    ];

  }

}

export class MyPage {
  constructor(public modalCtrl: ModalController) {
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
}

