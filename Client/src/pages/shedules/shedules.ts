import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-test',
  templateUrl: 'shedules.html',
  styles: [`
    .spacer { padding: 0.2em; }
    `]
})

export class ShedulesPage {

  date: Date;
  tomorrow: Date;
  dayaftertomorrow: Date;

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController) { 

    this.date = new Date()
    this.tomorrow = new Date()
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.dayaftertomorrow = new Date()
    this.dayaftertomorrow.setDate(this.tomorrow.getDate() + 2);

  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalPage, characterNum);
    modal.present();
  }

  openModal2(characterNum) {

    let modal = this.modalCtrl.create(ModalPage, characterNum);
    modal.present();
  }

  openModal3(characterNum) {

    let modal = this.modalCtrl.create(ModalPage, characterNum);
    modal.present();
  }

}


@Component({
  template: `
<ion-header>
  <ion-navbar color="primary">
    <ion-title>
      Details Of Shedules
    </ion-title>
    <ion-buttons start (click)="dismiss()" item-right>
        <button ion-button icon-only><ion-icon name="close"></ion-icon></button>
    </ion-buttons>
  </ion-navbar>
</ion-header>
<ion-content>
<ion-card>
    <img src="{{character.image}}" alt="business event">
  <ion-item>
    <h2>{{character.meeting}}</h2>
  </ion-item>
    <ion-item>
    <ion-label>Date: <p>{{date | date:'mediumDate'}}</p></ion-label>
  </ion-item>
    <ion-card-content>
    <ion-label>Details of The Event:</ion-label>
    <p>{{character.description}}</p>
  </ion-card-content>
  <ion-item *ngFor="let item of character['items']">
  <ion-label>Location:
    <p>Room: {{item.place}}</p>
    <p>Room Number: {{item.placenumber}}</p>
  </ion-label>
    <ion-icon name="ios-pin-outline" item-right></ion-icon>
  </ion-item>
  <ion-row>
    <ion-col center text-center>
    <ion-note>
    {{character.ago}}h ago
  </ion-note>
  </ion-col>
  </ion-row>
</ion-card>
</ion-content>
`
})

@Component({
  template: `
<ion-header>
  <ion-navbar color="primary">
    <ion-title>
      Details Of Shedules
    </ion-title>
    <ion-buttons start (click)="dismiss2()" item-right>
        <button ion-button icon-only><ion-icon name="close"></ion-icon></button>
    </ion-buttons>
  </ion-navbar>
</ion-header>
<ion-content>
<ion-card>
    <img src="{{character.image}}" alt="business event">
  <ion-item>
    <h2>{{character.meeting}}</h2>
  </ion-item>
    <ion-item>
    <ion-label>Date: <p>{{tomorrow | date:'mediumDate'}}</p></ion-label>
  </ion-item>
    <ion-card-content>
    <ion-label>Details of The Event:</ion-label>
    <p>{{character.description}}</p>
  </ion-card-content>
  <ion-item *ngFor="let item of character['items']">
  <ion-label>Location:
    <p>Room: {{item.place}}</p>
    <p>Room Number: {{item.placenumber}}</p>
  </ion-label>
    <ion-icon name="ios-pin-outline" item-right></ion-icon>
  </ion-item>
  <ion-row>
    <ion-col center text-center>
    <ion-note>
    {{character.ago}}h ago
  </ion-note>
  </ion-col>
  </ion-row>
</ion-card>
</ion-content>
`
})

@Component({
  template: `
<ion-header>
  <ion-navbar color="primary">
    <ion-title>
      Details Of Shedules
    </ion-title>
    <ion-buttons start (click)="dismiss3()" item-right>
        <button ion-button icon-only><ion-icon name="close"></ion-icon></button>
    </ion-buttons>
  </ion-navbar>
</ion-header>
<ion-content>
<ion-card>
    <img src="{{character.image}}" alt="business event">
  <ion-item>
    <h2>{{character.meeting}}</h2>
  </ion-item>
    <ion-item>
    <ion-label>Date: <p>{{dayaftertomorrow | date:'mediumDate'}}</p></ion-label>
  </ion-item>
    <ion-card-content>
    <ion-label>Details of The Event:</ion-label>
    <p>{{character.description}}</p>
  </ion-card-content>
  <ion-item *ngFor="let item of character['items']">
  <ion-label>Location:
    <p>Room: {{item.place}}</p>
    <p>Room Number: {{item.placenumber}}</p>
  </ion-label>
    <ion-icon name="ios-pin-outline" item-right></ion-icon>
  </ion-item>
  <ion-row>
    <ion-col center text-center>
    <ion-note>
    {{character.ago}}h ago
  </ion-note>
  </ion-col>
  </ion-row>
</ion-card>
</ion-content>
`
})



