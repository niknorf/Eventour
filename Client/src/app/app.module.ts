import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { MyApp } from './app.component';
//Imports the pages.
import { SpeakersPage } from '../pages/speakers/speakers';
// import { ChatPage } from '../pages/chat-view/chat-view';
import { MapPage } from '../pages/map/map';
import { ShedulesPage } from '../pages/shedules/shedules';
import { ModalPage } from '../pages/shedules/shedules';
import { HomePage } from '../pages/home/home';
//Login page view.
import { LoginPage } from '../pages/login/login';
//Imports the tabs.
import { TabsPage } from '../pages/tabs/tabs';
//Provides the view for the chat.
import { ChatViewPage } from '../pages/chat/chat-view';
//Firebase service
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthProvider } from '../providers/auth-provider/auth-provider';
import { ChatsProvider } from '../providers/chats-provider/chats-provider';
import { UserProvider } from '../providers/user-provider/user-provider';
import { UtilProvider } from '../providers/utils';

//Firebase configuration.
export const firebaseConfig = {
  apiKey: "AIzaSyD0Tr-1GKbv5uy0pgR3nC_8NwDhepZR2D4",
  authDomain: "eventour-a8581.firebaseapp.com",
  databaseURL: "https://eventour-a8581.firebaseio.com",
  projectId: "eventour-a8581",
  storageBucket: "eventour-a8581.appspot.com",
  messagingSenderId: "362656644989"
};
//For the login.
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    SpeakersPage,
    MapPage,
    ShedulesPage,
    LoginPage,
    // ChatPage,
    ChatViewPage,
    ModalPage,
    HomePage,
    TabsPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SpeakersPage,
    MapPage,
    ShedulesPage,
    LoginPage,
    // ChatPage,
    ChatViewPage,
    ModalPage,
    HomePage,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider, ChatsProvider, UserProvider, UtilProvider, IonicStorageModule]
})
export class AppModule { }
