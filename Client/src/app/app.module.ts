import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//Imports the pages.
import { SpeakersPage } from '../pages/speakers/speakers';
import { MapPage } from '../pages/map/map';
import { ShedulesPage } from '../pages/schedules/schedules';
import { ModalPage } from '../pages/schedules/schedules';
import { HomePage } from '../pages/home/home';
//Imports the tabs.
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    SpeakersPage,
    MapPage,
    ShedulesPage,
    ModalPage,
    HomePage,
    TabsPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SpeakersPage,
    MapPage,
    ShedulesPage,
    ModalPage,
    HomePage,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})

export class AppModule { }