import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PuntajeServiceService } from 'src/app/services/puntaje-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  
  actualMail: string;
  score: number = 0;
  gameOver: boolean = false;
  currentQuestionIndex: number = 0;
  currentQuestionFlagUrl: string | undefined;

  questions:   Question[] = [
    {
      text: '¿Cuál es la capital de Argentina?',
      options: ['Ciudad Autónoma de Buenos Aires', 'Quilmes', 'Merlo', 'Berazategui'],
      correctOption: 0,
      data: "https://restcountries.com/v3.1/name/ARGENTINA"
    },
    {
      text: '¿Cuál es la capital de Australia?',
      options: ['Sídney', 'Melbourne', 'Brisbane', 'Canberra'],
      correctOption: 3,
      data: "https://restcountries.com/v3.1/name/AUSTRALIA"
    },
    {
      text: '¿Cuál es la capital de Brasil?',
      options: ['Sídney', 'Melbourne', 'Brasília', 'Canberra'],
      correctOption: 2,
      data: "https://restcountries.com/v3.1/name/Brazil"
    },
    {
      text: '¿Cuál es la capital de Bolivia?',
      options: ['La Paz', 'La Guerra', 'Winsconsin', 'Texas'],
      correctOption: 0,
      data: "https://restcountries.com/v3.1/name/Bolivia"
    },
    {
      text: '¿Cuál es la capital de Chile?',
      options: ['Santiago de Chile', 'La Guerra', 'Winsconsin', 'Texas'],
      correctOption: 0,
      data: "https://restcountries.com/v3.1/name/Chile"
    },
  ];

  constructor(private puntajeService: PuntajeServiceService,
    private authService: AuthService,
    private http: HttpClient) {}

  currentQuestion: Question;

  ngOnInit(): void {
    this.actualMail = this.authService.actualUserMail;
    this.shuffleQuestions();
    this.showNextQuestion();
  }

  shuffleQuestions(): void {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  showNextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.obtainImage(); // Llama a obtainImage() para obtener la imagen junto con la pregunta
    } else {
      this.endGame();
    }
  }

  answerSelected(optionIndex: number): void {
    if (optionIndex === this.currentQuestion.correctOption) {
      this.score++;
      this.currentQuestionIndex++;
      this.showNextQuestion();
    } else {
      this.endGame();
    }
  }

  endGame(): void {
    this.puntajeService.guardarPuntaje(this.actualMail,this.score,"Preguntados");
    this.gameOver = true;
  }

  restartGame(): void {
    this.score = 0;
    this.gameOver = false;
    this.currentQuestionIndex = 0;
    this.shuffleQuestions();
    this.showNextQuestion();
  }

  obtainImage(): void {
    const apiUrl = this.currentQuestion.data;
  
    this.http.get(apiUrl)
      .subscribe((response: any) => {
          this.currentQuestionFlagUrl = response[0].flags.png; // Asigna la URL de la bandera
          console.log('URL de la imagen:', this.currentQuestionFlagUrl);
      },
      error => {
        console.error('Error al obtener la imagen:', error);
      });
  }


}
