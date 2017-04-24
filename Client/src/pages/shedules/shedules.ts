import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-events',
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
// These are handling the date to show correct dates.
    this.date = new Date()
// Gets the current date and increments it by 1.
    this.tomorrow = new Date()
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
// Gets the tomorrows date and increments it by 1.
    this.dayaftertomorrow = new Date()
    this.dayaftertomorrow.setDate(this.tomorrow.getDate() + 1);
// Date function ends.
  }
// Handles opening the modal.
  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalPage, characterNum);
    modal.present();
  }
// Modal function ends.
}
// Template of the modal view that will be seen when modal is opened.
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
    <ion-label>Date: <p>{{character.date | date:'mediumDate'}}</p></ion-label>
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
// Modal template view ends.
export class ModalPage {
  
  character;
// Property of date for modal view.
  date = new Date();
  tomorrow = new Date();
  dayaftertomorrow = new Date();
// Ends here.
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {

    let characters = [
      {
        meeting: 'Sprint Meeting',
        date: this.date.setDate(this.date.getDate()),
        ago: 1,
        image: '../img/businessevent.jpg',
        description: 'Having meeting about what we have done so far and what we are going to do next for the project.',
        items: [
          { place: 'Class Room', placenumber: 2218 }
        ]
      },
      {
        meeting: 'Digital Marketing',
        date: this.date.setDate(this.date.getDate()),
        ago: 5,
        image: '../img/businessevent.jpg',
        description: 'Jordan Belfort is talking how digital marketing is working nowdays and sharing useful information how to utilize doing marketing in digital era.',
        items: [
          { place: 'Auditorium 1', placenumber: 1040 }
        ]
      },

      {
        meeting: 'Sprint Meeting',
        date: this.date.setDate(this.tomorrow.getDate() + 1),
        ago: 1,
        image: '../img/businessevent.jpg',
        description: 'Having meeting about what we have done so far and what we are going to do next for the project.',
        items: [
          { place: 'Class Room', placenumber: 3332 }
        ]
      },
      {
        meeting: 'Product Presentation',
        date: this.date.setDate(this.tomorrow.getDate() + 1),
        ago: 3,
        image: '../img/businessevent.jpg',
        description: 'Giving information about the product and show casing a small demo of the project.',
        items: [
          { place: 'Auditorium 2', placenumber: 1002 }
        ]
      },
      {
        meeting: 'Team Meeting',
        date: this.date.setDate(this.tomorrow.getDate() + 1),
        ago: 4,
        image: '../img/businessevent.jpg',
        description: 'Small meeting with project team where we discuss about the current state of the project.',
        items: [
          { place: 'Class Room', placenumber: 2438 }
        ]
      },
      {
        meeting: 'Job Conference',
        date: this.date.setDate(this.tomorrow.getDate() + 1),
        ago: 6,
        image: '../img/businessevent.jpg',
        description: 'Small meeting with project team where we discuss about the current state of the project.',
        items: [
          { place: 'Auditorium 1', placenumber: 1040 }
        ]
      },

      {
        meeting: 'Sprint Meeting',
        date: this.dayaftertomorrow.setDate(this.tomorrow.getDate() + 2),
        ago: 1,
        image: '../img/businessevent.jpg',
        description: 'Various companies are gathered to present their work and offering some job opportunities.',
        items: [
          { place: 'Class Room', placenumber: 2334 }
        ]
      },
      {
        meeting: 'Business Meeting',
        date: this.dayaftertomorrow.setDate(this.tomorrow.getDate() + 2),
        ago: 2,
        image: '../img/businessevent.jpg',
        description: 'Meeting where we are discussing about buying a product from client.',
        items: [
          { place: 'Class Room', placenumber: 2435 }
        ]
      },
      {
        meeting: 'Product Presentation',
        date: this.dayaftertomorrow.setDate(this.tomorrow.getDate() + 2),
        ago: 5,
        image: '../img/businessevent.jpg',
        description: 'Various companies are gathered to present their work and offering some job opportunities.',
        items: [
          { place: 'Auditorium 3', placenumber: 1043 }
        ]
      }
      ];
  
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}