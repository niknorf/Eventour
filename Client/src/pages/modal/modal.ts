import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component ({
    templateUrl: 'modal.html',
})

export class ModalPage {

  meetings: any;

  date: Date;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController){

        this.date = new Date()

        this.meetings = [
        { 
        meeting: 'Sprint Meeting',
        ago: 1,
        starttime: 9.15,
        endtime: 10.45
        },
        { 
        meeting: 'Product Presentation',
        ago: 5,
        starttime: 12.15,
        endtime: 16.35
        }
        ];

    }

    closeModal(){

        this.viewCtrl.dismiss();

    }

}
