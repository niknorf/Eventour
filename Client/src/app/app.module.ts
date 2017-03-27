import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ShedulesPage } from '../pages/shedules/shedules';
import { ModalPage } from '../pages/modal/modal';
import { ModalPage2 } from '../pages/modal/modal2';
import { ModalPage3 } from '../pages/modal/modal3';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ShedulesPage,
    ModalPage,
    ModalPage2,
    ModalPage3,
    HomePage,
    TabsPage,
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ShedulesPage,
    ModalPage,
    ModalPage2,
    ModalPage3,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
