import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { AddplacePage } from '../addplace/addplace';
import { PlacesPage } from '../places/places';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToPlacesPage(){
    this.navCtrl.push(PlacesPage)
    console.log('goToPlacesPage')
    }

goToAddplacePage(){
  this.navCtrl.push(AddplacePage)
  console.log('goToAddplacePage')
  }
  goToMapPage(){
    this.navCtrl.push(MapPage)
  console.log('goToMapPage')
  } 
  
    
}
