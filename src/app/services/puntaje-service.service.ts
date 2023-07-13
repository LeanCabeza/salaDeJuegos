import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Puntaje } from '../models/puntaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PuntajeServiceService {
  private puntajeCollection: AngularFirestoreCollection<Puntaje> | null = null;

  constructor(private afs: AngularFirestore) {
    this.puntajeCollection = this.afs.collection<Puntaje>('puntajes');
  }

  guardarPuntaje(jugador: string, puntaje: string, juego: string) {
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
}
