import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Puntaje } from '../models/puntaje.interface';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PuntajeServiceService {
  private puntajeCollection: AngularFirestoreCollection<Puntaje> | null = null;
  public puntajes: Puntaje[] ;

  constructor(private afs: AngularFirestore) {
    this.puntajeCollection = this.afs.collection<Puntaje>('puntajes');
  }

  guardarPuntaje(jugador: string, puntaje: number, juego: string) {
    const fecha = new Date();
    const registro: Puntaje = {
      jugador: jugador,
      puntaje: puntaje,
      juego: juego,
      fecha: fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString()
    };
    console.log(registro);
    return this.puntajeCollection?.add(registro);
  }

  obtenerPuntajes() {
    this.puntajeCollection = this.afs.collection<Puntaje>('puntajes', ref => ref.orderBy("puntaje", "desc").limit(10));
  
    return this.puntajeCollection.valueChanges();
  }

}
