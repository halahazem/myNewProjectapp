import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { AddplacePage } from '../addplace/addplace';

import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = MapPage;
  tab4Root = SearchPage;
  tab5Root = AddplacePage;
  constructor() {

  }
}
