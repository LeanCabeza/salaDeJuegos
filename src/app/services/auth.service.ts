import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public auth: AngularFireAuth) { 
  }

  async register(email: string, password:string){
    try {
        return await this.auth.createUserWithEmailAndPassword(email,password);
    } catch (error) {
      console.log("Error al Registrar",error);
      throw error;
    }
  }

  async login(email:string, password:string){
      try {
          return await this.auth.signInWithEmailAndPassword(email,password);
      } catch (error) {
        throw error;
      }
  }

  logout(){
    this.auth.signOut();
  }

  getUserLogged(){
    return this.auth.authState;
  }

}
