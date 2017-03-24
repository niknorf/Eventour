import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component ({
    templateUrl: 'modal.html',
})

export class ModalPage {

    constructor(public navCtrl: NavController, public viewCtrl: ViewController){

    }

    closeModal(){

        this.viewCtrl.dismiss();

    }

}