export class ModalPage {
  
  character;
  date: Date;
  tomorrow: Date;
  dayaftertomorrow: Date;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {

    this.date = new Date()
    this.tomorrow = new Date()
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.dayaftertomorrow = new Date()
    this.dayaftertomorrow.setDate(this.tomorrow.getDate() + 2);

    let characters = [
      {
        meeting: 'Sprint Meeting',
        ago: 1,
        starttime: 9.15,
        endtime: 10.45,
        image: '../img/businessevent.jpg',
        description: 'Having meeting about what we have done so far and what we are going to do next for the project.',
        items: [
          { place: 'Class Room', placenumber: 2218 }
        ]
      },
      {
        meeting: 'Product Presentation',
        ago: 5,
        starttime: 12.15,
        endtime: 16.35,
        image: '../img/businessevent.jpg',
        description: 'Giving information about the product and show casing a small demo of the project.',
        items: [
          { place: 'Auditorium 1', placenumber: 1040 }
        ]
      }
      ];

    let characters2 = [
      {
        meeting: 'Sprint Meeting',
        ago: 1,
        starttime: 9.15,
        endtime: 10.45,
        image: '../img/businessevent.jpg',
        description: 'Having meeting about what we have done so far and what we are going to do next for the project.',
        items: [
          { place: 'Class Room', placenumber: 3332 }
        ]
      },
      {
        meeting: 'Product Presentation',
        ago: 3,
        starttime: 12.15,
        endtime: 16.35,
        image: '../img/businessevent.jpg',
        description: 'Giving information about the product and show casing a small demo of the project.',
        items: [
          { place: 'Auditorium 2', placenumber: 1002 }
        ]
      },
      {
        meeting: 'Team Meeting',
        ago: 4,
        starttime: 18.15,
        endtime: 18.45,
        image: '../img/businessevent.jpg',
        description: 'Small meeting with project team where we discuss about the current state of the project.',
        items: [
          { place: 'Class Room', placenumber: 2438 }
        ]
      },
      {
       meeting: 'Job Conference',
        ago: 6,
        starttime: 19.45,
        endtime: 20.45,
        image: '../img/businessevent.jpg',
        description: 'Small meeting with project team where we discuss about the current state of the project.',
        items: [
          { place: 'Auditorium 1', placenumber: 1040 }
        ]
      }
    ];

  let characters3 = [
      {
        meeting: 'Sprint Meeting',
        ago: 1,
        starttime: 9.15,
        endtime: 10.45,
        image: '../img/businessevent.jpg',
        description: 'Various companies are gathered to present their work and offering some job opportunities.',
        items: [
          { place: 'Class Room', placenumber: 2334 }
        ]
      },
      {
        meeting: 'Business Meeting',
        ago: 2,
        starttime: 13.45,
        endtime: 15.45,
        image: '../img/businessevent.jpg',
        description: 'Meeting where we are discussing about buying a product from client.',
        items: [
          { place: 'Class Room', placenumber: 2435 }
        ]
      },
      {
        meeting: 'Product Presentation',
        ago: 5,
        starttime: 17.15,
        endtime: 20.45,
        image: '../img/businessevent.jpg',
        description: 'Various companies are gathered to present their work and offering some job opportunities.',
        items: [
          { place: 'Auditorium 3', placenumber: 1043 }
        ]
      }
      ];
  
    this.character = characters[this.params.get('charNum')];
    this.character = characters2[this.params.get('charNum')];
    this.character = characters3[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  dismiss2() {
    this.viewCtrl.dismiss();
  }

  dismiss3() {
    this.viewCtrl.dismiss();
  }
}