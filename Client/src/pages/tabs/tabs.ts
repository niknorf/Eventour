import { Component } from '@angular/core';
// Importing the tab pages.
import { HomePage } from '../home/home';
import { SpeakersPage } from '../speakers/speakers';
import { MapPage } from '../map/map';
import { ShedulesPage } from '../schedules/schedules';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SpeakersPage;
  tab3Root: any = MapPage;
  tab4Root: any = ShedulesPage;

  constructor() {

  }
}
