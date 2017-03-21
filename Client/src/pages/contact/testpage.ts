import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

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
    starttime: 9.15 
    },
    { 
    meeting: 'Product Presentation', 
    starttime: 12.15 
    }
    ];


    this.meetings2 = [
    { 
    meeting: 'Business Meeting', 
    starttime: 14.15 
    },
    { 
    meeting: 'Product Presentation', 
    starttime: 15.45 
    },
    { 
    meeting: 'Team Meeting', 
    starttime: 18.15 
    },
    { 
    meeting: 'Job Conference', 
    starttime: 19.45 
    }
    ];

  }

}
   
    

