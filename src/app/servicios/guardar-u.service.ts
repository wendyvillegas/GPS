import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GuardarUService {

  constructor(public afDB: AngularFireDatabase) { }
  
  public saveLocation(localizacion){
    let key = this.afDB.list('/lonlat/').push(localizacion).key;
    //Guardamos la fruta y obetenemos el id que firebase pone al nudulo de nuestra fruta.
    //Al guardarse sin id nuestra fruta, ahora la actualizamos con el id que firebase nos devuelve.
    localizacion.id = key;
    this.afDB.database.ref('lonlat/'+localizacion.id).set(localizacion);
   
}


}
