import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-test',
  templateUrl: 'testpage.html',
  styles: [`
    .spacer { padding: 0.2em; }
    `]
})

export class TestPage {
  
  meetings: any;

  meetings2: any;

  meetings3: any;

  date: Date;
  tomorrow: Date;
  dayaftertomorrow: Date;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, params: NavParams) {

    this.date = new Date()
    this.tomorrow = new Date()
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.dayaftertomorrow = new Date()
    this.dayaftertomorrow.setDate(this.tomorrow.getDate() + 2);

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
    meeting: 'Sprint Meeting', 
    starttime: 9.15,
    endtime: 10.45
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

    this.meetings3 = [
    { 
    meeting: 'Sprint Meeting', 
    starttime: 9.45,
    endtime: 10.15
    },
    { 
    meeting: 'Business Meeting', 
    starttime: 13.45,
    endtime: 15.45
    },
    { 
    meeting: 'Product Presentation', 
    starttime: 17.25,
    endtime: 18.45
    }
    ];


  }

  openModal(){

    let shedulemodal = this.modalCtrl.create(ModalPage);
    shedulemodal.present();
  }

}