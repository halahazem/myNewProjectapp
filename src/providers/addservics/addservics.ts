//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{AngularFireDatabase} from 'angularfire2/database';
import{Locations} from '../../model/location';




@Injectable()
export class AddservicsProvider {
private gpsListRef=this.db.list<Locations>('places')
  constructor(public  db:AngularFireDatabase) {
    console.log('Hello AddservicsProvider Provider');
  }

  getLocationList(){
    return this.gpsListRef;
  }
  addLocation(locations:Locations){
    return this.gpsListRef.push(locations)
  }
  updateLocation(locations:Locations){
    return this.gpsListRef.update(locations.key,locations)
  }

  removeLocation(locations:Locations){
    return this.gpsListRef.remove(locations.key)
  }

}