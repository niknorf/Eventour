import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component ({
    templateUrl: 'modal.html',
})

export class ModalPage {

  content;

  meetings: any;

  date: Date;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public params: NavParams){

        this.date = new Date()

        let meetings = [
        { 
        meeting: 'Sprint Meeting',
        ago: 1,
        starttime: 9.15,
        endtime: 10.45,
        place: 'Class Room',
        placenumber: 2218,
        image: '../img/businessevent.jpg',
        description: 'Having meeting about what we have done so far and what we are going to do next for the project.'
        },
        { 
        meeting: 'Product Presentation',
        ago: 5,
        starttime: 12.15,
        endtime: 16.35,
        place: 'Auditorium 1',
        placenumber: 1040,
        image: '../img/businessevent.jpg',
        description: 'Giving information about the product and show casing a small demo of the project.'
        }
        ];

        this.content = meetings[this.params.get('modalNum')];

    }

    closeModal(){

        this.viewCtrl.dismiss();

    }

}
