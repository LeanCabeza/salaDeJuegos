import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  public actualUserMail: string;

  constructor(public auth: AngularFireAuth) { 
  }

  async register(email: string, password:string){
    this.actualUserMail = email;
    try {
        return await this.auth.createUserWithEmailAndPassword(email,password);
    } catch (error) {
      this.actualUserMail= "";
      console.log("Error al Registrar",error);
      throw error;
    }
  }

  async login(email:string, password:string){
      this.actualUserMail = email;
      try {
          return await this.auth.signInWithEmailAndPassword(email,password);
      } catch (error) {
        this.actualUserMail= "";
        throw error;
      }
  }

  logout(){
    this.actualUserMail= "";
    this.auth.signOut();
  }

  getUserLogged(){
    return this.auth.authState;
  }

}
