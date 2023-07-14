import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PuntajeServiceService } from 'src/app/services/puntaje-service.service';


@Component({
  selector: 'app-bomb',
  templateUrl: './bomb.component.html',
  styleUrls: ['./bomb.component.css']
})
export class BombComponent implements  OnInit {
  actualMail: string;
  time: number = 0;
  cutOffTime: number = 0;
  counter: number = 0;
  gameOver: boolean = false;
  finalScore: number = 0; // Variable para almacenar el puntaje final
  timerInterval: any;

  constructor (private puntajeService: PuntajeServiceService,private authService: AuthService){}

  ngOnInit() {
    this.actualMail = this.authService.actualUserMail;
    this.startTimer();
    this.setCutOffTime();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.time++;
      if (this.time >= this.cutOffTime) {
        this.gameOver = true;
        this.finalScore = this.counter; // Almacenar el puntaje final
        clearInterval(this.timerInterval);
      }
    }, 1); // Actualizamos el intervalo a 1 milisegundo
  }

  setCutOffTime() {
    this.cutOffTime = Math.floor(Math.random() * 3 * 1000); // Genera un número aleatorio entre 0 y 30 segundos en milisegundos
  }

  deactivateBomb() {
    if (!this.gameOver) {
      this.counter += this.time;
      this.time = 0;
      this.setCutOffTime();
    }
  }

  restartGame() {
    //Antes de reiniciar guardo todo en bdd
    this.puntajeService.guardarPuntaje(this.actualMail,this.finalScore,"CronoBomb");
    this.time = 0;
    this.counter = 0;
    this.gameOver = false;
    this.finalScore = 0; // Reiniciar el puntaje final
    this.startTimer();
    this.setCutOffTime();
  }

  getTimeDisplay(): string {
    const minutes = Math.floor(this.time / 60000);
    const seconds = Math.floor((this.time % 60000) / 1000);
    const milliseconds = Math.floor(this.time % 1000);

    return `${this.padTime(minutes)}:${this.padTime(seconds)}:${this.padTime(milliseconds, 3)}`;
  }

  getTimePercentage(): number {
    return (this.time / this.cutOffTime) * 100;
  }

  getTimeColor(): string {
    const percentage = this.getTimePercentage();
    const hue = ((100 - percentage) * 120) / 100; // Rango de colores de verde a rojo (de 120 a 0)
    return `hsl(${hue}, 100%, 50%)`;
  }

  padTime(time: number, length: number = 2): string {
    return time.toString().padStart(length, '0');
  }
  
}