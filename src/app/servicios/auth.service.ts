import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { resolve } from 'dns';
import { isRejected } from 'q';

import { Router } from "@angular/router";
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFAuth: AngularFireAuth, private router: Router ) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected)=>{

      this.AFAuth.auth.signInWithEmailAndPassword(email,password).then(user=>{
        //console.log('Bienvenido: '+ res)
        resolve(user);
      }).catch(err =>rejected(err))

    });
  }

  logout(){
    this.AFAuth.auth.signOut().then(()=>{
      this.router.navigate(['/login']);
    })
  }


}
