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

  constructor(public navCtrl: NavController) {

    this.date = new Date()

    this.meetings = [
    { 
    meeting: 'Sprint Meeting', 
    time: 9.15 
    },
    { 
    meeting: 'Product Presentation', 
    time: 12.15 
    }
    ];


    this.meetings2 = [
    { 
    meeting: 'Business Meeting', 
    time: 14.15 
    },
    { 
    meeting: 'Product Presentation', 
    time: 15.45 
    },
    { 
    meeting: 'Team Meeting', 
    time: 18.15 
    },
    { 
    meeting: 'Job Conference', 
    time: 19.45 
    }
    ];

  }

}
   
    

