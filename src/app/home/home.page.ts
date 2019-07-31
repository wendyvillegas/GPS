import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";

import { Geolocation, Geoposition } from "@ionic-native/geolocation/ngx";
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public authservice: AuthService, private geolocation: Geolocation) {}

  lat: string;
  lng: string;

  logout(){
this.authservice.logout();
  }

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

    const mapElem: HTMLElement= document.getElementById('map');

    const map= new GoogleMap(mapElem, {
      center: myLatLong,
      zoom:12
    });

  }
  
 
}
