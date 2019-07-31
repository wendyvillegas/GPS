import { Component, OnInit } from '@angular/core';

import { Geolocation, Geoposition } from "@ionic-native/geolocation/ngx";
import { GoogleMap, GoogleMapsEvent, CameraPosition, GoogleMaps } from '@ionic-native/google-maps';
import { AngularFireDatabase } from 'angularfire2/database';

//declare var google;



@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap(){
    const rta= await this.geolocation.getCurrentPosition();
    const myLatLong={
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(myLatLong);
   // const mapElem: HTMLElement= document.getElementById('map');

    /*
    //crear mapa
    const map= new GoogleMap(mapElem, {
      center: myLatLong,
      zoom:12
    });

   
    const map: GoogleMap = GoogleMaps.create('map', myLatLong);

    map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready!');

  });*/

    
  }

}
