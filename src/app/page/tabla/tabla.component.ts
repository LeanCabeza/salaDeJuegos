import { Component, OnInit } from '@angular/core';
import { Puntaje } from 'src/app/models/puntaje.interface';
import { PuntajeServiceService } from 'src/app/services/puntaje-service.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  puntajes: Puntaje[] = [];

  constructor(private puntajeService: PuntajeServiceService) { }

  ngOnInit() {
    this.obtenerPuntajes();
  }

  obtenerPuntajes() {
    this.puntajeService.obtenerPuntajes()
      .subscribe(
        (puntajes: Puntaje[]) => {
          this.puntajes = puntajes;
        },
        (error) => {
          console.log('Error al obtener los puntajes:', error);
        }
      );
  }
}