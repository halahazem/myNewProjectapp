import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';





import { SearchPage } from '../pages/search/search';
import { MapPage } from '../pages/map/map';
import { AddplacePage } from '../pages/addplace/addplace';
import { PlacesPage } from '../pages/places/places';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
import { AddservicsProvider } from '../providers/addservics/addservics';
import{AngularFireAuth} from 'angularfire2/auth';


export const fireconfig ={
//var config = {
  apiKey: "AIzaSyADq8LvMg5gVD829ff2bj4zu8iYE225ur8",
  authDomain: "newproject-506c8.firebaseapp.com",
  databaseURL: "https://newproject-506c8.firebaseio.com",
  projectId: "newproject-506c8",
  storageBucket: "",
  messagingSenderId: "373453783482"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    MapPage,
    AddplacePage,
    PlacesPage,
    AngularFireAuth
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireconfig),
    AngularFireDatabase,
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    MapPage,
    AddplacePage,
    PlacesPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   AddservicsProvider,
    AngularFireDatabase,
    AngularFireAuth,
    
  ]
})
export class MyCommonModule {}
