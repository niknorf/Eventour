import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SpeakersPage } from '../pages/speakers/speakers';
import { MapPage } from '../pages/map/map';
import { ShedulesPage } from '../pages/shedules/shedules';
import { ModalPage } from '../pages/shedules/shedules';
import { HomePage } from '../pages/home/home';
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
