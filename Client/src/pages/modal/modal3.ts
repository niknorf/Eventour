import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component ({
    templateUrl: 'modal3.html',
})

export class ModalPage3 {

  meetings3: any;

  date: Date;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController){

        this.date = new Date()

        this.meetings3 = [
        { 
        meeting: 'Sprint Meeting',
        ago: 1,
        starttime: 9.15,
        endtime: 10.45,
        image: '../img/businessevent.jpg',
        description: 'Having meeting about what we have done so far and what we are going to do next for the project.'
        },
        { 
        meeting: 'Business Meeting',
        ago: '2',
        starttime: 13.45,
        endtime: 15.45,
        image: '../img/businessevent.jpg',
        description: 'Meeting where we are discussing about buying a product from client.'
        },
        { 
        meeting: 'Product Presentation',
        ago: 5,
        starttime: 12.15,
        endtime: 16.35,
        image: '../img/businessevent.jpg',
        description: 'Various companies are gathered to present their work and offering some job opportunities.'
        }
        ];

    }

    closeModal3(){

        this.viewCtrl.dismiss();

    }

}
