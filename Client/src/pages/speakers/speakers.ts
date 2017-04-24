import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';
import { UserProvider } from '../../providers/user-provider/user-provider';
import { ChatViewPage } from '../chat/chat-view';

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersPage {

  users:FirebaseListObservable<any[]>;
  uid:string;

  constructor(
    public navCtrl: NavController, 
    public platform: Platform,
    public userProvider: UserProvider) {
  		
  }

ngOnInit() {
        this.userProvider.getUid()
        .then(uid => {
            this.uid = uid;
            this.users = this.userProvider.getAllUsers();
        });
    };
    
    openChat(key) {
        let param = {uid: this.uid, interlocutor: key};
        this.navCtrl.push(ChatViewPage,param);
    }

}