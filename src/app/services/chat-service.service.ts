import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mensaje } from '../models/mensaje.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  
  private itemCollections: AngularFirestoreCollection<Mensaje> | null = null;
  public chats: Mensaje[] = [];
  public usuario: any = {};


  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe( user => {
        console.log("Estado del usuario: ",user);
        if(!user){
          return;
        }
        this.usuario.nombre = user.email;
        this.usuario.uid = user.uid;
      })
   }
  
  cargarMensajes(){
    this.itemCollections = this.afs.collection<Mensaje>("chats",ref=> ref.orderBy('fecha',"desc").limit(20));
  
    return this.itemCollections.valueChanges()
                               .pipe(
                                 map( (mensajes: Mensaje[]) => {
                                      this.chats = [];
                                      for( let mensaje of mensajes){
                                        this.chats.unshift(mensaje);
                                      }
                                }))              
    }
    
    agregarMensaje(texto:string){
      let fecha= new Date();
      let mensaje: Mensaje = {
        nombre: this.usuario.nombre,
        mensaje: texto,
        fecha: fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString(),
        uid: this.usuario.uid
      }

      return this.itemCollections?.add(mensaje);
    }

}
