import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { Geolocation } from "@ionic-native/geolocation/ngx";

import {GoogleMaps} from '@ionic-native/google-maps';

import { IonicModule } from '@ionic/angular';

import { GpsPage } from './gps.page';



const routes: Routes = [
  {
    path: '',
    component: GpsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocation,
    RouterModule.forChild(routes)
  ],
  declarations: [GpsPage]
})
export class GpsPageModule {}
